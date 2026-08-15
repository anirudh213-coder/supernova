import type { Testimonial } from '../../types';
import { IconBadge } from '../../components/ui/IconBadge';

interface TestimonialCardProps {
  item: Testimonial;
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="w-[340px] sm:w-[420px] flex-shrink-0 bg-[#131B2E]/80 border border-slate-800/90 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-xl transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1 text-cyan-400">
          {[...Array(item.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Using the new common component */}
        <IconBadge label="Verified Partner" />
      </div>

      <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed mb-6">
        "{item.quote}"
      </p>

      <div className="border-t border-slate-800/80 pt-4">
        <h4 className="text-white font-bold text-sm">{item.author}</h4>
        <p className="text-slate-400 text-xs font-mono">
          {item.role} • <span className="text-cyan-400">{item.company}</span>
        </p>
      </div>
    </div>
  );
}