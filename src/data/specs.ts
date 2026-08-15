// data/specs.ts
// Content for the Specs section, including the product image sequence
// that maps 1:1 to specsData categories by index.

import type { SpecCategory } from '../types';
import { sn_product1, sn_product2, sn_product3 } from '../assets/index';

export const specImages = [sn_product1, sn_product2, sn_product3];

export const specsData: SpecCategory[] = [
  {
    id: 'audio-engine',
    title: 'Audio Engine',
    tagline: 'Ultra-low latency processing with mastering-grade dynamic headroom.',
    items: [
      { label: 'Sample Rate', value: 'Up to 192kHz / 32-bit float' },
      { label: 'Dynamic Range', value: '124dB (A-weighted)' },
      { label: 'Frequency Response', value: '5Hz - 45kHz (±0.1dB)' },
      { label: 'Round-trip Latency', value: '< 0.5ms at 96kHz' },
    ],
  },
  {
    id: 'io-config',
    title: 'I/O Configuration',
    tagline: 'Versatile analog and optical connectivity for studio and live rigs.',
    items: [
      { label: 'Analog Inputs', value: '4x Neutrik XLR/TRS Combo (Mic/Line/Inst)' },
      { label: 'Analog Outputs', value: '4x 1/4" TRS Balanced, 2x Headphone' },
      { label: 'Digital Connections', value: 'ADAT Optical (8-channel), S/PDIF' },
      { label: 'Data Port', value: 'USB-C 3.2 Gen 2' },
    ],
  },
  {
    id: 'physical-properties',
    title: 'Physical Properties',
    tagline: 'Tour-ready titanium housing built for high-stress production environments.',
    items: [
      { label: 'Form Factor', value: 'Standard 1U Rackmount' },
      { label: 'Chassis Material', value: 'Aerospace-grade Titanium & Aluminum' },
      { label: 'Dimensions', value: '19.0" x 1.75" x 8.5" (482 x 44 x 216 mm)' },
      { label: 'Weight', value: '7.1 lbs (3.2 kg)' },
    ],
  },
];