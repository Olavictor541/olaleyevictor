import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { profile } from "../data";

export default function Footer() {
  const link = "text-item hover:text-accent transition-colors";
  return (
    <footer className="w-full max-w-col mx-auto px-6 pb-14">
      <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans text-[14px] font-medium text-faint">
        <span className="flex items-center gap-2.5">
          <Logo className="w-5 h-5 text-item" />
          © {new Date().getFullYear()} {profile.name}. Designed in Illustrator, built in code.
        </span>
        <nav className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
          <Link to="/contact" className={link}>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
