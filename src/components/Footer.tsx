import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-5 sm:px-6 pb-12">
      <div className="border-t rule pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
