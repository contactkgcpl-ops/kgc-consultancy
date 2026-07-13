import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import avatar1 from '../../assets/images/reviews/avatar1.png';
import avatar2 from '../../assets/images/reviews/avatar2.png';
import avatar3 from '../../assets/images/reviews/avatar3.png';

const REVIEWS = [
  {
    text: "Developing a functional beverage line required precision and scientific rigor. KGC Consultancy delivered exactly that. From formulation to regulatory approvals, their team ensured...",
    name: "Nidhi Saxena",
    title: "Founder, iShot",
    avatar: avatar1
  },
  {
    text: "KGC has been such a great partner in the creation of our new snack range. We could not be more confident if we had done the whole journey ourselves; their profound knowledge...",
    name: "Bhagwat Aggarwal",
    title: "Founder, Nature Balance",
    avatar: avatar2
  },
  {
    text: "KGC was instrumental in transforming our raw concept into a product that is ready for the market. Their organized method, openness, and speed of delivery were all factors in...",
    name: "Arihant Jain",
    title: "Founder, @1AM",
    avatar: avatar3
  },
  {
    text: "Their expertise in supply chain optimization helped us reduce our logistics costs by 30%. The vendor development strategies they implemented have been a game changer for our...",
    name: "Meera Rajput",
    title: "Director, Glow & Co.",
    avatar: avatar1
  },
  {
    text: "From selecting the right private label manufacturer to finalizing the packaging design, KGC Consultancy guided us flawlessly. Highly recommend them for anyone looking to launch...",
    name: "Vikram Patel",
    title: "CEO, NutriFit Solutions",
    avatar: avatar2
  },
  {
    text: "We wanted to launch a premium organic skincare line, but lacked the manufacturing contacts. KGC stepped in and handled everything from vendor selection to quality control testing.",
    name: "Rahul Verma",
    title: "Co-Founder, PureEssence",
    avatar: avatar3
  },
  {
    text: "Regulatory compliance in the food industry is a nightmare. KGC's consultants made sure our packaging labels and nutritional information were 100% compliant before we hit the shelves.",
    name: "Sneha Desai",
    title: "Product Manager, VitaBites",
    avatar: avatar1
  },
  {
    text: "The turnkey solutions provided by KGC allowed us to scale our production in just 6 months. Their network of third-party manufacturers is simply outstanding and highly reliable.",
    name: "Arjun Nair",
    title: "Director, FitFuel Nutrition",
    avatar: avatar2
  },
  {
    text: "I was amazed by the speed at which KGC developed a custom shampoo formulation for us. The product feels incredibly premium, and our customer retention has never been higher.",
    name: "Pooja Sharma",
    title: "Founder, Silk & Shine",
    avatar: avatar1
  }
];

export function HomeReviews() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // approximate width of one card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-4 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="container-xl mx-auto px-4 md:px-8 relative">
        
        <div className="text-center mb-10">
          <div className="mb-2">
            <span className="text-[#ec660c] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Client Reviews
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-navy mb-4">
            What Clients Say About us
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-black transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-black transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-2 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS.map((review, index) => (
              <div 
                key={index}
                className="min-w-[300px] md:min-w-[380px] max-w-[380px] flex-shrink-0 snap-center bg-[#f8f6f2] p-8 md:p-10 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-12 h-12 text-accent fill-current mb-6 rotate-180" />
                  <p className="text-slate-600 text-sm leading-relaxed mb-1">
                    {review.text} <span className="text-accent cursor-pointer hover:underline">View More</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-slate-200">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-medium text-sm">{review.name}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{review.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
