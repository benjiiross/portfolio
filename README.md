# 🚀 Benjamin Rossignol | Portfolio

[![Framework](https://img.shields.io/badge/Framework-Next.js%2015-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tooling](https://img.shields.io/badge/Tooling-Biome.js-60a5fa?style=flat-square&logo=biome)](https://biomejs.dev/)
[![Design](https://img.shields.io/badge/Design-Tailwind%20CSS%20v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

This is the source code of my personal portfolio. It showcases my work as a **Data & AI Engineer**, featuring projects ranging from Cross-platform development (Kotlin Multiplatform) to Blockchain and ML Research.

🌐 **Live Demo**: [benjaminrossignol.vercel.app](https://benjaminrossignol.vercel.app/)

## 🛠️ Tech Stack

- **Core**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Lucide React (Icons)
- **Forms**: Formspree (Contact handling) + Zod (Validation)
- **Linting/Formatting**: Biome.js (Ultra-fast alternative to Prettier/ESLint)
- **Architecture**: Modular Component-based structure with centralized Data Management

## 📂 Project Structure

```text
src/
├── app/            # Next.js App Router (Layouts & Pages)
├── components/     # UI Library
│   ├── layout/     # Global components (Navbar, Footer)
│   ├── sections/   # Page sections (Hero, About, Projects, Contact)
│   └── ui/         # Atomic components (Buttons, Headings)
├── data/           # Centralized content (Single Source of Truth)
├── lib/            # Utility functions, constants, and Type definitions
└── public/         # Static assets (Resume PDF, etc.)
```

## 🏗️ Architectural Features

- Centralized Content: All projects, skills, and experiences are managed in src/data/. This makes updates instant across the entire site.

- Tailwind v4 Integration: Utilizing the latest CSS-first configuration and Lightning CSS for high-performance builds.

- Optimized Performance:

  - Server-side rendering (SSR) by default.
  - Image optimization and fast refresh.
  - Strict linting with Biome for clean and consistent code.

## 🚀 Getting Started

Prerequisites

- Node.js (Latest LTS)
- npm or pnpm

Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/benjiiross/portfolio.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a .env file and add your Formspree key:

    ```env
    NEXT_PUBLIC_FORMSPREE_ID=your_formspree_key
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

Formatting

This project uses Biome.js. To fix linting and formatting:

```bash
npm run lint
```

## 📄 License

© 2026 Benjamin Rossignol. Built with passion using Next.js.
