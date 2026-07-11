import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the generated background images
import heroBg1 from '../../assets/images/hero/hero_hq_1.png';
import heroBg2 from '../../assets/images/hero/hero_hq_2.png';
import heroBg3 from '../../assets/images/hero/hero_hq_3.png';

const HERO_SLIDES = [
  {
    img: heroBg1,
    layout: 'left',
    title: (
      <>
        <span className="block text-2xl md:text-3xl font-medium mb-2">From</span>
        <span className="block text-5xl md:text-6xl lg:text-[72px] font-medium leading-none mb-4">Conceptualization</span>
        <span className="block text-2xl md:text-3xl font-medium mb-2">To</span>
        <span className="block text-5xl md:text-6xl lg:text-[72px] font-medium leading-none mb-8">Commercialization</span>
      </>
    ),
    subtitle: null,
    cta: "FIND YOUR SOLUTION"
  },
  {
    img: heroBg2,
    layout: 'center',
    title: 'Your Confidentiality is Our Priority',
    subtitle: 'We protect what matters most to your business.',
    cta: "LET'S GET STARTED"
  },
  {
    img: heroBg3,
    layout: 'center',
    title: 'Your Trusted Food-Tech Partner',
    subtitle: 'Simplifying Solutions, Maximising Success',
    cta: "EXPLORE OUR EXPERTISE"
  }
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Image slider animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 4500); // slightly longer to read the big text
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-[640px] flex items-center justify-center overflow-hidden py-20"
      aria-label="Hero"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-cyan-900">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${loaded && currentSlideIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}

        {/* Cyan overlay exactly matching the screenshot */}
        <div className="absolute inset-0 bg-[#359db5]/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-[#42a8c0]/60 z-10" />
      </div>

      {/* Content Container */}
      <div className="container-xl relative z-20 w-full h-full flex flex-col justify-center items-center">

        {/* Dynamic Text Container */}
        <div className="relative w-full max-w-6xl min-h-[300px] md:min-h-[340px] flex items-center justify-center">
          {HERO_SLIDES.map((slide, index) => {
            const isLeft = slide.layout === 'left';

            return (
              <div
                key={index}
                className={`absolute w-full flex flex-col transition-all duration-700 ease-in-out ${isLeft ? 'items-start text-left pl-4 md:pl-12' : 'items-center text-center'
                  } ${loaded && currentSlideIndex === index
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                  }`}
              >
                {/* Main Heading */}
                {isLeft ? (
                  <div className="text-white tracking-wide mb-4 drop-shadow-sm w-full">
                    {slide.title}
                  </div>
                ) : (
                  <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-white tracking-wide leading-tight mb-4 md:mb-6 drop-shadow-sm">
                    {slide.title}
                  </h1>
                )}

                {/* Description (if exists) */}
                {slide.subtitle && (
                  <p className="text-lg md:text-[22px] text-white font-normal tracking-wide mb-10 drop-shadow-sm">
                    {slide.subtitle}
                  </p>
                )}

                {/* White separator line */}
                <div className={`w-24 h-[2px] bg-white mb-6 ${isLeft ? 'ml-0' : 'mx-auto'}`} />

                {/* CTA Link */}
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-3 text-white text-xs md:text-sm font-bold tracking-[0.15em] uppercase hover:text-white/80 transition-colors group ${isLeft ? 'ml-0' : 'mx-auto'
                    }`}
                >
                  {slide.cta}
                  <ArrowRight strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
