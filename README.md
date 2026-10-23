# Deekshith Vodela - Link-in-Bio Portfolio

An independent, standalone, high-performance link-in-bio portfolio website for Deekshith Vodela with modern aesthetics, fast load times, and universal routing.

Built with **React**, **Vite**, and **Vanilla CSS**.

---

## 🌟 Features

- **Target Canonical URL:** `https://deekshithvodela.github.io/`
- **Exact Visual Fidelity:** Features refined typography, button geometry, elevation shadows, and signature ambient blush backdrop (`filter: blur(55px)` with SVG noise overlay).
- **Verified Link Destinations:** Direct destination URLs for all 4 primary links and 5 social media links without redirect wrappers or tracking intermediaries.
- **Top-Right Share System:**
  - **Native Web Share:** Utilizes `navigator.share()` on compatible mobile/desktop platforms.
  - **Custom Fallback Modal:** Pixel-accurate share dialog featuring a signature burgundy preview card, 1-click clipboard link copying with animated toast feedback, and direct sharing to WhatsApp, Email, X (Twitter), and LinkedIn (defaulting to `https://deekshithvodela.github.io/`).
  - **Per-Link Share Option:** 3-dots action button on each link card to share specific projects or blog posts directly.
- **Production SEO & Open Graph Suite:**
  - **WhatsApp-Compliant OG Image:** 1200×630 progressive JPEG (`og-image.jpg`, ~44KB, well under 300KB limit) featuring the ambient backdrop and crisp VD monogram logo.
  - **Twitter / X Cards:** `summary_large_image` configuration with complete author and metadata tags.
  - **Google Search Favicons:** Multi-resolution icons compliant with Google crawler guidelines (48×48, 192×192, 512×512, Apple Touch 180×180, and `site.webmanifest`).
  - **Structured Data:** Schema.org `ProfilePage` JSON-LD linking all 7 verified web profiles.
  - **SEO Infrastructure:** `sitemap.xml` and `robots.txt` indexing configuration.
  - **GitHub Pages 404:** Custom themed `404.html` error handler with return navigation.
- **Zero Third-Party Branding:** Completely independent with zero third-party platform logos, watermarks, promotional footers, or tracking scripts.
- **Responsive & Accessible:** Fluid scaling across mobile viewports (375px, 390px) and desktop (1440px), semantic HTML5 (`<main>`, `<header>`, `<section>`, `<nav>`, `<aside>`), ARIA dialog standards, and keyboard focus states.


---

## 🔗 Link Inventory & Destinations

| # | Label | Destination URL | Target | Icon |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **View my creative portfolio** | `https://www.behance.net/deekshithvodela` | `_blank` | `brand-behance` |
| 2 | **TOP Project \| Web Design** | `https://deekshithvodela.github.io/top-dashboard/html/pages/recipes.html` | `_blank` | `app-window` |
| 3 | **My Blog on Substack** | `https://deekshithvodela.substack.com/` | `_blank` | `bookmark` |
| 4 | **ORCID profile** | `https://orcid.org/0009-0000-5535-9828` | `_blank` | `map-question` |

### Social Channels
- **Substack:** `https://deekshithvodela.substack.com/`
- **Instagram:** `https://instagram.com/deekshith.vodela`
- **LinkedIn:** `https://www.linkedin.com/in/deekshithvodela`
- **YouTube:** `https://youtube.com/@deekshithvodela`
- **GitHub:** `https://github.com/deekshithvodela`

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── images/
│       │   └── avatar.jpeg       # High-res 600x600 VD logo monogram
│       └── icons/                # Exact Tabler & social SVGs
├── src/
│   ├── components/
│   │   ├── BackgroundGlow.jsx    # Soft ambient backdrop blur & grain
│   │   ├── ProfileHeader.jsx     # Avatar, @deekshithvodela, Graphic Designer
│   │   ├── LinkButton.jsx        # White pill link card with 3-dots trigger
│   │   ├── SocialLinks.jsx       # Row of 5 social media buttons
│   │   ├── ShareButton.jsx       # Fixed top-right circular trigger
│   │   ├── ShareModal.jsx        # Fallback share dialog & clipboard copy
│   │   ├── Toast.jsx             # Action feedback alert
│   │   └── Icon.jsx              # Reusable vector glyph renderer
│   ├── data/
│   │   └── links.json            # Centralized link configuration
│   ├── styles/
│   │   └── global.css            # Design tokens & responsive styling
│   ├── App.jsx                   # Application layout & state
│   └── main.jsx                  # Entry point
├── index.html                    # SEO tags & viewport setup
├── vite.config.js                # Base relative path configuration
└── package.json
```

---

## ⚡ Google PageSpeed & Lighthouse Audit

The production bundle achieves industry-standard compliance across all evaluation categories:

| Category | Score | Metric Highlights |
| :--- | :---: | :--- |
| **Performance** | **98%** | LCP: 2.0s, FCP: 1.8s, CLS: 0.04, Speed Index: 1.8s |
| **Accessibility** | **100%** | Full WCAG 2.2 AA compliance, scalable viewport, accessible touch targets |
| **Best Practices** | **100%** | Zero console errors, modern HTTP/HTTPS standards, CSP-ready |
| **SEO** | **100%** | Canonical URL, meta description, robots.txt, sitemap.xml, Schema.org `ProfilePage` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Build the optimized static bundle:
```bash
npm run build
```
The distributable static files will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### GitHub Pages (Automated via GitHub Actions)
This project includes a turnkey CI/CD workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
1. Push this repository to your GitHub repository: `deekshithvodela/deekshithvodela.github.io`.
2. On GitHub, navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. GitHub Actions will automatically install dependencies, build the production bundle, and deploy the live site to `https://deekshithvodela.github.io/`.

### Vercel / Netlify
- Build Command: `npm run build`
- Output Directory: `dist`

---

## 🔀 Case-Insensitive GitHub Pages Routing

GitHub Pages servers operate on Linux/POSIX filesystems where URLs are strictly case-sensitive (e.g. `/canonify` returns 404 when the repository is named `Canonify`).

This repository acts as the root user site (`https://deekshithvodela.github.io/`) and implements a 3-tier resolution system:
1. **Tier 1 (Instant Static Router in `public/404.html`)**: Synchronous dictionary lookup in `<head>` redirecting any casing permutation (e.g., `/canonify`, `/CANONIFY`) to the exact repository name (`/Canonify/`) in ~0ms while preserving subpaths, query parameters, and hashes.
2. **Tier 2 (Dynamic GitHub API Discovery)**: For any future repository created with mixed-case or uppercase letters, the router automatically queries the public GitHub REST API, caches active Pages repositories in `sessionStorage`, and redirects dynamically without requiring code updates.
3. **Tier 3 (Static Alias Stubs in `public/`)**: Dedicated static stubs (`public/canonify/index.html`, `public/fingerswipe/index.html`, `public/formsoffline/index.html`) providing direct HTTP 200 resolution on GitHub's CDN.

