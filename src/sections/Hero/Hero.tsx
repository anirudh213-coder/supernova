// src/components/sections/Hero/HeroSection.tsx
import { bg_video } from '../../assets/index';
import type { OpenOrderModalProps } from '../../types';
import PillButton from '../../components/ui/PillButton';
import { useHeroTyping } from '../../hooks/useHeroTyping';

// Static data moved outside to prevent recreation on render
const line1Words = ['The', 'Future', 'of'];
const line2Words = ['Audio', 'Fidelity'];

export default function HeroSection({ onOpenOrderModal }: OpenOrderModalProps) {
  // All the heavy logic is hidden behind this single hook call!
  const { isLoaded, typedAbout, typedFeatures, fullAboutText, fullFeaturesText } = useHeroTyping();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0B0F17]">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={bg_video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/90 via-[#0B0F17]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 sm:gap-x-4 mb-2">
              {line1Words.map((word, index) => {
                const delay = 150 + index * 150;
                return (
                  <span
                    key={`line1-${index}`}
                    style={{ transitionDelay: `${delay}ms` }}
                    className={`inline-block text-white transition-all duration-700 ease-out transform ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 sm:gap-x-4">
              {line2Words.map((word, index) => {
                const delay = 150 + (line1Words.length + index) * 150;
                return (
                  <span
                    key={`line2-${index}`}
                    style={{ transitionDelay: `${delay}ms` }}
                    className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 transition-all duration-700 ease-out transform ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </h1>

          <p
            style={{ transitionDelay: '900ms' }}
            className={`text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 ease-out transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Experience absolute sonic precision. Learn more{' '}
            <a
              href="#about"
              className="font-semibold text-cyan-400 underline decoration-cyan-400 underline-offset-4 hover:text-cyan-300 transition-colors inline-block min-w-[50px]"
            >
              {typedAbout}
              {typedAbout.length < fullAboutText.length && (
                <span className="inline-block w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5 align-middle" />
              )}
            </a>{' '}
            our engineering or explore key{' '}
            <a
              href="#features"
              className="font-semibold text-cyan-400 underline decoration-cyan-400 underline-offset-4 hover:text-cyan-300 transition-colors inline-block min-w-[70px]"
            >
              {typedFeatures}
              {typedAbout.length === fullAboutText.length &&
                typedFeatures.length < fullFeaturesText.length && (
                  <span className="inline-block w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5 align-middle" />
                )}
            </a>{' '}
            as SUPERNOVA bridges the gap between raw processing power and pristine acoustic design.
          </p>

          <div
            style={{ transitionDelay: '1050ms' }}
            className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto lg:mx-0 transition-all duration-700 ease-out transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <PillButton
              label="Order Now"
              variant="primary"
              alwaysShowLabel
              onClick={onOpenOrderModal}
              icon={
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h2v5z" />
                </svg>
              }
            />

            <PillButton
              label="Tech Specs"
              variant="secondary"
              alwaysShowLabel
              href="#specs"
              icon={
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
            />

            <PillButton
              label="Testimonials"
              variant="secondary"
              alwaysShowLabel
              href="#testimonials"
              icon={
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 4.418 9 8z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}