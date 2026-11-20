import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, SectionHeading } from "../components/Reveal";
import { usePageTitle } from "../components/usePageTitle";
import { artworks, asset, builds, profile } from "../data";

const badges = [
  { label: "FULL-STACK", sub: "ARCHITECTURE", img: "fullStack.png", cls: "bg-orange-400 text-black rounded-xl", pos: { top: "12%", left: "16%" }, rot: -12 },
  { label: "SECURITY", sub: "& PRIVACY", img: "security.png", cls: "bg-red-500 text-white rounded-full", pos: { top: "8%", right: "14%" }, rot: 8 },
  { label: "VISUAL", sub: "STORYTELLING", img: "story.png", cls: "bg-yellow-400 text-black rounded-md", pos: { top: "42%", left: "5%" }, rot: 16 },
  { label: "SYSTEMS", sub: "DESIGN", img: "uI.png", cls: "bg-purple-500 text-white rounded-full", pos: { bottom: "6%", left: "15%" }, rot: -14 },
  { label: "INTERACTIVE", sub: "MOTION & UX", img: "code.png", cls: "bg-lime-400 text-black rounded-full", pos: { bottom: "6%", right: "18%" }, rot: -12 },
  { label: "APPLIED", sub: "RESEARCH", img: "research.png", cls: "bg-teal-500 text-black rounded-md", pos: { top: "44%", right: "6%" }, rot: 12 },
];

const services = [
  {
    n: "01",
    title: "Web & Software",
    text: "Fast, modern websites and applications, from system design and databases to polished, responsive frontends in React and TypeScript.",
  },
  {
    n: "02",
    title: "Brand & Signage",
    text: "Complete visual identities and physical storefront signage that make a business look as good on the street as it does online.",
  },
  {
    n: "03",
    title: "UI/UX Design",
    text: "Interfaces grounded in research and structure. I translate wireframes into high-fidelity experiences that actually ship.",
  },
  {
    n: "04",
    title: "Research & Storytelling",
    text: "Assisting research in AI and data privacy, and turning complex ideas into clear, compelling visual narratives.",
  },
];

const marqueeWords = ["REACT", "TYPESCRIPT", "C++", "UI/UX", "BRANDING", "SIGNAGE", "AI & PRIVACY", "ADOBE CS", "SYSTEM DESIGN", "ART"];

export default function Home() {
  usePageTitle();
  const featured = builds.slice(0, 3);

  return (
    <div className="text-orange-200 overflow-x-hidden">
      {/* ---------- HERO ---------- */}
      <section className="pt-32 md:pt-40 max-w-7xl mx-auto px-4">
        <Reveal>
          <p className="text-center text-xs md:text-sm uppercase tracking-[0.35em] text-gray-400 mb-6">
            {profile.name} · {profile.location}
          </p>
          <h1 className="text-center font-impact tracking-wide leading-[0.85] text-[13.5vw] md:text-[11vw] xl:text-[10rem]">
            CREATIVE
            <br className="md:hidden" /> TECHNOLOGIST
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-14">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Orchestrating digital systems at the intersection of Computer Science and Applied Research. I bridge
              complex backend logic and high-fidelity frontend experiences, so every interaction is grounded in data and
              structural integrity.
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                A multidisciplinary visual storyteller. I translate data and brand identities into compelling narratives
                through interactive UI, commercial design, and art.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/builds"
                  className="inline-flex items-center gap-2 bg-orange-200 text-black font-semibold px-5 py-3 rounded-full hover:bg-orange-300 transition-colors"
                >
                  See my work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white border border-white/30 px-5 py-3 rounded-full hover:border-orange-200 hover:text-orange-200 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Portrait on grid paper with floating skill badges */}
        <Reveal delay={250}>
          <div className="grid-paper relative overflow-hidden mt-12 md:mt-16 h-[380px] sm:h-[460px] md:h-[560px] rounded-r-[48px] md:rounded-r-[80px]">
            <img
              src={asset("myPics.webp")}
              alt="Portrait of Olaleye Victor"
              width={1669}
              height={1800}
              fetchPriority="high"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none object-contain"
            />
            {badges.map((b, i) => (
              <div
                key={b.label}
                className="absolute z-10 hidden md:block"
                style={{ ...b.pos, transform: `rotate(${b.rot}deg)` }}
              >
                <div
                  className={`float-slow ${b.cls} w-32 h-32 lg:w-36 lg:h-36 flex flex-col items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110`}
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <img src={asset(b.img)} alt="" className="w-11 h-11 mb-1.5" />
                  <div className="text-[11px] font-bold text-center leading-tight">{b.label}</div>
                  <div className="text-[9px] text-center opacity-80">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile badge strip */}
        <div className="flex md:hidden flex-wrap gap-2 mt-6">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`${b.cls.replace(/rounded-\S+/, "")} rounded-full inline-flex items-center gap-2 px-3 py-2 text-[11px] font-bold`}
            >
              <img src={asset(b.img)} alt="" className="w-4 h-4" />
              {b.label}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="mt-20 md:mt-28 border-y border-white/10 py-5 overflow-hidden select-none" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 font-impact text-3xl md:text-5xl tracking-wide text-white/90">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              {w} <span className="text-orange-300">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- WHAT I DO ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="What I do">
            CODE MEETS
            <br />
            DESIGN
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg">
            Most people do one or the other. I like taking a project from a rough idea all the way to the finish line,
            making sure the brand looks amazing <em className="text-white not-italic">and</em> the digital tools
            actually work.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10 mt-12 md:mt-16 rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="bg-black">
              <div className="group h-full p-7 md:p-10 hover:bg-zinc-950 transition-colors">
                <span className="text-sm text-orange-300/80">{s.n}</span>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white group-hover:text-orange-200 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED BUILDS ---------- */}
      <section className="max-w-7xl mx-auto px-4 pb-20 md:pb-28">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading eyebrow="Selected work">BUILDS</SectionHeading>
          <Link
            to="/builds"
            className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-orange-200 hover:border-orange-200 transition-colors w-fit"
          >
            ALL PROJECTS <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <div className="mt-10 md:mt-14 divide-y divide-white/10 border-y border-white/10">
          {featured.map((b, i) => (
            <Reveal key={b.slug} delay={i * 80}>
              <Link
                to={`/builds#${b.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 py-6 md:py-8"
              >
                <span className={`${b.accent} w-3 h-3 md:w-4 md:h-4 rounded-full`} />
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white group-hover:text-orange-200 group-hover:translate-x-2 transition-all">
                    {b.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mt-1">
                    {b.role} · {b.year}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-gray-500 group-hover:text-orange-200 group-hover:rotate-45 transition-all" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CRAFTS PREVIEW ---------- */}
      <section className="bg-zinc-950 grid-paper-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading eyebrow="Art & illustration">CRAFTS</SectionHeading>
            <Link
              to="/crafts"
              className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-orange-200 hover:border-orange-200 transition-colors w-fit"
            >
              VIEW GALLERY <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {artworks.slice(0, 4).map((a, i) => (
              <Reveal key={a.id} delay={i * 80}>
                <Link to="/crafts" className="group block overflow-hidden rounded-2xl bg-white aspect-[4/5]">
                  <img
                    src={asset(a.image)}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">Have a project in mind?</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 font-impact text-5xl sm:text-7xl md:text-8xl tracking-wide text-orange-200 hover:text-white transition-colors"
          >
            LET'S TALK
            <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 group-hover:rotate-45 transition-transform" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
