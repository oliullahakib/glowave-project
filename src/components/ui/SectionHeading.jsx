import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = "" 
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-glow-blue font-semibold tracking-wider uppercase text-xs mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
