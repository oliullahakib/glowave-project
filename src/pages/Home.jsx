import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import Benefits from '../components/home/Benefits';
import Clients from '../components/home/Clients';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <Clients />
        <ServicesPreview />
        <Benefits />
        <Testimonials />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Home;
