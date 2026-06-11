export interface Trailer {
  id: string;         // TMDB movie ID as string
  title: string;
  year: number;
  genres: string[];
  description: string;
  youtubeId: string;
  duration: string;
  views: string;
  rating: number;
  category: string;   // primary genre slug
  featured?: boolean;
  studio?: string;
  backdropPath?: string;
}

export interface Category {
  slug: string;
  label: string;
  emoji: string;
}

// Raw TMDB API shapes
export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
  production_companies?: { name: string; origin_country: string }[];
  backdrop_path: string | null;
  poster_path: string | null;
  videos?: { results: TMDBVideo[] };
}

export interface TMDBVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
}
