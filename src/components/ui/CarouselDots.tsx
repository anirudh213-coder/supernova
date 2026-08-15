// src/components/ui/CarouselDots.tsx
import type { CarouselDotsProps } from '../../types';

export default function CarouselDots({
  total,
  activeIndex,
  onSelect,
  className = '',
}: CarouselDotsProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={`dot-${index}`}
          onClick={() => onSelect(index)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? 'w-6 bg-cyan-400'
              : 'w-1.5 bg-slate-700 hover:bg-slate-500'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}