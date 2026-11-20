import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Builds from "./pages/Builds";
import Crafts from "./pages/Crafts";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";

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
      <SiteNav />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/crafts" element={<Crafts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
