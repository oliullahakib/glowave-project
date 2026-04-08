import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
      description: "Ideal for early-stage companies ready to establish a dominant brand footprint.",
      features: [
        "Strategic Growth Layout",
        "Essential SEO Framework",
        "Modern Mobile Experience",
        "30-day Post-Launch Support",
        "Performance Optimization"
      ],
      recommended: false
    },
    {
      name: "Growth",
      price: "4,999",
      description: "Our most popular engine for companies scaling their operations exponentially.",
      features: [
        "Advanced Growth Architecture",
        "Full AI Marketing Suite",
        "Custom UI/UX Animations",
        "Priority 24/7 Strategic Support",
        "Bi-weekly Data Analysis",
        "Multi-Platform Optimization"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "Custom",
      description: "Full-scale digital infrastructure for industry leaders demanding perfection.",
      features: [
        "Bespoke Enterprise Design",
        "Global Infrastructure Scaling",
        "Dedicated Growth Manager",
        "Instant Response Support",
        "Custom AI Tooling Build",
        "Quarterly Strategic Pivot"
      ],
      recommended: false
    }
  ];

  return (
    <section className="section-spacing bg-glowave-dark-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-glowave-primary-blue/5 rounded-full blur-[160px] -z-1" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <SectionHeading 
            subtitle="Scaling Options" 
            title="Accelerate at Your Pace" 
            centered={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative h-full flex flex-col p-10 md:p-12 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                plan.recommended 
                  ? 'bg-white/4 border-glowave-primary-blue shadow-2xl shadow-glowave-primary-blue/20' 
                  : 'bg-white/2 border-white/5 hover:border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-glowave-primary-blue text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-premium-glow">
                  Recommended
                </div>
              )}
              
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-6 tracking-wide text-white/90">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6 justify-center md:justify-start">
                  {plan.price !== 'Custom' && <span className="text-3xl font-bold font-display text-white/40">$</span>}
                  <span className="text-6xl font-bold font-display tracking-tight text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-white/30 text-base font-medium">/mo</span>}
                </div>
                <p className="text-white/50 text-base leading-relaxed font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="grow mb-12">
                <ul className="flex flex-col gap-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm font-medium text-white/60">
                      <div className="w-5 h-5 rounded-full bg-glowave-primary-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                        <FiCheck className="text-glowave-primary-blue text-xs" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${
                plan.recommended 
                  ? 'bg-glowave-primary-blue text-white shadow-premium-glow hover:bg-glowave-deep-blue' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/10'
              }`}>
                {plan.price === 'Custom' ? 'Initiate Consultation' : 'Get Started'}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
