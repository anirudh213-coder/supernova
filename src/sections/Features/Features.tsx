// src/components/sections/features/FeaturesSection.tsx
import { features_bg } from '../../assets/index';
import { featuresData, AUTOPLAY_INTERVAL } from '../../data/features';
import { useAutoplayCarousel } from '../../hooks/useAutoplayCarousel';

import FeatureNavButton from './FeatureNavButton';
import FeatureDisplayCard from './FeatureDisplayCard';
import FeatureMobileCard from './FeatureMobileCard';

export default function FeaturesSection() {
  // Logic isolated to custom hook
  const { activeIndex, setActiveIndex } = useAutoplayCarousel(
    featuresData.length,
    AUTOPLAY_INTERVAL
  );

  return (
    <section id="features" className="py-14 sm:py-20 bg-[#0B0F17] relative overflow-hidden">
      {/* Subdued Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          src={features_bg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/60 to-[#0B0F17]/80" />
      </div>

      {/* Top Subtle Border Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono uppercase text-xs tracking-widest font-semibold">
              Capabilities & Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Absolute Precision
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            Discover the high-performance hardware and real-time DSP intelligence behind SUPERNOVA.
          </p>
        </div>

        {/* 1. DESKTOP VIEW (lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Nav List */}
          <div className="col-span-5 flex flex-col justify-between space-y-2">
            {featuresData.map((feature, index) => (
              <FeatureNavButton
                key={`nav-${feature.id}`}
                feature={feature}
                index={index}
                isActive={index === activeIndex}
                autoplayInterval={AUTOPLAY_INTERVAL}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column: Display Card */}
          <FeatureDisplayCard features={featuresData} activeIndex={activeIndex} />
        </div>

        {/* 2. MOBILE VIEW (< lg) */}
        <FeatureMobileCard
          features={featuresData}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      </div>

      {/* Bottom Subtle Border Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent z-10" />
    </section>
  );
}