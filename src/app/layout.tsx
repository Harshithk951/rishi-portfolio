import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachamalla Rishikesh | Video Editor & Cinematic Storyteller",
  description: "Official portfolio of Rachamalla Rishikesh. High-impact brand reels, wedding films, bike cinematic edits, and wholesome mountain expeditions. Rapid 24–48h delivery.",
  keywords: [
    "Rachamalla Rishikesh",
    "Video Editor",
    "Videographer",
    "Premiere Pro Editor",
    "CapCut Desktop",
    "Brand Reels Editor",
    "Wedding Video Editing",
    "Bike Reels",
    "Mountain Treks",
    "Instant Reels 24-48 Hours"
  ],
  authors: [{ name: "Rachamalla Rishikesh" }],
  openGraph: {
    title: "Rachamalla Rishikesh | Video Editor & Cinematic Storyteller",
    description: "High-impact brand reels, wedding films, bike cinematic edits, and wholesome mountain expeditions with guaranteed 24–48h turnaround.",
    type: "website",
    locale: "en_US",
    siteName: "Rachamalla Rishikesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachamalla Rishikesh | Video Editor & Cinematic Storyteller",
    description: "High-impact brand reels, wedding films, bike cinematic edits, and wholesome mountain expeditions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070709] text-zinc-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
