# Rachamalla Rishikesh — Cinematic Video Editor & Videographer Portfolio

A high-end, cinematic portfolio website engineered for **Rachamalla Rishikesh**, featuring **35mm warm amber aesthetics**, **9:16 vertical reel viewport player**, **16:9 widescreen cinema showcase**, and **instant 24–48 hour turnaround booking via WhatsApp**.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## ⚡ Key Highlights & Features

1. **Warm Cinematic Aesthetic (Option B)**:
   - Deep charcoal/black canvas with 35mm film grain, cinematic vignetting, and warm golden amber accents (`#f59e0b`).
   - Viewfinder HUD details: REC blinking indicators, 24fps film timecodes, camera spec metadata.

2. **Versatile Multi-Format Showcase**:
   - **9:16 Vertical Reels** (Brand reels, streetwear apparel, high-speed bike edits, wholesome mountain treks).
   - **16:9 Cinematic Widescreen** (Wedding films, song/music video edits, narrative short films).
   - Interactive category switcher with instant filtering.

3. **High-Converting 24–48h Rapid Turnaround Funnel**:
   - Prominent trust badges highlighting Rishikesh's guaranteed 24–48hr delivery for reels.
   - Interactive project booking configurator where clients select their project style, turnaround preference, and raw footage duration.
   - Direct 1-tap WhatsApp booking button (`+91 8143937553`) that pre-formats client selections into a ready-to-send message.

4. **Cinematic Custom Video Modal**:
   - Embedded HTML5 video playback with play/pause, volume toggle, progress scrubber, timecodes, and full-screen controls.
   - Graceful fallback for files that haven't been uploaded yet so the website never displays a broken player.

---

## 📂 Project Architecture

```
Rishi Portfolio/
├── public/
│   ├── videos/          <- Drop your .mp4 or .mov video files here!
│   └── thumbnails/      <- Custom project poster images
├── src/
│   ├── app/
│   │   ├── globals.css  <- Cinematic styling, film grain, vignette, amber glows
│   │   ├── layout.tsx   <- SEO metadata, OpenGraph, viewport configuration
│   │   └── page.tsx     <- Master composition connecting all sections
│   ├── components/
│   │   ├── Navbar.tsx            <- Floating glass island navbar with WhatsApp quick CTA
│   │   ├── Hero.tsx              <- 35mm HUD hero with video showreel trigger & 24-48h badge
│   │   ├── ShowreelSection.tsx   <- 2026 Director's Cut showcase
│   │   ├── ProjectsGallery.tsx   <- Filterable 9:16 & 16:9 interactive gallery
│   │   ├── TurnaroundBanner.tsx  <- 3-step express workflow & guarantee
│   │   ├── AboutSection.tsx      <- Bio, Premiere Pro & CapCut Desktop software stack
│   │   ├── ContactSection.tsx    <- Interactive WhatsApp booking builder + Email & Instagram
│   │   ├── VideoModal.tsx        <- Cinematic video playback modal
│   │   ├── FilmGrain.tsx         <- Fixed 35mm authentic film grain texture
│   │   └── icons/                <- Custom SVGs (InstagramIcon, etc.)
│   └── data/
│       └── projects.ts  <- Central configuration file for all projects & creator profile
└── package.json
```

---

## 🚀 How to Run Locally

1. Open your terminal in this folder:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎬 How to Add or Replace Your Video Files

1. Put your video files (`.mp4` or `.mov`) into `public/videos/`:
   - `showreel.mp4` (Your master 2026 showreel)
   - `mountain-trek.mp4` (Mountain expedition reel)
   - `streetwear-reel.mp4` (Brand / clothing reel)
   - `bike-reel.mp4` (Bike / motorcycle edit)
   - `wedding-film.mp4` (Wedding cut)
   - `music-video.mp4` (Song edit)
   - `short-film.mp4` (Narrative short film)

2. To update or add new projects, simply edit `src/data/projects.ts`. You can change titles, descriptions, categories (`reels`, `brands`, `travel`, `weddings`, `films`), durations, and tags.

---

## 🌐 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: cinematic portfolio for Rachamalla Rishikesh"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Click **Deploy**. Vercel will automatically build and publish your portfolio with a live HTTPS URL.
