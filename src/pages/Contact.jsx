import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#eff3f8] pt-32 pb-20 flex flex-col gap-8">
      
      {/* Top Section: Form Card */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12 border border-white">
          
          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold text-[#0b1b3d] mb-3 tracking-tight">Send Us a Message</h1>
            <p className="text-slate-500 text-[14px]">
              Fill out the form below and our technical team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#0b1b3d]">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#ec660c] focus:ring-1 focus:ring-[#ec660c] transition-colors text-[14px] placeholder-slate-400"
                  required
                />
              </div>
              
              {/* Company Name */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#0b1b3d]">Company Name</label>
                <input 
                  type="text" 
                  name="companyName"
                  placeholder="Your Company Ltd."
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#ec660c] focus:ring-1 focus:ring-[#ec660c] transition-colors text-[14px] placeholder-slate-400"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#0b1b3d]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#ec660c] focus:ring-1 focus:ring-[#ec660c] transition-colors text-[14px] placeholder-slate-400"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#0b1b3d]">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#ec660c] focus:ring-1 focus:ring-[#ec660c] transition-colors text-[14px] placeholder-slate-400"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-[#0b1b3d]">Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="Inquiry about Food Formulation"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#ec660c] focus:ring-1 focus:ring-[#ec660c] transition-colors text-[14px] placeholder-slate-400"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-[#0b1b3d]">Message</label>
              <textarea 
                name="message"
                placeholder="Please describe your requirements..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#ec660c] focus:ring-1 focus:ring-[#ec660c] transition-colors text-[14px] resize-none placeholder-slate-400"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-center">
              <button 
                type="submit"
                className="bg-[#ec660c] text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-all hover:-translate-y-0.5 text-[15px]"
              >
                Send Inquiry
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Bottom Section: Map & Address Card */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12 border border-white flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="text-[28px] font-bold text-[#0b1b3d] mb-4 tracking-tight">Visit Our Corporate Office</h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-[14px]">
              We welcome clients to visit our facility to discuss food and beverage projects, view our product samples, and consult with our formulation experts in person.
            </p>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-[#eff3f8] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0b1b3d]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0b1b3d] text-[15px] mb-1">KGC Headquarters</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  C-40 Sector-58,<br />
                  Noida, Uttar Pradesh 201309, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.385412497677!2d77.348425!3d28.61466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce566dc104599%3A0xc6fbffef833b4d1b!2sSector%2058%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
