import { useState } from "react";
import { Link } from "react-router-dom";
import { ArtCard, Carousel, WorkCard } from "../components/cards";
import { Arrows, Page, PostList, Tabs } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { posts } from "../lib/posts";
import { artworks, profile, projects } from "../data";

const PER_PAGE = 10;
type Tab = "posts" | "leetcode";

export default function Home() {
  usePageTitle();
  const [tab, setTab] = useState<Tab>("posts");
  const [page, setPage] = useState(0);

  const list = tab === "posts" ? posts : posts.filter((p) => p.kind === "leetcode");
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const visible = list.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const shownCount = page * PER_PAGE + visible.length;
  const recentWork = [...projects].sort((a, b) => b.date.localeCompare(a.date));

  const switchTab = (t: Tab) => {
    setTab(t);
    setPage(0);
  };

  return (
    <Page>
      {/* Intro */}
      <h1 className="font-serif text-[28.8px] leading-[1.35] font-semibold tracking-[-0.015em] text-title">
        {profile.name}
      </h1>
      <div className="mt-8 max-w-[440px] flex flex-col gap-5 font-serif text-[18.4px] leading-[1.5] font-medium text-intro">
        <p>
          Welcome to my corner of the web. I'm a creative technologist: I write code and I design. This is where I share
          the LeetCode problems I'm working through and the projects I'm building.
        </p>
        <p>
          I study Computer Science at {profile.school} and serve on the student union.{" "}
          <Link to="/about" className="link">
            Read more.
          </Link>
        </p>
      </div>

      {/* Posts */}
      <section className="mt-[88px]">
        <Tabs<Tab>
          tabs={[
            { id: "posts", label: "Posts" },
            { id: "leetcode", label: "LeetCode" },
          ]}
          value={tab}
          onChange={switchTab}
        />
        <div className="mt-11">
          <PostList posts={visible} />
        </div>
        {list.length > 0 && (
          <div className="mt-10 flex items-center gap-3">
            <Arrows
              onPrev={() => setPage((p) => Math.max(0, p - 1))}
              onNext={() => setPage((p) => Math.min(pages - 1, p + 1))}
              canPrev={page > 0}
              canNext={page < pages - 1}
            />
            <Link to="/posts" className="font-sans text-[16px] font-medium text-faint hover:text-item transition-colors">
              {shownCount} of {list.length} {list.length === 1 ? "post" : "posts"}
            </Link>
          </div>
        )}
      </section>

      {/* Recent work */}
      <div className="mt-[90px]">
        <Carousel title="Recent work" to="/work">
          {recentWork.map((p) => (
            <WorkCard key={p.slug} project={p} />
          ))}
        </Carousel>
      </div>

      {/* Art */}
      <div className="mt-[90px]">
        <Carousel
          title="Art"
          to="/art"
          extra={
            <Link to="/art" className="font-sans text-[15px] font-medium text-item hover:opacity-70 transition-opacity">
              View all
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
