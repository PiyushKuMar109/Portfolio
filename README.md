# Piyush Kumar - Premium Personal Portfolio

A world-class, premium, glassmorphic dark-mode portfolio website developed for **Piyush Kumar** to highlight capabilities in Software Engineering, Full Stack development, Python/Django, AI integration, and Machine Learning.

This application is built using **Next.js 15 / 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for premium interactive animations.

## Key Features

- **SEO Optimized Layout**: Includes complete meta tags, OpenGraph protocol, Twitter card layouts, structured JSON-LD data structures, custom `robots.txt`, and automated `sitemap.xml`.
- **Canvas Particle Background**: High-performance, responsive canvas particle swarm written from scratch in React, supporting mouse avoidance physics.
- **Animated Cursor**: Custom spring-damped interactive ring cursor that scales and shifts color on hoverable elements.
- **Projects Showcase with Case Studies**: Interactive project filter & search capabilities. Each project features an overlay Case Study modal breaking down the *Problem Statement*, *Proposed Solution*, *Key Features*, *Architecture*, and *Achievements* directly from Piyush's resume.
- **Responsive Navigation**: A sticky header navbar with scroll-spy synchronization.
- **Professional Contact Forms**: Validated inputs with built-in client-side mock submission feedback.

---

## Folder Structure

```
├── public/                 # Static assets (Favicons, images, robots.txt, sitemap.xml)
├── src/
│   ├── app/                # Next.js App Router (Layouts, Global Styles, Main page, 404 page)
│   │   ├── globals.css     # Global custom CSS styles (Custom scrollbar, glassmorphic helpers, etc.)
│   │   ├── layout.tsx      # Main layout (Google Fonts, Global HTML structure, SEO config)
│   │   ├── not-found.tsx   # Custom 404 Error page
│   │   └── page.tsx        # Entry point assembling portfolio segments
│   └── components/         # Reusable UI React Components
│       ├── About.tsx       # Education & Spoken Language summaries
│       ├── AnimatedCursor.tsx# Damped Custom Cursor
│       ├── Certifications.tsx# Professional credentials display
│       ├── Contact.tsx     # Form handler with validation & layout details
│       ├── Experience.tsx  # Interactive work history timeline
│       ├── Footer.tsx      # Back-to-top buttons & copyright info
│       ├── Hero.tsx        # Animated intro with typing hooks & social handles
│       ├── Navbar.tsx      # Sticky scroll-spy menu
│       ├── ParticleBackground.tsx# Canvas floating particle renderer
│       └── Projects.tsx    # Filterable portfolio search gallery with case studies
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.ts      # Tailwind configuration overrides
```

---

## Technical Stack

- **Core**: Next.js (App Router), React, TypeScript.
- **Styling**: Tailwind CSS v4 (inline theme values in CSS, modern utility properties).
- **Animations**: Framer Motion for state entries, spring offsets, and list transitions.
- **Icons**: Lucide React & React Icons (Simple Icons pack for tech icons).

---

## Local Setup Instructions

Ensure you have **Node.js (v18.0.0 or higher)** installed.

1. **Clone or navigate** to the project directory:
   ```bash
   cd c:/Users/piyush/OneDrive/Desktop/Portfolio
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) on your browser to view the portfolio.

---

## Production Build & Verification

To verify that the project is production-ready, run:

```bash
npm run build
```

This compiles typescript variables and packages the app for fast SSR distribution. To preview the production build locally:

```bash
npm run start
```

---

## Deployment Guide (Vercel)

The easiest way to host this portfolio is to deploy it to **Vercel**:

1. **Push your code to GitHub**:
   - Initialize git: `git init` (already initialized by template)
   - Add files: `git add .`
   - Commit: `git commit -m "Initialize premium portfolio"`
   - Create a GitHub repository and link it: `git remote add origin <your-repo-url>`
   - Push code: `git push -u origin main`

2. **Deploy via Vercel Dashboard**:
   - Log in to your [Vercel Account](https://vercel.com).
   - Click **Add New...** -> **Project**.
   - Import your GitHub repository.
   - Choose **Next.js** as the Framework Preset (Vercel detects this automatically).
   - Click **Deploy**.

3. **Updating Placeholders**:
   - **Resume PDF**: Place your actual resume PDF in the `public/` directory and rename it. Update the download link in `src/components/Hero.tsx` from `#` to `/your_resume_filename.pdf`.
   - **Contact Form Integration**: To receive actual emails from your contact form, you can integrate [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com).
     - For Formspree: Update the submission handler in `src/components/Contact.tsx` to POST the data directly to your Formspree endpoint.
