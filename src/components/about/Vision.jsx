import SectionHeading from '../ui/SectionHeading';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const Vision = () => {
  const points = [
    {
      title: "Authenticity",
      description: "We believe in building brands that are true to their core values and transparent with their audience."
    },
    {
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with technology and creative strategy."
    },
    {
      title: "Impact",
      description: "Measuring success not just in numbers, but in the lasting positive impact we create for our partners."
    }
  ];

  return (
    <section className="py-24 bg-dark-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            subtitle="Our Vision" 
            title="Redefining the Standard for Digital Excellence" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {points.map((point, index) => (
              <AnimatedWrapper key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-glow-blue/10 rounded-full flex items-center justify-center text-glow-blue font-bold text-xl mx-auto mb-6">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
