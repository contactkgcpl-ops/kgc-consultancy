import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Package, 
  ClipboardCheck, 
  Cpu, 
  Settings, 
  BookOpen, 
  FileSearch, 
  Handshake, 
  Wrench, 
  Scale 
} from 'lucide-react';

const SERVICES = [
  { id: 1, title: 'Project\nIdeation', icon: Lightbulb },
  { id: 2, title: 'New Product\nDevelopment', icon: Package },
  { id: 3, title: 'Project Planning &\nExecution', icon: ClipboardCheck },
  { id: 4, title: 'Technological\nSupport', icon: Cpu },
  { id: 5, title: 'Process\nImprovement', icon: Settings },
  { id: 6, title: 'Regulatory\nCompliance', icon: BookOpen },
  { id: 7, title: 'Audits &\nTraining', icon: FileSearch },
  { id: 8, title: 'Third party\nManufacturing', icon: Handshake },
  { id: 9, title: 'Turnkey\nSolutions', icon: Wrench },
  { id: 10, title: 'Legal\nAssistance', icon: Scale },
];

export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[36px] md:text-[42px] font-bold text-[#012169] mb-8">
            Services
          </h1>
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-[1000px] mx-auto text-center">
            KGC offers a comprehensive range of Consulting services designed to support your business at every stage, from concept to market launch. Our end-to-end consulting covers Project Ideation, New Product Development, and Project Planning & Execution, ensuring seamless integration of the latest technology and compliance standards. With a strong focus on Technological Support and Process Improvement, we enhance your operations, driving efficiency and quality. Our expertise allows you to innovate confidently, backed by a team dedicated to elevating your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-20">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 min-h-[180px]"
            >
              <div className="mb-5 text-gray-800">
                <service.icon strokeWidth={1.5} size={48} />
              </div>
              <h3 className="text-[#012169] font-bold text-[14px] leading-snug whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#59789e] text-[15px] md:text-[16px] mb-8 font-medium">
            Don't let challenges hold you back. Let us handle the challenging part while you focus on what matters most—growth and success.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold py-3 px-8 rounded text-[15px] transition-colors shadow-sm hover:shadow"
          >
            Consult Now
          </Link>
        </div>
      </div>
    </div>
  );
}
