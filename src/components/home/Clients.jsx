import { motion } from 'framer-motion';

const Clients = () => {
  const logos = [
    "TechFlow", "Nexa", "Zenith", "Quantum", "Vertex", "Solaris", "Alpha"
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-glowave-dark-bg/50">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex whitespace-nowrap gap-16 py-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <span 
              key={index}
              className="text-white/20 text-4xl md:text-5xl font-bold font-display tracking-tighter hover:text-glowave-primary-blue transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Mask */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />
      </div>
    </section>
  );
};

export default Clients;
