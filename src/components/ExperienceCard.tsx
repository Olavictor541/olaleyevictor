interface ExperienceCardProps {
  title: string;
  role: string;
  date: string;
  points: string[];
}

export function ExperienceCard({ title, role, date, points }: ExperienceCardProps) {
  return (
    <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-10 border-t border-white/10 pt-6">
      <span className="text-orange-300 font-semibold text-sm md:text-base">{date}</span>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 mt-1">{role}</p>
        <ul className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-300 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
