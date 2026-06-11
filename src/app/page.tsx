import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, STATIC_TRAILERS, getStaticFeatured } from "@/data/trailers";
import {
  getPopularTrailers,
  getNowPlayingTrailers,
  tmdbEnabled,
} from "@/lib/tmdb";
import { Trailer } from "@/types";
import TrailerCard from "@/components/TrailerCard";
import CategoryFilter from "@/components/CategoryFilter";
import Ad from "@/components/Ad";

// Revalidate every hour so new trailers appear automatically
export const revalidate = 3600;

export const metadata = {
  title: "TrailerVault – Latest Movie Trailers",
  description:
    "Watch the latest movie trailers. Discover upcoming films across every genre — updated automatically.",
};

export default async function HomePage() {
  let trailers: Trailer[];
  let nowPlaying: Trailer[];

  if (tmdbEnabled()) {
    [trailers, nowPlaying] = await Promise.all([
      getPopularTrailers().catch(() => STATIC_TRAILERS),
      getNowPlayingTrailers().catch(() => []),
    ]);
  } else {
    trailers = STATIC_TRAILERS;
    nowPlaying = [];
  }

  const featured = tmdbEnabled()
    ? trailers.slice(0, 3)
    : getStaticFeatured();

  const hero = featured[0] ?? trailers[0];
  const heroBg = hero.backdropPath
    ? `https://image.tmdb.org/t/p/w1280${hero.backdropPath}`
    : `https://img.youtube.com/vi/${hero.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-8">
        <div className="relative h-[420px] md:h-[520px]">
          <Image
            src={heroBg}
            alt={hero.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 md:max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[var(--color-cinema-red)] text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
            <span className="text-[var(--color-cinema-muted)] text-sm">{hero.year}</span>
            {hero.rating > 0 && (
              <span className="text-[var(--color-cinema-gold)] text-sm font-medium">
                ★ {hero.rating}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            {hero.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {hero.genres.slice(0, 3).map((g) => (
              <span key={g} className="text-xs border border-white/30 text-white/80 px-2.5 py-1 rounded-full">
                {g}
              </span>
            ))}
          </div>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
            {hero.description}
          </p>

          <div className="flex gap-3">
            <Link
              href={`/trailers/${hero.id}`}
              className="flex items-center gap-2 bg-[var(--color-cinema-red)] hover:bg-[var(--color-cinema-red-hover)] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Trailer
            </Link>
            <Link
              href={`/category/${hero.category}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm backdrop-blur-sm"
            >
              More Like This
            </Link>
          </div>
        </div>
      </section>

      {/* Leaderboard Ad */}
      <div className="mb-8">
        <Ad slot="1234567890" format="leaderboard" label="Advertisement" />
      </div>

      {/* Now Playing strip (TMDB only) */}
      {nowPlaying.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cinema-red)] animate-pulse" />
            Now Playing
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {nowPlaying.map((t) => (
              <TrailerCard key={t.id} trailer={t} size="sm" />
            ))}
          </div>
        </section>
      )}

      {/* Category tabs */}
      <section className="mb-8">
        <CategoryFilter active="all" />
      </section>

      {/* Trailers grid + Sidebar */}
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-white">
              {tmdbEnabled() ? "Popular Trailers" : "Latest Trailers"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trailers.slice(0, 6).map((t) => (
              <TrailerCard key={t.id} trailer={t} />
            ))}
          </div>

          <div className="my-6">
            <Ad slot="2345678901" format="banner" label="Advertisement" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trailers.slice(6, 15).map((t) => (
              <TrailerCard key={t.id} trailer={t} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden xl:flex flex-col gap-6 w-[300px] shrink-0">
          <Ad slot="3456789012" format="rectangle" label="Advertisement" />

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Top Rated
            </h3>
            <div className="flex flex-col gap-3">
              {[...trailers]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 5)
                .map((t, i) => (
                  <Link key={t.id} href={`/trailers/${t.id}`} className="flex gap-3 items-start group">
                    <span className="text-2xl font-black text-[var(--color-cinema-border)] group-hover:text-[var(--color-cinema-red)] transition-colors w-6 text-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-[var(--color-cinema-red)] transition-colors line-clamp-2">
                        {t.title}
                      </p>
                      <p className="text-xs text-[var(--color-cinema-gold)]">★ {t.rating}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Browse by Genre
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="text-xs bg-[var(--color-cinema-card)] hover:bg-[var(--color-cinema-red)] text-[var(--color-cinema-muted)] hover:text-white px-3 py-1.5 rounded-full transition-colors"
                >
                  {cat.emoji} {cat.label}
                </Link>
              ))}
            </div>
          </div>

          <Ad slot="4567890123" format="rectangle" label="Advertisement" />
        </aside>
      </div>
    </div>
  );
}
