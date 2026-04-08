import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const btnRef = useRef(null);
  
  // Magnetic effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  
  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Only attract if mouse is within a reasonable distance (e.g. 50px)
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "btn-premium",
    secondary: "btn-outline-premium",
    outline: "border-2 border-white/10 hover:border-glowave-primary-blue/50 text-white rounded-full px-8 py-3.5 transition-all duration-300"
  };

  return (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <button 
        className={`${variants[variant]} ${className}`}
        {...props}
      >
        <motion.span 
          className="flex items-center gap-3 relative z-10"
          initial={{ y: 0 }}
          whileHover={{ y: 0 }}
        >
          {children}
        </motion.span>
      </button>
    </motion.div>
  );
};

export default Button;
