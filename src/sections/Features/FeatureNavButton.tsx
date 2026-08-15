// src/components/sections/features/FeatureNavButton.tsx
import type { FeatureNavButtonProps } from '../../types';

export default function FeatureNavButton({
  feature,
  index,
  isActive,
  autoplayInterval,
  onSelect,
}: FeatureNavButtonProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 group flex items-start gap-3.5 border ${
        isActive
          ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/20'
          : 'bg-slate-900/90 border-slate-800/80 hover:bg-slate-800 hover:border-slate-700'
      }`}
    >
      <div
        className={`absolute left-0 top-2.5 bottom-2.5 w-1 rounded-r-full transition-all duration-300 ${
          isActive
            ? 'bg-cyan-400 opacity-100'
            : 'bg-slate-800 opacity-0 group-hover:opacity-100'
        }`}
      />
      <span
        className={`font-mono text-xs font-bold pt-0.5 transition-colors ${
          isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-300'
        }`}
      >
        0{index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3
            className={`text-sm sm:text-base font-bold transition-colors truncate ${
              isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
            }`}
          >
            {feature.title}
          </h3>
        </div>
        <p
          className={`text-xs mt-0.5 line-clamp-1 transition-colors ${
            isActive ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'
          }`}
        >
          {feature.tagline}
        </p>
        {isActive && (
          <div className="mt-2.5 h-0.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              key={`progress-${index}`}
              className="h-full bg-cyan-400 transition-all ease-linear"
              style={{
                animation: `progressAnimation ${autoplayInterval}ms linear`,
              }}
            />
          </div>
        )}
      </div>
    </button>
  );
}