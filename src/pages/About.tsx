import { Link } from "react-router-dom";
import { PageIntro, Section } from "../components/Section";
import { usePageTitle } from "../components/usePageTitle";
import { asset, profile } from "../data";

const roles = [
  { title: "Computer Science student", place: profile.school, when: "Now" },
  { title: "Director-at-large", place: "VIU student union", when: "Now" },
  { title: "Designer", place: "Brand identity & storefront signage", when: "Ongoing" },
];

const disciplines = [
  {
    title: "Software",
    text: "Websites and applications. I like planning a system properly (domain models, diagrams, a sensible database) and then building the interface people actually touch.",
  },
  {
    title: "Design",
    text: "Logos, brand identities and storefront signage. I want a business to look as good on the street as it does online.",
  },
  {
    title: "Art",
    text: "Mixed media collage and graphite drawing. My pieces explore the mind, faith and identity, and how what we believe shapes how we see the world.",
  },
];

const tools = ["React", "TypeScript", "JavaScript", "C++", "SQL", "Tailwind CSS", "Git", "UML", "Illustrator", "Photoshop"];

export default function About() {
  usePageTitle("About");

  return (
    <>
      <PageIntro title="About" />

      <figure className="mt-8">
        <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg bg-[#e8e2d6] dark:bg-stone-800">
          <img
            src={asset("myPics.webp")}
            alt="Olaleye Victor"
            width={1669}
            height={1800}
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </figure>

      <div className="mt-10 space-y-4 text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">
        <p>
          I'm Olaleye Victor Mobolaji, but most people call me Victor. I'm a creative technologist, which is my way of
          saying I sit between code and design and don't want to give up either.
        </p>
        <p>
          If you need a fast, modern website, I can build it. If you need a visual identity or signage for your shop, I
          can design it. Most people do one or the other. I like seeing a project through from a rough idea to the
          finished thing, so the brand looks right <em>and</em> the tools work.
        </p>
        <p>
          I'm studying Computer Science at {profile.school}. Outside class, I serve students as a director-at-large on
          the student union, and I keep drawing.
        </p>
      </div>

      <Section title="What I do">
        <dl className="space-y-6">
          {disciplines.map((d) => (
            <div key={d.title} className="grid sm:grid-cols-[120px_1fr] gap-1 sm:gap-6">
              <dt className="font-medium">{d.title}</dt>
              <dd className="text-[16px] leading-relaxed muted">{d.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Currently">
        <ul className="divide-y divide-stone-200 dark:divide-stone-800 border-y rule">
          {roles.map((r) => (
            <li key={r.title} className="flex items-baseline justify-between gap-4 py-4">
              <span>
                <span className="font-medium">{r.title}</span>
                <span className="block text-[15px] muted">{r.place}</span>
              </span>
              <span className="text-[15px] muted shrink-0">{r.when}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tools I use">
        <p className="text-[16px] leading-relaxed muted">{tools.join(" · ")}</p>
      </Section>

      <Section title="Next">
        <p className="text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">
          See <Link to="/work" className="link">what I've built</Link>, browse{" "}
          <Link to="/art" className="link">my art</Link>, or{" "}
          <Link to="/contact" className="link">get in touch</Link>.
        </p>
      </Section>
    </>
  );
}
