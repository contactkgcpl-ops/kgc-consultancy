import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import spicesHero from '../../assets/images/spices_hero.jpg';

export function SpicesConsultingPage() {
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
              Spices Consultant
            </h1>
            
            <h2 className="text-[18px] md:text-[22px] text-black font-medium mb-6">
              for Startups & Spices Business
            </h2>
            
            <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed mb-8 max-w-3xl font-medium">
              Partner with <span className="font-bold text-black">KGC Consultancy</span>, the leading spices and seasoning consultant in India. We offer expert formulation services for masala startups and manufacturers.<br className="hidden md:block"/><br className="hidden md:block"/>
              <span className="font-bold text-black">KGC Consultancy</span> is India's most reliable spices consulting company. Our team of expert consultants supports your idea development, perfects your blends, and makes your product scalable and market-ready through practical, industry-based strategies.
            </p>
            
            <div className="flex flex-wrap gap-2.5 mb-10 max-w-4xl">
              {[
                "Masala Blends", "Seasonings", "Marinades", 
                "RTE Gravies", "Condiments", "Sauces & Pastes"
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
        <img src={spicesHero} alt="KGC Spices Consulting Lab" className="w-full h-auto block" />
      </section>

      <section className="py-20 md:py-28 bg-[#f4f4f4] border-t border-gray-200">
        <div className="container-xl px-4 md:px-8 mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h4 className="text-gray-500 text-[14px] font-medium mb-2">What we cover ?</h4>
              <h2 className="text-[32px] md:text-[40px] italic text-black font-medium leading-[1.1] tracking-tight">
                Spices Product Development<br/>
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
                img: "/src/assets/images/services/service_6.png",
                title: "Custom Masala Formulation",
                desc: <>Customised <span className="text-red-400 font-medium">spice formulation</span> for unique regional and international taste profiles.</>
              },
              {
                num: "02",
                img: "/src/assets/images/services/spices_service_2.jpg",
                title: "Premium Seasonings",
                desc: <>Expert <span className="font-bold text-black">seasoning consultant support</span> to create delicious, balanced, and marketable blends.</>
              },
              {
                num: "03",
                img: "/src/assets/images/services/spices_service_3.jpg",
                title: "RTE Gravy Recipes",
                desc: <>Delicious, textured, and scalable gravy recipes for <span className="text-red-400 font-medium">FMCG brands.</span></>
              },
              {
                num: "04",
                img: "/src/assets/images/services/spices_service_4.jpg",
                title: "Marinades & Sauces",
                desc: <>Nutritious marinade recipes with a balance of taste and shelf life, ensuring <span className="text-red-400 font-medium">FSSAI</span> compliance</>
              },
              {
                num: "05",
                img: "/src/assets/images/services/spices_service_5.jpg",
                title: "Condiment Formulation",
                desc: <>Our <span className="font-bold text-black">consultant expertise</span> for balanced formulation and development.</>
              },
              {
                num: "06",
                img: "/src/assets/images/services/spices_service_6.jpg",
                title: "Shelf-Life Extension",
                desc: <>Develop <span className="text-red-400 font-medium">premium spices</span> with expert formulation for maximum flavor and shelf life.</>
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
