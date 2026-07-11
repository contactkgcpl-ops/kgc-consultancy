import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the generated background images
import heroBg1 from '../../assets/images/hero/hero_hq_1.png';
import heroBg2 from '../../assets/images/hero/hero_hq_2.png';

const TYPING_WORDS = ["Formulate", "Innovate", "Create"];

export function About() {
  const [loaded, setLoaded] = useState(false);

  // Typewriter state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const word = TYPING_WORDS[currentWordIndex];
    let timeoutId;

    if (!isDeleting && currentText === word) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1200); // Pause before deleting
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      const nextText = isDeleting
        ? word.substring(0, currentText.length - 1)
        : word.substring(0, currentText.length + 1);

      // Fast animation
      timeoutId = setTimeout(() => setCurrentText(nextText), isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden py-24 bg-[#f8f9fa]"
      aria-label="About Us"
    >
      <div className="container-xl px-4 md:px-8 mx-auto relative z-20">
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Left Side: Creative Graphic Layout */}
          <div className="flex items-center gap-6 md:gap-8 pt-12">

            {/* First Circle (Left) */}
            <div className="relative">
              {/* Leaves */}
              <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                <div className="w-16 h-16 bg-[#475569] border-[2px] border-[#f05a28] rounded-tr-[100%] rounded-bl-[100%] -rotate-12" />
                <div className="w-16 h-16 bg-[#f05a28] rounded-tl-[100%] rounded-br-[100%] rotate-12" />
              </div>

              {/* Circle Image */}
              <div className="w-48 h-48 md:w-[260px] md:h-[260px] rounded-full border-[6px] border-[#f05a28] overflow-hidden relative flex items-center justify-center shadow-lg bg-white">
                <img src={heroBg1} alt="Formulation lab" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-[#359db5]/40 mix-blend-multiply" />
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full border-[4px] border-[#f05a28] z-10 relative shadow-sm" />
              </div>
            </div>

            {/* Second Circle (Right) */}
            <div className="relative z-20">
              {/* Leaves */}
              <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                <div className="w-16 h-16 bg-[#f05a28] rounded-tr-[100%] rounded-bl-[100%] -rotate-12" />
                <div className="w-16 h-16 bg-[#475569] border-[2px] border-[#f05a28] rounded-tl-[100%] rounded-br-[100%] rotate-12" />
              </div>

              {/* Circle Image */}
              <div className="w-48 h-48 md:w-[260px] md:h-[260px] rounded-full border-[6px] border-[#f05a28] overflow-hidden relative flex items-center justify-center shadow-lg bg-white">
                <img src={heroBg2} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full border-[4px] border-[#f05a28] z-10 relative shadow-sm" />
              </div>
            </div>

          </div>

          {/* Right Side: Animated Text */}
          <div className="text-center lg:text-left flex flex-col justify-center min-w-[320px]">

            <div className="mb-8">
              <h2 className="text-6xl md:text-7xl lg:text-[84px] text-[#f05a28] font-medium leading-tight tracking-tight">
                We
              </h2>
              <h2 className="text-6xl md:text-7xl lg:text-[84px] text-[#f05a28] font-medium leading-tight tracking-tight flex items-center justify-center lg:justify-start">
                {currentText}
                <span className="inline-block w-[4px] md:w-[6px] h-[60px] md:h-[80px] bg-[#f05a28] ml-2 animate-pulse"></span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 justify-center lg:justify-start mb-10 text-left items-center lg:items-start">
              <div className="w-12 h-[2px] bg-slate-300"></div>
              <p className="text-sm md:text-base text-slate-500 font-semibold leading-snug max-w-md">
                KGC Consultancy helps entrepreneurs, startups, SMEs, and established businesses transform innovative ideas into successful market-ready products.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-center lg:justify-start gap-3 text-navy hover:text-[#f05a28] text-sm font-bold tracking-[0.15em] uppercase transition-colors group"
            >
              LEARN MORE ABOUT US
              <ArrowRight strokeWidth={1.5} className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
