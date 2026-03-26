import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Reverse Chronic <br />
              <span className="text-white">Disease</span> <br />
              <span className="text-accent">Without Lifelong Pills</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-lg">
              Specialized protocols for Type 2 Diabetes, PCOS, and Fatty Liver reversal through clinical nutrition and metabolic resetting.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent-hover transition-colors">
                Explore Plans
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Book Consultation
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Farooq Jahangir"
                className="w-full h-auto rounded-2xl grayscale-0 hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
