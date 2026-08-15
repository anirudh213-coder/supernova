import { testimonials } from '../../data/testimonials';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialCarousel() {
  return (
    <div className="relative w-full overflow-hidden mb-16 py-4">
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#0B0F17] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0B0F17] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-continuous-left-to-right space-x-6 items-center">
        {[...testimonials, ...testimonials].map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}