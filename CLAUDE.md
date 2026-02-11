# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Payload CMS website built with Next.js 15 (App Router), TypeScript, React 19, and MongoDB. The project is based on the official Payload Website Template and includes a full-featured CMS backend with a production-ready frontend.

**Tech Stack:**
- **CMS**: Payload CMS 3.54.0
- **Frontend**: Next.js 15.4.4 (App Router), React 19.1.0
- **Database**: MongoDB (via @payloadcms/db-mongodb)
- **Styling**: TailwindCSS with shadcn/ui components
- **Rich Text**: Lexical editor (@payloadcms/richtext-lexical)
- **Package Manager**: pnpm (required)

## Development Commands

### Setup & Development
```bash
# Copy environment variables (required for first setup)
cp .env.example .env

# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Build and run in production mode locally
pnpm dev:prod
```

### Database & Migrations
```bash
# Generate TypeScript types from Payload config
pnpm generate:types

# Create a new database migration (required when changing schema)
pnpm payload migrate:create

# Run pending migrations (run after building, before starting in production)
pnpm payload migrate

# Access Payload CLI
pnpm payload
```

### Code Quality
```bash
# Run ESLint
pnpm lint

# Run ESLint with auto-fix
pnpm lint:fix
```

### Testing
```bash
# Run all tests (integration + e2e)
pnpm test

# Run integration tests only (Vitest)
pnpm test:int

# Run end-to-end tests only (Playwright)
pnpm test:e2e
```

**Test Configuration:**
- Integration tests: `tests/int/**/*.int.spec.ts` (Vitest + jsdom)
- E2E tests: `tests/e2e/**/*.ts` (Playwright, runs on http://localhost:3000)

## Architecture Overview

### Directory Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (frontend)/            # Public-facing website routes
│   │   ├── [slug]/            # Dynamic page routes
│   │   ├── posts/             # Blog/posts routes
│   │   ├── search/            # Search functionality
│   │   └── page.tsx           # Homepage
│   └── (payload)/             # Payload admin panel routes
│       ├── admin/             # Admin UI
│       └── api/               # API routes
├── collections/               # Payload collections (data models)
│   ├── Pages/                 # Page collection with layout builder
│   ├── Posts/                 # Blog posts
│   ├── Users/                 # Authentication
│   ├── Media.ts               # File uploads
│   └── Categories.ts          # Post taxonomy
├── blocks/                    # Layout builder blocks (CMS & frontend)
│   ├── About/
│   ├── CallToAction/
│   ├── Content/
│   ├── Courses/
│   ├── DonationForm/
│   ├── Gallery/
│   ├── MediaBlock/
│   └── ...                    # 20+ custom blocks
├── heros/                     # Hero section variants
│   ├── HighImpact/
│   ├── MediumImpact/
│   ├── LowImpact/
│   ├── CustomTwoColumn/
│   └── PostHero/
├── components/                # Shared React components
├── utilities/                 # Helper functions
├── access/                    # Access control policies
├── fields/                    # Reusable Payload fields
├── hooks/                     # Payload hooks
├── providers/                 # React context providers
├── search/                    # Search plugin configuration
├── Header/                    # Header global config
├── Footer/                    # Footer global config
└── payload.config.ts          # Main Payload configuration
```

### Payload CMS Architecture

**Collections** (src/collections/):
- **Pages**: Layout builder enabled, draft/versioning, SEO, scheduled publishing
- **Posts**: Blog posts with layout builder, categories, authors, draft previews
- **Media**: File uploads with image resizing, focal point support
- **Categories**: Nested taxonomy using nested-docs plugin
- **Users**: Auth-enabled, admin panel access

**Globals** (src/Header/, src/Footer/):
- **Header**: Navigation links and site header data
- **Footer**: Footer content and links

**Layout Builder Blocks** (src/blocks/):
Each block has two parts:
1. `config.ts` - Payload CMS field configuration
2. `Component.tsx` - Frontend React component

Custom blocks include: About, ArchiveBlock, Banner, CallToAction, Carousel, ContactFormBlock, Content, CourseCard, Courses, DonationForm, Form, Gallery, Map, MediaBlock, MeatballMenu, NumbersBlock, PopUpModalBlock, SponsorsPartners, TwoColumnHero, VolunteerRolesBlock

### Plugins Configuration (src/plugins/index.ts)

Active Payload plugins:
- **SEO Plugin**: Meta tags, OG images, sitemaps
- **Redirects Plugin**: Manages URL redirects from admin
- **Search Plugin**: Full-text search on posts
- **Form Builder Plugin**: Custom forms with Lexical editor
- **Nested Docs Plugin**: Hierarchical categories
- **Payload Cloud Plugin**: Cloud deployment support

### Access Control (src/access/)

Three access control functions:
- `anyone.ts` - Public access
- `authenticated.ts` - Requires logged-in user
- `authenticatedOrPublished.ts` - Public if published, otherwise requires auth

### Hooks & Revalidation

**Important**: Pages and Posts use `afterChange` hooks to trigger Next.js revalidation:
- `revalidatePage` (src/collections/Pages/hooks/revalidatePage.ts)
- `revalidatePost` (src/collections/Posts/hooks/revalidatePost.ts)

These hooks ensure the static site rebuilds when content changes.

### Frontend Routing

Next.js App Router structure:
- `/` - Homepage (src/app/(frontend)/page.tsx)
- `/[slug]` - Dynamic pages from CMS (src/app/(frontend)/[slug]/page.tsx)
- `/posts/[slug]` - Blog posts
- `/search` - Search results
- `/admin` - Payload admin panel (src/app/(payload)/admin)
- `/api` - Payload API endpoints (src/app/(payload)/api)

## Environment Variables

Required variables (see .env.example):
- `DATABASE_URI` - MongoDB connection string (or PostgreSQL)
- `PAYLOAD_SECRET` - JWT encryption secret
- `NEXT_PUBLIC_SERVER_URL` - Public URL (e.g., http://localhost:3000)
- `CRON_SECRET` - Cron job authentication
- `PREVIEW_SECRET` - Draft preview validation

## Working with Postgres

If using PostgreSQL instead of MongoDB:
1. Local development: `push: true` is enabled by default (auto-updates schema)
2. Production: Set `push: false` and use migrations:
   - Create: `pnpm payload migrate:create`
   - Run: `pnpm payload migrate` (before starting production server)

## Database Seeding

Access `/admin` and click "seed database" to populate with demo content.

**Demo User:**
- Email: demo-author@payloadcms.com
- Password: password

⚠️ Seeding is destructive - it drops the existing database.

## Key Patterns

### Adding a New Block
1. Create `src/blocks/YourBlock/config.ts` with Payload field config
2. Create `src/blocks/YourBlock/Component.tsx` for frontend rendering
3. Add to Pages collection in `src/collections/Pages/index.ts`:
   ```ts
   import { YourBlock } from '../../blocks/YourBlock/config'
   // Add to blocks array in layout field
   ```

### Adding a New Collection
1. Create `src/collections/YourCollection/index.ts`
2. Define collection config with CollectionConfig type
3. Add to `src/payload.config.ts`:
   ```ts
   import { YourCollection } from './collections/YourCollection'
   collections: [Pages, Posts, Media, Categories, Users, YourCollection]
   ```
4. Run `pnpm generate:types` to update TypeScript types

### TypeScript Paths
- `@payload-config` → src/payload.config.ts
- `@/*` → src/*
- Types generated at src/payload-types.ts

## Deployment

### Payload Cloud (Recommended)
One-click deployment to Payload Cloud with automatic builds.

### Vercel
Requires:
- `@payloadcms/db-vercel-postgres` adapter
- Optional: `@payloadcms/storage-vercel-blob` for file storage
- Set environment variables in Vercel dashboard
- Note: Cron jobs may be limited to daily on free tier

### Self-hosting
1. Build: `pnpm build`
2. Run migrations: `pnpm payload migrate`
3. Start: `pnpm start`
4. Ensure MongoDB/PostgreSQL is accessible

## Docker

```bash
# Start with Docker Compose
docker-compose up
```

Uses .env file automatically. Access at http://localhost:3000.

## Important Notes

- **Package Manager**: Use `pnpm` only (specified in engines, packageManager field)
- **Node Version**: Requires Node.js ^18.20.2 || >=20.9.0
- **Draft Previews**: Pages/Posts support draft mode with live preview in admin
- **Image Caching**: After cropping images, republish the page to revalidate Next.js image cache
- **Jobs Queue**: Scheduled publishing uses jobs queue, runs on cron schedule
- **Next.js Caching**: Disabled by default for Payload Cloud (uses Cloudflare). To enable, remove `no-store` from fetch requests in data fetching utilities and remove `export const dynamic = 'force-dynamic'` from page files.
