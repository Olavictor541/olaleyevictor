# Olaleye Victor · Portfolio

Personal site of Olaleye Victor: creative technologist and Computer Science student at Vancouver Island University. Minimal, single column, light and dark themes.

Live: https://olavictor541.github.io/olaleyevictor/

## Stack
React 19 · TypeScript · Vite · Tailwind CSS · React Router. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content
Projects, artworks and profile links live in **`src/data.ts`**. Add a project or artwork there and it appears on the home page and its own page. Page wording is in `src/pages/`.

Images go in `public/`. Keep them under ~1600px on the long side and in WebP format so pages load fast.

## Pages
| Route | Page |
| --- | --- |
| `/` | Intro, selected work, art preview, contact line |
| `/about` | Bio, what I do, current roles, tools |
| `/work` | Projects (`/work#slug` links to one) |
| `/art` | Gallery with a full-screen viewer (arrow keys / Esc) |
| `/contact` | Email, links, and a form that opens a pre-filled email |

The theme follows the visitor's system setting until they use the toggle, then remembers their choice.

`public/404.html` lets deep links like `/olaleyevictor/about` load on GitHub Pages.

## Develop
```bash
npm install
npm run dev
```
