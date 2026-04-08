import { motion } from 'framer-motion';

const AnimatedWrapper = ({ 
  children, 
  delay = 0, 
  y = 30, 
  x = 0,
  scale = 1,
  duration = 0.8,
  className = "",
  preset = "fade-up" // fade-up, fade-in, scale-up
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: preset === "fade-up" ? y : 0,
      x: x,
      scale: preset === "scale-up" ? 0.95 : scale
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: { 
        duration: duration, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
