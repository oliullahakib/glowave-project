import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { FiArrowRight } from 'react-icons/fi';
import * as Icons from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  return (
    <section className="section-spacing bg-glowave-dark-bg relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Our Expertise" 
          title="Scaling Brands with Precision" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = Icons[service.icon];
            return (
              <Card key={service.id} className="h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-8 shadow-lg shadow-glow-blue/10`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="flex items-center gap-2 text-sm font-semibold text-glowave-primary-blue hover:gap-3 transition-all"
                >
                  Learn More <FiArrowRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
