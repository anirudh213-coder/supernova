// src/hooks/useScrollThreshold.ts
import { useState, useEffect } from 'react';

/**
 * Tracks if the user has scrolled past a certain Y-axis threshold.
 * @param threshold The scroll distance in pixels to trigger the boolean.
 * @returns boolean
 */
export function useScrollThreshold(threshold: number = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}