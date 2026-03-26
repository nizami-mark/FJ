import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[40px] shadow-2xl overflow-hidden border border-slate-200/50">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 bg-white lg:bg-transparent">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Your Reversal Starts Here
              </h2>
              <p className="text-slate-500 mb-10">
                Fill out the form below and our team will reach out via WhatsApp to schedule your free initial consultation.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white rounded-xl border border-slate-100 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="+92 300 1234567"
                    className="w-full px-6 py-4 bg-white rounded-xl border border-slate-100 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Interested Plan
                  </label>
                  <select className="w-full px-6 py-4 bg-white rounded-xl border border-slate-100 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option>Select a plan</option>
                    <option>General Fat Loss Plan</option>
                    <option>Diabetes Reversal Plan</option>
                    <option>PCOS/PCOD Reversal Plan</option>
                    <option>Medical Nutrition Therapy</option>
                  </select>
                </div>
                
                <button className="w-full py-5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Request Consultation
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block relative h-full min-h-[600px]">
              <img
                src="/src/components/12 (1).jpg"
                alt="Your Reversal"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
