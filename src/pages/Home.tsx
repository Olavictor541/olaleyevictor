import { useState } from "react";
import { Link } from "react-router-dom";
import { ArtCard, Carousel, WorkCard } from "../components/cards";
import { Arrows, Page, PostList, SectionTitle, Tabs } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { posts } from "../lib/posts";
import { artworks, profile, projects } from "../data";

const PER_PAGE = 8;
type Tab = "all" | "leetcode";

export default function Home() {
  usePageTitle();
  const [tab, setTab] = useState<Tab>("all");
  const [page, setPage] = useState(0);

  const list = tab === "all" ? posts : posts.filter((p) => p.kind === "leetcode");
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const visible = list.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const from = list.length ? page * PER_PAGE + 1 : 0;
  const to = page * PER_PAGE + visible.length;
  const latestWork = [...projects].sort((a, b) => b.date.localeCompare(a.date));

  const switchTab = (t: Tab) => {
    setTab(t);
    setPage(0);
  };

  return (
    <Page>
      {/* Intro */}
      <p className="font-mono text-[12.5px] text-accent">creative technologist</p>
      <h1 className="mt-2 font-display text-[40px] sm:text-[48px] leading-[1.05] font-semibold tracking-[-0.025em] text-title">
        {profile.name}
      </h1>
      <div className="mt-7 max-w-[470px] flex flex-col gap-4 font-serif text-[19px] leading-[1.55] text-intro">
        <p>
          I write code, design things and make art, and I'm happiest when a project needs all three. I'm studying Computer
          Science at {profile.school}.
        </p>
        <p>
          This is my notebook: LeetCode problems I've worked through, projects I'm building, and the art I make in
          between. <Link to="/about" className="link">More about me</Link>.
        </p>
      </div>

      {/* Posts */}
      <section className="mt-20">
        <SectionTitle
          to="/posts"
          right={
            <Tabs<Tab>
              tabs={[
                { id: "all", label: "All" },
                { id: "leetcode", label: "LeetCode" },
              ]}
              value={tab}
              onChange={switchTab}
            />
          }
        >
          Posts
        </SectionTitle>
        <PostList posts={visible} />
        {list.length > 0 && (
          <div className="mt-6 flex items-center justify-between gap-3">
            <Link to="/posts" className="font-mono text-[12.5px] text-faint hover:text-accent transition-colors">
              {from}–{to} of {list.length} · view all →
            </Link>
            {pages > 1 && (
              <Arrows
                onPrev={() => setPage((p) => Math.max(0, p - 1))}
                onNext={() => setPage((p) => Math.min(pages - 1, p + 1))}
                canPrev={page > 0}
                canNext={page < pages - 1}
              />
            )}
          </div>
        )}
      </section>

      {/* Work */}
      <div className="mt-20">
        <Carousel title="Latest work" to="/work">
          {latestWork.map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </Carousel>
      </div>

      {/* Art */}
      <div className="mt-20">
        <Carousel
          title="Art"
          to="/art"
          extra={
            <Link to="/art" className="font-sans text-[13px] font-semibold text-item hover:text-accent transition-colors">
              Gallery →
            </Link>
          }
        >
          {artworks.map((a) => (
            <ArtCard key={a.slug} art={a} />
          ))}
        </Carousel>
      </div>
    </Page>
  );
}
