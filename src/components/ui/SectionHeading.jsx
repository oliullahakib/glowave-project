import { motion } from 'framer-motion';

const SectionHeading = ({ subtitle, title, centered = true, className = "" }) => {
  return (
    <div className={`mb-16 md:mb-24 ${centered ? 'text-center mx-auto' : 'text-left'} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, x: centered ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-6 md:mb-8"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="text-display-medium leading-[1.1] tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
