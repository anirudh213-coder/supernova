import { useState, useEffect } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { studioImages } from '../../data/about';
import { AboutDesktopView } from './AboutDesktopView';
import { AboutMobileView } from './AboutMobileView';
import { AboutStats } from './AboutStats';
import { AboutCtaBanner } from './AboutCtaBanner';

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % studioImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#0B0F17] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          subtitle="About Supernova"
          title="Engineering the Next Era of Pure Acoustic Precision"
          description="SUPERNOVA was created to eliminate the trade-offs between raw digital processing horsepower and uncolored analog warmth. Designed for sound engineers, producers, and audiophiles who refuse to compromise on fidelity."
          className="text-left ml-0"
        />

        <AboutDesktopView 
          images={studioImages} 
          currentImageIndex={currentImageIndex} 
          setCurrentImageIndex={setCurrentImageIndex} 
        />
        
        <AboutMobileView 
          images={studioImages} 
          currentImageIndex={currentImageIndex} 
          setCurrentImageIndex={setCurrentImageIndex} 
        />

        <AboutStats />
        <AboutCtaBanner />

      </div>
    </section>
  );
}