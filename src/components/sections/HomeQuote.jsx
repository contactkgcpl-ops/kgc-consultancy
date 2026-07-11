import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import quoteBg from '../../assets/images/sections/quote_bg.png';

export function HomeQuote() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white"
    >
      <div className="container-xl max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full overflow-hidden">
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${quoteBg})` }}
          />
          
          {/* Moderate Red Overlay */}
          <div className="absolute inset-0 z-10 bg-[#cf3c3c]/50 mix-blend-multiply" />
          <div className="absolute inset-0 z-10 bg-[#cf3c3c]/30" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 max-w-3xl mx-auto">
            
            {/* Quote Icon */}
            <div 
              className={`w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <Quote className="w-5 h-5 md:w-6 md:h-6 text-[#cf3c3c] fill-current" />
            </div>

            {/* Quote Text */}
            <p 
              className={`text-white text-base md:text-lg font-medium leading-relaxed md:leading-relaxed mb-6 drop-shadow-md transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              At KGC, we immerse ourselves in your vision, going beyond expectations. 
              We're not just consultants—we become a vital extension of your team, 
              utilizing our expertise and commitment to confidentiality to turn your goals into reality.
            </p>

            {/* Author */}
            <div 
              className={`transition-all duration-1000 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                Keval Gandhi, Founder
              </h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
