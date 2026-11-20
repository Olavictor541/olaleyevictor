import { useCallback, useEffect, useState } from "react";

/** Light/dark theme. Starts from the class set in index.html (saved choice or system setting). */
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f1503" : "#f7f2ed");
  }, [dark]);

  // Follow the system setting until the visitor picks a theme themselves
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {
        /* ignore */
      }
      setDark(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setDark((d) => {
      try {
        localStorage.setItem("theme", d ? "light" : "dark");
      } catch {
        /* storage unavailable: the theme still switches for this visit */
      }
      return !d;
    });
  }, []);

  return { dark, toggle };
}
