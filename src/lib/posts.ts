// Posts are Markdown files in src/posts. See src/posts/README.md for the format.

export type PostKind = "leetcode" | "project" | "note";

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string; // YYYY-MM-DD
  kind: PostKind;
  difficulty?: "Easy" | "Medium" | "Hard";
  problem?: string; // link to the LeetCode problem
  repo?: string; // link to code
  tags: string[];
  body: string; // Markdown
};

const files = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

/** Read the "--- key: value ---" block at the top of a post. */
function parse(path: string, raw: string): (Post & { draft: boolean }) | null {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  return {
    slug,
    title: meta.title || slug,
    subtitle: meta.subtitle || "",
    date: meta.date || "1970-01-01",
    kind: (meta.kind as PostKind) || "note",
    difficulty: meta.difficulty as Post["difficulty"],
    problem: meta.problem,
    repo: meta.repo,
    tags: (meta.tags || "").replace(/^\[|\]$/g, "").split(",").map((t) => t.trim()).filter(Boolean),
    draft: meta.draft === "true",
    body: m[2].trim(),
  };
}

export const posts: Post[] = Object.entries(files)
  .filter(([path]) => !path.split("/").pop()!.startsWith("_")) // _files are templates
  .map(([path, raw]) => parse(path, raw))
  .filter((p): p is Post & { draft: boolean } => !!p && !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const kindLabel: Record<PostKind, string> = { leetcode: "LeetCode", project: "Project", note: "Note" };

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
