import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { kindLabel, type Post } from "../lib/posts";

/** Centered reading column used by every page. */
export function Page({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-col mx-auto px-6 pt-12 lg:pt-[120px] pb-24">{children}</div>;
}

/** Page title in the display serif, with an optional one-line summary. */
export function PageHeader({ title, subtitle, children }: { title: string; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="font-display text-[34px] sm:text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] text-title">
        {title}
      </h1>
      {subtitle && <p className="font-sans text-[17px] leading-7 font-medium text-sub">{subtitle}</p>}
      {children}
    </header>
  );
}

/** Small uppercase section label with a terracotta mark, e.g. "LATEST WORK". */
export function SectionTitle({ children, right, to }: { children: ReactNode; right?: ReactNode; to?: string }) {
  const title = (
    <h2 className="flex items-center gap-2.5 font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-item">
      <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </h2>
  );
  return (
    <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-line">
      {to ? (
        <Link to={to} className="hover:text-accent transition-colors">
          {title}
        </Link>
      ) : (
        title
      )}
      {right}
    </div>
  );
}

/** ‹ › buttons used by carousels and pagination. */
export function Arrows({
  onPrev,
  onNext,
  canPrev,
  canNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}) {
  const cls =
    "w-8 h-8 grid place-items-center rounded-md border border-line text-item transition-colors hover:border-[color:var(--accent)] hover:text-accent disabled:opacity-30 disabled:hover:border-[color:var(--line)] disabled:hover:text-item disabled:cursor-default";
  return (
    <div className="flex items-center gap-1.5">
      <button onClick={onPrev} disabled={!canPrev} aria-label="Previous" className={cls}>
        <HiChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={onNext} disabled={!canNext} aria-label="Next" className={cls}>
        <HiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

/** Segmented pill toggle, e.g. All / LeetCode / Projects. */
export function Tabs<T extends string>({
  tabs,
  value,
  onChange,
}: {
  tabs: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <div role="tablist" className="inline-flex items-center gap-1 p-1 rounded-full border border-line bg-navbg">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={value === t.id}
          onClick={() => onChange(t.id)}
          className={`rounded-full px-4 py-1.5 font-sans text-[14px] font-semibold transition-colors ${
            value === t.id ? "bg-[color:var(--title)] text-page" : "text-sub hover:text-item"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function shortDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/** Post list: date on the left like a log, title and a one-line summary on the right. */
export function PostList({ posts, showYear = false }: { posts: Post[]; showYear?: boolean }) {
  if (posts.length === 0) {
    return <p className="font-sans text-[16px] text-sub">Nothing here yet. Check back soon.</p>;
  }
  return (
    <ul className="flex flex-col">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link
            to={`/posts/${p.slug}`}
            className="group grid grid-cols-[64px_1fr] sm:grid-cols-[84px_1fr] gap-x-4 py-4 border-b border-dashed border-line"
          >
            <span className="pt-[5px] font-mono text-[12.5px] text-faint tabular-nums">
              {shortDate(p.date)}
              {showYear && <span className="block">{p.date.slice(0, 4)}</span>}
            </span>
            <span className="min-w-0">
              <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="font-display text-[20px] leading-7 font-semibold text-item group-hover:text-accent transition-colors">
                  {p.title}
                </span>
                {p.kind === "leetcode" && p.difficulty && <Difficulty level={p.difficulty} />}
              </span>
              <span className="block mt-0.5 font-sans text-[15.5px] leading-6 text-sub">{p.subtitle}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Difficulty({ level }: { level: "Easy" | "Medium" | "Hard" }) {
  const color = { Easy: "#3f8a4f", Medium: "#b7791f", Hard: "#c0392b" }[level];
  return (
    <span
      className="rounded px-1.5 py-px font-sans text-[11px] font-bold uppercase tracking-wider"
      style={{ color, backgroundColor: `${color}1a` }}
    >
      {level}
    </span>
  );
}

export function KindPill({ post }: { post: Post }) {
  return <span className="pill">{kindLabel[post.kind]}</span>;
}

/** "← Back to …" link button. */
export function BackButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-md border border-line bg-navbg px-4 py-2.5 font-sans text-[15px] font-semibold text-item hover:border-[color:var(--accent)] hover:text-accent transition-colors"
    >
      <HiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> {label}
    </Link>
  );
}

/** Caption under an image. */
export function Caption({ children }: { children: ReactNode }) {
  return <p className="mt-3 font-sans text-[14px] leading-[1.45] font-medium text-caption">{children}</p>;
}
