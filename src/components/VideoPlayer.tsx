"use client";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  autoplay?: boolean;
}

export default function VideoPlayer({ youtubeId, title, autoplay = false }: VideoPlayerProps) {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`;

  return (
    <div className="youtube-wrapper rounded-xl overflow-hidden shadow-2xl border border-[var(--color-cinema-border)]">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
