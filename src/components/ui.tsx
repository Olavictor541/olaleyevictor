import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { formatDate, kindLabel, type Post } from "../lib/posts";

/** Centered reading column used by every page. */
export function Page({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-col mx-auto px-6 pt-12 lg:pt-[152px] pb-24">{children}</div>;
}

/** Serif page title with an optional soft sans subtitle underneath. */
export function PageHeader({ title, subtitle, children }: { title: string; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="font-serif text-[28.8px] leading-[1.35] font-semibold tracking-[-0.015em] text-title">{title}</h1>
      {subtitle && <p className="font-sans text-[20.8px] leading-7 font-medium tracking-[-0.02em] text-faint">{subtitle}</p>}
      {children}
    </header>
  );
}

/** Small section heading (e.g. "Recent work") with optional extras on the right. */
export function SectionTitle({ children, right, to }: { children: ReactNode; right?: ReactNode; to?: string }) {
  const title = (
    <h2 className="font-sans text-[20px] leading-[30px] font-medium tracking-[-0.03em] text-item">{children}</h2>
  );
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {to ? (
        <Link to={to} className="hover:opacity-70 transition-opacity">
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
    "w-9 h-9 grid place-items-center rounded-full text-item transition-colors hover:bg-well disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-default";
  return (
    <div className="flex items-center gap-1">
      <button onClick={onPrev} disabled={!canPrev} aria-label="Previous" className={cls}>
        <HiChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={onNext} disabled={!canNext} aria-label="Next" className={cls}>
        <HiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/** Rounded tab buttons, e.g. Posts / LeetCode. */
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
    <div role="tablist" className="flex items-center gap-5">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={value === t.id}
          onClick={() => onChange(t.id)}
          className={`font-sans text-[20px] leading-[30px] font-medium tracking-[-0.03em] pb-0.5 border-b-2 transition-colors ${
            value === t.id ? "text-item border-[color:var(--line)]" : "border-transparent hover:!opacity-100"
          }`}
          style={value === t.id ? undefined : { color: "var(--faint)", opacity: 0.6 }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** List of posts: serif title, soft subtitle. */
export function PostList({ posts, showDate = false }: { posts: Post[]; showDate?: boolean }) {
  if (posts.length === 0) {
    return <p className="font-sub text-[18.4px] text-sub">Nothing here yet. Check back soon.</p>;
  }
  return (
    <ul className="flex flex-col gap-[30px]">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link to={`/posts/${p.slug}`} className="group block">
            <span className="flex items-baseline gap-2.5">
              <span className="font-serif text-[21.6px] leading-6 font-semibold text-item group-hover:text-title transition-colors">
                {p.title}
              </span>
              {p.kind === "leetcode" && p.difficulty && <Difficulty level={p.difficulty} />}
            </span>
            <span className="block mt-1 font-sub text-[18.4px] leading-[1.33] font-[450] tracking-[-0.01em] text-sub">
              {p.subtitle}
              {showDate && <span className="text-faint"> · {formatDate(p.date)}</span>}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Difficulty({ level }: { level: "Easy" | "Medium" | "Hard" }) {
  const color = { Easy: "oklch(0.6 0.13 150)", Medium: "oklch(0.68 0.13 75)", Hard: "oklch(0.6 0.16 25)" }[level];
  return (
    <span className="font-sans text-[13px] font-semibold tracking-wide uppercase" style={{ color }}>
      {level}
    </span>
  );
}

export function KindPill({ post }: { post: Post }) {
  return <span className="pill">{kindLabel[post.kind]}</span>;
}

/** Rounded "‹ Back to …" button. */
export function BackButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border-2 border-line px-6 py-3 font-sans text-[17px] font-medium text-item hover:bg-well transition-colors"
    >
      <HiChevronLeft className="w-4 h-4" /> {label}
    </Link>
  );
}

/** Caption under an image. */
export function Caption({ children }: { children: ReactNode }) {
  return <p className="mt-3 font-sans text-[15.2px] leading-[1.4] font-medium text-caption">{children}</p>;
}
