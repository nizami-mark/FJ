import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { cn } from '../lib/utils';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Choose Your Path to Reversal
          </h2>
          <p className="mt-4 text-slate-600">
            Transparent pricing for comprehensive health transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-300",
                plan.highlight 
                  ? "border-accent shadow-2xl scale-105 z-10 bg-white" 
                  : plan.dark 
                    ? "bg-primary border-primary text-white" 
                    : "border-slate-100 bg-slate-50 hover:border-slate-200"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  plan.dark ? "text-white" : "text-primary"
                )}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium">Rs</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-slate-400">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className={cn(
                      "w-5 h-5 flex-shrink-0",
                      plan.dark ? "text-accent" : "text-[#4d6a36]"
                    )} />
                    <span className={plan.dark ? "text-slate-300" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                plan.highlight 
                  ? "bg-accent text-primary hover:bg-accent-hover" 
                  : plan.dark 
                    ? "bg-accent text-primary hover:bg-accent-hover" 
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              )}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
