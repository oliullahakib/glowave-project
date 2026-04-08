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
              className={`relative h-full flex flex-col p-10 md:p-14 rounded-[3rem] border transition-all duration-700 glass-effect-dark overflow-hidden ${
                plan.recommended 
                  ? 'border-glowave-primary-blue/60 shadow-premium-glow' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-10 right-10 -translate-y-1/2 bg-glowave-primary-blue text-white text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-2.5 rounded-full shadow-premium-glow">
                  Growth Choice
                </div>
              )}
              
              <div className="mb-12 text-center md:text-left">
                <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">{plan.name}</span>
                <div className="flex items-baseline gap-2 mb-8 justify-center md:justify-start">
                  {plan.price !== 'Custom' && <span className="text-4xl font-bold font-display text-white/20 tracking-tighter">$</span>}
                  <span className="text-6xl md:text-7xl font-bold font-display tracking-tighter text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-white/20 text-lg font-medium tracking-tight">/mo</span>}
                </div>
                <p className="text-white/40 text-lg leading-relaxed font-medium tracking-tight">
                  {plan.description}
                </p>
              </div>

              <div className="grow mb-16">
                <ul className="flex flex-col gap-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-[15px] font-medium text-white/60 tracking-tight">
                      <div className="w-6 h-6 rounded-full bg-glowave-primary-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                        <FiCheck className="text-glowave-primary-blue text-xs" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.recommended ? "primary" : "secondary"} 
                className="w-full py-5 text-sm"
              >
                {plan.price === 'Custom' ? 'Initiate Consultation' : 'Get Started'}
                <FiArrowRight />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
