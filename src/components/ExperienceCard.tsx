interface ExperienceCardProps {
  title: string;
  role: string;
  date: string;
  points: string[];
}

export function ExperienceCard({ title, role, date, points }: ExperienceCardProps) {
  return (
    <div className="border-l-4 border-orange-400 pl-4 md:pl-8 py-3 md:py-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-1">{title}</h3>
          <p className="text-orange-300 font-semibold">{role}</p>
        </div>
        <span className="text-gray-400 text-sm whitespace-nowrap sm:ml-4">{date}</span>
      </div>
      <ul className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
