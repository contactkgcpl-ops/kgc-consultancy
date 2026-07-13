import { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/images/portfolio/1.jpg';
import img2 from '../../assets/images/portfolio/2.jpg';
import img3 from '../../assets/images/portfolio/3.jpg';
import img4 from '../../assets/images/portfolio/4.jpg';
import img5 from '../../assets/images/portfolio/5.jpg';
import img6 from '../../assets/images/portfolio/6.jpg';
import img7 from '../../assets/images/portfolio/7.jpg';
import img8 from '../../assets/images/portfolio/8.jpg';
import img9 from '../../assets/images/portfolio/9.jpg';
import img10 from '../../assets/images/portfolio/10.jpg';
import imgSpices from '../../assets/images/portfolio/spices.png';
import imgSupplement from '../../assets/images/portfolio/supplement.png';
import imgJuice from '../../assets/images/portfolio/juice.png';
import imgFaceWash from '../../assets/images/portfolio/facewash.jpg';
import imgShampoo from '../../assets/images/portfolio/shampoo.jpg';
import imgProteinBar from '../../assets/images/portfolio/proteinbar.jpg';

const PORTFOLIO_ITEMS = [
  {
    id: 'spices',
    image: imgSpices, // MALA'S ROYAL GARAM MASALA
    title: "KGC Premium Spices",
    desc: "Premium packaging formulation and design for authentic, hand-ground organic spices."
  },
  {
    id: 'protein',
    image: imgSupplement,
    title: "KGC Whey Protein",
    desc: "Advanced nutritional protein tub formulation with superior mixability and taste profile."
  },
  {
    id: 'makhana1',
    image: img1, // DEEP ROOT MAKHANA
    title: "KGC Dark Magic Makhana",
    desc: "Garden's ruby delight - dark magic chocolate coated makhana for guilt-free crunch."
  },
  {
    id: 'makhana2',
    image: img2, // WINNER'S MAKHANA
    title: "KGC Classic Makhana",
    desc: "Healthy snacking transformed. Trendy superfood fox nuts with traditional authentic flavors."
  },
  {
    id: 'proteinbar',
    image: imgProteinBar, // STROOM PROTEIN BAR
    title: "KGC Exotic Protein Bar",
    desc: "Stroom's mind-blowing Exotic Mango Coconut centre-filled protein bar. 20g protein, no added sugar, high in calcium & iron. Perfect post-workout fuel."
  },
  {
    id: 'chips',
    image: img9, // BANANA CHIPS
    title: "KGC Banana Chips",
    desc: "Thin, salty, crispy Kerala banana chips. 100% trans-fat free traditional snack formulation."
  },
  {
    id: 'facewash',
    image: imgFaceWash, // KGC FACE WASH
    title: "KGC Natural Glow Face Wash",
    desc: "Deep cleansing, hydrates skin & brightens complexion. Paraben free formula enriched with Aloe Vera & Green Tea. For all skin types."
  },
  {
    id: 'bombs',
    image: img5, // MR BOMZY COCKTAIL BOMBS
    title: "KGC Flavour Bombs",
    desc: "Drop, fizz, and chill! Premium flavour bombs to instantly create bar-quality juices and mocktails."
  },
  {
    id: 'juice1',
    image: img8, // THE BOBALIST
    title: "KGC Refreshing Juice",
    desc: "100% natural fruit juice formulation with exciting bursting flavor pearls for the ultimate hydration."
  },
  {
    id: 'juice3',
    image: imgJuice, // STROOM COLD PRESSED JUICE
    title: "KGC Cold-Pressed Juice",
    desc: "Exotic mango coconut cold-pressed juice. No added sugar, source of Vitamin C and Potassium."
  },
  {
    id: 'juice4',
    image: img6, // FLUKE ENERGY
    title: "KGC Sparkling Green Apple",
    desc: "A refreshing green apple sparkling energy juice to sharpen focus and replenish energy all day."
  },
  {
    id: 'shampoo',
    image: imgShampoo, // KGC HERBAL SHAMPOO
    title: "KGC Herbal Shampoo",
    desc: "Strengthens hair, reduces hair fall & nourishes scalp. Paraben free, enriched with Aloe Vera & Bhringraj. For all hair types."
  }
];

export function HomeServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Forced HMR reload
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pb-12 md:pb-16 pt-0 bg-white" 
      aria-labelledby="services-heading"
    >
      <div className="container-xl px-4 md:px-8 mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-16">
          
          {/* Header */}
          <div className="mb-6">
            <div className={`mb-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[#ec660c] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                Our Portfolio
              </span>
            </div>
            
            <h2 className={`text-xl md:text-2xl lg:text-[28px] font-semibold text-navy mb-4 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Brands We've Helped Build
            </h2>
            
            <p className={`text-slate-500 leading-relaxed text-sm md:text-base max-w-4xl mx-auto transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              At KGC, we partner with entrepreneurs and businesses to turn their vision into market-ready products. From formulation to final packaging — hover over any product to discover how we brought these KGC brands to life.
            </p>
          </div>
        </div>

        {/* 4-Column Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              className={`group perspective-1000 w-full aspect-square transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              {/* Inner Card Container */}
              <div className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
                
                {/* Front Side (Image) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-sm overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side (Content) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_10px_40px_rgb(0,0,0,0.1)] rotate-y-180 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
