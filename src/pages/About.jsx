import PageTransition from '../components/layout/PageTransition';
import AboutHero from '../components/about/AboutHero';
import Vision from '../components/about/Vision';
import Team from '../components/about/Team';
import Stats from '../components/about/Stats';
import Achievements from '../components/about/Achievements';
import CTA from '../components/home/CTA';

const About = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <AboutHero />
        <Stats />
        <Vision />
        <Achievements />
        <Team />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default About;
