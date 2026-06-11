import { searchTrailers, TRAILERS } from "@/data/trailers";
import TrailerCard from "@/components/TrailerCard";
import Ad from "@/components/Ad";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" – Trailer Search` : "Search Trailers",
    description: q ? `Search results for "${q}" movie trailers.` : "Search for movie trailers.",
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const results = query ? searchTrailers(query) : TRAILERS;

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
            "All Trailers"
          )}
        </h1>
        <p className="text-[var(--color-cinema-muted)]">
          {results.length} trailer{results.length !== 1 ? "s" : ""} found
          {query && (
            <>
              {" "}·{" "}
              <Link href="/search" className="text-[var(--color-cinema-red)] hover:underline text-sm">
                Clear search
              </Link>
            </>
          )}
        </p>
      </div>

      {/* Search form */}
      <form action="/search" method="get" className="mb-8">
        <div className="flex gap-3 max-w-xl">
          <div className="relative flex-1">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search trailers, genres, studios..."
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

      {/* Top ad */}
      <div className="mb-8">
        <Ad slot="0123456789" format="leaderboard" label="Advertisement" />
      </div>

      {/* Results */}
      {results.length === 0 ? (
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
      ) : (
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
