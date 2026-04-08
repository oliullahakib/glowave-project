import SectionHeading from '../ui/SectionHeading';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Team = () => {
  const members = [
    {
      name: "Alex Rivera",
      role: "CEO & Growth Strategist",
      image: "https://i.pravatar.cc/300?u=alex",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Jordan Smith",
      role: "Head of Design",
      image: "https://i.pravatar.cc/300?u=jordan",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "AI Implementation Lead",
      image: "https://i.pravatar.cc/300?u=elena",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marcus Thorne",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?u=marcus",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Our Experts" 
          title="Meet the Minds Behind Glowave" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <AnimatedWrapper key={index} delay={index * 0.1}>
              <div className="group relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-x-0 bottom-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="glass p-3 rounded-2xl border border-white/20 flex justify-center gap-4">
                      <a href={member.socials.twitter} className="text-white/60 hover:text-glow-blue transition-colors"><FiTwitter /></a>
                      <a href={member.socials.linkedin} className="text-white/60 hover:text-glow-blue transition-colors"><FiLinkedin /></a>
                      <a href={member.socials.github} className="text-white/60 hover:text-glow-blue transition-colors"><FiGithub /></a>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-glowave-primary-blue text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
