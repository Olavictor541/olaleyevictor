import { Link } from "react-router-dom";
import { AgeCounter } from "../components/AgeCounter";
import { Caption, Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { artBySlug, asset, profile } from "../data";

const featuredArt = ["mindless", "the-seeing-eyes", "elevation"].map((s) => artBySlug(s)!);
const tools = ["React", "TypeScript", "JavaScript", "C++", "SQL", "Tailwind CSS", "Git", "UML", "Illustrator", "Photoshop"];

export default function About() {
  usePageTitle("About");
  const seeingEyes = artBySlug("the-seeing-eyes")!;

  return (
    <Page>
      <PageHeader title="Hello" subtitle={`I'm ${profile.fullName}, but I go by Victor`} />

      <figure className="mt-10">
        <div className="aspect-square overflow-hidden rounded-xl bg-[#e6ddd1] dark:bg-[oklch(0.3_0.05_122)]">
          <img
            src={asset("myPics.webp")}
            alt="Olaleye Victor"
            width={1669}
            height={1800}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </figure>

      <div className="prose-body mt-10">
        <p>
          I'm a creative technologist: a developer who cares how things look, and a designer who writes code. I like taking
          an idea all the way to something finished that works and looks right, and I believe understanding the
          technical side is a big part of making things feel good.
        </p>
        <p>
          I'm studying Computer Science at {profile.school}, where I also serve students as a director-at-large on the
          student union. I'm sharpening my problem solving on LeetCode and writing up what I learn in my{" "}
          <Link to="/posts" className="link">posts</Link>, alongside the{" "}
          <Link to="/work" className="link">projects</Link> I'm building.
        </p>
        <p>
          {profile.birthDate ? (
            <>
              I'm <AgeCounter birthDate={profile.birthDate} /> years old and live on {profile.location}.
            </>
          ) : (
            <>I live on {profile.location}.</>
          )}{" "}
          When I'm not coding, I make art: mixed media collage and graphite drawings about the mind, faith and identity,
          like{" "}
          {featuredArt.map((a, i) => (
            <span key={a.slug}>
              <Link to={`/art/${a.slug}`} className="link">
                {a.title.replace(/:.*$/, "")}
              </Link>
              {i < featuredArt.length - 2 ? ", " : i === featuredArt.length - 2 ? " and " : ""}
            </span>
          ))}
          . You can see them all in my <Link to="/art" className="link">art gallery</Link>.
        </p>
      </div>

      <figure className="mt-12">
        <Link to={`/art/${seeingEyes.slug}`} className="block overflow-hidden rounded-xl bg-white">
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
          The tools I reach for most are {tools.slice(0, -1).join(", ")} and {tools[tools.length - 1]}.
        </p>
        <p>
          You can find me on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a> and{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>, or{" "}
          <Link to="/contact" className="link">get in touch</Link> directly. I'm always happy to talk about a project.
        </p>
      </div>
    </Page>
  );
}
