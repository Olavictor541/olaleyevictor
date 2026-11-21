# Olaleye Victor · Personal site

Live: https://olaleyevictor.com

React 19 · TypeScript · Vite · Tailwind CSS · React Router. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Guide
See **[GUIDE.md](GUIDE.md)** for adding posts and art, how the site works, and fixing common problems.

## Writing a post
Posts are Markdown files in `src/posts/`. Copy `_template-leetcode.md` or `_template-project.md`, rename it, fill in the details at the top and remove `draft: true`. See `src/posts/README.md`.

## Editing everything else
`src/data.ts` holds your profile (email, links, **birth date for the age counter**), projects (Work) and artworks (Art). Images go in `public/` (project screenshots in `public/work/`).

## Pages
| Route | Page |
| --- | --- |
| `/` | Intro, posts (with a LeetCode tab), recent work, art |
| `/posts`, `/posts/:slug` | All posts, and each post |
| `/about` | Bio, photo, live age counter |
| `/work`, `/work/:slug` | Projects shelf, and each project |
| `/art`, `/art/:slug` | Gallery, and each piece (← → keys move between pieces) |
| `/contact` | Email, links, message form |

Light and dark themes follow the visitor's system setting until they use the toggle, then remember the choice. `public/404.html` lets deep links load on GitHub Pages.

## Develop
```bash
npm install
npm run dev
```
