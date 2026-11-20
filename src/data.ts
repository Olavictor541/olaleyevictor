// All site content lives here. Edit this file to update the portfolio.

/** Resolve a file in /public against the deploy base path (e.g. /olaleyevictor/). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  name: "Olaleye Victor",
  fullName: "Olaleye Victor Mobolaji",
  title: "Creative Technologist",
  location: "Vancouver Island, BC",
  school: "Vancouver Island University",
  email: "olaleyevictor541@gmail.com",
  linkedin: "https://www.linkedin.com/in/olaleye-victor/",
  github: "https://github.com/Olavictor541",
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  summary: string;
  points: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "viu-meets",
    title: "VIU Meets",
    kind: "Software",
    year: "2026",
    role: "Systems architecture & development",
    summary:
      "An event discovery platform for the VIU community. I worked on it from the first diagrams to a working proof of concept.",
    points: [
      "Planned the system end to end, covering both the structure and the build",
      "Modelled the domain with class diagrams and system sequence diagrams to map how people use it",
      "Built a proof-of-concept database for the backend relationships and user data",
    ],
    stack: ["System design", "UML", "SQL"],
  },
  {
    slug: "secure-auth-dashboard",
    title: "Secure Auth Dashboard",
    kind: "Web",
    year: "2025",
    role: "Frontend",
    summary:
      "A learning project on secure frontend authentication: a sign-in flow, protected views and a dashboard.",
    points: [
      "Built the sign-in flow and the dashboard interface",
      "Looked into safe ways to handle user input and credentials in the browser",
    ],
    stack: ["JavaScript", "CSS"],
    links: [{ label: "Code", href: "https://github.com/Olavictor541/project101" }],
  },
  {
    slug: "portfolio",
    title: "This website",
    kind: "Web",
    year: "2026",
    role: "Design & development",
    summary: "My corner of the internet. I designed and built it to keep my work, art and contact details in one place.",
    points: [
      "Built with React, TypeScript, Vite and Tailwind CSS",
      "Light and dark themes, responsive down to small phones",
      "Deployed to GitHub Pages with GitHub Actions",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    links: [{ label: "Code", href: "https://github.com/Olavictor541/olaleyevictor" }],
  },
];

export type Artwork = {
  id: number;
  title: string;
  medium: string;
  image: string;
  width: number;
  height: number;
};

export const artworks: Artwork[] = [
  { id: 1, title: "Mindless #1", medium: "Mixed media collage", image: "m3.webp", width: 1279, height: 1600 },
  { id: 2, title: "Transformation: A far above mentality", medium: "Mixed media collage", image: "m2.webp", width: 1199, height: 1600 },
  { id: 3, title: "The Mind of Christ: A superior belief system", medium: "Mixed media collage", image: "m4.webp", width: 1335, height: 1600 },
  { id: 4, title: "The Seeing Eyes", medium: "Graphite on paper", image: "m6.webp", width: 1264, height: 1600 },
  { id: 5, title: "Elevation: A higher calling #1", medium: "Mixed media collage", image: "m5.webp", width: 1242, height: 1600 },
  { id: 6, title: "Untitled", medium: "Graphite on paper", image: "m7.webp", width: 1080, height: 1376 },
];
