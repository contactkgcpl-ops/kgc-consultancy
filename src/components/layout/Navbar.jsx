import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Categories', href: '/categories' },
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
          ? 'top-0 bg-white/90 backdrop-blur-md shadow-[0_10px_40px_rgb(0,0,0,0.05)] border-transparent py-3' 
          : 'top-0 bg-white border-slate-100 py-5'
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          
          {/* Logo Area */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0 group">
            <img 
              src="/src/assets/images/logo.png" 
              alt="KGC Private Limited" 
              className="h-12 md:h-16 w-auto object-contain scale-110 origin-left"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 ml-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => 
                    `relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 group ${
                      isActive ? 'text-accent' : 'text-slate-700 hover:text-navy'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link 
              to="/contact" 
              className="btn-primary py-3 px-6 text-xs font-bold rounded-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-navy hover:text-accent transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 overflow-hidden transition-all duration-400 shadow-xl ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-xl py-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block text-lg font-bold transition-colors ${
                      isActive ? 'text-accent' : 'text-slate-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="btn-primary py-4 mt-4 w-full justify-center rounded-sm text-sm"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
