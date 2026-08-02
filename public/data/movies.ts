export interface Movie {
  id: string;
  title: string;
  slug: string;
  image: string;
  year: string;
}

export const MOVIES: Movie[] = [
  {
    id: "1315772", // This is the ID from your example
    title: "Minions and Monsters",
    slug: "minions-and-monsters",
    image: "https://static1.showtimes.com/poster/160x236/minions-monsters-289770.jpg",
    year: "2026",
  },
  {
    id: "969681", 
    title: "Spider-Man: Brand New Day",
    slug: "spiderman-brand-new-day",
    image: "https://image.tmdb.org/t/p/w500/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
    year: "2026",
  },
  {
    id: "1368337",
    title: "Odyssey",
    slug: "odyssey",
    image: "https://tse1.mm.bing.net/th/id/OIP.pX4sLTt16K2YnEn-UTD7ewAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    year: "2026",
  },
];