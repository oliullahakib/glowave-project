import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-4xl overflow-hidden glass-effect border border-slate-200 group">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&fm=webp" 
                alt="Visionary Technology" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
            </div>
            
            {/* Visual Accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-glowave-primary-blue/20 blur-3xl -z-1" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-glowave-deep-blue/20 blur-3xl -z-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-8 block">
              Strategic Vision
            </span>
            <h2 className="text-display-medium leading-[0.95] mb-12 tracking-tighter">
              Redefining the <br />
              <span className="text-gradient">Digital Standard.</span>
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-xl font-medium tracking-tight">
              Our vision is to architect a world where digital experiences are not just functional, but transformative. We believe in the power of invisible technology and visible design.
            </p>
            <div className="space-y-6">
              {[
                { title: "Innovation First", desc: "Technically advanced solutions that push boundaries." },
                { title: "Human Centric", desc: "Design that speaks to the user, not just the interface." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-glowave-primary-blue mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-glowave-text font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
