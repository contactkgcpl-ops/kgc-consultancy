import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomeIntro() {
  return (
    <section className="w-full py-16 md:py-20 bg-white relative">
      <div className="container-xl px-4 md:px-8 mx-auto max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Who We Are - Left Side (Clean & Minimal) */}
          <div className="lg:w-5/12 flex flex-col justify-center relative">
            <div className="hidden lg:block absolute -left-6 top-0 w-[2px] h-16 bg-[#ec660c]"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#ec660c]"></span>
              <span className="text-[#ec660c] font-bold tracking-[0.3em] uppercase text-[10px]">Who We Are</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0b1b3d] mb-6 leading-[1.1] tracking-tight">
              KGC<br />Consultancy
            </h2>
            
            <p className="text-slate-500 text-[15px] leading-[1.7] mb-8 font-light max-w-md">
              A team driven by visionary leaders, consultants & engineers, with a common passion to assist companies & new entrepreneurs in the FMCG, food & beverage processing and packaging sector. We have a team of industry experts with decades of experience known for their restorative skills and proven accomplishments.
            </p>
            
            <Link to="/about" className="group flex items-center gap-3 text-[#0b1b3d] hover:text-[#ec660c] transition-colors w-fit">
              <span className="font-bold text-[12px] uppercase tracking-[0.15em]">Discover Our Story</span>
              <span className="w-10 h-10 rounded-full border border-slate-200 group-hover:border-[#ec660c] flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* What We Do - Right Side (Highlighted Box) */}
          <div className="lg:w-7/12 bg-slate-50 rounded-[2rem] p-8 md:p-10 lg:p-12 relative shadow-[0_15px_40px_rgb(0,0,0,0.03)] border border-slate-100">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#359db5]/10 to-transparent rounded-tr-[2rem]"></div>
            
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#359db5]"></span>
              <span className="text-[#359db5] font-bold tracking-[0.3em] uppercase text-[10px]">What We Do</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#0b1b3d] mb-6 leading-[1.2] tracking-tight">
              End-to-End Product <br className="hidden md:block"/> Development & Consulting
            </h2>
            
            <div className="w-16 h-[3px] bg-[#359db5] mb-6"></div>
            
            <p className="text-slate-600 text-[15px] leading-[1.7] mb-8 font-light">
              Our aim at KGC is to transform your ideas into market-ready products. Our area of expertise is providing complete consultancy in the entire FMCG and F&B industry. We assist you in every phase of the process, making it smooth and easy, with your ideas kept safe and confidential. We ensure that your products reach the market, stand out and succeed.
            </p>
            
            <Link to="/services" className="group inline-flex items-center gap-3 bg-[#0b1b3d] text-white hover:bg-[#359db5] px-6 py-3 rounded-full transition-all duration-300 w-fit shadow-md shadow-transparent hover:shadow-[#359db5]/30 hover:-translate-y-0.5">
              <span className="font-bold text-[12px] uppercase tracking-[0.15em]">Explore Our Services</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
