"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/trailers";

interface CategoryFilterProps {
  active: string;
  basePath?: string;
}

export default function CategoryFilter({ active, basePath = "/category" }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const href = cat.slug === "all" ? "/" : `${basePath}/${cat.slug}`;
        const isActive = active === cat.slug;
        return (
          <Link
            key={cat.slug}
            href={href}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isActive
                ? "bg-[var(--color-cinema-red)] text-white shadow-lg shadow-[var(--color-cinema-red)]/20"
                : "bg-[var(--color-cinema-card)] text-[var(--color-cinema-muted)] hover:text-white hover:bg-[var(--color-cinema-border)]"
            }`}
          >
            {cat.emoji} {cat.label}
          </Link>
        );
      })}
    </div>
  );
}
