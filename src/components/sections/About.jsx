import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroBg1 from '../../assets/images/hero/hero_hq_1.png';
import heroBg2 from '../../assets/images/hero/hero_hq_2.png';

const TYPING_WORDS = ["Formulate", "Innovate", "Create"];

export function About() {
  const [loaded, setLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const word = TYPING_WORDS[currentWordIndex];
    let timeoutId;

    if (!isDeleting && currentText === word) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      const nextText = isDeleting
        ? word.substring(0, currentText.length - 1)
        : word.substring(0, currentText.length + 1);
      timeoutId = setTimeout(() => setCurrentText(nextText), isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden" aria-label="About Us">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-slate-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-50 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-60"></div>

      <div className="container-xl px-4 md:px-8 mx-auto relative z-20">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Left Side: Massive Premium Logo Graphic */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative pb-10 lg:pb-0">
            
            {/* The Logo Container */}
            <div className="relative flex items-center justify-center scale-75 md:scale-90 lg:scale-100 mt-8">
              
              {/* Back Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#ec660c] to-[#359db5] opacity-10 blur-[80px] rounded-full z-0 pointer-events-none"></div>

              {/* Flex container to separate the two fruits/circles with space */}
              <div className="flex items-center gap-6 md:gap-8 relative z-10">
                
                {/* First Circle (Left Fruit) */}
                <div className="relative group mt-10 md:mt-12">
                  {/* Leaves */}
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-20">
                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] bg-[#4a5568] rounded-tr-[100%] rounded-bl-[100%] rounded-tl-none rounded-br-none -rotate-12 shadow-sm border-[3px] border-[#ec660c] transition-transform duration-500 group-hover:-rotate-[25deg] origin-bottom-right" />
                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] bg-[#ec660c] rounded-tl-[100%] rounded-br-[100%] rounded-tr-none rounded-bl-none rotate-12 shadow-sm transition-transform duration-500 group-hover:rotate-[25deg] origin-bottom-left" />
                  </div>
                  {/* Fruit Body */}
                  <div className="w-52 h-52 md:w-[260px] md:h-[260px] rounded-full border-[3px] md:border-[4px] border-[#ec660c] bg-white flex items-center justify-center overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-2">
                    <img src={heroBg1} alt="Formulation lab" className="absolute inset-0 w-full h-full object-cover opacity-90 blur-[1.5px] scale-110 transition-all duration-1000 group-hover:scale-125 group-hover:blur-0" />
                    
                    <div className="absolute inset-0 bg-[#359db5]/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                    
                    {/* Inner White Hole */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full border-[3px] border-[#ec660c] z-30 relative shadow-[0_5px_15px_rgba(0,0,0,0.2)]" />
                  </div>
                </div>

                {/* Second Circle (Right Fruit) */}
                <div className="relative group mt-10 md:mt-12">
                  {/* Leaves */}
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-20">
                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] bg-[#ec660c] rounded-tr-[100%] rounded-bl-[100%] rounded-tl-none rounded-br-none -rotate-12 shadow-sm transition-transform duration-500 group-hover:-rotate-[25deg] origin-bottom-right" />
                    <div className="w-14 h-14 md:w-[72px] md:h-[72px] bg-[#4a5568] rounded-tl-[100%] rounded-br-[100%] rounded-tr-none rounded-bl-none rotate-12 shadow-sm border-[3px] border-[#ec660c] transition-transform duration-500 group-hover:rotate-[25deg] origin-bottom-left" />
                  </div>
                  {/* Fruit Body */}
                  <div className="w-52 h-52 md:w-[260px] md:h-[260px] rounded-full border-[3px] md:border-[4px] border-[#ec660c] bg-white flex items-center justify-center overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-2">
                    <img src={heroBg2} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover opacity-90 blur-[1.5px] scale-110 transition-all duration-1000 group-hover:scale-125 group-hover:blur-0" />
                    
                    <div className="absolute inset-0 bg-[#0b1b3d]/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                    
                    {/* Inner White Hole */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full border-[3px] border-[#ec660c] z-30 relative shadow-[0_5px_15px_rgba(0,0,0,0.2)]" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Side: Animated Text & Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-10">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#ec660c]"></span>
              <span className="text-[#ec660c] font-bold tracking-[0.2em] uppercase text-[10px] md:text-[12px]">Food & Beverage</span>
            </div>

            <div className="mb-6 h-[110px] md:h-[130px] lg:h-[150px]">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] text-[#0b1b3d] font-bold leading-[1.1] tracking-tight">
                We
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] text-[#0b1b3d] font-bold leading-[1.1] tracking-tight flex items-center justify-center lg:justify-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec660c] to-[#f78c6b]">{currentText}</span>
                <span className="inline-block w-[3px] md:w-[4px] h-[40px] md:h-[55px] bg-[#ec660c] ml-3 animate-pulse rounded-full"></span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              KGC Consultancy helps entrepreneurs, startups, SMEs, and established businesses transform innovative ideas into successful market-ready products.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center justify-center lg:justify-start gap-3 bg-[#0b1b3d] text-white px-6 py-3.5 md:py-4 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] md:text-[12px] hover:bg-[#ec660c] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(240,90,40,0.3)] hover:-translate-y-1 w-fit mx-auto lg:mx-0 group"
            >
              LEARN MORE ABOUT US
              <ArrowRight strokeWidth={2} className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
