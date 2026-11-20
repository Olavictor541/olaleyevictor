# Olaleye Victor · Portfolio

Personal portfolio site: **Creative Technologist**, Computer Science student at Vancouver Island University.

Live: https://olavictor541.github.io/olaleyevictor/

## Stack
React 19 · TypeScript · Vite · Tailwind CSS · React Router. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content
Almost all text lives in **`src/data.ts`**: profile links, projects (Builds page, home page and About experience), and artworks (Crafts page). Add a project or artwork there and it appears everywhere it should.

Images go in `public/`. Keep them under ~1600px on the long side and in WebP format so pages load fast.

## Pages
| Route | Page |
| --- | --- |
| `/` | Home: hero, services, featured builds, crafts preview |
| `/about` | Bio, roles, skills, experience |
| `/builds` | Filterable project grid (`/builds#slug` links to one project) |
| `/crafts` | Art gallery with full-screen lightbox (arrow keys / Esc) |
| `/contact` | Contact form (opens a pre-filled email) and social links |

`public/404.html` lets deep links like `/olaleyevictor/about` load on GitHub Pages.

## Develop
```bash
npm install
npm run dev
```
