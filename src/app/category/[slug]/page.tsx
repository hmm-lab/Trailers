import { notFound } from "next/navigation";
import { getTrailersByCategory, CATEGORIES } from "@/data/trailers";
import TrailerCard from "@/components/TrailerCard";
import CategoryFilter from "@/components/CategoryFilter";
import Ad from "@/components/Ad";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.filter((c) => c.slug !== "all").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} Movie Trailers`,
    description: `Watch the latest ${cat.label.toLowerCase()} movie trailers. Discover upcoming ${cat.label.toLowerCase()} films.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const trailers = getTrailersByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white mb-1">
          {cat.emoji} {cat.label} Trailers
        </h1>
        <p className="text-[var(--color-cinema-muted)]">
          {trailers.length} trailer{trailers.length !== 1 ? "s" : ""} in {cat.label}
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="mb-8">
        <CategoryFilter active={slug} />
      </div>

      {/* Top ad */}
      <div className="mb-8">
        <Ad slot="8901234567" format="leaderboard" label="Advertisement" />
      </div>

      {/* Grid */}
      {trailers.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[var(--color-cinema-muted)] text-lg">No trailers in this category yet.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {trailers.slice(0, 8).map((t) => (
              <TrailerCard key={t.id} trailer={t} />
            ))}
          </div>

          {trailers.length > 8 && (
            <>
              <div className="my-6">
                <Ad slot="9012345678" format="banner" label="Advertisement" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {trailers.slice(8).map((t) => (
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
