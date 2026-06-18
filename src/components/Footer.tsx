import Link from "next/link";
import { CATEGORIES } from "@/data/trailers";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-cinema-border)] bg-[var(--color-cinema-surface)] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="text-xl font-black tracking-tight">
                <span className="text-[var(--color-cinema-red)]">TRAILER</span>
                <span className="text-white">VAULT</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--color-cinema-muted)] leading-relaxed">
              The best place to discover the latest movie trailers. Watch, share, and get excited for what&apos;s coming to cinemas.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-[var(--color-cinema-muted)] hover:text-white transition-colors"
                  >
                    {cat.emoji} {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[var(--color-cinema-muted)] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-sm text-[var(--color-cinema-muted)] hover:text-white transition-colors">
                  Search Trailers
                </Link>
              </li>
            </ul>
            <p className="text-xs text-[var(--color-cinema-muted)] mt-4">
              All trailers are embedded from YouTube and belong to their respective studios and rights holders.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--color-cinema-border)] pt-6 text-center text-xs text-[var(--color-cinema-muted)]">
          © {new Date().getFullYear()} TrailerVault. All trailers © their respective studios.
        </div>
      </div>
    </footer>
  );
}
