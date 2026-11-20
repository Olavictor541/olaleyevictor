import type { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  text?: string;
  tags?: string[];
}

export function SkillCard({ icon, title, text, tags }: SkillCardProps) {
  return (
    <div className="group h-full bg-zinc-950 border border-white/10 hover:border-orange-200/40 rounded-3xl p-6 md:p-8 flex flex-col transition-colors">
      <div className="w-12 h-12 rounded-2xl bg-orange-200 text-black grid place-items-center group-hover:rotate-6 transition-transform">
        {icon}
      </div>
      <h3 className="mt-5 text-lg md:text-xl font-bold">{title}</h3>
      {text && <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">{text}</p>}
      {tags && (
        <div className="mt-auto pt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
