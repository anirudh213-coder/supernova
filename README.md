# SUPERNOVA Audio — React + TypeScript

A single-page product website for SUPERNOVA Audio, rebuilt from the original project into a simpler V2 architecture while preserving the existing design, content, responsive behavior and interactions.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Project Structure

```text
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── ui/              # reusable visual primitives
│   └── layout/          # global Navbar and Footer
├── sections/             # major page sections
│   ├── Hero/
│   ├── Features/
│   ├── Specs/
│   ├── Testimonials/
│   ├── About/
│   └── Contact/
├── features/
│   └── order/            # order-specific behavior and modal
├── hooks/                # genuinely shared React behavior
├── data/                 # static content
├── types/                # shared TypeScript types
├── assets/               # logos, product images and video
└── styles/
    └── index.css         # global CSS and shared responsive/animation rules
```

## Architecture

Reusable UI stays in `components/ui`. Page-specific presentation stays in `sections`. Order-specific behavior is isolated in `features/order`. Shared hooks, data and types are kept separate only where they are genuinely shared.

`App.tsx` owns the single Order Modal open/close state and passes the open callback to components that trigger ordering.

## Main Sections

- Navbar
- Hero
- Features
- Specifications
- Testimonials
- About
- Contact
- Footer
- Order Modal

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project is Vercel-ready using the normal Vite build output.
