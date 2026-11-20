import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Reveal, SectionHeading } from "../components/Reveal";
import { usePageTitle } from "../components/usePageTitle";
import { builds, profile, type Build } from "../data";

const filters = ["All", "Software", "Web", "Design"] as const;
type Filter = (typeof filters)[number];

export default function Builds() {
  usePageTitle("Builds");
  const [filter, setFilter] = useState<Filter>("All");
  const { hash } = useLocation();

  // Scroll to a project when arriving via /builds#slug
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(t);
  }, [hash]);

  const shown = filter === "All" ? builds : builds.filter((b) => b.category === filter);

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeading eyebrow="Projects · 2025 to now">BUILDS</SectionHeading>
          <p className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg">
            Software, websites and brand work. Some are class projects, some are client work, all of them taught me
            something about building things people actually use.
          </p>
        </Reveal>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => {
            const count = f === "All" ? builds.length : builds.filter((b) => b.category === f).length;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? "bg-orange-200 text-black border-orange-200"
                    : "border-white/20 text-gray-300 hover:border-white/50 hover:text-white"
                }`}
              >
                {f} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-6">
          {shown.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 2) * 100}>
              <BuildCard build={b} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 md:mt-20 rounded-3xl border border-white/10 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">More on GitHub</h2>
              <p className="text-gray-400 mt-2">Code, experiments and works in progress.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-full hover:bg-orange-200 transition-colors"
              >
                <Github className="w-4 h-4" /> @Olavictor541
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 rounded-full hover:border-orange-200 hover:text-orange-200 transition-colors"
              >
                Start a project
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function BuildCard({ build: b }: { build: Build }) {
  return (
    <article
      id={b.slug}
      className="scroll-mt-28 group h-full flex flex-col rounded-3xl bg-zinc-950 border border-white/10 hover:border-orange-200/40 transition-colors overflow-hidden"
    >
      {/* Header band */}
      <div className="relative grid-paper-dark bg-zinc-900 px-6 md:px-8 pt-6 md:pt-8 pb-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gray-400">
          <span className="flex items-center gap-2">
            <span className={`${b.accent} w-2.5 h-2.5 rounded-full`} />
            {b.category}
          </span>
          <span>{b.year}</span>
        </div>
        <h3 className="mt-6 font-impact text-4xl md:text-5xl tracking-wide text-orange-200 leading-none">
          {b.title.toUpperCase()}
        </h3>
        <p className="mt-2 text-sm text-gray-300">{b.role}</p>
      </div>

      <div className="flex-1 flex flex-col px-6 md:px-8 py-6 md:py-8">
        <p className="text-gray-300 leading-relaxed">{b.summary}</p>
        <ul className="mt-5 space-y-2 text-sm text-gray-400">
          {b.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="text-orange-300 mt-0.5">→</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {b.stack.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {s}
              </span>
            ))}
          </div>
          {b.links && (
            <div className="flex gap-4">
              {b.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-orange-200 transition-colors"
                >
                  {l.label} <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
