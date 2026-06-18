// Static fallback data — used when TMDB_API_KEY is not configured.
// IDs are real TMDB movie IDs so detail-page fetches still work.
import { Trailer, Category } from "@/types";

export const CATEGORIES: Category[] = [
  { slug: "all", label: "All Trailers", emoji: "🎬" },
  { slug: "action", label: "Action", emoji: "💥" },
  { slug: "sci-fi", label: "Sci-Fi", emoji: "🚀" },
  { slug: "drama", label: "Drama", emoji: "🎭" },
  { slug: "horror", label: "Horror", emoji: "👻" },
  { slug: "comedy", label: "Comedy", emoji: "😂" },
  { slug: "animation", label: "Animation", emoji: "🎨" },
  { slug: "thriller", label: "Thriller", emoji: "🔪" },
];

export const STATIC_TRAILERS: Trailer[] = [
  {
    id: "693134",
    title: "Dune: Part Two",
    year: 2024,
    genres: ["Sci-Fi", "Action", "Adventure"],
    description:
      "Paul Atreides unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    youtubeId: "Way9t83HPNE",
    duration: "2:31",
    views: "45M",
    rating: 8.8,
    category: "sci-fi",
    featured: true,
    studio: "Warner Bros.",
  },
  {
    id: "533535",
    title: "Deadpool & Wolverine",
    year: 2024,
    genres: ["Action", "Comedy", "Superhero"],
    description:
      "Deadpool is pulled back into action and recruits a variant of Wolverine to help save his world.",
    youtubeId: "73_1biulkYk",
    duration: "2:43",
    views: "62M",
    rating: 7.8,
    category: "action",
    featured: true,
    studio: "Marvel Studios",
  },
  {
    id: "1022789",
    title: "Inside Out 2",
    year: 2024,
    genres: ["Animation", "Comedy", "Family"],
    description:
      "Riley enters adolescence and Headquarters must make room for a very unexpected new emotion — Anxiety.",
    youtubeId: "LEjhY15eCx0",
    duration: "2:22",
    views: "38M",
    rating: 7.7,
    category: "animation",
    studio: "Pixar",
  },
  {
    id: "945961",
    title: "Alien: Romulus",
    year: 2024,
    genres: ["Horror", "Sci-Fi", "Thriller"],
    description:
      "A group of young people on a distant world find themselves in a confrontation with the most terrifying life form in the universe.",
    youtubeId: "Nqf_yA8RSmI",
    duration: "2:38",
    views: "27M",
    rating: 7.3,
    category: "horror",
    studio: "20th Century Studios",
  },
  {
    id: "558449",
    title: "Gladiator II",
    year: 2024,
    genres: ["Action", "Drama", "History"],
    description:
      "Years after witnessing the death of the revered hero Maximus, Lucius is forced to enter the Colosseum.",
    youtubeId: "lBiWe8qcD5E",
    duration: "2:44",
    views: "31M",
    rating: 7.2,
    category: "action",
    studio: "Paramount Pictures",
  },
  {
    id: "402431",
    title: "Wicked",
    year: 2024,
    genres: ["Drama", "Fantasy", "Musical"],
    description:
      "A young woman born with emerald-green skin is ostracized by her peers but ultimately befriends the most popular girl in the land.",
    youtubeId: "1ekZEVeXwek",
    duration: "2:53",
    views: "29M",
    rating: 7.6,
    category: "drama",
    featured: true,
    studio: "Universal Pictures",
  },
  {
    id: "653346",
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genres: ["Action", "Sci-Fi", "Adventure"],
    description:
      "Many generations after Caesar's reign, a young ape questions everything he's been taught about the past.",
    youtubeId: "XW6CKofCb5I",
    duration: "2:28",
    views: "22M",
    rating: 7.0,
    category: "sci-fi",
    studio: "20th Century Studios",
  },
  {
    id: "884605",
    title: "Beetlejuice Beetlejuice",
    year: 2024,
    genres: ["Comedy", "Horror", "Fantasy"],
    description:
      "After a family tragedy, three generations of the Deetz family return home — and Beetlejuice is back.",
    youtubeId: "P_tE8zn7QrQ",
    duration: "2:30",
    views: "25M",
    rating: 6.8,
    category: "comedy",
    studio: "Warner Bros.",
  },
  {
    id: "718821",
    title: "Twisters",
    year: 2024,
    genres: ["Action", "Thriller", "Adventure"],
    description:
      "A former storm chaser is persuaded to return to the open plains of Oklahoma to test a new storm-intervention system.",
    youtubeId: "3sPouMHSmQc",
    duration: "2:40",
    views: "18M",
    rating: 7.1,
    category: "thriller",
    studio: "Universal Pictures",
  },
  {
    id: "704239",
    title: "The Fall Guy",
    year: 2024,
    genres: ["Action", "Comedy", "Romance"],
    description:
      "A stuntman is pulled back into action when the star of the film he's working on goes missing.",
    youtubeId: "goBzOrNxjJA",
    duration: "2:45",
    views: "16M",
    rating: 7.3,
    category: "action",
    studio: "Universal Pictures",
  },
  {
    id: "786892",
    title: "Furiosa: A Mad Max Saga",
    year: 2024,
    genres: ["Action", "Sci-Fi", "Adventure"],
    description: "The origin story of renegade warrior Furiosa before she teamed up with Mad Max.",
    youtubeId: "XJMuhwVlca4",
    duration: "2:32",
    views: "20M",
    rating: 7.8,
    category: "action",
    studio: "Warner Bros.",
  },
  {
    id: "1184918",
    title: "The Wild Robot",
    year: 2024,
    genres: ["Animation", "Adventure", "Drama"],
    description:
      "A shipwrecked robot must adapt to her environment on a wild island and finds herself raising an orphaned gosling.",
    youtubeId: "4oRuNPBkVJk",
    duration: "2:18",
    views: "12M",
    rating: 8.3,
    category: "animation",
    studio: "DreamWorks Animation",
  },
  {
    id: "882569",
    title: "A Quiet Place: Day One",
    year: 2024,
    genres: ["Horror", "Sci-Fi", "Thriller"],
    description: "The beginning of the alien invasion — a young woman attempts to survive in New York City.",
    youtubeId: "RmH7klMFa3U",
    duration: "2:35",
    views: "14M",
    rating: 7.4,
    category: "horror",
    studio: "Paramount Pictures",
  },
  {
    id: "1241982",
    title: "Moana 2",
    year: 2024,
    genres: ["Animation", "Adventure", "Fantasy"],
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana journeys to the far seas of Oceania.",
    youtubeId: "UAGOSKYdQYA",
    duration: "2:15",
    views: "35M",
    rating: 7.0,
    category: "animation",
    studio: "Walt Disney Animation",
  },
  {
    id: "762441",
    title: "Transformers One",
    year: 2024,
    genres: ["Animation", "Action", "Sci-Fi"],
    description:
      "The untold origin story of Optimus Prime and Megatron — once friends bonded like brothers who changed the fate of Cybertron forever.",
    youtubeId: "7WFJPG4IUIA",
    duration: "2:28",
    views: "19M",
    rating: 7.1,
    category: "animation",
    studio: "Paramount Pictures",
  },
];

export function getStaticFeatured(): Trailer[] {
  return STATIC_TRAILERS.filter((t) => t.featured);
}

export function getStaticByCategory(category: string): Trailer[] {
  if (category === "all") return STATIC_TRAILERS;
  return STATIC_TRAILERS.filter((t) => t.category === category);
}

export function getStaticById(id: string): Trailer | undefined {
  return STATIC_TRAILERS.find((t) => t.id === id);
}

export function searchStatic(query: string): Trailer[] {
  const q = query.toLowerCase();
  return STATIC_TRAILERS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.genres.some((g) => g.toLowerCase().includes(q)) ||
      (t.studio && t.studio.toLowerCase().includes(q))
  );
}

export function getStaticRelated(trailer: Trailer, limit = 4): Trailer[] {
  return STATIC_TRAILERS.filter(
    (t) =>
      t.id !== trailer.id &&
      (t.category === trailer.category || t.genres.some((g) => trailer.genres.includes(g)))
  ).slice(0, limit);
}
