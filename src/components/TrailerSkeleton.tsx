export function TrailerSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-[var(--color-cinema-card)] rounded-lg aspect-video" />
      <div className="mt-2.5 space-y-2 px-0.5">
        <div className="h-4 bg-[var(--color-cinema-card)] rounded w-4/5" />
        <div className="h-3 bg-[var(--color-cinema-card)] rounded w-1/2" />
      </div>
    </div>
  );
}

export function TrailerGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <TrailerSkeleton key={i} />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse bg-[var(--color-cinema-card)] rounded-2xl h-[420px] md:h-[520px] mb-8" />
  );
}

export function DetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      <div className="h-4 bg-[var(--color-cinema-card)] rounded w-64 mb-6" />
      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          <div className="bg-[var(--color-cinema-card)] rounded-xl aspect-video" />
          <div className="bg-[var(--color-cinema-card)] rounded-xl h-48" />
        </div>
        <div className="hidden lg:block w-[300px] space-y-4">
          <div className="bg-[var(--color-cinema-card)] rounded-xl h-[250px]" />
        </div>
      </div>
    </div>
  );
}
