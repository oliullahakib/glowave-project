import { services } from '../../data/services';
import Card from '../ui/Card';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import * as Icons from 'react-icons/fi';

const ServiceCards = () => {
  return (
    <section className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = Icons[service.icon];
            return (
              <AnimatedWrapper key={service.id} delay={index * 0.1}>
                <Card className="p-10 h-full border-t-4" style={{ borderTopColor: service.color.includes('cyan') ? '#00d2ff' : '#3a7bd5' }}>
                  <div className="flex flex-col md:row items-start gap-8">
                    <div className={`w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-4xl shadow-2xl`}>
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/60 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['Strategic Planning', 'Data Analytics', 'Market Research', 'Full Execution'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                            <div className="w-1.5 h-1.5 rounded-full bg-glowave-primary-blue" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
