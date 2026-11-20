import { useParams } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { Carousel, WorkCard, WorkCover } from "../components/cards";
import { BackButton, Caption, Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { asset, projectBySlug, projects } from "../data";
import NotFound from "./NotFound";

export default function WorkDetail() {
  const { slug = "" } = useParams();
  const project = projectBySlug(slug);
  usePageTitle(project?.title);
  if (!project) return <NotFound />;

  const [cover, ...more] = project.images ?? [];
  const sameCategory = projects.filter((p) => p.slug !== project.slug && p.category === project.category);
  const others = sameCategory.length ? sameCategory : projects.filter((p) => p.slug !== project.slug);

  return (
    <Page>
      <PageHeader title={project.title} subtitle={project.tagline} />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="pill">{project.category}</span>
        <span className="pill">{project.year}</span>
        <span className="pill">{project.role}</span>
      </div>

      <figure className="mt-12">
        <div className="overflow-hidden rounded-xl bg-card ring-1 ring-[color:var(--line)]">
          {cover ? (
            <img src={asset(cover.src)} alt={cover.caption} className="w-full h-auto" />
          ) : (
            <div className="aspect-[16/10]">
              <WorkCover project={project} large />
            </div>
          )}
        </div>
        {cover && <Caption>{cover.caption}</Caption>}
      </figure>

      <div className="prose-body mt-10">
        {project.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h3>What I did</h3>
        <ul>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <h3>Built with</h3>
        <p>{project.stack.join(", ")}.</p>
      </div>

      {project.links && (
        <div className="mt-8 flex flex-wrap gap-6 font-serif text-[19px]">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
              {l.label} <HiArrowUpRight className="w-4 h-4" />
            </a>
          ))}
        </div>
      )}

      {more.map((img) => (
        <figure key={img.src} className="mt-12">
          <div className="overflow-hidden rounded-xl bg-card ring-1 ring-[color:var(--line)]">
            <img src={asset(img.src)} alt={img.caption} loading="lazy" className="w-full h-auto" />
          </div>
          <Caption>{img.caption}</Caption>
        </figure>
      ))}

      <div className="mt-14">
        <BackButton to="/work" label="Back to work" />
      </div>

      {others.length > 0 && (
        <div className="mt-16">
          <Carousel title={sameCategory.length ? `More from ${project.category}` : "More work"}>
            {others.map((p) => (
              <WorkCard key={p.slug} project={p} showCategory={!sameCategory.length} />
            ))}
          </Carousel>
        </div>
      )}
    </Page>
  );
}
