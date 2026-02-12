# Repository Guidelines

## Project Structure
- `src/app/`: Next.js App Router routes and layouts.
- `src/collections/`, `src/blocks/`, `src/fields/`, `src/hooks/`, `src/plugins/`: Payload CMS configuration and content modeling.
- `src/components/`, `src/blocks/`, `src/heros/`: Shared UI and layout blocks.
- `src/payload.config.ts`: Main Payload configuration entry point.
- `public/`: Static assets.
- `tests/int/`: Vitest integration tests (e.g., `tests/int/api.int.spec.ts`).
- `tests/e2e/`: Playwright end-to-end tests (e.g., `tests/e2e/frontend.e2e.spec.ts`).

## Build, Test, and Development Commands
- `pnpm install`: Install dependencies (Node `^18.20.2 || >=20.9.0`, pnpm `^9 || ^10`).
- `pnpm dev`: Run the Next.js + Payload dev server at `http://localhost:3000`.
- `pnpm build`: Production build (runs Next build).
- `pnpm start`: Serve the production build.
- `pnpm lint` / `pnpm lint:fix`: Run or auto-fix ESLint rules.
- `pnpm test`: Run integration + e2e test suites.
- `pnpm test:int`: Run Vitest tests (`tests/int/**/*.int.spec.ts`).
- `pnpm test:e2e`: Run Playwright tests (`tests/e2e`).

## Coding Style & Naming Conventions
- Indentation: 2 spaces (see `.editorconfig`).
- Formatting: Prettier (`.prettierrc.json`: single quotes, no semicolons, 100-char width).
- Linting: ESLint with Next.js and TypeScript rules (`eslint.config.mjs`).
- File naming: tests use `*.int.spec.ts` and `*.e2e.spec.ts`.

## Testing Guidelines
- Vitest for integration tests in `tests/int` (jsdom environment).
- Playwright for e2e in `tests/e2e` (Chromium; starts `pnpm dev`).
- Keep tests deterministic; avoid relying on external services unless explicitly mocked.

## Commit & Pull Request Guidelines
- History shows a mix of merge commits and short imperative summaries; no enforced conventional-commit hook.
- Prefer concise, present-tense subjects (optionally `feat(scope): ...`, `docs: ...`).
- PRs should include a clear summary, linked issue (if any), and screenshots/GIFs for UI changes.
- CODEOWNERS enforces reviewer assignment (see `.github/CODEOWNERS`).

## Configuration & Environment
- Start from `.env.example` for local variables; `test.env` is used for tests.
- `docker-compose.yml` is available for local development with containers.
