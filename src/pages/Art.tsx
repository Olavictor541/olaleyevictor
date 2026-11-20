import { useState } from "react";
import { ArtCard } from "../components/cards";
import { Page, PageHeader, Tabs } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { artworks, profile } from "../data";

type Filter = "all" | "collage" | "graphite";

export default function Art() {
  usePageTitle("Art");
  const [filter, setFilter] = useState<Filter>("all");
  const shown = artworks.filter(
    (a) =>
      filter === "all" ||
      (filter === "collage" && a.medium === "Mixed media collage") ||
      (filter === "graphite" && a.medium === "Graphite on paper")
  );

  return (
    <Page>
      <PageHeader title="Art" subtitle="Collage and graphite drawings about the mind, faith and identity." />

      <div className="mt-14">
        <Tabs<Filter>
          tabs={[
            { id: "all", label: "All" },
            { id: "collage", label: "Collage" },
            { id: "graphite", label: "Graphite" },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-[27px]">
        {shown.map((a) => (
          <ArtCard key={a.slug} art={a} fluid />
        ))}
      </div>

      <p className="prose-body mt-14">
        Interested in a piece or a commission?{" "}
        <a href={`mailto:${profile.email}?subject=Artwork`} className="link">
          Email me
        </a>
        .
      </p>
    </Page>
  );
}
