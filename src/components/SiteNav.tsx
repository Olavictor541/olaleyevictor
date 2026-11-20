import type { ComponentType } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiComputerDesktop, HiHome, HiMoon, HiPaintBrush, HiSun, HiUser } from "react-icons/hi2";
import { Logo } from "./Logo";
import { useTheme } from "./useTheme";

type Item = { name: string; path: string; Icon: ComponentType<{ className?: string }> };

const items: Item[] = [
  { name: "Home", path: "/", Icon: HiHome },
  { name: "About", path: "/about", Icon: HiUser },
  { name: "Work", path: "/work", Icon: HiComputerDesktop },
  { name: "Art", path: "/art", Icon: HiPaintBrush },
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
      className={`group/link relative z-10 flex items-center justify-center rounded-squircle transition-colors duration-200 ${
        vertical ? "w-[44px] h-[44px]" : "w-12 sm:w-[52px] h-[44px]"
      } ${
        active
          ? "bg-white text-accent shadow-[0_1px_2px_rgba(60,50,30,0.08),0_2px_8px_rgba(60,50,30,0.06)]"
          : "text-navitem hover:text-navhover"
      }`}
    >
      <Icon className="w-[21px] h-[21px] transition-transform duration-300 ease-out group-hover/link:scale-110" />
      {/* Hover label, to the right of the icon (desktop sidebar only) */}
      {vertical && (
        <span className="pointer-events-none absolute left-full ml-6 whitespace-nowrap font-sans text-base font-medium text-navitem opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
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
      className="group/t w-[44px] h-[44px] grid place-items-center rounded-squircle text-navitem hover:text-navhover transition-colors"
    >
      {dark ? (
        <HiMoon className="w-[19px] h-[19px] transition-transform duration-300 group-hover/t:-rotate-12" />
      ) : (
        <HiSun className="w-[21px] h-[21px] transition-transform duration-500 group-hover/t:rotate-45" />
      )}
    </button>
  );
}

export default function SiteNav() {
  const { pathname } = useLocation();
  const current = sectionOf(pathname);

  return (
    <>
      {/* ---------- Desktop: logo top-left, floating vertical icon bar ---------- */}
      <div className="hidden lg:block">
        <Link
          to="/"
          aria-label="Olaleye Victor, home"
          className="fixed z-40 top-10 left-[46px] w-12 h-12 grid place-items-center text-title hover:opacity-70 transition-opacity"
        >
          <Logo className="w-10 h-10" />
        </Link>
        <div className="fixed z-40 left-[43px] top-[152px] flex flex-col items-center gap-3">
          <nav aria-label="Main" className="flex flex-col items-center gap-1 p-[5px] rounded-[18px] bg-navbg backdrop-blur">
            {items.map((item) => (
              <NavItem key={item.path} item={item} active={current === item.path} vertical />
            ))}
          </nav>
          <ThemeButton />
        </div>
      </div>

      {/* ---------- Phones and tablets: logo, horizontal icon bar, theme ---------- */}
      <header className="lg:hidden w-full max-w-col mx-auto px-6 pt-6 flex items-center justify-between gap-3">
        <Link to="/" aria-label="Olaleye Victor, home" className="text-title shrink-0">
          <Logo className="w-9 h-9" />
        </Link>
        <nav aria-label="Main" className="flex items-center p-[4px] rounded-[18px] bg-navbg">
          {items.map((item) => (
            <NavItem key={item.path} item={item} active={current === item.path} vertical={false} />
          ))}
        </nav>
        <ThemeButton />
      </header>
    </>
  );
}
