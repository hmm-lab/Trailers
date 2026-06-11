import Image from "next/image";
import Link from "next/link";
import { TRAILERS, getFeaturedTrailers, CATEGORIES } from "@/data/trailers";
import TrailerCard from "@/components/TrailerCard";
import CategoryFilter from "@/components/CategoryFilter";
import Ad from "@/components/Ad";

export const metadata = {
  title: "TrailerVault – Latest Movie Trailers",
  description: "Watch the latest movie trailers. Discover upcoming films across every genre.",
};

export default function HomePage() {
  const featured = getFeaturedTrailers();
  const hero = featured[0];
  const heroThumbnail = `https://img.youtube.com/vi/${hero.youtubeId}/maxresdefault.jpg`;
  const latest = TRAILERS.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-8 group">
        <div className="relative h-[420px] md:h-[520px]">
          <Image
            src={heroThumbnail}
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
            <span className="text-[var(--color-cinema-gold)] text-sm font-medium">★ {hero.rating}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            {hero.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {hero.genres.map((g) => (
              <span
                key={g}
                className="text-xs border border-white/30 text-white/80 px-2.5 py-1 rounded-full"
              >
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

      {/* Categories */}
      <section className="mb-8">
        <CategoryFilter active="all" />
      </section>

      {/* Latest Trailers grid + Sidebar */}
      <div className="flex gap-8">
        {/* Main grid */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-white">Latest Trailers</h2>
            <Link href="/category/all" className="text-sm text-[var(--color-cinema-red)] hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.slice(0, 6).map((t) => (
              <TrailerCard key={t.id} trailer={t} />
            ))}
          </div>

          {/* In-feed ad */}
          <div className="my-6">
            <Ad slot="2345678901" format="banner" label="Advertisement" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.slice(6, 12).map((t) => (
              <TrailerCard key={t.id} trailer={t} />
            ))}
          </div>
        </div>

        {/* Sidebar ad */}
        <aside className="hidden xl:flex flex-col gap-6 w-[300px] shrink-0">
          <Ad slot="3456789012" format="rectangle" label="Advertisement" />

          {/* Featured trailers list */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Top Rated
            </h3>
            <div className="flex flex-col gap-3">
              {TRAILERS.sort((a, b) => b.rating - a.rating)
                .slice(0, 5)
                .map((t, i) => (
                  <Link
                    key={t.id}
                    href={`/trailers/${t.id}`}
                    className="flex gap-3 items-start group"
                  >
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

          {/* Categories */}
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
