import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/** Jump to the top on route change, unless the URL points at a section. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-2xl mx-auto px-5 sm:px-6 pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/art" element={<Art />} />
            <Route path="/contact" element={<Contact />} />
            {/* Old addresses from the previous version of the site */}
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
