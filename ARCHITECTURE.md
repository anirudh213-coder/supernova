# Supernova Architecture

## Overview

Supernova uses a lightweight component and feature-based architecture designed to keep the project understandable without unnecessary abstraction.


## Structure

```text
src/
├── components/
│   ├── ui/
│   └── layout/
│
├── sections/
│   ├── Hero/
│   ├── Features/
│   ├── Specs/
│   ├── About/
│   ├── Testimonials/
│   └── Contact/
│
├── features/
│   └── order/
│
├── hooks/
├── data/
├── types/
├── assets/
└── styles/
```

### `components/ui`

Generic reusable UI elements such as buttons, cards, inputs, badges, modals and section headings.

These components should remain independent of specific page sections.

### `components/layout`

Global layout components such as the Navbar and Footer.

### `sections`

Major page sections that belong specifically to the Supernova website.

Each section owns its page-specific presentation and behavior.

### `features`

Feature-specific functionality.

The current example is the order flow and Order Modal.

### `hooks`

Reusable React hooks shared by multiple parts of the application.

### `data`

Static content such as navigation items, specifications, features and testimonials.

### `types`

Shared TypeScript types used across the application.

### `assets`

Images, icons, videos and other static assets.

### `styles`

Global styling, including the main stylesheet.

## Design Principles

* Prefer simple solutions over unnecessary abstraction.
* Reuse UI components when they have genuine repeated use.
* Keep business/feature logic separate from generic UI.
* Avoid circular dependencies.
* Keep static content separate from presentation where useful.
* Preserve responsive behavior across desktop and mobile.
* Keep the architecture scalable without unnecessarily increasing the number of files or abstractions.

## AI-Assisted Workflow

LLMs were used throughout development for code generation, refactoring, debugging, architectural exploration and implementation assistance.

The final architecture and implementation were reviewed and directed manually, with AI used as an engineering accelerator rather than an autonomous source of project decisions.
