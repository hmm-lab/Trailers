"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, FormEvent } from "react";
import { CATEGORIES } from "@/data/trailers";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cinema-bg)] border-b border-[var(--color-cinema-border)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-[var(--color-cinema-red)]">TRAILER</span>
            <span className="text-white">VAULT</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 ml-4">
          {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === `/category/${cat.slug}`
                  ? "bg-[var(--color-cinema-red)] text-white"
                  : "text-[var(--color-cinema-muted)] hover:text-white hover:bg-[var(--color-cinema-card)]"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="Search trailers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[var(--color-cinema-card)] border border-[var(--color-cinema-border)] rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-[var(--color-cinema-muted)] focus:outline-none focus:border-[var(--color-cinema-red)] w-48 md:w-64 transition-all"
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
        </form>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--color-cinema-muted)] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-cinema-border)] bg-[var(--color-cinema-surface)] px-4 py-3 flex flex-wrap gap-2">
          {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-[var(--color-cinema-card)] text-[var(--color-cinema-muted)] hover:text-white transition-colors"
            >
              {cat.emoji} {cat.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
