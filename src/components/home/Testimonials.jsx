import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="section-spacing bg-glowave-dark-bg relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glowave-primary-blue/5 rounded-full blur-[150px] -z-1" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <SectionHeading 
            subtitle="Client Success" 
            title="Shared Journeys, Proven Results" 
            centered={true}
          />
        </div>

        <div 
          className="max-w-4xl mx-auto relative h-[450px] md:h-[350px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <div className="glass-effect p-10 md:p-16 rounded-[3rem] border border-white/10 relative h-full flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-glowave-primary-blue/20 text-6xl absolute top-10 left-10" />
                
                <p className="text-xl md:text-3xl font-medium text-white/90 leading-relaxed mb-10 italic">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author} 
                      className="w-16 h-16 rounded-full border-2 border-glowave-primary-blue shadow-premium-glow"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-glowave-primary-blue rounded-full border-2 border-dark-900 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[activeIndex].author}</h4>
                    <p className="text-glowave-soft-blue text-sm font-medium tracking-wide">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-12 z-20">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-glowave-primary-blue/50 transition-all group"
            >
              <FiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex ? 'w-8 bg-glowave-primary-blue shadow-premium-glow' : 'w-2 bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl glass-effect border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-glowave-primary-blue/50 transition-all group"
            >
              <FiChevronRight className="text-2xl group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
