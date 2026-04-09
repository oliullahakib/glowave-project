import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ConsultationCTA from '../components/contact/ConsultationCTA';
import ScrollReveal from '../components/ui/ScrollReveal';

const Contact = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="pt-40 pb-24 relative">
          {/* Background Glows */}
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-glowave-primary-blue/5 rounded-full blur-[160px] -z-1" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-glowave-deep-blue/5 rounded-full blur-[120px] -z-1" />

          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              {/* Left Column: Content & Info */}
              <div className="lg:w-5/12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <SectionHeading 
                    centered={false}
                    subtitle="Nexus Connectivity" 
                    title="Initialize Your Global Scale" 
                  />
                  <p className="text-slate-400 text-xl leading-relaxed mb-16 max-w-xl font-medium">
                    Ready to architect your digital dominance? Engage with our strategic collective to transform your vision into an industry-leading infrastructure.
                  </p>
                  
                  <ContactInfo />
                </motion.div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:w-7/12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic CTA */}
        <ScrollReveal><ConsultationCTA /></ScrollReveal>

        {/* World-Class Infrastructure Map */}
        <div className="pb-24">
          <div className="container mx-auto px-6 text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              Presence
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">Global Hub <span className="text-gradient">Operation</span></h2>
          </div>
          <ScrollReveal><ContactMap /></ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
