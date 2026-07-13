import { Link } from 'react-router-dom';
import { 
  Phone,
  Mail,
  MapPin,
  ChevronUp
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] relative overflow-hidden">
      
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          
          {/* Left: Idea & Subscribe */}
          <div className="lg:w-1/2">
            <h2 className="text-[24px] md:text-[28px] text-white font-medium leading-snug mb-5">
              Got an <span className="font-serif italic font-light">Idea</span> ? <br/>
              Want to <span className="text-gray-500 mx-1">/</span> <span className="font-serif italic font-light">Collaborate</span> ?
            </h2>
            <div className="flex w-full max-w-[340px] bg-white overflow-hidden p-1 h-10 rounded-[2px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent px-3 text-black outline-none placeholder:text-gray-500 text-xs"
              />
              <button className="bg-black text-white px-5 font-bold text-[12px] tracking-wide rounded-[2px] hover:bg-[#ec660c] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: Links */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-16 lg:justify-end pr-8">
            {/* Services */}
            <div>
              <h4 className="text-gray-500 text-[12px] mb-3">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Food Consulting</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Food Contract Manufacturing</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Beverage Formulation Services</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Functional Food Product Formulation</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Food Product Development</Link></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-gray-500 text-[12px] mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Contact Us</Link></li>
                <li><Link to="/team" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Our Team</Link></li>
                <li><Link to="/career" className="text-gray-200 hover:text-[#ec660c] text-[12px] transition-colors">Career</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="border-t border-[#2a2a2a] relative">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Left: Let's Build Together + Floating Icons */}
            <div className="relative w-full lg:w-[55%] flex items-center">
              
              {/* Floating Icons Removed */}
              
              {/* Massive Text */}
              <div>
                <h1 className="text-[44px] sm:text-[56px] md:text-[72px] font-black text-[#222222] leading-[0.9] tracking-tighter uppercase break-words w-full">
                  LET'S<br/>
                  BUILD<br/>
                  TOGETHER
                </h1>
              </div>
            </div>

            {/* Right: Logo & Contacts */}
            <div className="lg:w-[45%] flex flex-col items-start lg:items-end text-left lg:text-right pr-4">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src="/src/assets/images/logo.png" 
                  alt="KGC Private Limited" 
                  className="h-12 md:h-20 w-auto object-contain brightness-0 invert"
                />
              </Link>
              
              <div className="flex flex-col lg:items-end gap-2.5 text-[12px] text-gray-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                  <a href="tel:+918130404757" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#ec660c]" /> +91 8130404757
                  </a>
                  <a href="tel:+918826313121" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#ec660c]" /> +91 8826313121
                  </a>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-3.5 h-3.5 text-[#ec660c]" /> info@kgcconsultancy.com
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#ec660c]" /> C-40 Sector-58, Noida, Uttar Pradesh, 201309
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a] relative">
        <div className="container mx-auto px-4 md:px-8 py-3.5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 pr-12">
            <p className="text-[#666] text-[11px]">
              &copy; {currentYear}. KGC Consultancy. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-5">
              <a href="#" className="text-[#666] hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
              </a>
              <a href="#" className="text-[#666] hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-[#666] hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-[#666] hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-0 bottom-0 md:right-4 md:bottom-2 w-8 h-8 bg-[#333] border border-[#444] rounded-sm text-white flex items-center justify-center hover:bg-[#ec660c] hover:border-[#ec660c] transition-colors z-10"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

    </footer>
  );
}
