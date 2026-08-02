import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Founet - Watch New Release Movies Online",
  description:
    "Watch the latest 2026 movie releases online. Explore action, adventure, comedy, animation, horror, sci-fi, and more on Founet.",
  keywords: [
    "Founet",
    "movies",
    "2026 movies",
    "new releases",
    "watch online",
    "HD movies",
    "streaming",
  ],
  applicationName: "Founet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}