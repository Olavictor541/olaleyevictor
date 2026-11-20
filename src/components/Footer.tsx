import { Link } from "react-router-dom";
import { profile } from "../data";

export default function Footer() {
  const sep = <span className="text-faint opacity-60">·</span>;
  return (
    <footer className="w-full max-w-col mx-auto px-6 pb-14">
      <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-sans text-[15px] font-medium text-faint">
        <span>
          Handcrafted by <Link to="/about" className="text-item hover:opacity-70 transition-opacity">Victor</Link> since {profile.since}
        </span>
        {sep}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-item hover:opacity-70 transition-opacity">
          GitHub
        </a>
        {sep}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-item hover:opacity-70 transition-opacity">
          LinkedIn
        </a>
        {sep}
        <Link to="/contact" className="text-item hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </p>
    </footer>
  );
}
