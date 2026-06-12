import { HeroSkeleton, TrailerGridSkeleton } from "@/components/TrailerSkeleton";

export default function HomeLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <HeroSkeleton />
      <div className="h-10 bg-[var(--color-cinema-card)] rounded-full w-full mb-8 animate-pulse" />
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="h-6 bg-[var(--color-cinema-card)] rounded w-48 mb-5 animate-pulse" />
          <TrailerGridSkeleton count={6} />
        </div>
        <div className="hidden xl:block w-[300px] space-y-4 animate-pulse">
          <div className="bg-[var(--color-cinema-card)] rounded-xl h-[250px]" />
          <div className="bg-[var(--color-cinema-card)] rounded-xl h-32" />
        </div>
      </div>
    </div>
  );
}
