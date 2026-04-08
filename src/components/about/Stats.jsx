import { motion } from 'framer-motion';
import Counter from '../ui/Counter';

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: 500, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "ROI Generated", value: 4.5, suffix: "x" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 border-y border-white/5 bg-glowave-dark-bg/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold font-display text-white mb-4 tracking-tighter group-hover:text-glowave-primary-blue transition-colors duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              
              {/* Bottom accent */}
              <div className="w-8 h-1 bg-glowave-primary-blue/30 mx-auto mt-6 rounded-full group-hover:w-16 group-hover:bg-glowave-primary-blue transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
