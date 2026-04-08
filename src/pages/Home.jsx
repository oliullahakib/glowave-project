import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import Benefits from '../components/home/Benefits';
import Clients from '../components/home/Clients';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import ScrollReveal from '../components/ui/ScrollReveal';

const Home = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <ScrollReveal><Clients /></ScrollReveal>
        <ScrollReveal><ServicesPreview /></ScrollReveal>
        <ScrollReveal><Benefits /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Home;
