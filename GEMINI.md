# GEMINI.md

## Project Overview

This is a Next.js web application built with TypeScript and styled with Tailwind CSS. The project uses several modern UI libraries, including Radix UI for accessible components, Framer Motion for animations, and `next-themes` for theme management. The overall architecture follows the standard Next.js App Router structure. The UI seems to be based on `shadcn/ui` or a similar methodology, with a focus on a clean and modern design.

The application appears to be a "Sony Color Lab", a tool for discovering and creating unique color recipes for Sony Alpha cameras, powered by AI.

## Building and Running

### Prerequisites

- Node.js
- pnpm (based on the presence of `pnpm-lock.yaml`)

### Key Commands

- **Development:** `pnpm dev`
  - Runs the app in development mode with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **Build:** `pnpm build`
  - Builds the application for production.
- **Start:** `pnpm start`
  - Starts a production server.
- **Lint:** `pnpm lint`
  - Runs ESLint to check for code quality and style issues.

## Development Conventions

- **Styling:** The project uses Tailwind CSS for styling. Custom styles and theme variables are defined in `tailwind.config.ts` and `src/app/globals.css`.
- **Components:** Components are located in the `src/components` directory. The project seems to use `shadcn/ui` which promotes building reusable and accessible components.
- **Theming:** Theming is handled by `next-themes`, with a `ThemeSwitcher` component and a `ThemeProvider` set up in the main layout.
- **Linting:** ESLint is configured with the recommended Next.js settings to enforce code quality.
