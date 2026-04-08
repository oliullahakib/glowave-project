import SectionHeading from '../ui/SectionHeading';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import { FiCheckCircle } from 'react-icons/fi';

const Benefits = () => {
  const benefits = [
    {
      title: "Data-Driven ROI",
      description: "Our strategies are backed by rigorous data analysis to ensure every dollar spent contributes to your growth."
    },
    {
      title: "Seamless Integration",
      description: "We work as an extension of your team, integrating smoothly with your existing workflows and goals."
    },
    {
      title: "Modern Tech Stack",
      description: "Utilizing the latest technologies in AI, analytics, and design to give you a competitive edge."
    },
    {
      title: "Dedicated Support",
      description: "Round-the-clock support and strategic consultation to keep your digital engine running at peak performance."
    }
  ];

  return (
    <section className="section-spacing relative bg-glowave-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeading 
              centered={false}
              subtitle="Why Choose Us" 
              title="Building the Infrastructure for Tomorrow's Growth" 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedWrapper key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="text-glowave-primary-blue text-2xl mt-1">
                      <FiCheckCircle />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square glass-effect rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Growth Analytics" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              
              {/* Floating Element */}
              <div className="absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-2xl border border-white/20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/60 text-sm">Monthly Growth</span>
                  <span className="text-green-400 font-bold">+124%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-glowave-primary-blue rounded-full w-[85%]" />
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -z-1 -top-10 -right-10 w-64 h-64 bg-glowave-primary-blue/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
