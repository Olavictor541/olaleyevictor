import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MenuBar() {
  // State to track if mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current URL path to highlight active navigation item
  const location = useLocation();

  // Array of navigation items with their display names
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Builds", path: "/builds" },
    { name: "Crafts", path: "/crafts" },
    { name: "Contact", path: "/contact" },
  ];

  // Check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    // fixed top menu bar
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-4 py-4 md:py-4 flex justify-between items-center">
        {/* Logo & Site Name */}
        <Link
          to="/"
          className="flex items-center md:gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="/olaleyevictor/myLogo.svg" alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
          <div className="text-white">
            <div className="font-semibold text-sm md:text-base">Olaleye Victor</div>
            <div className="text-xs md:text-sm">Mobolaji</div>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-900 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "text-orange-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
