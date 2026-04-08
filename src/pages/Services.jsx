import PageTransition from '../components/layout/PageTransition';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCards from '../components/services/ServiceCards';
import Pricing from '../components/services/Pricing';
import CTA from '../components/home/CTA';

const Services = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <ServicesHero />
        <ServiceCards />
        <Pricing />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Services;
