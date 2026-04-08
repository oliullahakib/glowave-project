import { motion } from 'framer-motion';

const Card = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      className={`animated-card overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-glowave-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
