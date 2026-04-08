import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const TeamMember = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="relative rounded-4xl overflow-hidden glass-effect border border-white/5 p-4 transition-all duration-500 hover:border-glowave-primary-blue/30 hover:bg-white/4">
      <div className="aspect-4/5 rounded-4xl overflow-hidden relative mb-6">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />
        
        {/* Social Overlay */}
        <div className="absolute inset-x-4 bottom-4 flex justify-center gap-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
          {[FiTwitter, FiLinkedin, FiGithub].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="w-10 h-10  rounded-xl glass-effect-dark flex items-center justify-center text-white hover:text-glowave-primary-blue transition-colors border border-white/10"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <h4 className="text-xl font-bold mb-1 group-hover:text-glowave-primary-blue transition-colors">{member.name}</h4>
        <p className="text-white/40 text-sm font-medium tracking-wide uppercase">{member.role}</p>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  const team = [
    {
      name: "Marcus Thorne",
      role: "Strategic Architect",
      image: "https://i.pravatar.cc/400?u=marcus"
    },
    {
      name: "Elena Vance",
      role: "Experience Director",
      image: "https://i.pravatar.cc/400?u=elena"
    },
    {
      name: "David Kross",
      role: "Growth Engineer",
      image: "https://i.pravatar.cc/400?u=david"
    },
    {
      name: "Sophia Reed",
      role: "Performance Lead",
      image: "https://i.pravatar.cc/400?u=sophia"
    }
  ];

  return (
    <section className="section-spacing bg-glowave-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.2em] text-xs mb-4">The Collective</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
            Engineered by <br />
            <span className="text-gradient">World-Class Minds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
