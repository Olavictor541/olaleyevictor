import { Link } from "react-router-dom";
import { Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";

export default function NotFound() {
  usePageTitle("Not found");
  return (
    <Page>
      <PageHeader title="Page not found" subtitle="This page doesn't exist, or it moved." />
      <p className="prose-body mt-8">
        Try the <Link to="/" className="link">home page</Link> or my <Link to="/posts" className="link">posts</Link>.
      </p>
    </Page>
  );
}
