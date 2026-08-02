export interface Movie {
  id: string;
  title: string;
  slug: string;
  image: string;
  year: string;
}

export const MOVIES: Movie[] = [
  {
    id: "969681", // This is the ID from your example
    title: "Minions vs Monsters",
    slug: "minions-vs-monsters",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500",
    year: "2026",
  },
  {
    id: "123456", 
    title: "Spider-Man: Brand New Day",
    slug: "spiderman-brand-new-day",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500",
    year: "2026",
  },
  {
    id: "789012",
    title: "Odyssey",
    slug: "odyssey",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
    year: "2026",
  },
];