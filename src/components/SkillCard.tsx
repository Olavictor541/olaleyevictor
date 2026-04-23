interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
}

export function SkillCard({ icon, title }: SkillCardProps) {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 min-h-32 flex flex-col">
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
}
