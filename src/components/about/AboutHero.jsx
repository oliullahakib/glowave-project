import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-24 bg-glowave-dark-bg overflow-hidden">
      {/* Background Liquid Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glowave-primary-blue/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glowave-deep-blue/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">
              The Glowave Narrative
            </span>
            <h1 className="text-6xl md:text-9xl font-bold font-display leading-[0.9] tracking-tighter mb-10">
              Architecture for <br />
              <span className="text-gradient">The Extraordinary.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-white/50 leading-relaxed font-medium max-w-2xl"
          >
            We are a collective of designers, engineers, and strategists obsessed with the intersection of data-driven growth and premium experience design.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
