// data/testimonials.ts
// Content for the Testimonials section: customer quotes + partner company logos.

import React from 'react';
import type { Company, Testimonial } from '../types';

export const realCompanies: Company[] = [
  {
    id: 'github',
    name: 'GitHub',
    svg: React.createElement(
      'svg',
      { className: 'h-7 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', {
        d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
      })
    ),
  },
  {
    id: 'vercel',
    name: 'Vercel',
    svg: React.createElement(
      'svg',
      { className: 'h-6 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', { d: 'M24 22.525H0l12-21.05 12 21.05z' })
    ),
  },
  {
    id: 'google',
    name: 'Google',
    svg: React.createElement(
      'svg',
      { className: 'h-7 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', {
        d: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
      })
    ),
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    svg: React.createElement(
      'svg',
      { className: 'h-8 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', {
        d: 'M6.758 10.511c.088-.501.298-.949.632-1.343.333-.395.789-.592 1.368-.592.544 0 .973.184 1.289.553.316.368.491.868.526 1.5l-3.815-.118zm7.394 5.974c-.386.413-.886.619-1.501.619-.579 0-1.026-.175-1.342-.526-.316-.351-.474-.825-.474-1.421 0-.649.167-1.14.5-1.474.333-.333.807-.5 1.421-.5.597 0 1.062.158 1.395.474v2.828zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.842 16.355c-.211.386-.491.684-.842.895-.351.211-.754.316-1.21.316-.544 0-1.009-.167-1.395-.501l-.263.632h-1.684v-7.158h1.684v.789c.386-.597.947-.895 1.684-.895.825 0 1.465.289 1.921.868.456.579.684 1.368.684 2.368 0 .965-.193 1.864-.579 2.694z',
      })
    ),
  },
  {
    id: 'spotify',
    name: 'Spotify',
    svg: React.createElement(
      'svg',
      { className: 'h-7 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', {
        d: 'M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.38-1.32 9.84-.66 13.5 1.56.36.24.54.84.241 1.261zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
      })
    ),
  },
  {
    id: 'apple',
    name: 'Apple',
    svg: React.createElement(
      'svg',
      { className: 'h-7 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', {
        d: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.67-.82 1.13-1.96.99-3.09-1 .04-2.18.67-2.88 1.49-.6.7-1.13 1.83-.98 2.94 1.11.09 2.22-.52 2.87-1.34z',
      })
    ),
  },
  {
    id: 'netflix',
    name: 'Netflix',
    svg: React.createElement(
      'svg',
      { className: 'h-7 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', { d: 'M5.398 0v24h3.693V13.882L14.7 24h3.902V0h-3.693v10.118L9.3 0H5.398z' })
    ),
  },
  {
    id: 'meta',
    name: 'Meta',
    svg: React.createElement(
      'svg',
      { className: 'h-6 w-auto fill-current', viewBox: '0 0 24 24' },
      React.createElement('path', {
        d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z',
      })
    ),
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Integrating Supernova into our enterprise edge pipeline drastically reduced rendering latency across global workloads.',
    author: 'Elena Rostova',
    role: 'Lead Systems Engineer',
    company: 'Anthropic Infrastructure',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'The low-latency stream handling effortlessly powers our real-time telemetry analytics and high-volume deployment tasks.',
    author: 'Marcus Vance',
    role: 'VP of Cloud Platform',
    company: 'IBM Cloud Ops',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Supernova enabled zero-friction GPU orchestration with sub-millisecond audio and data routing across multi-region clusters.',
    author: 'Sarah Jenkins',
    role: 'Principal AI Architect',
    company: 'NVIDIA Quantum Team',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'Deploying directly onto our edge networks provided an ultra-resilient architecture with instant failover protection.',
    author: 'David Chen',
    role: 'Head of Edge Computing',
    company: 'Cloudflare Network Group',
    rating: 5,
  },
  {
    id: '5',
    quote:
      'Its modular architecture simplified our real-time media ingestion pipeline while maintaining peak performance.',
    author: 'Claire Dupont',
    role: 'Senior Director of Tech',
    company: 'Adobe Creative Cloud',
    rating: 5,
  },
];