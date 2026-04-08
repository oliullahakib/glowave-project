import PageTransition from '../components/layout/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import BlogList from '../components/blog/BlogList';
import CTA from '../components/home/CTA';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';

const Blog = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <section className="pt-40 pb-10 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[12px] mb-8 block">Resources & Insights</span>
              <h1 className="text-display-medium leading-[0.95] tracking-tighter mb-10">
                The Growth <span className="text-gradient">Journal</span>
              </h1>
              <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Expert perspectives on digital strategy, design, and the future of brand engagement.
              </p>
            </motion.div>
          </div>
        </section>
        
        <ScrollReveal><BlogList /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Blog;
