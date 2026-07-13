import React, { useState, useEffect } from 'react';
import { X, RefreshCw } from 'lucide-react';

export function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup automatically after 1.5 seconds on every page load for testing
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[850px] h-auto md:h-[550px] rounded-lg shadow-2xl flex flex-col md:flex-row z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Left Side (Graphic) */}
        <div className="hidden md:flex md:w-[45%] relative bg-white items-center justify-center overflow-hidden">
          {/* Orange Diagonal Top Left */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#ec660c] [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
          {/* Orange Diagonal Top Right */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0ab62] [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
          
          {/* Orange Diagonal Bottom Left */}
          <div className="absolute bottom-0 left-0 w-full h-[250px] bg-[#f59e0b] [clip-path:polygon(0_20%,0_100%,100%_100%)] opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[#ec660c] [clip-path:polygon(0_40%,0_100%,100%_100%)]"></div>

          {/* Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src="/src/assets/images/logo.png" 
              alt="KGC Consultancy" 
              className="w-48 h-auto mb-2"
            />
            <p className="text-[13px] font-bold text-gray-800 tracking-wide text-center uppercase mt-2">
              Consultants & Engineers
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-between bg-white overflow-y-auto">
          
          {/* Close Button inside Form area top right */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#ff5252] transition-colors z-20 shadow-md"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="bg-[#0b1b3d] text-white p-3 rounded text-center text-[13px] md:text-[14px] font-semibold mt-4 mb-6 shadow-sm">
            From Conceptualization To Commercialization
          </div>

          <form className="flex-1 flex flex-col justify-center space-y-4 md:space-y-5" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
            
            <input 
              type="text" 
              placeholder="Full name" 
              className="w-full py-2 px-1 text-sm text-gray-800 border-b border-[#ff5252] focus:outline-none focus:border-b-2 placeholder:text-gray-400 bg-transparent"
              required
            />
            
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full py-2 px-1 text-sm text-gray-800 border-b border-[#ff5252] focus:outline-none focus:border-b-2 placeholder:text-gray-400 bg-transparent"
              required
            />
            
            <input 
              type="tel" 
              placeholder="Phone No." 
              className="w-full py-2 px-1 text-sm text-gray-800 border-b border-[#ff5252] focus:outline-none focus:border-b-2 placeholder:text-gray-400 bg-transparent"
              required
            />
            
            <input 
              type="text" 
              placeholder="What is your inquiry about?" 
              className="w-full py-2 px-1 text-sm text-gray-800 border-b border-[#ff5252] focus:outline-none focus:border-b-2 placeholder:text-gray-400 bg-transparent"
              required
            />

            {/* Captcha Simulation */}
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#0b1b3d] font-semibold whitespace-nowrap">What is</span>
                <div className="bg-gray-100 border border-gray-300 px-4 py-1.5 rounded italic font-serif tracking-widest text-lg relative overflow-hidden select-none flex-1 max-w-[120px] text-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 40%)' }}></div>
                  <span className="relative z-10 text-gray-800 font-bold">1 + 5 ?</span>
                </div>
                <button type="button" className="text-gray-600 hover:text-black">
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Type your answer" 
                className="w-full py-2.5 px-3 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#ec660c]"
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#ff5252] hover:bg-[#e03a3a] text-white font-bold py-3 rounded transition-colors text-[14px] shadow-md mt-2"
            >
              Submit
            </button>
          </form>

          <div className="bg-[#0b1b3d] text-white p-3 rounded text-center text-[12px] md:text-[13px] font-semibold mt-6 shadow-sm tracking-wide">
            We Turn Concepts Into Real Products
          </div>

        </div>
      </div>
    </div>
  );
}
