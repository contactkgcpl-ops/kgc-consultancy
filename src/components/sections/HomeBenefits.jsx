import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const BENEFITS = [
  {
    title: 'Expert Guidance',
    description: 'With years of experience in product development, we provide complete turnkey solutions. From idea to commercialization, we provide everything under one roof.'
  },
  {
    title: 'Expert Team',
    description: 'We have a team of certified formulation experts, food scientists, and industry veterans. We have a strong industrial network with the right expertise.'
  },
  {
    title: 'Supply Chain Consultancy',
    description: 'We specialize in complete supply chain consultancy. We optimize procurement, streamline logistics, and manage vendor development to ensure operations run seamlessly.'
  },
  {
    title: 'End-to-End Coverage',
    description: 'We provide complete brand solutions, from concept to market launch. KGC handles every detail, allowing you to focus on your core business.'
  },
  {
    title: 'Tailored Solutions',
    description: 'At KGC, we address your specific needs to guarantee flawless execution. Whether dealing with manufacturing, packaging, or legal considerations, we take care of it all.'
  }
];

export function HomeBenefits() {
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
      className="py-8 md:py-10 bg-slate-50/50"
    >
      <div className="container-xl">
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
          <div 
            className={`mb-2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#ec660c] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Benefits
            </span>
          </div>
          
          <h2 
            className={`text-xl md:text-2xl lg:text-[28px] font-semibold text-navy mb-4 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Services Provide a Unique Range of Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8 mb-8 md:mb-10">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className={`flex flex-col transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Flat Orange top border like the screenshot */}
              <div className="w-full h-[2px] bg-[#ef4444] mb-3" />
              
              <h3 className="text-base font-semibold text-navy mb-2 leading-snug">
                {benefit.title}
              </h3>
              
              <p className="text-slate-500 text-[13px] leading-[1.7]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className={`text-center text-sm md:text-base text-slate-500 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Looking for a professional product business consulting services.{' '}
          <Link to="/contact" className="text-accent hover:text-accent-dark hover:underline transition-colors font-medium">
            Let's get started
          </Link>
        </div>
      </div>
    </section>
  );
}
