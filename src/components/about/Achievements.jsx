import { motion } from 'framer-motion';
import { FiAward, FiStar, FiGlobe, FiCpu } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      year: "2024",
      title: "Global Growth Award",
      desc: "Recognized for architecting the most efficient cross-border scaling framework.",
      icon: FiGlobe
    },
    {
      year: "2023",
      title: "AI Integration Lead",
      desc: "Pioneered the 'AI-First' marketing methodology for Fortune 500 partners.",
      icon: FiCpu
    },
    {
      year: "2022",
      title: "Design Excellence",
      desc: "Winner of the Premium Interface & Experience Award for digital luxury.",
      icon: FiAward
    },
    {
      year: "2021",
      title: "Top Growth Partner",
      desc: "Voted #1 strategic growth partner by the Silicon Valley Tech Hub.",
      icon: FiStar
    }
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-px bg-linear-to-l from-glowave-primary-blue/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] mb-8">
              Decades of <br />
              <span className="text-gradient">Digital Mastery.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              We don't just participate in the industry—we define its benchmarks. Our trophy cabinet reflects our obsession with performance and precision.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-effect p-10 rounded-[2.5rem] border border-slate-100 group-hover:border-glowave-primary-blue/30 transition-all duration-500 hover:bg-slate-50 hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-4xl text-glowave-primary-blue/20 group-hover:text-glowave-primary-blue transition-colors duration-500">
                      <item.icon />
                    </div>
                    <span className="text-slate-200 font-display font-bold text-3xl group-hover:text-glowave-primary-blue/40 transition-colors">{item.year}</span>
                  </div>
                  <h4 className="text-glowave-text text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
