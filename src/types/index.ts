export interface Trailer {
  id: string;
  title: string;
  year: number;
  genres: string[];
  description: string;
  youtubeId: string;
  duration: string;
  views: string;
  rating: number;
  category: string;
  featured?: boolean;
  studio?: string;
}

export interface Category {
  slug: string;
  label: string;
  emoji: string;
}
