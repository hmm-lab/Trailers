import { notFound } from "next/navigation";
import Link from "next/link";
import { getTrailerById, getRelatedTrailers, TRAILERS } from "@/data/trailers";
import VideoPlayer from "@/components/VideoPlayer";
import TrailerCard from "@/components/TrailerCard";
import Ad from "@/components/Ad";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TRAILERS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const trailer = getTrailerById(id);
  if (!trailer) return {};
  return {
    title: `${trailer.title} (${trailer.year}) Trailer`,
    description: trailer.description,
    openGraph: {
      title: `${trailer.title} – Official Trailer`,
      description: trailer.description,
      images: [`https://img.youtube.com/vi/${trailer.youtubeId}/maxresdefault.jpg`],
    },
  };
}

export default async function TrailerPage({ params }: Props) {
  const { id } = await params;
  const trailer = getTrailerById(id);
  if (!trailer) notFound();

  const related = getRelatedTrailers(trailer, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-cinema-muted)] mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/category/${trailer.category}`} className="hover:text-white transition-colors capitalize">
          {trailer.category}
        </Link>
        <span>/</span>
        <span className="text-white">{trailer.title}</span>
      </nav>

      <div className="flex gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Video player */}
          <VideoPlayer youtubeId={trailer.youtubeId} title={`${trailer.title} Official Trailer`} />

          {/* Below video ad */}
          <div className="mt-4 mb-6">
            <Ad slot="5678901234" format="leaderboard" label="Advertisement" />
          </div>

          {/* Movie info */}
          <div className="bg-[var(--color-cinema-card)] rounded-xl p-6 border border-[var(--color-cinema-border)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-white mb-1">
                  {trailer.title}
                </h1>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[var(--color-cinema-muted)]">{trailer.year}</span>
                  <span className="text-[var(--color-cinema-border)]">•</span>
                  <span className="text-[var(--color-cinema-gold)] font-bold flex items-center gap-1">
                    ★ {trailer.rating}
                    <span className="text-[var(--color-cinema-muted)] font-normal">/10</span>
                  </span>
                  <span className="text-[var(--color-cinema-border)]">•</span>
                  <span className="text-[var(--color-cinema-muted)]">{trailer.views} views</span>
                  <span className="text-[var(--color-cinema-border)]">•</span>
                  <span className="text-[var(--color-cinema-muted)]">{trailer.duration}</span>
                </div>
              </div>

              {trailer.studio && (
                <span className="text-xs bg-[var(--color-cinema-surface)] border border-[var(--color-cinema-border)] text-[var(--color-cinema-muted)] px-3 py-1.5 rounded-full">
                  {trailer.studio}
                </span>
              )}
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mt-4">
              {trailer.genres.map((g) => (
                <span
                  key={g}
                  className="text-xs bg-[var(--color-cinema-surface)] text-[var(--color-cinema-muted)] px-3 py-1 rounded-full border border-[var(--color-cinema-border)]"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-[var(--color-cinema-muted)] leading-relaxed mt-4 text-sm md:text-base">
              {trailer.description}
            </p>

            {/* Share */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[var(--color-cinema-border)]">
              <span className="text-sm text-[var(--color-cinema-muted)]">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=Watch the ${encodeURIComponent(trailer.title)} trailer!&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${trailer.youtubeId}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] px-3 py-1.5 rounded-full transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.youtube.com/watch?v=${trailer.youtubeId}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] px-3 py-1.5 rounded-full transition-colors"
              >
                Facebook
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${trailer.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] px-3 py-1.5 rounded-full transition-colors ml-auto"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>

          {/* Related trailers */}
          {related.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-bold text-white mb-5">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((t) => (
                  <TrailerCard key={t.id} trailer={t} size="lg" />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col gap-6 w-[300px] shrink-0">
          <Ad slot="6789012345" format="rectangle" label="Advertisement" />

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Browse Genre
            </h3>
            <div className="flex flex-col gap-2">
              {trailer.genres.map((g) => (
                <Link
                  key={g}
                  href={`/search?q=${encodeURIComponent(g)}`}
                  className="flex items-center justify-between bg-[var(--color-cinema-card)] hover:bg-[var(--color-cinema-red)] text-[var(--color-cinema-muted)] hover:text-white px-4 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <span>{g}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>

          <Ad slot="7890123456" format="rectangle" label="Advertisement" />
        </aside>
      </div>
    </div>
  );
}
