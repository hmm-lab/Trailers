import { TrailerGridSkeleton } from "@/components/TrailerSkeleton";

export default function CategoryLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 bg-[var(--color-cinema-card)] rounded w-64 mb-2" />
      <div className="h-4 bg-[var(--color-cinema-card)] rounded w-32 mb-8" />
      <div className="h-10 bg-[var(--color-cinema-card)] rounded-full w-full mb-8" />
      <TrailerGridSkeleton count={8} />
    </div>
  );
}
