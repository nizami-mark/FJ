import { motion } from 'framer-motion';
import { SYMPTOMS } from '../constants';
import * as Icons from 'lucide-react';

export function Symptoms() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Tired of just managing your symptoms?
          </h2>
          <p className="mt-4 text-slate-600 italic">
            "Managing a disease is a lifelong subscription to illness. Reversing it is the path to true freedom."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/src/Metabolic reset.png"
              alt="Metabolic Reset"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SYMPTOMS.map((symptom, index) => {
              const IconComponent = (Icons as any)[symptom.icon];
              return (
                <motion.div
                  key={symptom.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-[#4d6a36]" />}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{symptom.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {symptom.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
