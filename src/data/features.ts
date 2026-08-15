// src/data/features.ts
import React from 'react';
import type { Feature } from '../types/index';

export const AUTOPLAY_INTERVAL = 6000;

export const featuresData: Feature[] = [
  {
    id: 'f1',
    title: 'Zero-Latency Engine',
    tagline: 'Real-Time Precision',
    description:
      'Experience real-time audio processing with sub-millisecond delay, perfect for live mixing, immediate tactile feedback, and high-stakes production environments.',
    icon: React.createElement(
      'svg',
      { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1.5,
        d: 'M13 10V3L4 14h7v7l9-11h-7z',
      })
    ),
    bgImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'f2',
    title: 'Studio-Grade Preamps',
    tagline: 'Pristine Signal Path',
    description:
      'Ultra-low noise circuitry ensures your signal remains completely uncolored. Capture every micro-nuance of sound with staggering acoustic clarity.',
    icon: React.createElement(
      'svg',
      { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1.5,
        d: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
      })
    ),
    bgImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'f3',
    title: 'Neural Noise Isolation',
    tagline: 'AI Acoustic Filtering',
    description:
      'AI-driven background suppression automatically identifies and isolates unwanted ambient noise without degrading the warm harmonics of your audio source.',
    icon: React.createElement(
      'svg',
      { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1.5,
        d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      })
    ),
    bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'f4',
    title: 'Tactile Control Surface',
    tagline: 'Master Crafted Hardware',
    description:
      'Machined aluminum dials and motorized touch-sensitive faders provide deeply satisfying physical feedback for precise adjustments under pressure.',
    icon: React.createElement(
      'svg',
      { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1.5,
        d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
      })
    ),
    bgImage: 'https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'f5',
    title: 'Cross-Platform Sync',
    tagline: 'Universal Workflow Integration',
    description:
      'Seamless integration with Windows, macOS, and major DAWs. Instantly sync user custom preset banks to the cloud and restore settings on any machine globally.',
    icon: React.createElement(
      'svg',
      { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1.5,
        d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      })
    ),
    bgImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'f6',
    title: 'Armored Architecture',
    tagline: 'Tour-Ready Durability',
    description:
      'Housed in a rugged, aerospace-grade titanium chassis, explicitly built to withstand heavy handling and grueling live performance tours.',
    icon: React.createElement(
      'svg',
      { className: 'w-5 h-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1.5,
        d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      })
    ),
    bgImage: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop',
  },
];

