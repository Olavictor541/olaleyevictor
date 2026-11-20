import { Link } from "react-router-dom";
import { ArrowRight, Code2, Store, PenTool, Palette, ShieldCheck, Database, GraduationCap, Users, FlaskConical } from "lucide-react";
import { SkillCard } from "../components/SkillCard";
import { ExperienceCard } from "../components/ExperienceCard";
import { Reveal, SectionHeading } from "../components/Reveal";
import { usePageTitle } from "../components/usePageTitle";
import { asset, builds, profile } from "../data";

const skills = [
  {
    title: "React & TypeScript",
    icon: Code2,
    text: "Responsive, component-driven frontends with modern tooling.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
  },
  {
    title: "Software Engineering",
    icon: Database,
    text: "Object-oriented design, data structures and system modelling.",
    tags: ["C++", "OOP", "UML", "SQL"],
  },
  {
    title: "UI/UX & Web Design",
    icon: PenTool,
    text: "From wireframes to high-fidelity, accessible interfaces.",
    tags: ["Wireframing", "Prototyping", "Responsive"],
  },
  {
    title: "Storefront Signage",
    icon: Store,
    text: "Commercial signage and identities that work on the street.",
    tags: ["Branding", "Print", "Signage"],
  },
  {
    title: "Adobe Creative Suite",
    icon: Palette,
    text: "Illustration, photo editing and layout for print and digital.",
    tags: ["Illustrator", "Photoshop", "Layout"],
  },
  {
    title: "AI & Data Privacy",
    icon: ShieldCheck,
    text: "Research assistance on how AI systems handle personal data.",
    tags: ["Research", "Privacy", "Security"],
  },
];

const roles = [
  { icon: GraduationCap, title: "Computer Science", org: profile.school, note: "Current student" },
  { icon: FlaskConical, title: "Research Assistant", org: "AI & Data Privacy", note: profile.school },
  { icon: Users, title: "Director-at-Large", org: "Student Union", note: profile.school },
];

export default function About() {
  usePageTitle("About");
  const experience = builds.filter((b) => b.category !== "Design").slice(0, 4);

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* ---------- INTRO ---------- */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <SectionHeading eyebrow="About me">
              HI, I'M
              <br />
              VICTOR.
            </SectionHeading>
            <div className="mt-8 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I'm a <span className="text-orange-200">Creative Technologist</span>, which is really just a way of
                saying I bridge the gap between coding and design.
              </p>
              <p>
                If you need a fast, modern website, I can build it. If you need a complete visual identity or physical
                storefront signage for your business, I can design it. Most people only do one or the other, but I like
                taking a project from a rough idea all the way to the finish line.
              </p>
              <p>
                I'm studying Computer Science at {profile.school}, where I assist in research on AI and data privacy
                and serve as a director-at-large for the student union. I'm passionate about using technology to create
                compelling narratives and seamless user experiences.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-200 text-black font-semibold px-5 py-3 rounded-full hover:bg-orange-300 transition-colors"
              >
                Work with me <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 rounded-full hover:border-orange-200 hover:text-orange-200 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid-paper relative mx-auto w-full max-w-md h-[420px] sm:h-[520px] rounded-t-full overflow-hidden">
              <img
                src={asset("aboutPics.webp")}
                alt="Olaleye Victor"
                width={1440}
                height={1800}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto max-w-none object-contain"
              />
            </div>
          </Reveal>
        </section>

        {/* ---------- CURRENTLY ---------- */}
        <section className="mt-20 md:mt-28 grid sm:grid-cols-3 gap-4">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-white/10 p-6 md:p-7">
                <r.icon className="w-7 h-7 text-orange-300" />
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="text-gray-300">{r.org}</p>
                <p className="text-sm text-gray-500 mt-1">{r.note}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ---------- SKILLS ---------- */}
        <section className="mt-20 md:mt-28">
          <Reveal>
            <SectionHeading eyebrow="Toolkit">SKILLS & EXPERTISE</SectionHeading>
          </Reveal>
          <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {skills.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <SkillCard icon={<s.icon className="w-6 h-6" />} title={s.title} text={s.text} tags={s.tags} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section className="mt-20 md:mt-28">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading eyebrow="Project experience">EXPERIENCE</SectionHeading>
            <Link
              to="/builds"
              className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-orange-200 hover:border-orange-200 transition-colors w-fit"
            >
              ALL BUILDS <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="mt-10 md:mt-12 space-y-10">
            {experience.map((b, i) => (
              <Reveal key={b.slug} delay={i * 60}>
                <ExperienceCard title={b.title} role={b.role} date={b.year} points={b.points} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
