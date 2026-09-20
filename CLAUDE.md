# CLAUDE.md

Guidance for Claude Code (and other AI agents) when working in this repository.

## Project

ING Broker marketing / online-insurance web app (easigurari.com, ingbroker.md).
Built with **Vite + React + TypeScript**; deployed on Vercel (`vercel.json`).

## Common commands

```bash
npm install        # install dependencies
npm run dev        # local dev server on http://localhost:3000
npm run build      # production build (vite build -> dist/)
npm run preview    # preview the production build
npm run lint       # type-check only (tsc --noEmit)
npm run sitemap    # regenerate sitemap (scripts/generate-sitemap.ts)
```

## Environment variables

Copy `.env.example` to `.env` (git-ignored) and fill in real values.
Never commit real secrets — only `.env.example` is tracked.

| Variable | Used by |
| --- | --- |
| `GEMINI_API_KEY` | Gemini AI API calls |
| `APP_URL` | self-referential links / callbacks |
| `GOOGLE_MAPS_API_KEY` | Google Maps MCP server (see below) |

## MCP tools

MCP servers are configured in **`.mcp.json`** (project scope) — not in this file.

### Google Maps (`google-maps`)

- Package: `@modelcontextprotocol/server-google-maps`, launched on demand via
  `npx -y` (no global install needed).
- Requires the `GOOGLE_MAPS_API_KEY` environment variable (see above).
- Provides geocoding, place search, place details, directions, distance matrix
  and elevation tools.
- On first use Claude Code asks you to approve running the server. In Claude Code
  on the web, set `GOOGLE_MAPS_API_KEY` in the environment's secrets so the server
  can start.
