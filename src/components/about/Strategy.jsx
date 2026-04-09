import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiTrendingUp } from 'react-icons/fi';

const Strategy = () => {
  const steps = [
    {
      title: "Data Intelligence",
      desc: "We begin with a deep exploration of market patterns and competitive data to find your performance blind spots.",
      icon: FiZap,
      color: "from-glowave-primary-blue to-glowave-deep-blue"
    },
    {
      title: "Premium Design",
      desc: "Our design system is built to evoke emotion while maintaining a high-performance framework for conversion.",
      icon: FiTarget,
      color: "from-glowave-primary-blue to-glowave-soft-blue"
    },
    {
      title: "Growth Engineering",
      desc: "We deploy scalable infrastructure and AI-driven optimizations to ensure your growth is exponential, not linear.",
      icon: FiTrendingUp,
      color: "from-glowave-soft-blue to-glowave-primary-blue"
    }
  ];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 glow-mesh opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-8"
          >
            Tactical Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-medium leading-[0.95] tracking-tighter"
          >
            A Strategy for <br />
            <span className="text-gradient">Endless Acceleration.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="animated-card h-full flex flex-col items-center text-center p-12 hover:border-glowave-primary-blue/30 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center text-white text-3xl mb-8 shadow-premium-glow group-hover:scale-110 transition-transform`}>
                  <step.icon />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
