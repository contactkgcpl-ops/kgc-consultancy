import { useEffect } from 'react';
import heroBg1 from '../assets/images/hero/hero_hq_1.png';
import heroBg2 from '../assets/images/hero/hero_hq_2.png';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-[#f8f9fa] min-h-screen flex items-center">
      <div className="container-xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Left Side: Creative Graphic Layout */}
          <div className="flex items-center pt-12">
            
            {/* First Circle (Left) */}
            <div className="relative">
              {/* Leaves */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                <div className="w-8 h-12 bg-[#475569] rounded-tl-full rounded-br-full -rotate-45 -mr-1" />
                <div className="w-8 h-12 bg-[#f05a28] rounded-tr-full rounded-bl-full rotate-45 -ml-1" />
              </div>
              
              {/* Circle Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[6px] border-[#f05a28] overflow-hidden relative flex items-center justify-center shadow-lg">
                <img src={heroBg1} alt="Formulation lab" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-[#359db5]/40 mix-blend-multiply" />
                {/* Center cutout */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full z-10 relative shadow-inner" />
              </div>
            </div>

            {/* Second Circle (Right) */}
            <div className="relative -ml-8 md:-ml-12 z-20">
              {/* Leaves */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                <div className="w-8 h-12 bg-[#f05a28] rounded-tl-full rounded-br-full -rotate-45 -mr-1" />
                <div className="w-8 h-12 bg-[#475569] rounded-tr-full rounded-bl-full rotate-45 -ml-1" />
              </div>
              
              {/* Circle Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[6px] border-[#f05a28] overflow-hidden relative flex items-center justify-center shadow-lg">
                <img src={heroBg2} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
                {/* Center cutout */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full z-10 relative shadow-inner" />
              </div>
            </div>
            
          </div>

          {/* Right Side: Text Format */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-navy font-medium leading-[1.1]">
              Formulation &<br />
              Innovation
            </h2>
          </div>
          
        </div>
      </div>
    </div>
  );
}
