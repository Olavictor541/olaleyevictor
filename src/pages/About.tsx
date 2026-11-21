import { Link } from "react-router-dom";
import { AgeCounter } from "../components/AgeCounter";
import { Logo } from "../components/Logo";
import { Caption, Page, PageHeader, SectionTitle } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { artBySlug, asset, profile } from "../data";

const featuredArt = ["mindless", "the-seeing-eyes", "elevation"].map((s) => artBySlug(s)!);
const tools = ["C++", "JavaScript", "TypeScript", "React", "SQL", "Tailwind CSS", "Git", "UML", "Illustrator", "Photoshop"];

export default function About() {
  usePageTitle("About");
  const seeingEyes = artBySlug("the-seeing-eyes")!;

  return (
    <Page>
      <PageHeader title="About me" subtitle="Programmer, designer and artist. Usually all three at once." />

      {/* Portrait on the cream graph paper from my original site */}
      <figure className="mt-10 flex justify-center">
        <div className="grid-paper relative w-full max-w-[420px] aspect-[4/5] rounded-t-full overflow-hidden border border-line">
          <img
            src={asset("aboutPics.webp")}
            alt="Olaleye Victor"
            width={1440}
            height={1800}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[94%] w-auto max-w-none"
          />
        </div>
      </figure>

      <div className="prose-body mt-12">
        <p>
          My name is {profile.fullName}; most people just call me Victor. I call myself a creative technologist because
          I've never been able to pick between writing code and making things look good, so I do both.
        </p>
        <p>
          I'm a Computer Science student at {profile.school}, where I also sit on the student union as a
          director-at-large. Most of my week is data structures, algorithms and C++, and I write up the problems that
          teach me something in my <Link to="/posts" className="link">posts</Link>. The bigger things I build end up
          under <Link to="/work" className="link">work</Link>.
        </p>
        <p>
          {profile.birthDate ? (
            <>
              I'm <AgeCounter birthDate={profile.birthDate} /> years old and I live on {profile.location}.
            </>
          ) : (
            <>I live on {profile.location}.</>
          )}{" "}
          Away from the keyboard I draw and make collages about the mind, faith and identity, pieces like{" "}
          {featuredArt.map((a, i) => (
            <span key={a.slug}>
              <Link to={`/art/${a.slug}`} className="link">
                {a.title.replace(/:.*$/, "")}
              </Link>
              {i < featuredArt.length - 2 ? ", " : i === featuredArt.length - 2 ? " and " : ""}
            </span>
          ))}
          . The rest are in the <Link to="/art" className="link">gallery</Link>.
        </p>
      </div>

      <figure className="mt-12">
        <Link to={`/art/${seeingEyes.slug}`} className="block overflow-hidden rounded-lg bg-white border border-line">
          <img
            src={asset(seeingEyes.image)}
            alt={seeingEyes.title}
            width={seeingEyes.width}
            height={seeingEyes.height}
            loading="lazy"
            className="w-full h-auto"
          />
        </Link>
        <Caption>
          <Link to={`/art/${seeingEyes.slug}`} className="link">{seeingEyes.title}</Link>, {seeingEyes.medium.toLowerCase()}
        </Caption>
      </figure>

      <div className="prose-body mt-12">
        <p>
          Day to day I work with {tools.slice(0, -1).join(", ")} and {tools[tools.length - 1]}.
        </p>
        <p>
          I'm on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a> and{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>, and my
          inbox is always open. <Link to="/contact" className="link">Say hello</Link>.
        </p>
      </div>

      {/* ---------- Colophon ---------- */}
      <section className="mt-20">
        <SectionTitle>About this site</SectionTitle>

        <div className="flex items-start gap-5">
          <div className="grid-paper shrink-0 w-20 h-20 rounded-lg border border-line grid place-items-center text-[#2b2520]">
            <Logo className="w-12 h-12" />
          </div>
          <p className="prose-body !mt-0">
            I designed my logo myself in Adobe Illustrator after taking just one class in it. It's three simple shapes,
            a circle, a triangle and a mountain, and it's the first thing you see in the top corner of every page.
          </p>
        </div>

        <div className="prose-body mt-8">
        <ul>
          <li>
            Built with React, TypeScript and Vite, styled with Tailwind CSS, and hosted for free on GitHub Pages. Every
            push to GitHub rebuilds and redeploys it automatically. The domain is registered with Cloudflare.
          </li>
          <li>
            Posts are plain Markdown files, so writing up a LeetCode problem is as simple as adding a file. Code is
            coloured with highlight.js.
          </li>
          <li>
            Set in Fraunces for headings, Newsreader for reading, Manrope for labels and JetBrains Mono for code and
            numbers. Icons are from Heroicons.
          </li>
          <li>
            The faint graph paper behind everything is a nod to the cream grid from my first portfolio.
          </li>
          <li>
            The layout was inspired by{" "}
            <a href="https://paulstamatiou.com" target="_blank" rel="noopener noreferrer" className="link">
              Paul Stamatiou's site
            </a>
            .
          </li>
        </ul>
        </div>

        <p className="prose-body mt-6">
          The code is open on{" "}
          <a href="https://github.com/Olavictor541/olaleyevictor" target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          .
        </p>
      </section>
    </Page>
  );
}
