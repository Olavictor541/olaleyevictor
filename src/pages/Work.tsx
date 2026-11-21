import { Link } from "react-router-dom";
import { Carousel, WorkCard } from "../components/cards";
import { Caption, Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { asset, profile, projects } from "../data";

const byDate = [...projects].sort((a, b) => b.date.localeCompare(a.date));
const categories = ["Software", "Web"] as const;

export default function Work() {
  usePageTitle("Work");
  const hero = byDate.find((p) => p.images?.length);

  return (
    <Page>
      <PageHeader title="Work" subtitle="Software, websites and coursework I've built, and what I learned building them." />

      {hero?.images && (
        <figure className="mt-12">
          <Link
            to={`/work/${hero.slug}`}
            className="block overflow-hidden rounded-lg bg-card border border-line hover:border-[color:var(--accent)] transition-colors"
          >
            <img src={asset(hero.images[0].src)} alt={hero.title} className="w-full h-auto" />
          </Link>
          <Caption>
            Latest: <Link to={`/work/${hero.slug}`} className="link">{hero.title}</Link>. {hero.tagline}.
          </Caption>
        </figure>
      )}

      <div className="mt-16 flex flex-col gap-14">
        <Carousel title={`All projects · ${byDate.length}`}>
          {byDate.map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </Carousel>

        {categories.map((c) => {
          const list = byDate.filter((p) => p.category === c);
          if (!list.length) return null;
          return (
            <Carousel key={c} title={c}>
              {list.map((p) => (
                <WorkCard key={p.slug} project={p} showCategory={false} />
              ))}
            </Carousel>
          );
        })}
      </div>

      <p className="prose-body mt-14">
        All my code lives on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        , and I write up problems and projects in my <Link to="/posts" className="link">posts</Link>.
      </p>
    </Page>
  );
}
