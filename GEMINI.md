# Gemini Project Context: genxl-cms

This project is a full-stack website template powered by **Next.js 15 (App Router)** and **Payload CMS 3**. It's designed to be a highly customizable, enterprise-grade content management system and frontend.

## Project Overview

- **Frontend:** Next.js 15 with React 19, Tailwind CSS, and shadcn/ui.
- **Backend/CMS:** Payload CMS 3 (integrated as a Next.js route handler).
- **Database:** MongoDB (via `@payloadcms/db-mongodb`).
- **Rich Text:** Lexical editor (configured in `src/fields/defaultLexical.ts`).
- **Key Features:**
    - Draft and Live Preview support.
    - SEO and Search plugins pre-configured.
    - Redirects management.
    - Layout builder using reusable blocks.
    - Automated sitemap generation.

## Key Commands

- `pnpm dev`: Starts the development server (Next.js + Payload).
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint and Next.js linting.
- `pnpm test`: Runs both integration (Vitest) and E2E (Playwright) tests.
- `pnpm test:int`: Runs integration tests using Vitest.
- `pnpm test:e2e`: Runs E2E tests using Playwright.
- `pnpm generate:types`: Generates TypeScript types based on the Payload configuration (output to `src/payload-types.ts`).
- `pnpm generate:importmap`: Generates the Payload import map for the admin panel.

## Project Structure

- `src/app/(frontend)`: Next.js frontend application logic, routes, and components.
- `src/app/(payload)`: Payload CMS admin panel and API route configurations.
- `src/collections`: Definitions for Payload collections (e.g., Pages, Posts, Users, Media).
- `src/blocks`: Reusable layout blocks used by the Page Builder (Hero, Content, Media Block, etc.).
- `src/components`: Shared React components, including shadcn/ui components in `src/components/ui`.
- `src/fields`: Shared Payload field configurations.
- `src/heros`: Configurations and components for various Hero styles.
- `src/utilities`: Shared utility functions (formatting, URL generation, etc.).
- `src/payload.config.ts`: The central configuration file for Payload CMS.

## Development Conventions

- **Type Safety:** Always use the generated types from `src/payload-types.ts`. Run `pnpm generate:types` after modifying collection or global schemas.
- **Styling:** Tailwind CSS is used for all styling. Components follow the shadcn/ui pattern.
- **Rich Text:** The Lexical editor is the default. Custom blocks can be embedded within the rich text editor.
- **Images:** Handled by the `Media` collection with automated resizing via `sharp`.
- **Environment Variables:** See `.env.example` for required variables. `DATABASE_URI` and `PAYLOAD_SECRET` are critical.

## Testing

- **Integration Tests:** Located in `tests/int`, running with Vitest. These typically test API endpoints and server-side logic.
- **E2E Tests:** Located in `tests/e2e`, running with Playwright. These test full user journeys in the browser.
