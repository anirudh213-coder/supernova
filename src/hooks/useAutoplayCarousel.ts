// src/hooks/useAutoplayCarousel.ts
import { useState, useEffect } from 'react';

/**
 * Handles automatic cycling through an array of items.
 * @param totalItems The length of the array to cycle through.
 * @param intervalMs The time in milliseconds between each cycle.
 */
export function useAutoplayCarousel(totalItems: number, intervalMs: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (totalItems === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [totalItems, intervalMs, activeIndex]);

  return { activeIndex, setActiveIndex };
}