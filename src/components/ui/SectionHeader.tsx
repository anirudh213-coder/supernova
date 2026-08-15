import type { SectionHeaderProps } from '../../types';

export function SectionHeader({
  subtitle,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
        {subtitle}
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
