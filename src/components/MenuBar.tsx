import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { asset, profile } from "../data";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Builds", path: "/builds" },
  { name: "Crafts", path: "/crafts" },
  { name: "Contact", path: "/contact" },
];

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setIsMenuOpen(false);
  }

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Slightly condense the bar once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-black/85 backdrop-blur-md border-b border-white/10"
          : "bg-black border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
          <img
            src={asset("myLogo.svg")}
            alt=""
            className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:rotate-12"
          />
          <div className="text-white leading-tight">
            <div className="font-semibold text-sm md:text-base">{profile.name}</div>
            <div className="text-xs md:text-sm text-gray-400">{profile.middleName}</div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 ${
                    isActive
                      ? "text-orange-300 after:w-full"
                      : "text-gray-400 hover:text-white after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-semibold bg-orange-200 text-black px-4 py-2 rounded-full hover:bg-orange-300 transition-colors"
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          isMenuOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-6 pt-2 h-[calc(100vh-5rem)] bg-black">
          {navItems.map((item, i) => (
            <li key={item.path} className="border-b border-white/10">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 py-5 font-impact text-4xl tracking-wide transition-colors ${
                    isActive ? "text-orange-300" : "text-white hover:text-orange-200"
                  }`
                }
              >
                <span className="font-sans text-xs text-gray-500">0{i + 1}</span>
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
          <li className="pt-8 text-sm text-gray-400">{profile.email}</li>
        </ul>
      </div>
    </header>
  );
}
