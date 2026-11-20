import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/** A titled block of content with an optional "see all" link on the right. */
export function Section({
  title,
  more,
  children,
}: {
  title: string;
  more?: { to: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="label">{title}</h2>
        {more && (
          <Link to={more.to} className="text-sm muted hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            {more.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

/** Page title + short intro used at the top of each inner page. */
export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mt-14 sm:mt-20">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h1>
      {children && <div className="mt-4 text-[17px] leading-relaxed muted">{children}</div>}
    </div>
  );
}
