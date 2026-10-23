# Project State

## Project Identity
- **Project Name:** Deekshith Vodela Link-in-Bio Portfolio Website
- **Target Canonical URL:** `https://deekshithvodela.github.io/`
- **Purpose:** Standalone, high-performance, independently deployable link-in-bio portfolio website for Deekshith Vodela.
- **Current Phase:** Complete (Phases 1 through 16 fully implemented, verified, and bundled).
- **Repository/Location:** `/home/drover/Projects/Portfolio`
- **Technology Stack:** Vite, React, Vanilla CSS (design tokens & micro-interactions), semantic HTML5, local SVG & WebP/JPEG assets.
- **Deployment Target:** GitHub Pages (`https://deekshithvodela.github.io/`).

## Project Goal
Deliver a responsive, accessible, standalone link-in-bio website featuring typography, subtle ambient blurs, interactive link buttons, icons, and legal/newsletter footer suites. Complete with full SEO, Open Graph, Favicon, Sitemap, 404, and case-insensitive universal routing.

## Current State
- The standalone website is fully implemented and running locally via Vite.
- Core link-in-bio profile, verified links, and share features validated and operational.
- Target canonical URL established: `https://deekshithvodela.github.io/`.
- Complete Open Graph suite generated: 1200×630 progressive JPEG (`og-image.jpg`, 44KB, under 300KB limit for WhatsApp).
- Complete Google Search-compliant Favicon suite generated (48×48, 192×192, 512×512, Apple Touch 180×180, SVG, ICO, and `site.webmanifest`).
- SEO infrastructure implemented: `sitemap.xml` and `robots.txt` referencing canonical domain.
- Standalone themed `404.html` GitHub Pages error page implemented and visually verified.
- Schema.org `ProfilePage` JSON-LD structured data linking all 7 web profiles.
- Legal & Newsletter Footer implemented matching user's reference design:
  - Left: `© 2026 Deekshith Vodela` (links to LinkedIn) `• MIT License • Privacy Policy • Disclosure • Data updated: October 2026`
  - Right: `✉ Subscribe to Newsletter` pill button linking to Substack.
  - Interactive accessible modal for MIT License, Privacy Policy, and Disclosure.
  - Root `LICENSE` file created.
- Production build succeeds cleanly via `npm run build` with all assets generated in `dist/`.

## Architecture
- `public/assets/`: Original avatar image (`avatar.jpeg`), SVG icons (`brand-behance.svg`, `app-window.svg`, `bookmark.svg`, `map-question.svg`, `social-*.svg`, `share.svg`, `three-dots.svg`, `close.svg`, `whatsapp.svg`, `email.svg`, `x.svg`, `copy.svg`).
- `src/data/links.json`: Centralized link data source (titles, verified URLs, icons, new tab flags).
- `src/components/`:
  - `BackgroundGlow.jsx`: Layered backdrop blur (`filter: blur(55px)`) over `#eceef1` with subtle SVG grain overlay.
  - `ProfileHeader.jsx`: Circular monogram avatar, `@deekshithvodela` title (h1), `Graphic Designer` bio.
  - `LinkButton.jsx`: White pill button (`h: 64px`, `border-radius: 16px`, soft shadow), left icon, centered label, right 3-dots action button.
  - `SocialLinks.jsx`: Centered horizontal row of 5 social icon buttons (Substack, Instagram, LinkedIn, YouTube, GitHub).
  - `ShareButton.jsx`: Fixed top-right circular trigger button.
  - `ShareModal.jsx`: Accessible modal dialog matching reference share sheet (crimson preview card, Copy Link toast, WhatsApp, Email, X, LinkedIn).
  - `Toast.jsx`: Accessible status feedback component.
  - `Icon.jsx`: Lightweight SVG vector renderer.
- `src/styles/global.css`: Design tokens (colors, font stack: Inter, radii, shadows), background blur layers, responsive layout container, and mobile tap highlight suppression.

## Core Decisions
- **Decision 1: Vite + React + Vanilla CSS**: Fast, modern, zero-overhead static bundle with strict control over CSS tokens matching clean layout. *Status: Active.*
- **Decision 2: Standalone Independence**: Zero third-party platform branding, watermarks, or platform links. *Status: Active.*
- **Decision 3: Background Layer Replication**: Base `#eceef1` with a fixed pseudo-background utilizing `avatar.jpeg` scaled with `opacity: 0.25` and `filter: blur(55px)` plus subtle SVG noise overlay for the signature pink/magenta ambient glow. *Status: Active.*
- **Decision 4: Direct Verified Destinations**: Render URLs directly from `src/data/links.json` preserving original order and verified endpoints. *Status: Active.*

## Constraints
- No unrequested git commands (`git commit`, `git push`, etc. must remain user-prompted).
- Zero third-party platform branding or watermarks.
- No dummy links, placeholders, or fabricated data.
- Must support mobile (375px, 390px) and desktop (1440px) viewports cleanly with zero button flashing.

## Preserve / Do Not Touch
- User's profile handle `@deekshithvodela`, bio `Graphic Designer`, avatar logo monogram, and original 4 links + 5 social links.

## Completed
- Phase 1: Reference page and workspace inspection via Playwright headless browser.
- Phase 2: Complete link destination audit and live connectivity verification.
- Phase 3: Original asset retrieval (avatar image and all SVG icons).
- Phase 4: Detailed design measurements (390px mobile and 1440px desktop).
- Phase 5: Implementation of React components, centralized `links.json`, and CSS design tokens.
- Phase 6: Top-right share system with Web Share API and fallback modal.
- Phase 7: Complete removal of third-party branding and watermarks.
- Phase 8: Multi-viewport visual regression and browser validation via Playwright CLI.
- Phase 9: Accessibility, SEO optimization, and production build verification.
- Phase 10: Complete documentation (`README.md`, `PROJECT_STATE.md`, test report).
- Phase 11: Share modal icon restoration (resolved 0x0 SVG sizing collapse for Copy, WhatsApp, X, and LinkedIn).
- Phase 12: Google PageSpeed & Lighthouse Optimization Suite (elevated Accessibility to 100%, Performance to 98%, Best Practices to 100%, and SEO to 100%).
- Phase 13: Subpixel logo clipping & fractional zoom smoothing (eliminated subpixel clipping bleed on avatar by applying intrinsic border-radius to image, layer isolation, and hardware-accelerated edge masking).
- Phase 14: Domain-wide case-insensitive routing for GitHub Pages (implemented 3-tier resolution system: Tier 1 instant static map in `404.html`, Tier 2 dynamic GitHub REST API auto-discovery with `sessionStorage` caching, and Tier 3 static alias stubs in `public/` for `/canonify/`, `/fingerswipe/`, and `/formsoffline/`).
- Phase 15: Google Search Console verification reorganization & GoatCounter analytics (moved `googleb30f9215a6887c17.html` into `public/` and `dist/`, added verification meta tag in `index.html`, and integrated GoatCounter analytics script in `index.html` and `public/404.html`).
- Phase 16: Complete third-party platform reference removal across all documentation/code.
- Phase 17: Comprehensive mobile button blue flash elimination across touch, focus ring, text selection, and tap latency.

## In Progress
- Phase 18: Reset Git history to clean "Initial commit" and push to remote.

## Open Issues
- None.

## Known Findings
- The pink/magenta ambient background glow is produced by taking the avatar image and rendering it with `filter: blur(55px)` at 25% opacity over `#eceef1`.
- The link icons are official Tabler outline icons (`brand-behance`, `app-window`, `bookmark`, `map-question`).
- All 4 link destinations and 5 social destinations are online and responsive.
- Google Lighthouse baseline scored 87% Performance and 94% Accessibility. Removing restrictive viewport meta attributes achieved 100% Accessibility. Preloading LCP avatar and optimizing Google Fonts achieved 98% Performance.
- Logo pixelation/artifact at fractional zoom (< 100%) was caused by subpixel antialiasing clipping failure in the browser's GPU compositor when an unrounded square image was clipped inside an `overflow: hidden` container with a dark drop shadow. Applying `border-radius: 50%` directly to the `<img>` and enabling layer isolation (`isolation: isolate`, `transform: translateZ(0)`) completely resolved the issue.
- GitHub Pages is strictly case-sensitive on its Fastly/Nginx layer, causing `/canonify` to 404 when the repository is named `Canonify`. Using the user root repo `deekshithvodela.github.io`'s `404.html` as a universal router solves this across all repositories because unmatched subpaths fall back to `404.html` while preserving the full URL, query string, and hash fragment in `window.location`.
- Static files for root verification (Google Search Console) must reside in `public/` in Vite so that they are copied directly into `dist/` and served at root path `/googleb30f9215a6887c17.html`.
- Mobile button blue flashing is caused by the browser's default `-webkit-tap-highlight-color` and simulated `:hover` transitions. Setting `-webkit-tap-highlight-color: transparent` globally, isolating `:hover` in `@media (hover: hover) and (pointer: fine)`, and applying `transform: translateZ(0)` hardware acceleration completely eliminates mobile tap flicker.

## Important Files / Components
- `src/data/links.json`: Centralized link data source.
- `public/assets/images/avatar.jpeg`: Original profile picture.
- `src/components/Icon.jsx`: Explicitly dimensioned vector icon renderer.
- `src/styles/global.css`: Design tokens, subpixel-safe avatar styles, and responsive styles.
- `src/App.jsx`: Main application container.
- `public/404.html`: Universal smart router with Tier 1 instant lookup, Tier 2 GitHub API auto-discovery, and GoatCounter analytics.
- `public/canonify/index.html`: Static alias redirection stub for `/canonify/`.
- `public/fingerswipe/index.html`: Static alias redirection stub for `/fingerswipe/`.
- `public/formsoffline/index.html`: Static alias redirection stub for `/formsoffline/`.
- `public/googleb30f9215a6887c17.html`: Google Search Console verification file.

## Dependencies / External Systems
- Font: Inter (Google Fonts asynchronous / system fallback).
- Build tool: Vite + React plugin.
- Analytics: GoatCounter (`https://githubio.goatcounter.com/count`).
- Search Console: Google Site Verification (`googleb30f9215a6887c17`).
- External API: Public GitHub REST API (`https://api.github.com/users/deekshithvodela/repos?per_page=100`) for Tier 2 repository discovery.

## Verification Status
- Reference Inspection: PASS
- Live URL Connectivity: PASS (8/8 valid)
- Asset Retrieval: PASS (1 avatar, 11 SVGs verified)
- Implementation & Build: PASS (`npm run build` succeeds cleanly)
- Mobile 390x844 Layout: PASS (0 overflow, pixel-matched)
- Mobile 375x812 Layout: PASS (0 overflow)
- Desktop 1440x900 Layout: PASS (0 overflow, centered container)
- Share Modal Icons: PASS (All 5 icons verified: Copy 22x22, WhatsApp 22x22, Email 22x22, X 22x22, LinkedIn 22x22)
- Subpixel Zoom Stability: PASS (Zero dark ticks or pixelation across 50%, 67%, 75%, 80%, 90%, 100%, 125%, 150% zoom levels)
- Platform Branding Elimination: PASS (0 third-party watermarks or platform attribution)
- Mobile Tap Highlight Suppression: PASS (0 blue/gray tap highlight flashes on touch)
- Google Lighthouse Performance: PASS (98%)
- Google Lighthouse Accessibility: PASS (100%)
- Google Lighthouse Best Practices: PASS (100%)
- Google Lighthouse SEO: PASS (100%)
- Case-Insensitive Routing (Static Stub): PASS (`/canonify/` &rarr; `https://deekshithvodela.github.io/Canonify/`)
- Case-Insensitive Routing (Uppercase 404): PASS (`/CANONIFY` &rarr; `/Canonify/`)
- Case-Insensitive Routing (Lowercase without slash): PASS (`/canonify` &rarr; `https://deekshithvodela.github.io/Canonify/`)
- Subpath, Query & Hash Preservation: PASS (`/canonify/docs?v=2#step1` &rarr; `/Canonify/docs?v=2#step1`)
- Other Repositories: PASS (`/fingerswipe` &rarr; `/FingerSwipe/`)
- Future Repo Auto-Discovery (Tier 2): PASS (Discovered and cached all live Pages repos: Canonify, FingerSwipe, FormsOffline)
- Nonexistent Paths: PASS (Correctly displays styled 404 UI without redirect loops)
- Google Search Console Verification File: PASS (`/googleb30f9215a6887c17.html` returns HTTP 200 with exact token)
- GoatCounter Analytics: PASS (Loaded in `index.html` and `404.html` with zero console errors)

## Next Direction
Awaiting user confirmation before committing and pushing changes to GitHub.


