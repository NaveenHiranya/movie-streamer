"use client";

import { useRouter } from "next/navigation";
import { MOVIES } from "@/public/data/movies";

const SMART_LINK =
  "https://www.effectivecpmnetwork.com/wb6j1qqtz?key=43a3bf9bb16b8088200d98a2fffef762";

export default function HomePage() {
  const router = useRouter();

  const handleWatch = (id: string) => {
    const key = `watch_ads_${id}`;
    const count = Number(localStorage.getItem(key) || "0");

    if (count < 3) {
      localStorage.setItem(key, String(count + 1));

      // Open Adsterra Smart Link
      window.open(SMART_LINK, "_blank");
      return;
    }

    // Reset counter (optional)
    localStorage.removeItem(key);

    // Go to movie
    router.push(`/watch/${id}`);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        2026 New Releases
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {MOVIES.map((movie) => (
          <div
            key={movie.id}
            className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:scale-105 transition-transform"
          >
            <div className="aspect-[2/3] relative">
              <img
                src={movie.image}
                alt={movie.title}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent  transition-opacity flex items-end p-4">
                <button
                  onClick={() => handleWatch(movie.id)}
                  className="bg-red-600 w-full py-2 rounded-lg font-semibold cursor-pointer"
                >
                  Watch Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <h2 className="font-bold truncate">{movie.title}</h2>
              <p className="text-zinc-400 text-sm">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
