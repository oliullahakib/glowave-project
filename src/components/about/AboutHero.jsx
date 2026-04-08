import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-glow-blue font-semibold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
                Architecting <br />
                <span className="text-glow-blue bg-clip-text text-transparent bg-glow-gradient">Digital Success</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Founded in 2020, Glowave was born out of a desire to bridge the gap between complex data and creative brand storytelling. We believe every brand has a unique pulse that, when amplified correctly, can resonate on a global scale.
              </p>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-video glass rounded-3xl overflow-hidden shadow-2xl shadow-glow-blue/20 rotate-3"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border border-white/20 -rotate-3 z-10">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Growth Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
