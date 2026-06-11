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

export const TRAILERS: Trailer[] = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    year: 2024,
    genres: ["Sci-Fi", "Action", "Adventure"],
    description:
      "Paul Atreides unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    youtubeId: "Way9t83HPNE",
    duration: "2:31",
    views: "45M",
    rating: 8.8,
    category: "sci-fi",
    featured: true,
    studio: "Warner Bros.",
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: 2024,
    genres: ["Action", "Comedy", "Superhero"],
    description:
      "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead of accepting a role in their plans, he recruits a variant of Wolverine to help him save his world.",
    youtubeId: "73_1biulkYk",
    duration: "2:43",
    views: "62M",
    rating: 7.8,
    category: "action",
    featured: true,
    studio: "Marvel Studios",
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    year: 2024,
    genres: ["Animation", "Comedy", "Family"],
    description:
      "Riley enters adolescence and Headquarters must make room for a very unexpected new emotion — Anxiety — who isn't sure how she fits in.",
    youtubeId: "LEjhY15eCx0",
    duration: "2:22",
    views: "38M",
    rating: 7.7,
    category: "animation",
    featured: false,
    studio: "Pixar",
  },
  {
    id: "alien-romulus",
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
    featured: false,
    studio: "20th Century Studios",
  },
  {
    id: "gladiator-ii",
    title: "Gladiator II",
    year: 2024,
    genres: ["Action", "Drama", "History"],
    description:
      "Years after witnessing the death of the revered hero Maximus at the hands of the emperor, Lucius is forced to enter the Colosseum after his home is conquered by tyrannical Emperors who now lead Rome with an iron fist.",
    youtubeId: "lBiWe8qcD5E",
    duration: "2:44",
    views: "31M",
    rating: 7.2,
    category: "action",
    featured: false,
    studio: "Paramount Pictures",
  },
  {
    id: "wicked",
    title: "Wicked",
    year: 2024,
    genres: ["Drama", "Fantasy", "Musical"],
    description:
      "A young woman born with emerald-green skin is ostracized by her peers and beyond but ultimately befriends another young woman who is the most popular girl in the land.",
    youtubeId: "1ekZEVeXwek",
    duration: "2:53",
    views: "29M",
    rating: 7.6,
    category: "drama",
    featured: true,
    studio: "Universal Pictures",
  },
  {
    id: "kingdom-planet-apes",
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genres: ["Action", "Sci-Fi", "Adventure"],
    description:
      "Many generations after Caesar's reign, apes are the dominant species, and humans have been reduced to living in the shadows. A young ape questions everything he's been taught about the past.",
    youtubeId: "XW6CKofCb5I",
    duration: "2:28",
    views: "22M",
    rating: 7.0,
    category: "sci-fi",
    featured: false,
    studio: "20th Century Studios",
  },
  {
    id: "beetlejuice-beetlejuice",
    title: "Beetlejuice Beetlejuice",
    year: 2024,
    genres: ["Comedy", "Horror", "Fantasy"],
    description:
      "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter discovers the mysterious model of the town in the attic.",
    youtubeId: "P_tE8zn7QrQ",
    duration: "2:30",
    views: "25M",
    rating: 6.8,
    category: "comedy",
    featured: false,
    studio: "Warner Bros.",
  },
  {
    id: "twisters",
    title: "Twisters",
    year: 2024,
    genres: ["Action", "Thriller", "Adventure"],
    description:
      "Kate Cooper, a former storm chaser haunted by a devastating encounter with a tornado during her college years, is persuaded to return to the open plains of Oklahoma to test a new storm-intervention system.",
    youtubeId: "3sPouMHSmQc",
    duration: "2:40",
    views: "18M",
    rating: 7.1,
    category: "thriller",
    featured: false,
    studio: "Universal Pictures",
  },
  {
    id: "the-fall-guy",
    title: "The Fall Guy",
    year: 2024,
    genres: ["Action", "Comedy", "Romance"],
    description:
      "A stuntman is pulled back into action when the star of the film he's working on goes missing. Based on the 1980s television series.",
    youtubeId: "goBzOrNxjJA",
    duration: "2:45",
    views: "16M",
    rating: 7.3,
    category: "action",
    featured: false,
    studio: "Universal Pictures",
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    year: 2024,
    genres: ["Action", "Sci-Fi", "Adventure"],
    description:
      "The origin story of renegade warrior Furiosa before she teamed up with Mad Max in Fury Road.",
    youtubeId: "XJMuhwVlca4",
    duration: "2:32",
    views: "20M",
    rating: 7.8,
    category: "action",
    featured: false,
    studio: "Warner Bros.",
  },
  {
    id: "the-wild-robot",
    title: "The Wild Robot",
    year: 2024,
    genres: ["Animation", "Adventure", "Drama"],
    description:
      "A shipwrecked robot must adapt to her environment on a wild island and finds herself taking care of an orphaned gosling.",
    youtubeId: "4oRuNPBkVJk",
    duration: "2:18",
    views: "12M",
    rating: 8.3,
    category: "animation",
    featured: false,
    studio: "DreamWorks Animation",
  },
  {
    id: "quiet-place-day-one",
    title: "A Quiet Place: Day One",
    year: 2024,
    genres: ["Horror", "Sci-Fi", "Thriller"],
    description:
      "Set during the beginning of the alien invasion and follows the experience of a young woman attempting to survive in New York City.",
    youtubeId: "RmH7klMFa3U",
    duration: "2:35",
    views: "14M",
    rating: 7.4,
    category: "horror",
    featured: false,
    studio: "Paramount Pictures",
  },
  {
    id: "moana-2",
    title: "Moana 2",
    year: 2024,
    genres: ["Animation", "Adventure", "Fantasy"],
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    youtubeId: "UAGOSKYdQYA",
    duration: "2:15",
    views: "35M",
    rating: 7.0,
    category: "animation",
    featured: false,
    studio: "Walt Disney Animation",
  },
  {
    id: "transformers-one",
    title: "Transformers One",
    year: 2024,
    genres: ["Animation", "Action", "Sci-Fi"],
    description:
      "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
    youtubeId: "7WFJPG4IUIA",
    duration: "2:28",
    views: "19M",
    rating: 7.1,
    category: "animation",
    featured: false,
    studio: "Paramount Pictures",
  },
];

export function getTrailerById(id: string): Trailer | undefined {
  return TRAILERS.find((t) => t.id === id);
}

export function getTrailersByCategory(category: string): Trailer[] {
  if (category === "all") return TRAILERS;
  return TRAILERS.filter((t) => t.category === category);
}

export function getFeaturedTrailers(): Trailer[] {
  return TRAILERS.filter((t) => t.featured);
}

export function searchTrailers(query: string): Trailer[] {
  const q = query.toLowerCase();
  return TRAILERS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.genres.some((g) => g.toLowerCase().includes(q)) ||
      (t.studio && t.studio.toLowerCase().includes(q))
  );
}

export function getRelatedTrailers(trailer: Trailer, limit = 4): Trailer[] {
  return TRAILERS.filter(
    (t) =>
      t.id !== trailer.id &&
      (t.category === trailer.category ||
        t.genres.some((g) => trailer.genres.includes(g)))
  ).slice(0, limit);
}
