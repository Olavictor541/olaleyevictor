import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { ArtCard, Carousel } from "../components/cards";
import { BackButton, Caption, Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { artworks, asset, profile } from "../data";
import NotFound from "./NotFound";

export default function ArtDetail() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const index = artworks.findIndex((a) => a.slug === slug);
  const art = artworks[index];
  usePageTitle(art?.title);

  const prev = artworks[(index - 1 + artworks.length) % artworks.length];
  const next = artworks[(index + 1) % artworks.length];

  // ← → keys move between pieces
  useEffect(() => {
    if (!art) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowLeft") navigate(`/art/${prev.slug}`);
      if (e.key === "ArrowRight") navigate(`/art/${next.slug}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [art, prev, next, navigate]);

  if (!art) return <NotFound />;
  const sameMedium = artworks.filter((a) => a.slug !== art.slug && a.medium === art.medium);

  const step = "w-10 h-10 grid place-items-center rounded-full border-2 border-line text-item hover:bg-well transition-colors";

  return (
    <Page>
      <PageHeader title={art.title} />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="pill">{art.medium}</span>
      </div>

      <figure className="mt-12">
        <div className="overflow-hidden rounded-xl bg-white">
          <img src={asset(art.image)} alt={art.title} width={art.width} height={art.height} className="w-full h-auto" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <Caption>
            {art.medium} by {profile.name}
          </Caption>
          <div className="mt-3 flex gap-2 shrink-0">
            <Link to={`/art/${prev.slug}`} aria-label={`Previous: ${prev.title}`} className={step}>
              <HiChevronLeft className="w-4 h-4" />
            </Link>
            <Link to={`/art/${next.slug}`} aria-label={`Next: ${next.title}`} className={step}>
              <HiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </figure>

      <p className="prose-body mt-10">
        Interested in this piece or a commission?{" "}
        <a href={`mailto:${profile.email}?subject=${encodeURIComponent(art.title)}`} className="link">
          Email me
        </a>
        .
      </p>

      <div className="mt-14">
        <BackButton to="/art" label="Back to art" />
      </div>

      {sameMedium.length > 0 && (
        <div className="mt-16">
          <Carousel title={art.medium === "Graphite on paper" ? "More graphite" : "More collage"} to="/art">
            {sameMedium.map((a) => (
              <ArtCard key={a.slug} art={a} />
            ))}
          </Carousel>
        </div>
      )}
    </Page>
  );
}
