import { useState, useRef, useEffect } from 'react';
import { snLogo, snText } from '../../assets/index';
import { NAV_ITEMS } from '../../data/navigation';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import type { OpenOrderModalProps } from '../../types/index';

export default function Navbar({ onOpenOrderModal }: OpenOrderModalProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const isScrolled = useScrollThreshold(20);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => { 
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="relative bg-[#131B2E]/50 backdrop-blur-2xl border-none border-slate-800/80 shadow-2xl shadow-black/60 rounded-2xl md:rounded-full px-5 sm:px-8 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 sm:gap-3 group py-1">
              <img 
                src={snLogo} 
                alt="SUPERNOVA Logo" 
                className="hidden md:block h-12 sm:h-16 w-auto object-contain max-h-16 flex-shrink-0" 
              />
              <img 
                src={snText} 
                alt="SUPERNOVA Brand Text" 
                className="block md:hidden h-7 w-auto object-contain max-h-8 opacity-90 group-hover:opacity-100 transition-opacity" 
              />
              <div 
                className={`hidden md:flex overflow-hidden transition-all duration-500 ease-in-out items-center ${
                  isScrolled 
                    ? 'max-w-0 opacity-0 -translate-x-2' 
                    : 'max-w-[220px] opacity-100 translate-x-0'
                }`}
              >
                <img 
                  src={snText} 
                  alt="SUPERNOVA Brand Text" 
                  className="h-7 sm:h-10 w-auto object-contain max-h-10 opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap" 
                />
              </div>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block transition-all duration-500 ease-in-out">
            <div className="ml-4 lg:ml-8 flex items-center space-x-3 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors px-2.5 py-2 text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative flex items-center">
              <div 
                className={`flex items-center border transition-all duration-500 ease-in-out overflow-hidden rounded-full ${
                  isSearchOpen 
                    ? 'w-48 lg:w-64 px-3 py-1.5 bg-[#0B0F17]/90 border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.15)]' 
                    : 'w-10 h-10 bg-transparent border-transparent justify-center hover:bg-slate-800/60 hover:border-slate-700/60'
                }`}
              >
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-slate-400 hover:text-cyan-400 focus:outline-none flex-shrink-0 transition-colors"
                  aria-label="Toggle search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`bg-transparent border-none text-slate-200 text-xs sm:text-sm focus:outline-none placeholder-slate-500 ml-2 transition-all duration-300 ${
                    isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'
                  }`}
                />

                {isSearchOpen && (
                  <button 
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-slate-400 hover:text-white ml-1 p-0.5 rounded-full flex-shrink-0"
                    aria-label="Close search"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="p-2.5 bg-cyan-400 text-slate-950 hover:bg-cyan-300 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center group flex-shrink-0"
              aria-label="Order Now"
              title="Order Now"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-300 hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden border-t border-slate-800/80 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0 border-t-transparent pointer-events-none'
          }`}
        >
          <div
            className={`pt-3 pb-3 space-y-3 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
            }`}
          >
            <div className="px-1 pt-1">
              <div className="flex items-center bg-[#0B0F17]/90 border border-slate-800 rounded-xl px-3.5 py-2 focus-within:border-cyan-500/40 transition-colors">
                <svg className="w-4 h-4 text-cyan-400 mr-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-none text-slate-200 text-sm focus:outline-none w-full placeholder-slate-500"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 px-4 py-2.5 rounded-xl text-base font-medium transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-1">
              <button
                onClick={() => {
                  toggleMobileMenu();
                  onOpenOrderModal();
                }}
                className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 flex items-center justify-between px-5 py-3 rounded-xl text-base font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <span>Order Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}