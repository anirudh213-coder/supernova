
/*for about section, stat block component*/

interface StatBlockProps {
  value: string;
  label: string;
  valueColor?: string;
}

export function StatBlock({ value, label, valueColor = 'text-white' }: StatBlockProps) {
  return (
    <div>
      <div className={`text-3xl sm:text-4xl font-extrabold font-mono mb-2 ${valueColor}`}>
        {value}
      </div>
      <div className="text-slate-400 text-xs uppercase font-mono tracking-wider">
        {label}
      </div>
    </div>
  );
}