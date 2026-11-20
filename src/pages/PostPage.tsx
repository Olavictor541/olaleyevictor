import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { BackButton, Difficulty, KindPill, Page, PageHeader, PostList, SectionTitle } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { renderMarkdown } from "../lib/markdown";
import { formatDate, postBySlug, posts } from "../lib/posts";
import NotFound from "./NotFound";

export default function PostPage() {
  const { slug = "" } = useParams();
  const post = postBySlug(slug);
  usePageTitle(post?.title);
  const html = useMemo(() => (post ? renderMarkdown(post.body) : ""), [post]);

  if (!post) return <NotFound />;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Page>
      <PageHeader title={post.title} subtitle={post.subtitle}>
        <p className="font-sans text-[18.4px] leading-7 font-medium tracking-[-0.015em] text-faint">{formatDate(post.date)}</p>
      </PageHeader>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <KindPill post={post} />
        {post.difficulty && (
          <span className="pill">
            <Difficulty level={post.difficulty} />
          </span>
        )}
        {post.tags.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>

      {(post.problem || post.repo) && (
        <div className="mt-5 flex flex-wrap gap-5 font-sans text-[16px] font-medium">
          {post.problem && (
            <a href={post.problem} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
              View problem on LeetCode <HiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {post.repo && (
            <a href={post.repo} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
              View the code <HiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}

      <article className="prose-body mt-10" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="mt-14">
        <BackButton to="/posts" label="All posts" />
      </div>

      {more.length > 0 && (
        <section className="mt-16">
          <SectionTitle to="/posts">More posts</SectionTitle>
          <PostList posts={more} />
        </section>
      )}

      <p className="mt-16 font-sans text-[15px] text-faint">
        Questions or a better solution? <Link to="/contact" className="link">Tell me</Link>.
      </p>
    </Page>
  );
}
