import { useEffect } from 'react';
import heroBg1 from '../assets/images/hero/hero_hq_1.png';
import heroBg2 from '../assets/images/hero/hero_hq_2.png';
import mdImage from '../assets/images/team/md.jpg';
import { User, Building2, FlaskConical, Award, CheckCircle2 } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-40 md:pt-48 pb-20 min-h-[85vh] bg-white flex items-center relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-slate-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-50 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-60"></div>

      <div className="container-xl px-4 md:px-8 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Massive Premium Logo Graphic */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative pb-12 lg:pb-0">
            
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

          {/* Right Side: Text Format */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pl-10">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#ec660c]"></span>
              <span className="text-[#ec660c] font-bold tracking-[0.3em] uppercase text-[10px]">Product Innovation</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-[56px] text-[#0b1b3d] font-bold leading-[1.1] tracking-tight mb-8">
              We Turn Concepts Into <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec660c] to-[#f78c6b]">Real Products</span>
            </h1>
            
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              At KGC Consultancy, we don't just create logos and ideas. We specialize in complete Food & Beverage formulation, bringing your brand from an initial concept directly to a market-ready product packaging.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
               <button className="bg-[#0b1b3d] text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#ec660c] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(240,90,40,0.3)] hover:-translate-y-1">
                 Start Your Project
               </button>
            </div>
          </div>
          
        </div>

        {/* NEW EXACT MATCH SECTION: What We Aim (3x2 Grid Layout) */}
        <div className="mt-16 md:mt-20 w-full pt-12 relative z-20 max-w-[900px] mx-auto pb-16 px-4">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div className="md:w-5/12">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[#ec660c] text-[13px] md:text-[14px] tracking-wide">What We Do?</span>
                <span className="w-12 h-[2px] bg-[#ec660c]"></span>
              </div>
              <h2 className="text-[38px] md:text-[44px] font-normal text-[#1f2937] tracking-tight leading-tight mt-1">What We Aim?</h2>
            </div>
            <div className="md:w-6/12 flex items-center md:pl-4 mt-3 md:mt-0">
              <p className="text-[12px] md:text-[13px] text-[#4b5563] font-normal leading-relaxed">
                We offer hands-on food consulting, custom recipe formulation, and scalable contract manufacturing to help turn your product idea into a market launch with confidence and consistency.
              </p>
            </div>
          </div>

          {/* Content Section: 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 mt-6">
            
            {/* Cell 1: 200+ Section (Shifted UP) */}
            <div className="flex flex-col justify-start -mt-2 md:-mt-6 pr-2 lg:pr-4">
              {/* Team Icon */}
              <div className="w-[60px] h-[60px] bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#ec660c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 13c-3.315 0-6 2.685-6 6v1h12v-1c0-3.315-2.685-6-6-6Zm-7 2c-2.21 0-4 1.79-4 4v1h4.27a7.95 7.95 0 0 1 .73-5H5Zm14 0h-.73a7.95 7.95 0 0 1 .73 5h4v-1c0-2.21-1.79-4-4-4Z"/>
                </svg>
              </div>
              <h3 className="text-[52px] md:text-[60px] font-normal text-[#1f2937] mb-2 leading-none tracking-tight">200+</h3>
              <p className="text-[13px] font-normal text-[#1f2937] mb-3">Brand Launches</p>
              <p className="text-[11px] font-normal text-[#1f2937] leading-relaxed max-w-[220px]">
                12+ industry experts, and 6+ product categories, we've worked across FMCG, health foods, beverages, supplements, and beyond.
              </p>
            </div>

            {/* Cell 2: We Innovate (Flip Card) */}
            <div className="group w-full h-40 md:h-44 [perspective:1000px] cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-[#ec660c] rounded-[24px] flex flex-col items-center justify-center p-4 [backface-visibility:hidden] shadow-sm border border-[#ec660c]/10">
                  <div className="text-white mb-2">
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-[14px] md:text-[15px]">We Innovate</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full bg-[#0b1b3d] rounded-[24px] flex items-center justify-center p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl border-2 border-[#ec660c]/20">
                  <p className="text-white text-[11px] md:text-[12px] text-center leading-relaxed font-medium">Pioneering new food concepts and custom recipe formulations.</p>
                </div>
              </div>
            </div>

            {/* Cell 3: We Scale Brands (Flip Card) */}
            <div className="group w-full h-40 md:h-44 [perspective:1000px] cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-[#ec660c] rounded-[24px] flex flex-col items-center justify-center p-4 [backface-visibility:hidden] shadow-sm border border-[#ec660c]/10">
                  <div className="text-white mb-2">
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-[14px] md:text-[15px]">We Scale Brands</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full bg-[#0b1b3d] rounded-[24px] flex items-center justify-center p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl border-2 border-[#ec660c]/20">
                  <p className="text-white text-[11px] md:text-[12px] text-center leading-relaxed font-medium">From initial concept to full-scale contract manufacturing efficiently.</p>
                </div>
              </div>
            </div>

            {/* Cell 4: We Build Machinery (Flip Card) */}
            <div className="group w-full h-40 md:h-44 [perspective:1000px] cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-[#ec660c] rounded-[24px] flex flex-col items-center justify-center p-4 [backface-visibility:hidden] shadow-sm border border-[#ec660c]/10">
                  <div className="text-white mb-2">
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-[14px] md:text-[15px]">We Build Machinery</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full bg-[#0b1b3d] rounded-[24px] flex items-center justify-center p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl border-2 border-[#ec660c]/20">
                  <p className="text-white text-[11px] md:text-[12px] text-center leading-relaxed font-medium">Custom-designed manufacturing machinery and production lines.</p>
                </div>
              </div>
            </div>

            {/* Cell 5: We Design Brands (Flip Card) */}
            <div className="group w-full h-40 md:h-44 [perspective:1000px] cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-[#ec660c] rounded-[24px] flex flex-col items-center justify-center p-4 [backface-visibility:hidden] shadow-sm border border-[#ec660c]/10">
                  <div className="text-white mb-2">
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-[14px] md:text-[15px]">We Design Brands</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full bg-[#0b1b3d] rounded-[24px] flex items-center justify-center p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl border-2 border-[#ec660c]/20">
                  <p className="text-white text-[11px] md:text-[12px] text-center leading-relaxed font-medium">Comprehensive brand design, packaging, and market strategy.</p>
                </div>
              </div>
            </div>

            {/* Cell 6: Footer Text & Button */}
            <div className="flex flex-col justify-center items-start lg:pl-6 pt-2">
              <div className="flex flex-col mb-4 space-y-1">
                <span className="text-[14px] md:text-[15px] font-medium text-[#1a1a1a] tracking-wide">One Team.</span>
                <span className="text-[14px] md:text-[15px] font-medium text-[#1a1a1a] tracking-wide">One Facility.</span>
                <span className="text-[14px] md:text-[15px] font-medium text-[#1a1a1a] tracking-wide">Infinite Possibilities</span>
              </div>
              <button className="bg-[#1f2937] text-white px-7 py-3 rounded-[24px] font-semibold hover:bg-[#ec660c] transition-all duration-300 text-[11px] md:text-[12px] tracking-widest shadow-md">
                Lets Work Together
              </button>
            </div>

          </div>
        </div>
      </div>
      </div>

      {/* Managing Director Section */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 border-t border-gray-100 relative z-20">
        <div className="container-xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Left: MD Photo & Top Text */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end relative pb-4 lg:pb-0 pr-4 lg:pr-6">
              
              {/* Light Text Above Image */}
              <div className="w-full max-w-[460px] text-left mb-8 pl-1">
                <h3 className="text-[32px] md:text-[38px] text-[#0b1b3d] font-light leading-none mb-3 tracking-tight">
                  Let's Build <br className="hidden md:block" />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec660c] to-[#f78c6b]">Something Great</span>
                </h3>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-gray-300"></div>
                  <p className="text-gray-400 text-[11px] tracking-widest uppercase font-semibold leading-relaxed">
                    One Team. One Facility. Infinite Possibilities.
                  </p>
                </div>
              </div>

              <div className="relative w-full max-w-[460px]">
                {/* Gray Background block */}
                <div className="absolute inset-0 bg-[#f4f4f4] rounded-[24px] translate-x-4 translate-y-4"></div>
                {/* Image */}
                <img 
                  src={mdImage} 
                  alt="Managing Director" 
                  className="relative z-10 w-full h-auto rounded-[24px] object-cover shadow-sm"
                />
                
                {/* Floating Name Card */}
                <div className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 z-20 bg-white px-5 py-3 md:px-6 md:py-4 rounded-[12px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ec660c]/10 flex items-center justify-center text-[#ec660c]">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#0b1b3d] text-[14px] md:text-[15px]">Er. Keval Gandhi</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-[55%] pt-6 lg:pt-32 flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[36px] font-bold text-[#0b1b3d] leading-tight mb-1">
                Managing Director
              </h2>
              <div className="w-10 h-[3px] bg-[#ec660c] mb-4"></div>
              
              <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed mb-5 max-w-xl font-medium">
                Keval Gandhi is the Founder and Managing Director of KGC Consultancy, a leading engineering and consulting firm based in Noida, Uttar Pradesh. Under his leadership since 2008, the company has grown into a global provider of turnkey plant solutions and industrial consulting.
              </p>

              <h4 className="text-[#0b1b3d] font-bold text-[13px] tracking-widest uppercase mb-4">
                Professional Roles & Expertise
              </h4>

              <div className="flex flex-col gap-4 mb-6 max-w-xl">
                
                {/* Role 1 */}
                <div className="flex items-start gap-4">
                  <div className="text-[#ec660c] mt-0.5">
                    <User className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0b1b3d] text-[14px] mb-0.5">Industrial Consultant</h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                      He provides expert consulting for the food and beverage industries, specializing in production planning, control, and process optimization.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="flex items-start gap-4">
                  <div className="text-[#ec660c] mt-0.5">
                    <Building2 className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0b1b3d] text-[14px] mb-0.5">Founder of KGC Consultancy</h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                      He established KGC Consultancy, which offers complete, sustainable, and high-output industrial solutions for startups and large corporates alike.
                    </p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="flex items-start gap-4">
                  <div className="text-[#ec660c] mt-0.5">
                    <FlaskConical className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0b1b3d] text-[14px] mb-0.5">Lead at KGC Formulation</h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                      He is also associated with KGC Product Development, which deals in organic spices, chocolates, beverages, and automatic packaging plants.
                    </p>
                  </div>
                </div>

              </div>

              {/* Button */}
              <button className="self-start px-10 py-2 rounded-[6px] border border-[#ec660c] text-[#ec660c] font-bold text-[12px] hover:bg-[#ec660c] hover:text-white transition-colors">
                For More Info..
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-20 md:py-28 relative">
        <div className="container-xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 relative">
               {/* A beautiful composition of images */}
               <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden shadow-2xl">
                 <img src={heroBg1} alt="Food Formulation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1b3d]/90 via-[#0b1b3d]/40 to-transparent"></div>
                 
                 {/* Floating Stat Card */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-[20px] p-6 shadow-xl border border-white flex items-center justify-between">
                   <div>
                     <h4 className="text-3xl md:text-4xl font-black text-[#0b1b3d] mb-1">15+</h4>
                     <p className="text-[#ec660c] font-bold text-[13px] tracking-wide uppercase">Years of Excellence</p>
                   </div>
                   <div className="w-14 h-14 rounded-full bg-[#ec660c] flex items-center justify-center text-white shadow-lg shadow-[#ec660c]/30">
                     <Award className="w-7 h-7" />
                   </div>
                 </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2 pt-6 lg:pt-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#ec660c]"></span>
                <span className="text-[#ec660c] font-bold tracking-[0.2em] uppercase text-[12px]">Why Choose KGC</span>
              </div>
              <h2 className="text-[32px] md:text-[44px] font-bold text-[#0b1b3d] leading-[1.1] mb-6 tracking-tight">
                Setting the Standard in <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec660c] to-[#f78c6b]">Food Innovation</span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed font-medium text-[14px] md:text-[15px]">
                We combine industry-leading expertise with state-of-the-art facilities to deliver comprehensive solutions. From initial recipe development to full-scale production, we ensure your product stands out in the market.
              </p>

              <div className="space-y-6 md:space-y-8">
                
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#ec660c] transition-all duration-300 shadow-md border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-[#ec660c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1b3d] text-[16px] md:text-[18px] mb-1">End-to-End Solutions</h4>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium">Complete support from concept to commercialization.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#ec660c] transition-all duration-300 shadow-md border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-[#ec660c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1b3d] text-[16px] md:text-[18px] mb-1">Uncompromising Quality</h4>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium">Strict adherence to international food safety standards.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#ec660c] transition-all duration-300 shadow-md border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-[#ec660c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1b3d] text-[16px] md:text-[18px] mb-1">100% Confidentiality</h4>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium">Your recipes and intellectual property are always protected.</p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
