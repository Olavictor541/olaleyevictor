import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-impact text-orange-200 text-4xl md:text-6xl tracking-wide leading-none">
              LET'S BUILD
              <br />
              SOMETHING.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block mt-5 text-white text-base md:text-lg border-b border-white/40 hover:border-orange-300 hover:text-orange-200 transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/builds" className="hover:text-white transition-colors">Builds</Link>
              <Link to="/crafts" className="hover:text-white transition-colors">Crafts</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
            <div className="flex gap-3">
              {[
                { href: profile.github, label: "GitHub", Icon: FaGithub },
                { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
                { href: `mailto:${profile.email}`, label: "Email", Icon: FaEnvelope },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 grid place-items-center rounded-full border border-white/15 text-white hover:bg-orange-200 hover:text-black hover:border-orange-200 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
          <span>© {new Date().getFullYear()} {profile.name}. Designed & built by me.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
