// src/components/sections/Specs/SpecNavButton.tsx
import type { SpecNavButtonProps } from '../../types';

export function SpecNavButton({ category, idx, isActive, onClick }: SpecNavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wide transition-all duration-300 border whitespace-nowrap ${
        isActive
          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
          : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
      }`}
    >
      0{idx + 1}. {category.title}
    </button>
  );
}