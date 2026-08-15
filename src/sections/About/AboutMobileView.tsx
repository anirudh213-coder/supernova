import CarouselDots from '../../components/ui/CarouselDots';
import { aboutFeatures } from '../../data/about';

interface AboutMobileViewProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
}

export function AboutMobileView({ images, currentImageIndex, setCurrentImageIndex }: AboutMobileViewProps) {
  const activeFeature = aboutFeatures[currentImageIndex % aboutFeatures.length];

  return (
    <div className="block lg:hidden mb-24 relative">
      <div className="relative h-64 w-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={src} alt={`Studio Mobile ${index + 1}`} className="w-full h-full object-cover object-center rounded-t-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      <CarouselDots 
        total={images.length} 
        activeIndex={currentImageIndex} 
        onSelect={setCurrentImageIndex}
        className="bg-[#0B0F17] py-4"
      />

      <div key={currentImageIndex} className="bg-[#131B2E] p-6 rounded-b-xl border border-slate-800 border-t-0 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
            {activeFeature.iconSvg}
          </div>
          <h3 className="text-lg font-bold text-white">{activeFeature.title}</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          {activeFeature.description}
        </p>
      </div>
    </div>
  );
}