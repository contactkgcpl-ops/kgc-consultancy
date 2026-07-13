import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const CATEGORIES = [
  { label: 'Food Consulting', href: '/categories/food-consulting' },
  { label: 'Beverage Consulting', href: '/categories/beverage-consulting' },
  { label: 'Spices Consulting', href: '/categories/spices-consulting' },
  { label: 'Protein & Health Supplements', href: '/categories/protein-supplements' },
  { label: 'Cosmetic Formulation', href: '/categories/cosmetic-formulation' },
  { label: 'Snacks & Confectionery', href: '/categories/snacks-confectionery' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Categories', href: '/categories', dropdown: CATEGORIES },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled 
          ? 'top-0 bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgb(0,0,0,0.05)] border-transparent py-3' 
          : 'top-0 bg-white border-slate-100 py-5'
      }`}
    >
      <div className="container-xl px-4 md:px-8 mx-auto">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          
          {/* Logo Area */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0 group z-50 relative">
            <img 
              src="/src/assets/images/logo.png" 
              alt="KGC Private Limited" 
              className="h-14 md:h-20 w-auto object-contain origin-left transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 ml-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative group">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => 
                    `relative flex items-center gap-1.5 text-[14px] font-bold tracking-wide transition-colors duration-300 py-6 group-hover:text-[#ec660c] ${
                      isActive ? 'text-[#ec660c]' : 'text-[#0b1b3d]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" strokeWidth={2.5} />}
                      <span 
                        className={`absolute bottom-4 left-0 h-0.5 bg-[#ec660c] transition-all duration-300 ease-out ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>

                {/* Premium Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white rounded-[16px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 before:absolute before:content-[''] before:-top-6 before:left-0 before:w-full before:h-6">
                    {/* Beautiful Triangle Pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                    
                    <ul className="py-4 relative z-10 flex flex-col">
                      {link.dropdown.map((subLink) => (
                        <li key={subLink.href}>
                          <Link 
                            to={subLink.href}
                            className="block px-7 py-3 text-[14px] text-gray-600 font-medium hover:text-[#ec660c] hover:bg-orange-50/50 transition-colors duration-200"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link 
              to="/contact" 
              className="bg-[#0b1b3d] text-white py-3.5 px-8 text-[12px] font-bold rounded-full tracking-widest uppercase shadow-md hover:bg-[#ec660c] transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#0b1b3d] hover:text-[#ec660c] transition-colors relative z-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-8 h-8" strokeWidth={2} /> : <Menu className="w-8 h-8" strokeWidth={2} />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 overflow-y-auto transition-all duration-400 shadow-2xl ${
          mobileOpen ? 'max-h-[80vh] opacity-100 border-b' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-xl px-4 py-8 flex flex-col gap-6">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <div className="flex flex-col">
                  {link.dropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between text-[18px] font-bold text-[#0b1b3d] cursor-pointer list-none py-3">
                        {link.label}
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" strokeWidth={2.5} />
                      </summary>
                      <ul className="flex flex-col gap-1 pl-4 mt-2 mb-4 border-l-[3px] border-[#ec660c]/20">
                        {link.dropdown.map(sub => (
                          <li key={sub.href}>
                            <Link to={sub.href} onClick={closeMenu} className="text-[15px] text-gray-500 hover:text-[#ec660c] font-medium block py-2.5 pl-2">
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <NavLink
                      to={link.href}
                      onClick={closeMenu}
                      className={({ isActive }) => 
                        `block text-[18px] font-bold transition-colors py-3 ${
                          isActive ? 'text-[#ec660c]' : 'text-[#0b1b3d]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="bg-[#ec660c] text-white py-4 mt-4 w-full text-center rounded-[8px] font-bold uppercase tracking-widest text-[13px]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
