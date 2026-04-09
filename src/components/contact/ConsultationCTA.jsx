import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const ConsultationCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center glass-effect border border-white/5 shadow-2xl"
        >
          {/* Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glowave-primary-blue/5 blur-3xl -z-1" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8"
            >
              <FiCalendar className="text-glowave-primary-blue" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Strategic Onboarding</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-10 leading-tight">
              Initiate Your <br />
              <span className="text-gradient">Expansion Today.</span>
            </h2>
            
            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
              Book a 30-minute high-impact strategy session with our architects. No friction, just pure results-driven insight.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex justify-center items-center'
            >
              <button className="btn-premium px-12 py-5 group">
                Reserve Slot
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
