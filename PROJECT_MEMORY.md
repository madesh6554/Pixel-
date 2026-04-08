# The Pixel Company - Project Memory

## Core Identity & Branding
*   **Company Name:** The Pixel Company
*   **Agency Type:** Creative Intelligence & Automation Agency
*   **Core Slogan:** 
    *   "Growth is the goal. Here every Pixel delivers purpose."
    *   "Brands built to resonate. Campaigns engineered to convert. Growth systems that run on AI."
*   **Location:** Coimbatore, Tamil Nadu.
*   **WhatsApp:** [+91 9045 860 876](https://wa.me/919045860876)

## Design System & Aesthetics
*   **Primary Background:** Deep Black (`#0B0B0E`)
*   **Interaction:** **Water-Ripple Background** (Interactive high-density particle field).
*   **Accent Palette:** Purple (`#8B5CF6`) and Pink/Magenta (`#EC4899`).
*   **Typography:** 'Outfit' (Headings), 'Inter' (Body).
*   **Visual Style:** High-end glassmorphism, glowing states, and fluid scroll-based motion.

## Site Structure & Page Map
### 1. Home Page (`/`)
Strategic Conversion Funnel:
*   **Hero Section**: Split-grid featuring the "Creative Intelligence" robot and primary CTA.
*   **Ground Work (Services)**: 4 pillars with "The Real Deal" pop-up details.
*   **Success Roadmap**: Vertical scroll-animated "ladder" showing the 4 growth phases.
*   **Course Showcase**: Netflix-style cards for AI and Marketing modules.
*   **FAQSection**: Premium accordion for agency-specific queries.
*   **Footer**: Multi-column navigation cluster with HQ details and social links.

### 2. About Us Page (`/about-us`)
*   Dedicated brand destination (opens in new tab from header).
*   **Philosophy**: Full narrative on blending "Human Emotion × Digital Precision."
*   **Team ("The Pixels")**: Stylized 11-member grid (Shahz, Pranab, Anirudh, Daniel, Dhinesh, etc.).

## Key Components & Logic
*   **Interactive Cards**: `src/components/Cards.css` handles glassy hover-glows and modal overlays.
*   **Scroll Tracking**: `src/components/Founders.jsx` uses Framer Motion `useScroll` for the progress roadmap line.
*   **Custom Social Icons**: `src/components/Footer.jsx` uses custom high-fidelity SVGs for Instagram/LinkedIn to ensure build stability (`lucide-react` fix).

## Assets
*   **Logo/Favicon**: Refined transparent brands located in `/public`.
*   **Hero Visual**: `src/assets/partners images/home umg.webp`.

---
*Last Updated: 2026-04-07*
