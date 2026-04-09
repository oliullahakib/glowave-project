import PageTransition from '../components/layout/PageTransition';
import AboutHero from '../components/about/AboutHero';
import Vision from '../components/about/Vision';
import Team from '../components/about/Team';
import Stats from '../components/about/Stats';
import Achievements from '../components/about/Achievements';
import Strategy from '../components/about/Strategy';
import ScrollReveal from '../components/ui/ScrollReveal';
import Testimonials from '../components/home/Testimonials';
const About = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <AboutHero />
        <ScrollReveal><Vision /></ScrollReveal>
        <ScrollReveal><Team /></ScrollReveal>
        <ScrollReveal><Achievements /></ScrollReveal>
        <ScrollReveal><Stats /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Strategy /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default About;
