// src/components/sections/Specs/SpecMobileCard.tsx
import React, { useState, useRef } from 'react';
import type { SpecMobileCardProps } from '../../types';

export function SpecMobileCard({ category, image, activeIdx, totalCategories, onNext, onPrev, onSelect }: SpecMobileCardProps) {
  const mobileCardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const calculateTilt = (clientX: number, clientY: number, target: HTMLDivElement) => {
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;
    const maxTilt = 14;
    return { rotateX: -normY * maxTilt, rotateY: normX * maxTilt };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    const tilt = calculateTilt(e.clientX, e.clientY, e.currentTarget);
    setRotate({ x: tilt.rotateX, y: tilt.rotateY });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.currentTarget || !e.touches[0]) return;
    const touch = e.touches[0];
    const tilt = calculateTilt(touch.clientX, touch.clientY, e.currentTarget);
    setRotate({ x: tilt.rotateX, y: tilt.rotateY });
  };

  const handleInteractionStart = () => setIsHovered(true);
  const handleInteractionEnd = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <button
          onClick={onPrev}
          className="p-2.5 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-800 hover:bg-slate-800 active:scale-95 transition-all shadow-lg shrink-0"
          aria-label="Previous Spec"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="[perspective:1000px] flex-1 min-w-0">
          <div
            ref={mobileCardRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseEnter={handleInteractionStart}
            onTouchStart={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
            style={{
              transform: isHovered
                ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
                : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full rounded-3xl p-5 flex flex-col justify-between border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden touch-none min-h-[440px]"
          >
            <div style={{ transform: 'translateZ(20px)' }} className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              {image ? (
                <img key={`mobile-img-${activeIdx}`} src={image} alt={category.title} className="w-full h-full object-cover animate-specs-fade" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-500 font-mono text-xs">Product Image Asset</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 pointer-events-none" />
            </div>

            <div style={{ transform: 'translateZ(35px)' }} className="relative z-20 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-2.5 py-1 rounded-full shadow-md">
                0{activeIdx + 1} // {category.id.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono text-slate-300 bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-800/80">
                {activeIdx + 1}/{totalCategories}
              </span>
            </div>

            <div key={`mobile-text-${activeIdx}`} style={{ transform: 'translateZ(40px)' }} className="relative z-20 animate-specs-fade my-auto bg-transparent">
              <h4 className="text-xl font-bold text-white tracking-tight drop-shadow-md">{category.title}</h4>
              <p className="text-slate-300 text-xs mt-1 mb-4 leading-relaxed drop-shadow">{category.tagline}</p>
              <div className="space-y-2.5 bg-transparent">
                {category.items.map((item) => (
                  <div key={item.label} className="border-b border-slate-700/50 pb-1.5 bg-transparent">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block drop-shadow">{item.label}</span>
                    <span className="text-xs font-semibold text-white block drop-shadow-md">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ transform: 'translateZ(35px)' }} className="relative z-20 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[10px] font-mono text-slate-300">
              <span className="text-cyan-400 font-medium">SUPERNOVA</span>
              <span>TILT: {rotate.x.toFixed(0)}° / {rotate.y.toFixed(0)}°</span>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="p-2.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 active:scale-95 transition-all shadow-lg shrink-0"
          aria-label="Next Spec"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {Array.from({ length: totalCategories }).map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => onSelect(index)}
            className={`specs-dot ${index === activeIdx ? "specs-dot-active" : "specs-dot-inactive"}`}
            aria-label={`Go to spec category ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}