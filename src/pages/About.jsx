import PageTransition from '../components/layout/PageTransition';
import AboutHero from '../components/about/AboutHero';
import Vision from '../components/about/Vision';
import Team from '../components/about/Team';
import Stats from '../components/about/Stats';
import Achievements from '../components/about/Achievements';
import Strategy from '../components/about/Strategy';
import CTA from '../components/home/CTA';
import ScrollReveal from '../components/ui/ScrollReveal';

const About = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <AboutHero />
        <ScrollReveal><Stats /></ScrollReveal>
        <ScrollReveal><Vision /></ScrollReveal>
        <ScrollReveal><Strategy /></ScrollReveal>
        <ScrollReveal><Achievements /></ScrollReveal>
        <ScrollReveal><Team /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default About;
