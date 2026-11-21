import type { ComponentType } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineComputerDesktop,
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlinePaintBrush,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import { Logo } from "./Logo";
import { useTheme } from "./useTheme";

type Item = { name: string; path: string; Icon: ComponentType<{ className?: string }> };

const items: Item[] = [
  { name: "Home", path: "/", Icon: HiOutlineHome },
  { name: "About", path: "/about", Icon: HiOutlineUser },
  { name: "Work", path: "/work", Icon: HiOutlineComputerDesktop },
  { name: "Art", path: "/art", Icon: HiOutlinePaintBrush },
];

/** Which section a URL belongs to (so /work/viu-meets keeps "Work" active, /posts keeps "Home"). */
function sectionOf(pathname: string) {
  if (pathname.startsWith("/about")) return "/about";
  if (pathname.startsWith("/work")) return "/work";
  if (pathname.startsWith("/art")) return "/art";
  if (pathname === "/" || pathname.startsWith("/posts")) return "/";
  return "";
}

function NavItem({ item, active, vertical }: { item: Item; active: boolean; vertical: boolean }) {
  const { Icon } = item;
  return (
    <NavLink
      to={item.path}
      title={item.name}
      aria-label={item.name}
      aria-current={active ? "page" : undefined}
      className={`group/link relative z-10 grid place-items-center rounded-full w-11 h-11 transition-colors duration-200 ${
        active ? "bg-accent text-accentink" : "text-navitem hover:text-navhover hover:bg-well"
      }`}
    >
      <Icon className="w-[20px] h-[20px]" />
      {/* Label slides out to the right on hover (desktop rail only) */}
      {vertical && (
        <span className="pointer-events-none absolute left-full ml-5 whitespace-nowrap rounded-md bg-[color:var(--title)] px-2 py-1 font-sans text-[13px] font-semibold text-page opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
          {item.name}
        </span>
      )}
    </NavLink>
  );
}

function ThemeButton() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className="w-11 h-11 grid place-items-center rounded-full text-navitem hover:text-navhover hover:bg-well transition-colors"
    >
      {dark ? <HiOutlineSun className="w-[20px] h-[20px]" /> : <HiOutlineMoon className="w-[19px] h-[19px]" />}
    </button>
  );
}

export default function SiteNav() {
  const { pathname } = useLocation();
  const current = sectionOf(pathname);

  return (
    <>
      {/* ---------- Desktop: logo top-left, slim rail down the left edge ---------- */}
      <div className="hidden lg:flex fixed z-40 top-9 left-10 flex-col items-center gap-8">
        <Link to="/" aria-label="Olaleye Victor, home" className="text-title hover:text-accent transition-colors">
          <Logo className="w-11 h-11" />
        </Link>
        <nav
          aria-label="Main"
          className="flex flex-col items-center gap-1.5 p-1.5 rounded-full border border-line bg-navbg backdrop-blur"
        >
          {items.map((item) => (
            <NavItem key={item.path} item={item} active={current === item.path} vertical />
          ))}
          <span className="my-1 h-px w-6 bg-[color:var(--line)]" aria-hidden="true" />
          <ThemeButton />
        </nav>
      </div>

      {/* ---------- Phones and tablets: logo left, capsule bar right ---------- */}
      <header className="lg:hidden w-full max-w-col mx-auto px-6 pt-6 flex items-center justify-between gap-3">
        <Link to="/" aria-label="Olaleye Victor, home" className="text-title shrink-0">
          <Logo className="w-9 h-9" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-0.5 p-1 rounded-full border border-line bg-navbg">
          {items.map((item) => (
            <NavItem key={item.path} item={item} active={current === item.path} vertical={false} />
          ))}
          <span className="mx-0.5 w-px h-6 bg-[color:var(--line)]" aria-hidden="true" />
          <ThemeButton />
        </nav>
      </header>
    </>
  );
}
