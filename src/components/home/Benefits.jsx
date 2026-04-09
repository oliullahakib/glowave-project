import { motion } from 'framer-motion';
import { FiZap, FiSearch, FiTarget, FiDatabase } from 'react-icons/fi';

const BenefitItem = ({ benefit, index }) => {
  const Icon = benefit.icon;
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
      className="group"
    >
      <div className="flex items-start gap-5 p-6 rounded-3xl transition-all duration-300 hover:bg-slate-50 shadow-xl border border-transparent hover:border-slate-100">
        <div className="text-glowave-primary-blue text-3xl mt-1 p-3 rounded-2xl bg-glowave-primary-blue/10 group-hover:scale-110 transition-transform">
          <Icon />
        </div>
        <div>
          <h4 className="text-glowave-text text-xl font-bold mb-3 group-hover:text-glowave-primary-blue transition-colors">{benefit.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{benefit.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Fast Performance",
      description: "Blazing fast load times and optimized core web vitals to ensure your users stay engaged.",
      icon: FiZap
    },
    {
      title: "SEO Focused",
      description: "Architecture built from the ground up for maximum search visibility and ranking potential.",
      icon: FiSearch
    },
    {
      title: "Conversion Optimized",
      description: "Strategic UI/UX patterns designed to guide visitors toward specific, high-value actions.",
      icon: FiTarget
    },
    {
      title: "Scalable Architecture",
      description: "Robust systems ready to handle rapid growth without compromising on security or speed.",
      icon: FiDatabase
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="section-spacing relative bg-white overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-glowave-primary-blue/5 rounded-full blur-[120px] -translate-x-1/2 -z-1" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="mb-14">
                <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                  Why Choose us
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                  Infrastructure Built for <br />
                  <span className="text-gradient">Modern Scale</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} benefit={benefit} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="aspect-4/5 md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Growth Analytics" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
                />
                
                {/* Floating Metrics */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 right-10 glass-effect p-6 rounded-3xl border border-slate-300 shadow-premium-glow"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Growth Factor</span>
                    <span className="text-glowave-text text-3xl font-bold font-display">4.8x</span>
                  </div>
                </motion.div>

                <div className="absolute bottom-10 left-10 right-10 glass-effect p-8 rounded-3xl border border-slate-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-slate-600 text-sm font-medium">Real-time Performance</span>
                    </div>
                    <span className="text-glowave-primary-blue font-bold text-sm tracking-tighter">ULTRA-FAST</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-linear-to-r from-glowave-primary-blue to-glowave-soft-blue rounded-full" 
                    />
                  </div>
                </div>
              </div>

              {/* Decorative accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-glowave-primary-blue/20 blur-3xl -z-1 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-glowave-deep-blue/10 blur-3xl -z-1 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
