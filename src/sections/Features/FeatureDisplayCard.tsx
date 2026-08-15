// src/components/sections/features/FeatureDisplayCard.tsx
import type { FeatureDisplayCardProps } from '../../types';

export default function FeatureDisplayCard({ features, activeIndex }: FeatureDisplayCardProps) {
  return (
    <div className="col-span-7 relative min-h-[340px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex items-end p-5 sm:p-8 shadow-xl">
      <div className="absolute inset-0 z-0">
        {features.map((feature, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={`display-bg-${feature.id}`}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? 'opacity-60 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img
                src={feature.bgImage}
                alt={feature.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 w-full">
        {features.map((feature, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={`display-text-${feature.id}`}
              className={`transition-all duration-500 ease-out flex flex-col items-start ${
                isActive
                  ? 'opacity-100 translate-y-0 relative z-10'
                  : 'opacity-0 translate-y-6 absolute inset-x-0 bottom-0 pointer-events-none z-0'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  {feature.icon}
                </div>
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/80 border border-cyan-700/60 px-2.5 py-0.5 rounded-full">
                  {feature.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight leading-tight">
                {feature.title}
              </h3>

              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}