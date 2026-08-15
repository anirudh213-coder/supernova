import { useState } from 'react';
import { sn_product1, sn_product2, sn_product3 } from '../../assets/index';
import { specsData } from '../../data/specs';
import { SpecNavButton } from './SpecNavButton';
import { SpecDisplayCard } from './SpecDisplayCard';
import { SpecMobileCard } from './SpecMobileCard';

// Array mapping the imported assets directly to the specs categories in sequence
const products = [sn_product1, sn_product2, sn_product3];

export default function SpecsSection() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  // Helper to extract product image dynamically by index
  const getProductImage = (index: number) => {
    return products[index % products.length] || '';
  };

  const handleNext = () => setActiveCategoryIdx((prev) => (prev + 1) % specsData.length);
  const handlePrev = () => setActiveCategoryIdx((prev) => (prev === 0 ? specsData.length - 1 : prev - 1));

  const currentCategory = specsData[activeCategoryIdx];
  const currentImage = getProductImage(activeCategoryIdx);

  return (
    <section id="specs" className="py-12 sm:py-28 bg-[#0B0F17] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="mb-6 sm:mb-12">
          <span className="text-cyan-400 font-mono uppercase text-xs tracking-widest font-semibold block mb-1 sm:mb-2">
            Technical Specifications
          </span>
          <h3 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
            Uncompromising Fidelity
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          {specsData.map((category, idx) => (
            <SpecNavButton
              key={category.id}
              category={category}
              idx={idx}
              isActive={idx === activeCategoryIdx}
              onClick={() => setActiveCategoryIdx(idx)}
            />
          ))}
        </div>

        {/* 1. DESKTOP VIEW (lg:grid) */}
        <SpecDisplayCard
          category={currentCategory}
          image={currentImage}
          activeIdx={activeCategoryIdx}
          totalCategories={specsData.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        {/* 2. MOBILE VIEW (< lg) */}
        <SpecMobileCard
          category={currentCategory}
          image={currentImage}
          activeIdx={activeCategoryIdx}
          totalCategories={specsData.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelect={setActiveCategoryIdx}
        />

      </div>
    </section>
  );
}