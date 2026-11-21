// Site content. Posts live in src/posts; everything else is here.

/** Resolve a file in /public against the deploy base path ("/" on olaleyevictor.com). */
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
  date: string; // YYYY-MM, used for ordering
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
    slug: "employee-management-system",
    title: "Employee Management System",
    category: "Software",
    date: "2025-04",
    year: "2025",
    role: "C++ developer",
    tagline: "A menu-driven HR app for a restaurant team",
    images: [
      {
        src: "work/employee-system.webp",
        caption: "Hiring a crew lead, pairing a mentor and listing mentoring pairs (menu condensed)",
      },
    ],
    body: [
      "My final project for CSCI 161 at VIU: a console app that manages a restaurant's staff across four levels (Candidate, Crew Member, Crew Lead and Restaurant Manager). You can hire, promote, demote and dismiss people, look up where someone sits, and set up mentor and mentee pairs between employees.",
      "Each level is its own linked list of employees, built from scratch with pointers instead of library containers. An HR department class owns the four lists and handles every operation, so moving someone between levels is a matter of unlinking them from one list and adding them to another.",
    ],
    highlights: [
      "Modelled employees, lists and the HR department as classes, with each staff level as a class derived from a shared EmployeeList",
      "Stored every level as a hand-written singly linked list, with the destructor freeing every node and employee",
      "Linked mentors and mentees directly with pointers between Employee objects",
      "Split the program into a header, an implementation file and main.cpp, built with a Makefile",
    ],
    stack: ["C++", "OOP", "Linked lists", "Make"],
    links: [
      { label: "Code", href: "https://github.com/Olavictor541/cpp_practice/tree/main/employee-management-system" },
    ],
    tint: "oklch(0.86 0.05 90)",
  },
  {
    slug: "cpp-practice",
    title: "C++ Practice",
    category: "Software",
    date: "2025-04",
    year: "2025",
    role: "Coursework & practice",
    tagline: "Data structures and algorithms, written by hand",
    images: [{ src: "work/cpp-practice.webp", caption: "Output from a few of the programs" }],
    body: [
      "A collection of the C++ programs I wrote while learning data structures, algorithms and object-oriented programming at VIU. Each folder focuses on one topic, has its own README explaining the problem and my approach, and builds with make.",
      "Several of them are classic interview problems, so I've written some up as posts with my reasoning and what I'd do differently now.",
    ],
    highlights: [
      "Linked lists from scratch: remove duplicates, merge two sorted lists, rotate left and right",
      "Merge sort by hand, then used to solve sorted squares, contains duplicate and majority element",
      "Binary search variations: first and last occurrence, floor, ceiling and exponential search",
      "Classes, copy constructors, friend functions and operator overloading",
    ],
    stack: ["C++17", "Data structures", "Algorithms", "Make"],
    links: [{ label: "Code", href: "https://github.com/Olavictor541/cpp_practice" }],
    tint: "oklch(0.88 0.04 150)",
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
