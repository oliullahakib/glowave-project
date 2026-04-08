import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'btn-premium',
    secondary: 'btn-outline-premium',
    outline: 'px-8 py-3.5 rounded-full font-semibold border border-glowave-primary-blue text-glowave-primary-blue hover:bg-glowave-primary-blue hover:text-white transition-all duration-300',
    ghost: 'px-8 py-3.5 rounded-full font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
