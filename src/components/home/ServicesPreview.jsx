import { memo } from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import { FiArrowRight } from 'react-icons/fi';
import * as Icons from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = memo(({ service, index }) => {
  const Icon = Icons[service.icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glowave-primary-blue/5 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="animated-card relative h-full flex flex-col items-start border border-white/5 group-hover:border-glowave-primary-blue/30 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,98,224,0.4),transparent_50%)]" />
        
        <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white text-3xl mb-10 shadow-lg shadow-glow-blue/10 relative z-10`}>
          <Icon />
        </div>
        
        <h3 className="text-2xl font-bold mb-5 tracking-tight relative z-10">{service.title}</h3>
        <p className="text-white/50 text-base leading-relaxed mb-10 grow relative z-10">
          {service.description}
        </p>
        
        <Link 
          to="/services" 
          className="flex items-center gap-3 text-sm font-bold text-glowave-primary-blue hover:text-white transition-colors relative z-10 group/link"
        >
          Explore Strategy 
          <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {/* Corner Accent */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-glowave-primary-blue/5 rounded-full blur-3xl group-hover:bg-glowave-primary-blue/10 transition-colors" />
      </div>
    </motion.div>
  );
});

const ServicesPreview = () => {
  return (
    <section className="section-spacing bg-glowave-dark-bg relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-glowave-primary-blue/5 blur-[120px] rounded-full -z-1" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-glowave-deep-blue/5 blur-[120px] rounded-full -z-1" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-glowave-primary-blue font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-display"
            >
              Precision Strategies for <br />
              <span className="text-gradient">Exponential Growth</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link to="/services">
              <button className="btn-outline-premium">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
