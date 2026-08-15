// src/components/sections/features/FeatureMobileCard.tsx
import type { FeatureMobileCardProps } from '../../types';
import CarouselDots from '../../components/ui/CarouselDots';

export default function FeatureMobileCard({
  features,
  activeIndex,
  onSelect,
}: FeatureMobileCardProps) {
  const activeFeature = features[activeIndex];

  return (
    <div className="block lg:hidden">
      <div className="features-mobile-wrapper">
        <div className="features-mobile-img-box">
          {features.map((feature, index) => (
            <div
              key={`mobile-img-${feature.id}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={feature.bgImage}
                alt={feature.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        <div key={`mobile-content-${activeIndex}`} className="features-mobile-content animate-about-fade">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              {activeFeature.icon}
            </div>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/90 border border-cyan-700/60 px-2 py-0.5 rounded-full">
              {activeFeature.tagline}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
            {activeFeature.title}
          </h3>

          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            {activeFeature.description}
          </p>
        </div>
      </div>

      <CarouselDots
        total={features.length}
        activeIndex={activeIndex}
        onSelect={onSelect}
        className="mt-6"
      />
    </div>
  );
}