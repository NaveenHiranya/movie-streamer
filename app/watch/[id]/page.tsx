"use client";

import React, { use } from 'react'; // Import 'use'
import { MOVIES } from '@/public/data/movies';
import Link from 'next/link';

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  // NEXT.js 15 FIX: We must 'use' the params promise to get the ID
  const resolvedParams = use(params);
  const movieID = resolvedParams.id;

  // Debugging: This will show in your browser console (F12)
  console.log("Current Movie ID:", movieID);

  // Find the movie in our data file
  const movie = MOVIES.find((m) => m.id === movieID);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="p-4 border-b border-zinc-800 bg-black flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">NETFLUX</Link>
        <Link href="/" className="text-zinc-400 hover:text-white">← Back</Link>
      </nav>

      <div className="max-w-6xl mx-auto p-4 md:p-10">
        {/* The Player */}
        <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
          <iframe
            src={`https://vidsrc.to/embed/movie/${movieID}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            scrolling="no"
          />
        </div>

        {/* Movie Details */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            {movie ? movie.title : "Now Playing"}
          </h1>
          <p className="text-zinc-500 mt-2">ID: {movieID} • Streaming from vidsrc.to</p>
          
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied!");
            }}
            className="mt-6 bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-zinc-200 transition"
          >
            Share Link
          </button>
        </div>
      </div>
    </div>
  );
}