import React, { useState, useEffect } from 'react';
import {sn_product2} from '../../assets/index';
import type { OrderModalProps } from '../../types';


const BASE_PRICE = 1499; // Premium audio gear pricing

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open & reset states on close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setIsSubmitting(false);
      setQuantity(1);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate secure payment processing latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close modal after showing the success notification
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-[#131B2E] border border-slate-700 shadow-2xl shadow-cyan-500/10 rounded-2xl overflow-hidden transform transition-all flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0B0F17]">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Secure Checkout
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto relative">
          
          {/* Modern Success Toast / Notification Overlay */}
          {isSuccess && (
            <div className="absolute inset-0 bg-[#131B2E]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-bounce">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h4>
              <p className="text-slate-300 text-sm max-w-xs mb-4">
                Redirecting to secure payment gateway and generating your receipt...
              </p>
              <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-cyan-400 animate-pulse" />
              </div>
            </div>
          )}

          <div className="flex gap-4 items-center mb-6 bg-[#0B0F17] p-4 rounded-xl border border-slate-800">
            {/* Product Thumbnail */}
            <div className="w-20 h-20 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
               <img src={sn_product2} alt="Supernova Headset" className="w-full h-full object-cover opacity-90" />
            </div>
            
            <div className="flex-1">
              <h4 className="text-white font-semibold text-lg">Supernova Headset</h4>
              <p className="text-slate-400 text-sm mb-2">Titanium Edition</p>
              <p className="text-cyan-400 font-bold">${BASE_PRICE.toLocaleString()}</p>
            </div>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            {/* Quantity Selector & Offer Badge Container */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Quantity & Special Offer
              </label>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#0B0F17] p-4 rounded-xl border border-slate-800">
                {/* Quantity SVG Buttons + Count */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 text-white flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                    </svg>
                  </button>

                  <span className="w-8 text-center text-white font-semibold text-lg">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 text-white flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                {/* Offer Badge */}
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-2 rounded-lg text-xs font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>Save 15% on 2+ Units</span>
                </div>
              </div>
            </div>

            {/* Total Calculation */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-slate-300 font-medium">Total</span>
              <span className="text-2xl font-bold text-white">
                ${(BASE_PRICE * quantity).toLocaleString()}
              </span>
            </div>

            {/* Actions */}
            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Proceed to Payment'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}