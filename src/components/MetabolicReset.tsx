import { motion } from 'framer-motion';
import { METABOLIC_STEPS } from '../constants';

export function MetabolicReset() {
  return (
    <section id="about" className="pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12">
              The Metabolic Reset
            </h2>
            
            <div className="space-y-10">
              {METABOLIC_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl font-bold text-[#4d6a36]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative self-end"
          >
            <div className="overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/d/1fQcCWnZvo1x1o0egP7_IJYxGIMEcgeSG"
                alt="Diet Plan"
                className="w-full h-auto mix-blend-multiply block"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-12 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] z-20">
              <p className="text-sm font-bold text-primary">
                "Practical, long-term habits that ensure your health transformation is permanent."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
