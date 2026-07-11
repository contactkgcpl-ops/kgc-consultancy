import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomeIntro() {
  return (
    <section className="w-full pt-16 md:pt-24 pb-8 md:pb-12 bg-white relative overflow-hidden">
      <div className="container-xl px-4 md:px-8 mx-auto max-w-7xl">
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative">
          
          {/* Subtle Vertical Divider Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2"></div>

          {/* Block 1: Who We Are */}
          <div className="text-left">
            <span className="text-[#f05a28] font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#f05a28]"></span> WHO WE ARE
            </span>
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-[#0b1b3d] mb-6">
              KGC Consultancy
            </h2>
            <p className="text-slate-500 text-[15px] leading-[1.8] mb-4">
              KGC Consultancy is a team driven by visionary leaders, consultants & engineers, with a common passion to assist companies & new entrepreneurs in the FMCG, food & beverage processing and packaging sector. We have a team of industry experts with decades of experience who are known for their restorative skills and proven accomplishments. KGC can help you overcome any challenges that you might face in the industry. Above all, we can be your first point of contact for scaling existing infrastructure and minimizing overall costs for increased profitability.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#359db5] hover:text-[#f05a28] font-bold text-sm uppercase tracking-widest transition-colors group">
              Read more
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Block 2: What Do We Do */}
          <div className="text-left">
            <span className="text-[#f05a28] font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#f05a28]"></span> WHAT DO WE DO
            </span>
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-[#0b1b3d] mb-6">
              End-to-End Product Development & Consulting Services
            </h2>
            <p className="text-slate-500 text-[15px] leading-[1.8] mb-4">
              Our aim at KGC is to transform your ideas into market-ready products. Our area of expertise is providing complete consultancy in the entire FMCG and F&B industry. We assist you in every phase of the process. We make the process smooth and easy, with your ideas kept safe and confidential. We aim to ensure that your products reach the market, stand out and succeed.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#359db5] hover:text-[#f05a28] font-bold text-sm uppercase tracking-widest transition-colors group">
              Our Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
