import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/powder_hero.jpg';

export function FoodPowderConsultingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-[#f4f4f4] pt-24 pb-16 md:pt-32 md:pb-24 mt-[60px] relative overflow-hidden">
        <div className="container-xl px-4 md:px-8 mx-auto relative z-10">
          <div className="w-full max-w-5xl">
            <h3 className="text-gray-400 uppercase tracking-wide text-[13px] md:text-[14px] font-semibold mb-2">
              INDIA's No.1
            </h3>
            
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium text-black leading-[1.1] mb-3 italic tracking-tight">
              Food Powder Consultant
            </h1>
            
            <h2 className="text-[18px] md:text-[22px] text-black font-medium mb-6">
              for Startups & Manufacturers
            </h2>
            
            <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed mb-8 max-w-3xl font-medium">
              Partner with <span className="font-bold text-black">KGC Consultancy</span>, the leading food powder product consultant in India. We offer expert formulation services for premixes, instant gravies, and seasoning startups.<br className="hidden md:block"/><br className="hidden md:block"/>
              <span className="font-bold text-black">KGC Consultancy</span> is India's most reliable powder consulting company. Our team of expert food scientists supports your idea development, perfects your dry recipes, and makes your product scalable and market-ready with maximum shelf life and flowability.
            </p>
            
            <div className="flex flex-wrap gap-2.5 mb-10 max-w-4xl">
              {[
                "Seasoning Powders", "Instant Gravy", "Protein Powders", 
                "Soup Premixes", "Beverage Powders", "Spice Blends"
              ].map((item, idx) => (
                <span key={idx} className="bg-[#e2e2e2] text-black text-[12px] md:text-[13px] px-4 py-2 rounded-[6px] font-medium transition-colors hover:bg-gray-300 cursor-default">
                  {item}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/contact" className="bg-black text-white px-8 py-3 rounded-full font-bold text-[13px] md:text-[14px] hover:bg-gray-800 transition-colors">
                Book a call
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-full font-bold text-[13px] md:text-[14px] hover:bg-black hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-b border-gray-100 bg-[#f4f4f4]">
        <img src={heroImage} alt="KGC Food Powder Consulting" className="w-full h-auto block" />
      </section>

      <section className="py-20 md:py-28 bg-[#f4f4f4] border-t border-gray-200">
        <div className="container-xl px-4 md:px-8 mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h4 className="text-gray-500 text-[14px] font-medium mb-2">What we cover ?</h4>
              <h2 className="text-[32px] md:text-[40px] italic text-black font-medium leading-[1.1] tracking-tight">
                Food Powder Development<br/>
                <span className="not-italic font-bold">Services</span>
              </h2>
            </div>
            <Link to="/contact" className="bg-black text-white px-6 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Book a call <span className="text-pink-300 ml-1">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                img: "/src/assets/images/services/powder_service_1.jpg",
                title: "Mango Beverage Powder",
                desc: <>Expert formulation of <span className="text-red-400 font-medium">mango beverage powders</span> with instant formula, natural taste, and no preservatives.</>
              },
              {
                num: "02",
                img: "/src/assets/images/services/powder_service_2.jpg",
                title: "Food & Beverage Innovation",
                desc: <>Comprehensive <span className="font-bold text-black">innovation consulting</span>, developing scalable and delicious powder concepts in our state-of-the-art lab.</>
              },
              {
                num: "03",
                img: "/src/assets/images/services/powder_service_3.jpg",
                title: "Lemonade Instant Drink Powder",
                desc: <>Create refreshing, natural flavored <span className="text-red-400 font-medium">lemonade powders</span> that are quick, easy to prepare, and highly scalable.</>
              },
              {
                num: "04",
                img: "/src/assets/images/services/powder_service_4.jpg",
                title: "Custom Powder Blends",
                desc: <>Unique <span className="text-red-400 font-medium">custom powder formulations</span> combining various spices, proteins, and functional ingredients for perfect consistency.</>
              },
              {
                num: "05",
                img: "/src/assets/images/services/powder_service_5.jpg",
                title: "Natural Fruit Extract Powders",
                desc: <>Transforming <span className="font-bold text-black">fresh fruits</span> into high-quality, flowable extract powders retaining their natural nutritional value.</>
              },
              {
                num: "06",
                img: "/src/assets/images/services/powder_service_6.jpg",
                title: "Mixed Fruit Smoothie Powder",
                desc: <>Formulate instant, nutritious <span className="text-red-400 font-medium">smoothie powders</span> with real fruits, rich in Vitamin C, and no added preservatives.</>
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-transparent border border-gray-300 rounded-[16px] p-2 flex flex-col">
                <div className="bg-[#fcfcfc] rounded-[12px] p-4 h-full flex flex-col border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="rounded-[8px] overflow-hidden mb-5 aspect-[4/3] w-full border border-gray-100 bg-white">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-gray-400 text-[22px] font-medium mb-1 leading-none">{service.num}</div>
                  <h3 className="text-[17px] font-bold text-black mb-4 leading-snug pr-4">{service.title}</h3>
                  <div className="w-[1px] h-8 bg-gray-300 mb-4 ml-1"></div>
                  <p className="text-[13px] text-gray-600 font-normal leading-relaxed mt-auto">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
