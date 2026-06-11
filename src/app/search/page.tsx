import { searchTrailers, tmdbEnabled } from "@/lib/tmdb";
import { searchStatic, STATIC_TRAILERS } from "@/data/trailers";
import { Trailer } from "@/types";
import TrailerCard from "@/components/TrailerCard";
import Ad from "@/components/Ad";
import Link from "next/link";

// Search is always dynamic (query-driven)
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" – Search Results` : "Search Trailers",
    description: q ? `Trailer search results for "${q}".` : "Search for movie trailers.",
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  let results: Trailer[];
  if (!query) {
    results = tmdbEnabled() ? [] : STATIC_TRAILERS;
  } else if (tmdbEnabled()) {
    results = await searchTrailers(query).catch(() => searchStatic(query));
  } else {
    results = searchStatic(query);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white mb-1">
          {query ? (
            <>
              Results for{" "}
              <span className="text-[var(--color-cinema-red)]">&ldquo;{query}&rdquo;</span>
            </>
          ) : (
            "Search Trailers"
          )}
        </h1>
        {query && (
          <p className="text-[var(--color-cinema-muted)]">
            {results.length} trailer{results.length !== 1 ? "s" : ""} found ·{" "}
            <Link href="/search" className="text-[var(--color-cinema-red)] hover:underline text-sm">
              Clear
            </Link>
          </p>
        )}
      </div>

      {/* Search form */}
      <form action="/search" method="get" className="mb-8">
        <div className="flex gap-3 max-w-xl">
          <div className="relative flex-1">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search by title, genre, studio..."
              className="w-full bg-[var(--color-cinema-card)] border border-[var(--color-cinema-border)] rounded-lg pl-10 pr-4 py-3 text-white placeholder-[var(--color-cinema-muted)] focus:outline-none focus:border-[var(--color-cinema-red)] transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-cinema-muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            type="submit"
            className="bg-[var(--color-cinema-red)] hover:bg-[var(--color-cinema-red-hover)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mb-8">
        <Ad slot="0123456789" format="leaderboard" label="Advertisement" />
      </div>

      {!query && (
        <div className="text-center py-20">
          <p className="text-[var(--color-cinema-muted)] text-lg mb-2">Enter a title, genre, or studio to search.</p>
          <p className="text-sm text-[var(--color-cinema-muted)]">e.g. "Action", "Warner Bros.", "Marvel"</p>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[var(--color-cinema-muted)] text-lg mb-4">
            No trailers found for &ldquo;{query}&rdquo;
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--color-cinema-red)] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[var(--color-cinema-red-hover)] transition-colors"
          >
            Browse All Trailers
          </Link>
        </div>
      )}

      {results.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {results.slice(0, 8).map((t) => (
              <TrailerCard key={t.id} trailer={t} />
            ))}
          </div>

          {results.length > 8 && (
            <>
              <div className="my-6">
                <Ad slot="1234567891" format="banner" label="Advertisement" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {results.slice(8).map((t) => (
                  <TrailerCard key={t.id} trailer={t} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
