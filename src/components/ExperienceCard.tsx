interface ExperienceCardProps {
  title: string;
  role: string;
  date: string;
  points: string[];
}

export function ExperienceCard({ title, role, date, points }: ExperienceCardProps) {
  return (
    <div className="border-l-4 border-orange-400 pl-8 py-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-orange-300 font-semibold">{role}</p>
        </div>
        <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{date}</span>
      </div>
      <ul className="text-gray-300 text-base leading-relaxed space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
