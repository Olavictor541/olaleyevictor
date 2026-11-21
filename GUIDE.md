# Running olaleyevictor.com

How to add content, how the site works, and how to fix the common problems yourself.

---

## 1. The two ways to make a change

**A. On github.com (no setup, good for posts and art)**
1. Open the repo → find the file or folder → click the ✏️ pencil to edit, or **Add file → Upload files**.
2. Click **Commit changes** and commit to `main`.
3. Wait about 2 minutes. GitHub Actions rebuilds and publishes the site automatically (watch it under the **Actions** tab).

**B. On your Mac (lets you preview before publishing)**
```bash
git clone https://github.com/Olavictor541/olaleyevictor
cd olaleyevictor
npm install        # once: downloads the libraries the site needs
npm run dev        # opens a live preview at http://localhost:5173
```
Edit files in VS Code; the preview updates as you save. When happy:
```bash
npm run build      # the same check GitHub runs; fix any errors it prints
git add -A
git commit -m "Add Two Sum post"
git push
```

---

## 2. Adding art

1. **Prepare the image**: export as **WebP**, about **1600px** on the longest side. On a Mac, drag it into [squoosh.app](https://squoosh.app), choose WebP, quality ~80, resize to 1600.
2. **Find its size in pixels**: in Terminal, `sips -g pixelWidth -g pixelHeight myart.webp`.
3. **Upload** it into the `public/` folder, e.g. `public/m8.webp`.
4. **Register it** in `src/data.ts` by adding a line to the `artworks` list:
   ```ts
   { slug: "new-piece", title: "New Piece", medium: "Graphite on paper", image: "m8.webp", width: 1200, height: 1600 },
   ```
   - `slug` becomes the address: `olaleyevictor.com/art/new-piece`. Use lowercase letters and dashes.
   - `medium` must be exactly `"Mixed media collage"` or `"Graphite on paper"` (that's what the Collage / Graphite filter uses). For a new medium, add it to the `medium` type in `data.ts` and to the tabs in `src/pages/Art.tsx`.
   - Order in the list = order on the site.

## 3. Adding a project (Work page)

Copy one of the blocks in the `projects` list in `src/data.ts` and change the fields. Screenshots go in `public/work/` and are listed in `images`. Without images, a graph-paper cover with the title is drawn automatically.

---

## 4. Writing posts

Every post is one Markdown file in `src/posts/`. **The file name is the address**: `two-sum.md` → `olaleyevictor.com/posts/two-sum`.

The block between the `---` lines at the top ("front matter") sets the details:

| Field | What it does | Values |
|---|---|---|
| `title` | Heading | any text |
| `subtitle` | One line under it, also shown in lists | any text |
| `date` | Sorts posts, newest first | `YYYY-MM-DD` |
| `kind` | Which filter it appears under | `leetcode`, `project` or `note` |
| `difficulty` | Coloured badge (LeetCode only) | `Easy`, `Medium` or `Hard`, capital first letter |
| `problem` | "View problem on LeetCode" link | the problem's URL |
| `repo` | "View the code" link | a GitHub URL |
| `tags` | Small labels | `[arrays, hash map]` |
| `draft` | `true` hides the post from the site | `true` / leave out |

Files whose name starts with `_` are templates and never appear on the site.

### A normal post
```markdown
---
title: What I learned in my first hackathon
subtitle: 24 hours, three teammates, one working demo
date: 2026-12-01
kind: note
tags: [hackathon, teamwork]
---

Write normally here. Blank line = new paragraph.

## A heading

- a bullet point
- **bold**, *italic*, [a link](https://example.com)

![A photo](/my-photo.webp)
```
Images in a post: upload them to `public/` and refer to them as `/file-name.webp`.

### A LeetCode post
Copy `src/posts/_template-leetcode.md`, rename it (e.g. `two-sum.md`), fill it in, and **delete the `draft: true` line**. Set `kind: leetcode` and `difficulty: Easy`, `Medium` or `Hard`. It then shows the coloured badge and appears under the **LeetCode** tab.

Code blocks get syntax colours when you name the language after the three backticks:
````markdown
```cpp
int main() { return 0; }
```
````
Supported: `cpp`, `python`, `java`, `javascript`/`js`, `typescript`/`ts`, `sql`, `bash`.

### A project post
Copy `_template-project.md` and set `kind: project` and `repo:` to the code's URL. It appears under **Projects** on `/posts`.

---

## 5. The contact form

- The site has no server, so the form sends messages through **FormSubmit** (formsubmit.co), a free service that forwards them to **olaleyevictor541@gmail.com**.
- **One-time setup:** after this change is live, send yourself a test message through the form. FormSubmit emails you an **"Activate Form"** button. Click it (check spam too). From then on, every message lands in your inbox, with the sender's email so you can reply.
- The **email link** (`mailto:`) only opens the visitor's email app if they have one set up (Apple Mail, Outlook). That's normal web behaviour. The **Copy** button is there for everyone else.

---

## 6. How the site works (for interviews)

**One sentence:** "It's a React and TypeScript single-page app built with Vite and styled with Tailwind. The content lives in the repo as Markdown and a TypeScript data file. GitHub Actions builds it on every push and publishes it to GitHub Pages, behind my own domain on Cloudflare DNS."

| Part | How it works | Where |
|---|---|---|
| **Pages and routing** | React Router maps URLs (`/work/viu-meets`) to page components without reloading the page | `src/App.tsx` |
| **Content** | Projects, art and profile are typed objects; posts are Markdown files | `src/data.ts`, `src/posts/` |
| **Posts** | `import.meta.glob` bundles every `.md` at build time; the front matter is parsed with a regex; `marked` turns Markdown into HTML; `highlight.js` colours the code | `src/lib/posts.ts`, `src/lib/markdown.ts` |
| **Styling** | Tailwind utility classes; colours are CSS variables, so dark mode just swaps the variables | `src/index.css`, `tailwind.config.cjs` |
| **Dark mode** | A tiny script in `index.html` runs *before* the page draws, reads your saved choice or system setting, and adds the `dark` class, so there's no white flash. The toggle saves to `localStorage` | `index.html`, `src/components/useTheme.ts` |
| **Age counter** | Years since birthday, plus the fraction of the way to the next birthday (`(now - lastBirthday) / (nextBirthday - lastBirthday)`), redrawn every animation frame with `requestAnimationFrame` | `src/components/AgeCounter.tsx` |
| **Carousels** | A horizontally scrolling row with CSS scroll-snap. The arrows call `scrollBy`; a `ResizeObserver` and scroll listener work out whether you're at either end, to disable the arrows | `src/components/cards.tsx` |
| **Deploy** | `.github/workflows/deploy.yml`: on push to `main`, install, `npm run build`, upload `dist/` to GitHub Pages | `.github/workflows/` |
| **Deep links** | GitHub Pages doesn't know about client-side routes, so `/posts/x` would 404. `public/404.html` saves the path and redirects to `/`, then `index.html` puts the path back before React starts | `public/404.html`, `index.html` |
| **Domain** | Cloudflare DNS: four A records point `olaleyevictor.com` at GitHub's servers; a CNAME points `www` at `olavictor541.github.io`. GitHub issues the HTTPS certificate via Let's Encrypt | Cloudflare dashboard |
| **Performance** | Images converted to WebP and resized (about 17 MB down to 1.4 MB), lazy loaded below the fold, fonts with `display=swap` | `public/` |

**Good questions to be ready for:**
- *Why no backend?* It's a content site. Static hosting is free, fast and has nothing to hack. The one dynamic part, the contact form, uses a third-party form service.
- *Is `dangerouslySetInnerHTML` safe here?* Yes, because the only Markdown rendered is what I write and commit myself, never user input. If visitors could submit Markdown, I'd sanitise it first (e.g. with DOMPurify).
- *How would you add a CMS / comments / search?* A headless CMS feeding the same `posts` array, a service like Giscus for comments, and client-side search over the post titles.
- *What would you improve?* Pre-rendering pages for SEO (each post as real HTML), an RSS feed, and automated tests.
- *Did you use AI?* Be honest: say what you directed, what you changed, and walk through how a part works. Understanding is what they're checking.

---

## 7. Problems you can fix yourself

**The deploy failed (red ✗ in the Actions tab)**
Open **Actions** → the failed run → the red step, and read the last lines of the log. It's almost always:
- a typo in `src/data.ts`, like a missing comma, quote or `}` (the log gives the file and line number), or
- a TypeScript error, like a misspelled field name or a `difficulty` that isn't `Easy`, `Medium` or `Hard`.

Fix it, commit again, and the site goes back to normal. The live site keeps the last good version until a build succeeds, so a failed build never takes it down. To catch these before pushing, run `npm run build` locally.

**A new post doesn't show up**
Check that the file is in `src/posts/`, ends in `.md`, and doesn't start with `_`; that the front matter starts and ends with `---` on their own lines; and that you removed `draft: true`.

**An image is broken**
Check the file name *exactly*, including capitals and the extension. Your Mac ignores case (`Photo.webp` = `photo.webp`), but GitHub's servers don't, so it can work on your Mac and break online. In `data.ts` the path has no leading slash (`"m8.webp"`); inside a post it does (`/m8.webp`).

**I changed something but the site looks the same**
Check the Actions tab has finished (green ✓), then hard-refresh with **Cmd+Shift+R**, or open a private window. Browsers cache pages for a few minutes.

**Refreshing a page gives a GitHub 404**
`public/404.html` must exist; it handles deep links. Don't delete it.

**The domain stops working or shows "Not Secure"**
- Cloudflare → DNS: the four A records and the `www` CNAME must exist, all set to **DNS only** (grey cloud).
- GitHub repo → Settings → Pages: Custom domain must say `olaleyevictor.com`, and **Enforce HTTPS** must be ticked.
- **The domain renews yearly.** Keep auto-renew on in Cloudflare with a valid card, or the site disappears when it expires.

**Contact messages aren't arriving**
Check spam; make sure you clicked FormSubmit's activation email. If FormSubmit is down, the form shows visitors a link to email you directly.

**`npm install` shows "vulnerabilities" warnings**
That's common and usually about build tools, not your live site. Run `npm audit` to read them; `npm audit fix` applies safe updates. Commit only if `npm run build` still works afterwards.

**Git says "rejected" when you push**
Someone (or you, on github.com) changed `main` since you last pulled. Run `git pull`, then `git push`. If Git reports a *conflict*, open the file it names, keep the lines you want between the `<<<<<<<` and `>>>>>>>` markers, delete the markers, then `git add`, `git commit` and `git push`.
