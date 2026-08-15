import { SectionHeader } from '../../components/ui/SectionHeader';
import { TestimonialCarousel } from './TestimonialCarousel';
import { CompanyMarquee } from './CompanyMarquee';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0F17] text-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Using the new common component */}
        <SectionHeader 
          subtitle="Global Cloud & Infrastructure"
          title="Powered by Leading Cloud Giants"
          description="Supernova extends across top cloud providers to deliver sub-millisecond audio streaming and processing worldwide."
        />

        <TestimonialCarousel />
        <CompanyMarquee />
      </div>

      {/* Continuous CSS keyframe animation with zero hover pauses */}
      <style>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-continuous-left-to-right {
          animation: scrollLeftToRight 28s linear infinite;
        }
      `}</style>
    </section>
  );
}