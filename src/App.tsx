import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import Art from "./pages/Art";
import ArtDetail from "./pages/ArtDetail";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/** Jump to the top of the page on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/art" element={<Art />} />
            <Route path="/art/:slug" element={<ArtDetail />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:slug" element={<PostPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Addresses from earlier versions of the site */}
            <Route path="/builds" element={<Navigate to="/work" replace />} />
            <Route path="/crafts" element={<Navigate to="/art" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
