import { Trailer, TMDBMovie, TMDBVideo } from "@/types";

const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

// One hour revalidation for ISR
const REVALIDATE = 3600;

// TMDB genre ID → our category slug
const GENRE_SLUG: Record<number, string> = {
  28: "action",
  12: "action",
  878: "sci-fi",
  14: "sci-fi",
  18: "drama",
  36: "drama",
  27: "horror",
  9648: "horror",
  35: "comedy",
  10749: "comedy",
  16: "animation",
  53: "thriller",
  80: "thriller",
};

// Our category slug → TMDB genre IDs
export const CATEGORY_GENRE_IDS: Record<string, number[]> = {
  action: [28, 12],
  "sci-fi": [878, 14],
  drama: [18, 36],
  horror: [27, 9648],
  comedy: [35, 10749],
  animation: [16],
  thriller: [53, 80],
};

function tmdbFetch<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  if (!KEY) throw new Error("TMDB_API_KEY not set");
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set("api_key", KEY);
  url.searchParams.set("language", "en-US");
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  return fetch(url.toString(), { next: { revalidate: REVALIDATE } }).then((r) => {
    if (!r.ok) throw new Error(`TMDB ${path} → ${r.status}`);
    return r.json() as Promise<T>;
  });
}

function pickTrailer(videos: TMDBVideo[]): TMDBVideo | undefined {
  const yt = videos.filter((v) => v.site === "YouTube" && v.type === "Trailer");
  // Prefer official trailers, then most recently published
  return (
    yt.find((v) => v.official) ??
    yt.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())[0]
  );
}

function formatPopularity(pop: number): string {
  if (pop >= 1000) return `${(pop / 1000).toFixed(1)}M`;
  if (pop >= 100) return `${Math.round(pop)}K`;
  return `${Math.round(pop * 10)}`;
}

function movieToTrailer(movie: TMDBMovie, video: TMDBVideo): Trailer {
  const genreNames =
    movie.genres?.map((g) => g.name) ??
    (movie.genre_ids ?? []).map((id) => {
      const entries = Object.entries(GENRE_SLUG);
      return entries.find(([gid]) => Number(gid) === id)?.[1] ?? "Other";
    });

  const primaryGenreId = movie.genres?.[0]?.id ?? movie.genre_ids?.[0];
  const category = primaryGenreId ? (GENRE_SLUG[primaryGenreId] ?? "action") : "action";

  const studio = movie.production_companies?.find((c) => c.origin_country === "US")?.name
    ?? movie.production_companies?.[0]?.name;

  return {
    id: String(movie.id),
    title: movie.title,
    year: movie.release_date ? new Date(movie.release_date).getFullYear() : new Date().getFullYear(),
    genres: genreNames,
    description: movie.overview || "No description available.",
    youtubeId: video.key,
    duration: "",
    views: formatPopularity(movie.popularity),
    rating: Math.round(movie.vote_average * 10) / 10,
    category,
    studio,
    backdropPath: movie.backdrop_path ?? undefined,
  };
}

async function fetchVideosForMovie(movieId: number): Promise<TMDBVideo[]> {
  try {
    const data = await tmdbFetch<{ results: TMDBVideo[] }>(`/movie/${movieId}/videos`);
    return data.results;
  } catch {
    return [];
  }
}

// Fetch a list endpoint, then parallel-fetch videos for each movie
async function moviesWithTrailers(
  movies: TMDBMovie[],
  limit = 16
): Promise<Trailer[]> {
  const slice = movies.slice(0, limit * 2); // overfetch to account for missing trailers
  const videoLists = await Promise.all(slice.map((m) => fetchVideosForMovie(m.id)));

  const results: Trailer[] = [];
  for (let i = 0; i < slice.length && results.length < limit; i++) {
    const video = pickTrailer(videoLists[i]);
    if (video) results.push(movieToTrailer(slice[i], video));
  }
  return results;
}

export async function getPopularTrailers(page = 1): Promise<Trailer[]> {
  const [popular, upcoming] = await Promise.all([
    tmdbFetch<{ results: TMDBMovie[] }>("/movie/popular", { page: String(page) }),
    tmdbFetch<{ results: TMDBMovie[] }>("/movie/upcoming", { page: "1" }),
  ]);

  // Merge and deduplicate by id
  const seen = new Set<number>();
  const merged: TMDBMovie[] = [];
  for (const m of [...popular.results, ...upcoming.results]) {
    if (!seen.has(m.id)) { seen.add(m.id); merged.push(m); }
  }

  return moviesWithTrailers(merged, 16);
}

export async function getTrailersByCategory(slug: string, page = 1): Promise<Trailer[]> {
  const genreIds = CATEGORY_GENRE_IDS[slug];
  if (!genreIds) return [];

  const data = await tmdbFetch<{ results: TMDBMovie[] }>("/discover/movie", {
    with_genres: genreIds.join(","),
    sort_by: "popularity.desc",
    page: String(page),
  });

  return moviesWithTrailers(data.results, 16);
}

export async function getTrailerById(id: string): Promise<Trailer | null> {
  try {
    const movie = await tmdbFetch<TMDBMovie>(`/movie/${id}`, {
      append_to_response: "videos",
    });
    const video = pickTrailer(movie.videos?.results ?? []);
    if (!video) return null;
    return movieToTrailer(movie, video);
  } catch {
    return null;
  }
}

export async function searchTrailers(query: string): Promise<Trailer[]> {
  const data = await tmdbFetch<{ results: TMDBMovie[] }>("/search/movie", {
    query,
    include_adult: "false",
  });
  return moviesWithTrailers(data.results, 16);
}

export async function getNowPlayingTrailers(): Promise<Trailer[]> {
  const data = await tmdbFetch<{ results: TMDBMovie[] }>("/movie/now_playing");
  return moviesWithTrailers(data.results, 8);
}

export async function getUpcomingTrailers(): Promise<Trailer[]> {
  const data = await tmdbFetch<{ results: TMDBMovie[] }>("/movie/upcoming");
  return moviesWithTrailers(data.results, 6);
}

export function tmdbEnabled(): boolean {
  return Boolean(KEY);
}
