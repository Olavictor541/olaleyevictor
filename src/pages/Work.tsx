import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageIntro } from "../components/Section";
import { usePageTitle } from "../components/usePageTitle";
import { profile, projects } from "../data";

export default function Work() {
  usePageTitle("Work");
  const { hash } = useLocation();

  // Arriving from /work#slug: scroll to that project
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" }), 50);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageIntro title="Work">
        <p>Software, websites and design. Some are class projects, some are client work.</p>
      </PageIntro>

      <div className="mt-12 space-y-14">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="scroll-mt-8 border-t rule pt-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{p.title}</h2>
              <span className="text-[15px] muted tabular-nums shrink-0">{p.year}</span>
            </div>
            <p className="mt-1 text-[15px] muted">
              {p.role} · {p.kind}
            </p>

            <p className="mt-4 text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">{p.summary}</p>

            <ul className="mt-4 space-y-2 text-[16px] leading-relaxed text-stone-700 dark:text-stone-300 list-disc pl-5 marker:text-stone-400">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
              <span className="muted">{p.stack.join(", ")}</span>
              {p.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-16 border-t rule pt-8 text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">
        More code and experiments are on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        .
      </p>
    </>
  );
}
