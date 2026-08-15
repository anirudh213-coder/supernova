import type { ReactNode } from 'react';

interface IconBadgeProps {
  label?: string;
  icon?: ReactNode;
  className?: string;
}

export function IconBadge({ label, icon, className = '' }: IconBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider ${className}`}>
      {icon}
      {label && <span>{label}</span>}
    </span>
  );
}