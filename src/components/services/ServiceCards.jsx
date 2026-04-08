import { services } from '../../data/services';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';

const ServiceCards = () => {
  return (
    <section className="py-32 bg-glowave-dark-bg/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => {
            const Icon = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-glowave-primary-blue/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="animated-card h-full p-12 flex flex-col items-start border border-white/5 group-hover:border-glowave-primary-blue/20 overflow-hidden relative">
                  <div className={`w-20 h-20 shrink-0 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white text-4xl shadow-2xl mb-12 shadow-glowave-primary-blue/20`}>
                    <Icon />
                  </div>
                  
                  <div className="grow">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">{service.title}</h3>
                    <p className="text-white/50 text-xl leading-relaxed mb-10">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {[
                        'Custom Architecture', 
                        'Data Intelligence', 
                        'High-End UI/UX', 
                        'Full-Stack Mastery',
                        'SEO Framework',
                        'Scalable Logic'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/30 group-hover:text-white/60 transition-colors">
                          <FiCheckCircle className="text-glowave-primary-blue" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
