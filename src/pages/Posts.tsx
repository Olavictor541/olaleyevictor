import { useState } from "react";
import { Page, PageHeader, PostList, Tabs } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { posts, type PostKind } from "../lib/posts";

type Filter = "all" | PostKind;

export default function Posts() {
  usePageTitle("Posts");
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? posts : posts.filter((p) => p.kind === filter);

  return (
    <Page>
      <PageHeader
        title="Posts"
        subtitle="LeetCode problems I've worked through and programming projects I'm building."
      />
      <div className="mt-14">
        <Tabs<Filter>
          tabs={[
            { id: "all", label: "All" },
            { id: "leetcode", label: "LeetCode" },
            { id: "project", label: "Projects" },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </div>
      <div className="mt-10">
        <PostList posts={shown} showYear />
      </div>
      <p className="mt-10 font-sans text-[16px] font-medium text-faint">
        {shown.length} {shown.length === 1 ? "post" : "posts"}
      </p>
    </Page>
  );
}
