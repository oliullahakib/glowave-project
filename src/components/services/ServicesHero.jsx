import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-glowave-primary-blue font-semibold uppercase tracking-widest text-sm mb-4 block">Our Solutions</span>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
            Tailored Strategies for <br />
            <span className="text-gradient">Digital Dominance</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            From data-driven strategy to high-performance execution, we provide the full spectrum of services needed to scale your brand in the modern digital age.
          </p>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glowave-primary-blue/10 rounded-full blur-[120px] -z-1" />
    </section>
  );
};

export default ServicesHero;
