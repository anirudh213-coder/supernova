import type { ReactNode } from 'react';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface OpenOrderModalProps { onOpenOrderModal: () => void; }
export interface OrderModalProps { isOpen: boolean; onClose: () => void; }

export interface PillButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  alwaysShowLabel?: boolean;
}

export interface CarouselDotsProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface Feature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  bgImage: string;
}
export interface FeatureDisplayCardProps { features: Feature[]; activeIndex: number; }
export interface FeatureMobileCardProps { features: Feature[]; activeIndex: number; onSelect: (index: number) => void; }
export interface FeatureNavButtonProps {
  feature: Feature; index: number; isActive: boolean; autoplayInterval: number; onSelect: () => void;
}

export interface SpecItem { label: string; value: string; }
export interface SpecCategory { id: string; title: string; tagline: string; items: SpecItem[]; }
export interface SpecDisplayCardProps {
  category: SpecCategory; image: string; activeIdx: number; totalCategories: number;
  onNext: () => void; onPrev: () => void;
}
export interface SpecMobileCardProps {
  category: SpecCategory; image: string; activeIdx: number; totalCategories: number;
  onNext: () => void; onPrev: () => void; onSelect: (idx: number) => void;
}
export interface SpecNavButtonProps { category: SpecCategory; idx: number; isActive: boolean; onClick: () => void; }

export interface Company { id: string; name: string; svg: ReactNode; }
export interface Testimonial {
  id: string; quote: string; author: string; role: string; company: string; rating: number;
}
export interface ContactFormData { name: string; email: string; message: string; }

export interface SectionHeaderProps {
  subtitle: string; title: string; description?: string; className?: string;
}
