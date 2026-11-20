import { Link } from "react-router-dom";
import { PageIntro } from "../components/Section";
import { usePageTitle } from "../components/usePageTitle";

export default function NotFound() {
  usePageTitle("Not found");
  return (
    <PageIntro title="Page not found">
      <p>
        This page doesn't exist. Try the <Link to="/" className="link">home page</Link> instead.
      </p>
    </PageIntro>
  );
}
