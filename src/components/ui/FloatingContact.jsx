import React, { useState } from 'react';
import { MessageSquare, X, Phone, Mail } from 'lucide-react';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Menu Items (visible when isOpen is true) */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 ease-in-out origin-bottom ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Call Option */}
        <div className="group relative flex items-center justify-end">
          <a 
            href="tel:+918130404757" 
            className="w-12 h-12 rounded-full bg-[#00e676] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          >
            <Phone className="w-5 h-5 fill-current" />
          </a>
        </div>

        {/* WhatsApp Option */}
        <div className="group relative flex items-center justify-end">
          <a 
            href="https://wa.me/918130404757" 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </a>
        </div>

        {/* Email Option */}
        <div className="group relative flex items-center justify-end">
          <a 
            href="mailto:info@kgcconsultancy.com" 
            className="w-12 h-12 rounded-full bg-[#ff5252] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Toggle Button */}
      <div className="relative flex items-center justify-end">
        {isOpen && (
          <span className="absolute right-16 bg-white text-gray-700 text-[13px] py-1 px-3 rounded shadow whitespace-nowrap pointer-events-none border border-gray-100">
            Hide
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-[5px] border-y-transparent border-l-[5px] border-l-white drop-shadow-sm"></div>
          </span>
        )}
        <button 
          onClick={toggleOpen}
          className="w-14 h-14 rounded-full bg-[#ff5252] flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform z-10"
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-in spin-in-90 duration-300" />
          ) : (
            <MessageSquare className="w-6 h-6 animate-in zoom-in duration-300" />
          )}
        </button>
      </div>

    </div>
  );
}
