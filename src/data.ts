// Central place for all portfolio content. Edit this file to update the site.

/** Resolve a file in /public against the deploy base path (e.g. /olaleyevictor/). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  name: "Olaleye Victor",
  middleName: "Mobolaji",
  title: "Creative Technologist",
  location: "Nanaimo, BC · Canada",
  school: "Vancouver Island University",
  email: "olaleyevictor541@gmail.com",
  linkedin: "https://www.linkedin.com/in/olaleye-victor/",
  github: "https://github.com/Olavictor541",
};

export type Build = {
  slug: string;
  title: string;
  role: string;
  year: string;
  category: "Software" | "Web" | "Design";
  summary: string;
  points: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  accent: string; // tailwind bg-* class used for the card swatch
};

export const builds: Build[] = [
  {
    slug: "viu-meets",
    title: "VIU Meets",
    role: "Systems Architecture & Development",
    year: "2026",
    category: "Software",
    summary:
      "An event discovery platform for the VIU community, planned and built from the ground up: from domain models to a working proof-of-concept database.",
    points: [
      "Architected the platform end to end, handling both structural planning and execution",
      "Designed the core architecture with domain class models and system sequence diagrams to map user interactions",
      "Built a proof-of-concept database to handle complex backend relationships and user data securely",
    ],
    stack: ["System Design", "UML", "SQL", "Full-Stack"],
    accent: "bg-orange-400",
  },
  {
    slug: "secure-auth-dashboard",
    title: "Secure Auth Dashboard",
    role: "Frontend & Security",
    year: "2025",
    category: "Web",
    summary:
      "A learning project exploring secure frontend authentication: login flows, protected views and a dashboard interface.",
    points: [
      "Built the sign-in flow and dashboard interface",
      "Explored security practices for handling user input and credentials on the client",
      "Designed a clean, responsive layout",
    ],
    stack: ["JavaScript", "CSS", "Auth", "Security"],
    links: [{ label: "Source", href: "https://github.com/Olavictor541/project101" }],
    accent: "bg-red-500",
  },
  {
    slug: "restaurant-staff",
    title: "Restaurant Staff Manager",
    role: "C++ Developer",
    year: "2025",
    category: "Software",
    summary:
      "A modular console application that manages staff hierarchies and mentorship pairings across multiple employee levels.",
    points: [
      "Modelled the staff hierarchy with strict OOP: inheritance and abstraction for a scalable codebase",
      "Implemented hash maps to make mentor–mentee lookups dramatically faster",
      "Kept modules decoupled so new roles can be added without rewriting core logic",
    ],
    stack: ["C++", "OOP", "Data Structures"],
    accent: "bg-teal-500",
  },
  {
    slug: "lore-website",
    title: "Lore Website",
    role: "Frontend Developer",
    year: "2025",
    category: "Web",
    summary:
      "A collaborative storytelling website. I led UI development and the responsiveness strategy for the team.",
    points: [
      "Led UI development with a modern frontend architecture",
      "Engineered a flexible layout system so the interface scales across every device",
      "Translated wireframes into high-fidelity, working pages",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    accent: "bg-purple-500",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    role: "Design & Development",
    year: "2026",
    category: "Web",
    summary:
      "The site you're on: designed and built by me as a single place for my code, research and art.",
    points: [
      "Built with React, TypeScript, Vite and Tailwind CSS",
      "Deployed automatically to GitHub Pages with GitHub Actions",
      "Optimized images and responsive layouts for fast loads on mobile",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    links: [
      { label: "Source", href: "https://github.com/Olavictor541/olaleyevictor" },
      { label: "Live", href: "https://olavictor541.github.io/olaleyevictor/" },
    ],
    accent: "bg-lime-400",
  },
  {
    slug: "storefront-signage",
    title: "Storefront Signage & Branding",
    role: "Commercial Designer",
    year: "Ongoing",
    category: "Design",
    summary:
      "Visual identities and physical storefront signage for local businesses, taking each brand from first sketch to installation-ready artwork.",
    points: [
      "Developed logos, colour systems and brand guidelines for small businesses",
      "Produced print-ready signage artwork in the Adobe Creative Suite",
      "Worked directly with owners to turn a rough idea into a finished storefront",
    ],
    stack: ["Illustrator", "Photoshop", "Branding", "Print"],
    accent: "bg-yellow-400",
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
