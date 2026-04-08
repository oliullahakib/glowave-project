import PageTransition from '../components/layout/PageTransition';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCards from '../components/services/ServiceCards';
import Pricing from '../components/services/Pricing';
import CTA from '../components/home/CTA';
import ScrollReveal from '../components/ui/ScrollReveal';

const Services = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <ServicesHero />
        <ScrollReveal><ServiceCards /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Services;
