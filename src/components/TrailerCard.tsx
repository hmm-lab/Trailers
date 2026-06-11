import Link from "next/link";
import Image from "next/image";
import { Trailer } from "@/types";

interface TrailerCardProps {
  trailer: Trailer;
  size?: "sm" | "md" | "lg";
}

export default function TrailerCard({ trailer, size = "md" }: TrailerCardProps) {
  const thumbnail = `https://img.youtube.com/vi/${trailer.youtubeId}/maxresdefault.jpg`;

  return (
    <Link href={`/trailers/${trailer.id}`} className="group block trailer-card">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-lg bg-[var(--color-cinema-card)] aspect-video">
        <Image
          src={thumbnail}
          alt={`${trailer.title} trailer thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
          {trailer.duration}
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="w-14 h-14 bg-[var(--color-cinema-red)] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Genre badge */}
        {trailer.genres[0] && (
          <div className="absolute top-2 left-2 bg-[var(--color-cinema-red)]/90 text-white text-xs px-2 py-0.5 rounded-full font-medium">
            {trailer.genres[0]}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-2.5 px-0.5">
        <h3
          className={`font-semibold text-white group-hover:text-[var(--color-cinema-red)] transition-colors line-clamp-2 ${
            size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"
          }`}
        >
          {trailer.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-[var(--color-cinema-muted)]">{trailer.year}</span>
          <span className="text-[var(--color-cinema-border)]">•</span>
          <span className="text-xs text-[var(--color-cinema-gold)] font-medium flex items-center gap-0.5">
            ★ {trailer.rating}
          </span>
          <span className="text-[var(--color-cinema-border)]">•</span>
          <span className="text-xs text-[var(--color-cinema-muted)]">{trailer.views} views</span>
        </div>
        {size === "lg" && (
          <p className="text-sm text-[var(--color-cinema-muted)] mt-1.5 line-clamp-2">{trailer.description}</p>
        )}
      </div>
    </Link>
  );
}
