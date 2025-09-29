# imagining-life

[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3%2B-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Zod](https://img.shields.io/badge/Zod-Validation-3E7DD7)](https://zod.dev/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

**imagining-life** is a lightweight photo sharing app where people post snapshots of their life, discover new perspectives, and get a feel for the world through others’ images. Browse the feed, search and sort, or upload your own impressions.

> Repository: https://github.com/niki1tusa/imagining_life

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Rendering](#-architecture--rendering)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run](#run)
- [API](#-api)
- [State, Forms, Validation](#-state-forms-validation)
- [Performance & SEO](#-performance--seo)
- [Security](#-security)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#license)
- [Acknowledgements](#-acknowledgements)

---

## ✨ Features

- **Fast feed with ISR** – static-like speed with regular refresh or on-demand revalidation.
- **Client-side profile** – liked & uploaded photos via Zustand (persisted to localStorage).
- **Upload flow with preview** – instant client preview; ready to swap to real storage (S3/GCS/Supabase).
- **Search & sort** – quick filtering by author and ordering utilities.
- **Accessible, responsive UI** – Tailwind utilities + tasteful motion (Framer Motion).
- **SEO-friendly** – Next.js `metadata` & Open Graph per page.

---

## 🧱 Tech Stack

- **Next.js (App Router)** — Hybrid rendering (ISR/CSR/SSR) where it makes sense  
- **TypeScript** — Types across UI, API, and utilities  
- **Tailwind CSS** — Utility-first styling  
- **Framer Motion** — Smooth animated lists and transitions  
- **Zustand (persist)** — Lightweight state for likes/uploads  
- **React Hook Form + Zod** — Forms with schema validation  
- **Unsplash API** — Demo data source for the public feed

---

## 🧩 Architecture & Rendering

```
App (Root Layout: fonts, providers, Sidebar, RightAside)
├─ / (Home)           → ISR (cached feed, on-demand revalidate via tags)
├─ /profile           → CSR (local state only, no server fetch)
├─ /about             → SSG (static, but accordion on client)
├─ /upload            → SSR / dynamic (good place for presigned URLs, CSRF)
└─ /api/...           → API routes (Unsplash proxy, uploads, etc.)
```

### Why it’s fast

- **Home (`/`) → ISR**  
  Fetch with cache **tags** so you can revalidate instantly after upload:
  ```ts
  // In a server component/page:
  await fetch('/api/photos', { next: { tags: ['photos'], revalidate: 300 } });
  ```
  Then, after a successful upload on the server:
  ```ts
  import { revalidateTag, revalidatePath } from 'next/cache';
  revalidateTag('photos');
  revalidatePath('/'); // optional
  ```

- **Profile (`/profile`) → CSR**  
  Uses Zustand with `persist`, so it renders entirely on the client and stays snappy.

- **Upload (`/upload`) → SSR/dynamic**  
  Ideal place to issue **presigned URLs** and handle secure server concerns.

> ⚠️ Avoid using `cache: 'no-store'` in shared layouts. Keep “always-fresh” pieces in client components or give them a very small `revalidate` value.

---

## 🖼 Screenshots

> _Add images or GIFs to showcase the feed, upload form, and profile here._

- `public/home.png` (Open Graph) is already present — consider adding more UI screenshots.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm/yarn/npm

### Installation

```bash
git clone https://github.com/niki1tusa/imagining_life.git
cd imagining_life
pnpm install   # or npm i / yarn
```

### Environment Variables

Create a `.env.local` file at the project root:

```bash
# Required for the demo feed
UNSPLASH_ACCESS_KEY=your_unsplash_access_key

# Your app’s public base URL (used by server-side fetch)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> In production, prefer header auth for Unsplash: `Authorization: Client-ID <key>`.

### Run

```bash
pnpm dev        # start development server
pnpm build      # build for production
pnpm start      # run built app
pnpm lint       # lint
```

Open http://localhost:3000

---

## 🔌 API

Current demo endpoints:

- `GET /api/photos` — List of photos (proxied from Unsplash or your DB).
- `GET /api/photos/random` — A single random photo.

**Example:** Fetch the feed with ISR tags on the **page**:

```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos`, {
  next: { tags: ['photos'], revalidate: 300 }
});
const photos = await res.json();
```

**On upload (server):**

```ts
import { revalidateTag } from 'next/cache';

// after saving a new photo in DB/storage
revalidateTag('photos');
```

---

## 🧠 State, Forms, Validation

- **Zustand (persist)** manages likes and user uploads stored locally.
- **React Hook Form + Zod** validates inputs (e.g., description, file type/size).
- Add file rules like size/MIME checks in your Zod schema to harden uploads.

---

## ⚡ Performance & SEO

- Prefer **ISR** for read-heavy pages (fast TTFB).  
- Use **client-side revalidation** (SWR/React Query) for a silent refresh after hydration.  
- Provide `metadata` and OG images per route for good previews and SEO.  
- Avoid mutating arrays from props; clone before sorting to prevent unnecessary re-renders.

---

## 🔒 Security

- Do **not** commit secrets.  
- For Unsplash, prefer header auth over query params.  
- For real uploads, use **presigned URLs** and validate MIME/size on the server.  
- Consider rate limiting and basic abuse protection on public endpoints.


---

## 🙌 Acknowledgements

- Unsplash for the demo image API  
- Next.js, Tailwind, Zod, Zustand, Framer Motion for the great developer experience
