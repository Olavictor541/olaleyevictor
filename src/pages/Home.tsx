import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { usePageTitle } from "../components/usePageTitle";
import { artworks, asset, profile, projects } from "../data";

export default function Home() {
  usePageTitle();

  return (
    <>
      {/* Intro */}
      <section className="mt-14 sm:mt-20">
        <img
          src={asset("avatar.webp")}
          alt="Olaleye Victor"
          width={320}
          height={320}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h1 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">
          Hi, I'm Victor.
        </h1>
        <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">
          <p>
            I'm a creative technologist: I write code and I design. I'm studying Computer Science at{" "}
            {profile.school}, and I serve on the student union as a director-at-large.
          </p>
          <p>
            I build <Link to="/work" className="link">websites and software</Link>, design brand identities and storefront
            signage, and make <Link to="/art" className="link">art</Link>, mostly collage and graphite drawings about the
            mind, faith and identity. I like taking an idea all the way to something finished that works and looks right.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <Section title="Selected work" more={{ to: "/work", label: "All work" }}>
        <ul className="divide-y divide-stone-200 dark:divide-stone-800 border-y rule">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/work#${p.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="min-w-0">
                  <span className="font-medium group-hover:underline underline-offset-[3px] decoration-stone-400">
                    {p.title}
                  </span>
                  <span className="block sm:inline sm:ml-2 text-[15px] muted">{p.kind}</span>
                </span>
                <span className="text-[15px] muted tabular-nums shrink-0">{p.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Art */}
      <Section title="Art" more={{ to: "/art", label: "Gallery" }}>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {artworks.slice(0, 3).map((a) => (
            <Link
              key={a.id}
              to="/art"
              className="block aspect-[4/5] overflow-hidden rounded-md bg-stone-200 dark:bg-stone-800"
            >
              <img
                src={asset(a.image)}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section title="Say hello">
        <p className="text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">
          Working on something, or need a website or a brand? Email me at{" "}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>{" "}
          or find me on{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            LinkedIn
          </a>{" "}
          and{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          .
        </p>
      </Section>
    </>
  );
}
