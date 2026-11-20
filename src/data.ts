// Site content. Posts live in src/posts; everything else is here.

/** Resolve a file in /public against the deploy base path (e.g. /olaleyevictor/). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  name: "Olaleye Victor",
  fullName: "Olaleye Victor Mobolaji",
  school: "Vancouver Island University",
  location: "Vancouver Island, British Columbia",
  email: "olaleyevictor541@gmail.com",
  linkedin: "https://www.linkedin.com/in/olaleye-victor/",
  github: "https://github.com/Olavictor541",
  /**
   * Date of birth as "YYYY-MM-DD". Powers the live age counter on the About page.
   * Leave empty to hide the counter.
   */
  birthDate: "2003-04-08",
  /** Year this site started, for the footer. */
  since: 2025,
};

/* ------------------------------------------------------------------ */
/* Work                                                                 */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  category: "Software" | "Web";
  date: string; // YYYY-MM, used for ordering and "Updated" text
  year: string;
  role: string;
  /** Short line shown under the title on the detail page */
  tagline: string;
  /** Screenshots in /public. The first is the cover; without any, a typographic cover is drawn */
  images?: { src: string; caption: string }[];
  /** Paragraphs for the detail page (plain text) */
  body: string[];
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  /** Cover colour when there is no image */
  tint: string;
};

export const projects: Project[] = [
  {
    slug: "viu-meets",
    title: "VIU Meets",
    category: "Software",
    date: "2026-03",
    year: "2026",
    role: "Systems architecture & development",
    tagline: "Event discovery for the VIU community",
    body: [
      "VIU Meets is an event discovery platform for students at Vancouver Island University: one place to find out what's happening on campus and who's going.",
      "I worked on it from the very first diagrams to a working proof of concept, handling both the structural planning and the build.",
    ],
    highlights: [
      "Modelled the domain with class diagrams and system sequence diagrams to map how people actually use it",
      "Designed the core technical architecture",
      "Built a proof-of-concept database for the backend relationships and user data",
    ],
    stack: ["System design", "UML", "SQL"],
    tint: "oklch(0.86 0.06 125)",
  },
  {
    slug: "portfolio",
    title: "This website",
    category: "Web",
    date: "2026-11",
    year: "2026",
    role: "Design & development",
    tagline: "My corner of the web",
    images: [
      { src: "work/portfolio.webp", caption: "The home page in light mode" },
      { src: "work/portfolio-dark.webp", caption: "And in dark mode" },
    ],
    body: [
      "I designed and built this site to keep my posts, projects and art in one place. It's a React and TypeScript app built with Vite and styled with Tailwind CSS.",
      "Posts are plain Markdown files, so writing up a LeetCode problem or a project is as simple as adding a file. It has light and dark themes, works on phones, and deploys to GitHub Pages automatically whenever I push.",
    ],
    highlights: [
      "Markdown-powered posts with syntax-highlighted code",
      "Light and dark themes that follow your system setting",
      "Automatic deploys with GitHub Actions",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [
      { label: "Code", href: "https://github.com/Olavictor541/olaleyevictor" },
    ],
    tint: "oklch(0.9 0.04 70)",
  },
  {
    slug: "secure-auth-dashboard",
    title: "Secure Personal Dashboard",
    category: "Web",
    date: "2026-04",
    year: "2026",
    role: "Frontend & security",
    tagline: "The frontend of a real product, not a landing page",
    images: [
      { src: "work/secure-auth.webp", caption: "The dashboard, after signing in" },
      { src: "work/secure-auth-login.webp", caption: "The sign-in screen" },
    ],
    body: [
      "A secure, responsive personal dashboard where a user can log in, see their data, work with forms and log out safely. I'm building it in stages to relearn the fundamentals properly: first the interface, then the logic, then the security.",
      "It's written in semantic HTML, Tailwind CSS and plain JavaScript, with no framework, so every piece of behaviour is something I wrote and understand. The plan is to move the same project to React and TypeScript next.",
    ],
    highlights: [
      "Sign-in form with client-side validation and error states",
      "Simulated session token stored in localStorage, with protected pages that send you back to sign in",
      "Dashboard layout with a sidebar, search, summary cards and a sign-out flow",
      "Responsive layout for phones and desktops",
    ],
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    links: [{ label: "Code", href: "https://github.com/Olavictor541/project101" }],
    tint: "oklch(0.88 0.05 230)",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Art                                                                  */
/* ------------------------------------------------------------------ */

export type Artwork = {
  slug: string;
  title: string;
  medium: "Mixed media collage" | "Graphite on paper";
  image: string;
  width: number;
  height: number;
};

export const artworks: Artwork[] = [
  { slug: "mindless", title: "Mindless #1", medium: "Mixed media collage", image: "m3.webp", width: 1279, height: 1600 },
  { slug: "transformation", title: "Transformation: A far above mentality", medium: "Mixed media collage", image: "m2.webp", width: 1199, height: 1600 },
  { slug: "the-mind-of-christ", title: "The Mind of Christ: A superior belief system", medium: "Mixed media collage", image: "m4.webp", width: 1335, height: 1600 },
  { slug: "the-seeing-eyes", title: "The Seeing Eyes", medium: "Graphite on paper", image: "m6.webp", width: 1264, height: 1600 },
  { slug: "elevation", title: "Elevation: A higher calling #1", medium: "Mixed media collage", image: "m5.webp", width: 1242, height: 1600 },
  { slug: "untitled", title: "Untitled", medium: "Graphite on paper", image: "m7.webp", width: 1080, height: 1376 },
];

export const artBySlug = (slug: string) => artworks.find((a) => a.slug === slug);
