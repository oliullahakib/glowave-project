import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';

const NavLink = ({ children, path, active, onClick }) => {
  return (
    <Link
      to={path}
      className={`relative text-sm font-medium transition-colors hover:text-glowave-primary-blue py-1 px-2 ${
        active ? 'text-glowave-primary-blue' : 'text-white/70'
      }`}
      onClick={onClick}
    >
      {children}
      {active && (
        <motion.div
          layoutId="nav-active"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-glowave-primary-blue rounded-full"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass-effect border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-8 h-8 rounded-lg bg-glowave-primary-blue shadow-premium-glow flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-sm bg-white/20" />
          </motion.div>
          <span>Glowave</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-2 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                path={link.path}
                active={location.pathname === link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <Button variant="primary" className="py-2.5 px-6 text-sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white text-2xl z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-glowave-dark-bg/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <Link
                  to={link.path}
                  className={`text-4xl font-bold font-display ${
                    location.pathname === link.path ? 'text-glowave-primary-blue' : 'text-white/70'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={linkVariants}>
              <Button variant="primary" className="mt-8 px-12 py-4 text-xl">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
