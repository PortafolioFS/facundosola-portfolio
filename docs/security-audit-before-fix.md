# Security Audit Before Fix

Date: 2026-04-02
Project: `facundosola-portfolio`

## Current dependency baseline

- Package manager: `npm`
- Active lockfile: `package-lock.json` (lockfileVersion `3`)
- Framework: `next@16.0.3`
- React: `react@19.2.0`
- React DOM: `react-dom@19.2.0`
- ESLint config: `eslint-config-next@16.0.3`

## Project shape

- Router: **App Router**
- Evidence:
  - `app/layout.tsx` exists and exports root metadata/layout
  - `app/page.tsx` is the home route
  - `app/blog/page.tsx` and `app/projects/page.tsx` define route segments
  - `app/api/github-projects/route.ts` is a route handler using `next/server`
- Pages Router: not detected (`pages/` directory absent)

## Vercel and deployment config

- `vercel.json`: not present
- `.vercel/project.json`: not present in the workspace
- Git remote:
  - `origin` → `https://github.com/PortafolioFS/facundosola-portfolio.git`

## Security relevance

- The project uses the **App Router**, so it is in the affected surface described by the official Next.js advisory for React Server Components.
- Current `next@16.0.3` is below the official patched version for the `16.0.x` line from the December 11, 2025 advisory.
- Current `react@19.2.0` / `react-dom@19.2.0` are also below the official patched `19.2.x` release mentioned by React for the upstream RSC fixes.
- After checking newer official advisories, `16.0.10` is **not sufficient anymore** to clear every currently published Next.js package advisory. Newer 2026 advisories patch at `16.0.11`, `16.1.5`, and `16.1.7`, so the safe minimum with current public advisories is `16.1.7`.

## Official references

- Next.js advisory (December 11, 2025): `16.0.x` fixed in `16.0.10`
  - https://nextjs.org/blog/security-update-2025-12-11
- React advisory (updated January 26, 2026): latest patched React releases listed as `19.2.4`, `19.1.5`, `19.0.4`
  - https://react.dev/blog/2025/12/11/react-server-components-security-updates
- Next.js GitHub advisory GHSA-h25m-26qc-wcjf (January 26, 2026): `>=16.0.0 <16.1.5` affected, patched in `16.0.11` and `16.1.5`
  - https://github.com/vercel/next.js/security/advisories/GHSA-h25m-26qc-wcjf
- Next.js GitHub advisory GHSA-mq59-m269-xvcx: patched in `16.1.7`
  - https://github.com/vercel/next.js/security/advisories/GHSA-mq59-m269-xvcx

## Initial conclusion

This project should be patched with the minimum currently safe upgrade that clears the published advisories observed during the audit:

- `next` → `16.1.7`
- `eslint-config-next` → `16.1.7`
- `react` → `19.2.4`
- `react-dom` → `19.2.4`

Then the lockfile must be regenerated and the application revalidated before redeploying to Vercel.
