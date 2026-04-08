import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <section className="pt-40 pb-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:row gap-20">
              {/* Left Column: Content & Info */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <SectionHeading 
                    centered={false}
                    subtitle="Contact Us" 
                    title="Let's Build Your Digital Future Together" 
                  />
                  <p className="text-white/60 text-xl leading-relaxed mb-16 max-w-xl">
                    Ready to scale your brand? Reach out to our team of experts and start your journey towards digital dominance today.
                  </p>
                  
                  <ContactInfo />
                </motion.div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Background Glows */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-glow-blue/10 rounded-full blur-[120px] -z-1" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-glow-primary/10 rounded-full blur-[100px] -z-1" />
        </section>

        {/* FAQ or Map Section could go here */}
      </div>
    </PageTransition>
  );
};

export default Contact;
