interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
}

export function SkillCard({ icon, title }: SkillCardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-8 min-h-28 md:min-h-32 flex flex-col">
      <div className="text-3xl md:text-4xl mb-3 md:mb-4">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-bold">{title}</h3>
    </div>
  );
}
