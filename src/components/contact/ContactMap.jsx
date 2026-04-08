import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-12"
    >
      <div className="container mx-auto px-6">
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 glass-effect group">
          {/* Stylized Map Placeholder */}
          <div className="absolute inset-0 bg-[#0a0a0c]">
            {/* Grid overlay */}
            <div className="absolute inset-0 glow-mesh opacity-30" />
            
            {/* Pulsing Location Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-6 h-6 bg-glowave-primary-blue rounded-full animate-ping absolute inset-0 opacity-40" />
                <div className="w-6 h-6 bg-glowave-primary-blue rounded-full relative z-10 border-4 border-white/10 shadow-premium-glow" />
              </div>
            </div>

            {/* Stylized UI Overlay */}
            <div className="absolute top-10 left-10 glass-effect p-6 rounded-3xl border border-white/10 hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-glowave-primary-blue mb-2">Global HQ</p>
              <p className="text-white font-bold text-lg mb-4 tracking-tight">123 Digital Ave, Tech District</p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-[9px] text-white/30 uppercase tracking-widest">Latency</span>
                  <span className="text-white text-xs font-mono">12ms</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[9px] text-white/30 uppercase tracking-widest">Status</span>
                  <span className="text-green-400 text-xs font-bold uppercase tracking-widest text-[10px]">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-glowave-dark-bg/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMap;
