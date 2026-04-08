import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative pt-40 pb-20 bg-glowave-dark-bg overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glowave-primary-blue/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glowave-deep-blue/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-8 block">
            Operational Architecture
          </span>
          <h1 className="text-display-large leading-[0.95] mb-12 tracking-tighter">
            Elevate Your <br />
            <span className="text-gradient">Digital Velocity</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto font-medium tracking-tight">
            We engineer high-performance frameworks and results-driven strategies designed to scale your brand with architectural precision.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-10 hidden lg:block"
      >
        <div className="glass-effect p-4 rounded-2xl border border-white/5 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase">
          Precision Engineering
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
