import { Link } from "react-router-dom";
import { Carousel, WorkCard } from "../components/cards";
import { Caption, Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { asset, profile, projects } from "../data";

const byDate = [...projects].sort((a, b) => b.date.localeCompare(a.date));
const categories = ["Software", "Web"] as const;

function monthYear(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function Work() {
  usePageTitle("Work");
  const latest = byDate[0];
  const hero = byDate.find((p) => p.images?.length);

  return (
    <Page>
      <PageHeader title="Work" subtitle="Things I've built: software, websites and experiments." />

      {hero?.images && (
        <figure className="mt-12">
          <Link to={`/work/${hero.slug}`} className="block overflow-hidden rounded-xl bg-card ring-1 ring-[color:var(--line)]">
            <img src={asset(hero.images[0].src)} alt={hero.title} className="w-full h-auto" />
          </Link>
          <Caption>
            {byDate.map((p, i) => (
              <span key={p.slug}>
                <Link to={`/work/${p.slug}`} className="link">
                  {p.title}
                </Link>
                {i < byDate.length - 1 ? ", " : "."}
              </span>
            ))}
          </Caption>
        </figure>
      )}

      {/* Rounded panel holding every collection, like a shelf */}
      <div className="mt-16 -mx-6 sm:-mx-10 rounded-[32px] border-2 border-line px-6 sm:px-10 py-10 flex flex-col gap-14 overflow-hidden">
        <Carousel
          title="Recently added"
          aside={
            <p className="font-sans text-[15px] font-medium text-faint">Updated {monthYear(latest.date)}</p>
          }
        >
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
        More code and experiments are on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        , and I write about what I'm building in my <Link to="/posts" className="link">posts</Link>.
      </p>
    </Page>
  );
}
