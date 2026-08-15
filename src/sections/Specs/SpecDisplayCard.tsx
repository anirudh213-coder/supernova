// src/components/sections/Specs/SpecDisplayCard.tsx
import React, { useState, useRef } from 'react';
import type { SpecDisplayCardProps } from '../../types';

export function SpecDisplayCard({ category, image, activeIdx, totalCategories, onNext, onPrev }: SpecDisplayCardProps) {
  const desktopCardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ pxX: 0, pxY: 0 });
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
    return { rotateX: -normY * maxTilt, rotateY: normX * maxTilt, x, y };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    const tilt = calculateTilt(e.clientX, e.clientY, e.currentTarget);
    setRotate({ x: tilt.rotateX, y: tilt.rotateY });
    setCursorPos({ pxX: tilt.x, pxY: tilt.y });
  };

  const handleInteractionStart = () => setIsHovered(true);
  const handleInteractionEnd = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
      {/* 3D Interactive Full-Bleed Product Image Card */}
      <div className="col-span-5 [perspective:1200px] flex min-h-[440px] sm:min-h-[500px]">
        <div
          ref={desktopCardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          style={{
            transform: isHovered
              ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.03, 1.03, 1.03)`
              : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl group cursor-crosshair border border-slate-800 bg-slate-900 overflow-hidden"
        >
          {/* Full-Bleed Card Product Image Layer */}
          <div style={{ transform: 'translateZ(30px)' }} className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            {image ? (
              <img
                key={`desktop-img-${activeIdx}`}
                src={image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out animate-specs-fade"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-500 font-mono text-xs">
                <span>Product Asset Image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/70 pointer-events-none" />
          </div>

          {/* Dynamic Cursor Light Spotlight */}
          <div
            className="absolute -inset-px transition-opacity duration-300 rounded-3xl pointer-events-none z-10"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(500px circle at ${cursorPos.pxX}px ${cursorPos.pxY}px, rgba(34, 211, 238, 0.25), transparent 70%)`,
            }}
          />

          {/* Edge Specular Sheen Effect */}
          <div
            className="absolute -inset-px transition-opacity duration-300 rounded-3xl border border-cyan-400/50 pointer-events-none z-10"
            style={{
              opacity: isHovered ? 0.9 : 0,
              maskImage: `radial-gradient(280px circle at ${cursorPos.pxX}px ${cursorPos.pxY}px, black 20%, transparent 80%)`,
              WebkitMaskImage: `radial-gradient(280px circle at ${cursorPos.pxX}px ${cursorPos.pxY}px, black 20%, transparent 80%)`,
            }}
          />

          <div style={{ transform: 'translateZ(50px)' }} className="relative z-20 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-3 py-1 rounded-full shadow-lg transition-all duration-300">
              MODEL // {category.id.toUpperCase()}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </div>

          <div style={{ transform: 'translateZ(50px)' }} className="relative pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono z-20">
            <span className="text-white font-semibold tracking-wide drop-shadow-md">{category.title}</span>
            <span className="text-[11px] text-cyan-300 font-medium drop-shadow-md">TILT: {rotate.x.toFixed(1)}° / {rotate.y.toFixed(1)}°</span>
          </div>
        </div>
      </div>

      {/* Specification Details Card */}
      <div className="col-span-7 flex">
        <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between backdrop-blur-xl animate-specs-fade">
          <div>
            <div className="mb-6 pb-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{category.title}</h4>
                <p className="text-slate-400 text-sm mt-1 max-w-lg">{category.tagline}</p>
              </div>
              <span className="text-xs font-mono text-cyan-400/90 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-md self-start sm:self-auto">
                {activeIdx + 1} / {totalCategories}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              {category.items.map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-950 transition-all duration-300 group flex flex-col justify-between">
                  <dt className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-cyan-300 transition-colors">{item.label}</dt>
                  <dd className="text-base font-semibold text-white mt-2">{item.value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <button onClick={onPrev} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60 text-xs font-mono flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span>Prev Spec</span>
            </button>
            <button onClick={onNext} className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold transition-all flex items-center gap-2">
              <span>Next Spec</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}