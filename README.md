# ReqBot UI Kit

A React + TypeScript UI kit for building a modern, responsive interface around a requirements‑focused chatbot and related views. It includes a curated set of reusable UI components, page templates, and routing set up to help you ship quickly.

## Overview

This project provides:

- Reusable UI components in `src/components/ui` based on Radix primitives and Tailwind.
- A responsive application layout with `Navbar` in `src/components/layout/Navbar.tsx`.
- Ready‑made pages: `Landing`, `Chat`, `Summary`, `Index`, and `NotFound` under `src/pages`.
- Client‑side routing via `react-router-dom` and a Vite dev workflow.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Radix UI / shadcn‑style components
- TanStack Query (for client data fetching/caching)

## Getting Started

Prerequisites: Node.js and npm installed.

```sh
# Install dependencies
npm i

# Start the development server
npm run dev

# Lint the project
npm run lint

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

- `src/pages` – application views like `Landing.tsx`, `Chat.tsx`, `Summary.tsx`.
- `src/components/ui` – composable UI components (buttons, dialogs, tables, etc.).
- `src/components/layout` – layout elements such as the `Navbar`.
- `src/hooks` – reusable React hooks.
- `src/lib` – utilities and helpers.
- `public` – static assets.

## Customization

- Tailwind configuration in `tailwind.config.ts`.
- Global styles in `src/index.css` and `src/App.css`.
- Vite configuration in `vite.config.ts`.
