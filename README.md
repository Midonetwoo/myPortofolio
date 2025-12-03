# myPortofolio

Next.js portfolio starter featuring:
- Hero and featured work on the homepage
- Gallery, About, and portfolio detail pages
- Admin login screen plus a dashboard with a portfolio table (id, title, type, images, links, description)

## Running locally
1. Install deps: `npm install`
2. Start dev server: `npm run dev`
3. Visit `http://localhost:3000`

Tailwind is configured in `tailwind.config.js`. Portfolio data is persisted to `data/portfolio-store.json` via `/api/portfolio` (file-based store for local dev). Initial seed lives in `data/portfolio.js`. Admin dashboard uses these API endpoints for add/edit/delete.
