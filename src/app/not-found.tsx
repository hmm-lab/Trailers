import Link from "next/link";
import { CATEGORIES } from "@/data/trailers";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-8xl font-black text-[var(--color-cinema-red)] mb-4">404</div>
      <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
      <p className="text-[var(--color-cinema-muted)] mb-10">
        The trailer or page you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <Link
          href="/"
          className="bg-[var(--color-cinema-red)] hover:bg-[var(--color-cinema-red-hover)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/search"
          className="bg-[var(--color-cinema-card)] hover:bg-[var(--color-cinema-border)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Search Trailers
        </Link>
      </div>

      <div>
        <p className="text-sm text-[var(--color-cinema-muted)] mb-4 uppercase tracking-wider">
          Browse by genre
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-sm bg-[var(--color-cinema-card)] hover:bg-[var(--color-cinema-red)] text-[var(--color-cinema-muted)] hover:text-white px-4 py-2 rounded-full transition-colors"
            >
              {cat.emoji} {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
