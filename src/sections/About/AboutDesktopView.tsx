import CarouselDots from '../../components/ui/CarouselDots';
import { aboutFeatures } from '../../data/about';

interface AboutDesktopViewProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
}

export function AboutDesktopView({ images, currentImageIndex, setCurrentImageIndex }: AboutDesktopViewProps) {
  return (
    <div className="hidden lg:grid grid-cols-2 gap-12 items-stretch mb-24">
      {/* Left Column: Feature Content */}
      <div className="flex flex-col gap-6 justify-between">
        {aboutFeatures.map((feature, idx) => (
          <div key={idx} className="group">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform duration-300">
              {feature.iconSvg}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Right Column: Image Carousel */}
      <div className="relative min-h-[480px]">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img src={src} alt={`Studio Environment ${index + 1}`} className="w-full h-full object-cover object-center rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-black/30 pointer-events-none rounded-xl" />
          </div>
        ))}

        <CarouselDots 
          total={images.length} 
          activeIndex={currentImageIndex} 
          onSelect={setCurrentImageIndex} 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-[#0B0F17]/70 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800"
        />
      </div>
    </div>
  );
}