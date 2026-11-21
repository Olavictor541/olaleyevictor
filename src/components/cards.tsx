import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Arrows, SectionTitle } from "./ui";
import { asset, type Artwork, type Project } from "../data";

/**
 * Horizontally scrolling row with ‹ › controls in the section header.
 * The arrows move one "page" of cards and disable at either end.
 */
export function Carousel({
  title,
  to,
  extra,
  aside,
  children,
}: {
  title: ReactNode;
  to?: string;
  extra?: ReactNode; // shown beside the title, e.g. "View all"
  aside?: ReactNode; // shown under the title
  children: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section>
      <SectionTitle
        to={to}
        right={
          <div className="flex items-center gap-4">
            {extra}
            <Arrows onPrev={() => page(-1)} onNext={() => page(1)} canPrev={!edges.start} canNext={!edges.end} />
          </div>
        }
      >
        {title}
      </SectionTitle>
      {aside && <div className="-mt-6 mb-6">{aside}</div>}
      <div
        ref={track}
        className="flex gap-[27px] overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0 scroll-px-6 sm:scroll-px-0"
      >
        {children}
      </div>
    </section>
  );
}

/** Drawn cover for projects without a screenshot: cream graph paper with the title. */
export function WorkCover({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className="grid-paper w-full h-full flex flex-col justify-between p-[11%] text-[#2b2520]">
      <span
        className={`self-start rounded bg-[#2b2520] px-1.5 py-0.5 font-sans font-bold uppercase tracking-[0.12em] text-[#ffe5b0] ${
          large ? "text-xs" : "text-[9px]"
        }`}
      >
        {project.category}
      </span>
      <span className={`font-display font-semibold leading-[1.05] ${large ? "text-5xl" : "text-[22px]"}`}>
        {project.title}
      </span>
    </div>
  );
}

/** Square card: image (or drawn cover) with "Category / Title" underneath. */
export function WorkCard({ project, showCategory = true }: { project: Project; showCategory?: boolean }) {
  const cover = project.images?.[0];
  return (
    <Link to={`/work/${project.slug}`} className="group block w-[44%] sm:w-[calc((100%-54px)/3)] shrink-0 snap-start">
      <div className="aspect-square overflow-hidden rounded-lg bg-card border border-line group-hover:border-[color:var(--accent)] transition-colors duration-200">
        {cover ? (
          <img
            src={asset(cover.src)}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]">
            <WorkCover project={project} />
          </div>
        )}
      </div>
      <p className="mt-3 font-display text-[16.5px] leading-5 font-semibold text-item truncate group-hover:text-accent transition-colors">
        {project.title}
      </p>
      {showCategory && (
        <p className="mt-1 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-faint">
          {project.category} · {project.year}
        </p>
      )}
    </Link>
  );
}

/** Tall card with the title over a soft gradient, like a photo set. */
export function ArtCard({ art, fluid = false }: { art: Artwork; fluid?: boolean }) {
  return (
    <Link
      to={`/art/${art.slug}`}
      className={`group relative block overflow-hidden rounded-lg bg-white aspect-[174/224] ${
        fluid ? "w-full" : "w-[44%] sm:w-[calc((100%-54px)/3)] shrink-0 snap-start"
      }`}
    >
      <img
        src={asset(art.image)}
        alt={art.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <span className="absolute left-4 right-3 bottom-4 font-display text-[17px] leading-[1.15] font-semibold text-white">
        {art.title.replace(/:.*$/, "")}
      </span>
    </Link>
  );
}
