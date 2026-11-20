import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { profile } from "../data";

const nav = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Art", path: "/art" },
  { name: "Contact", path: "/contact" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still switches for this visit */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className="w-8 h-8 -mr-1.5 grid place-items-center rounded-full muted hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export default function Header() {
  return (
    <header className="w-full max-w-2xl mx-auto px-5 sm:px-6 pt-8 sm:pt-12">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="font-medium tracking-tight hover:opacity-70 transition-opacity">
          {profile.name}
        </Link>
        <div className="flex items-center gap-5 sm:gap-6">
          <nav aria-label="Main" className="hidden sm:flex items-center gap-6 text-[15px]">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? "text-stone-900 dark:text-stone-100" : "muted hover:text-stone-900 dark:hover:text-stone-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>

      {/* Phones: the same links, in a row under the name */}
      <nav aria-label="Main" className="sm:hidden mt-4 flex gap-5 text-[15px]">
        {nav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-stone-900 dark:text-stone-100" : "muted"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
