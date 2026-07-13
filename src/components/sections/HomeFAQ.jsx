import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What types of products do you help develop?",
    answer: "We specialize in a wide range of products including food & beverages, nutritional powders, juices, cosmetics, skincare, and shampoos. Our team of certified food scientists and formulation experts can bring almost any concept to life."
  },
  {
    question: "Do you provide end-to-end manufacturing solutions?",
    answer: "Yes, we offer complete turnkey solutions. We handle everything from initial recipe formulation and product development to sourcing third-party manufacturers, finalizing packaging, and executing a successful market launch."
  },
  {
    question: "How do you protect our recipes and product ideas?",
    answer: "Your confidentiality is our top priority. We operate under strict Non-Disclosure Agreements (NDAs) to ensure that your intellectual property, recipes, and business strategies are kept completely safe and confidential."
  },
  {
    question: "Can you help us find the right vendors and suppliers?",
    answer: "Absolutely. Our supply chain consultancy services include extensive vendor development. We optimize procurement, streamline your logistics, and connect you with highly reliable suppliers and third-party manufacturers."
  }
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-4 pb-8 md:pb-10 bg-slate-50/50">
      <div className="container-xl px-4 md:px-8 mx-auto max-w-4xl">
        
        <div className="text-center mb-8">
          <div className="mb-2">
            <span className="text-[#ec660c] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">FAQ</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Everything you need to know about working with KGC Consultancy.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-white shadow-md border-transparent' : 'bg-transparent hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold pr-4 transition-colors ${isOpen ? 'text-accent' : 'text-navy'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-accent/10 text-accent' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 pt-0 text-slate-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
