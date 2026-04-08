import { motion } from 'framer-motion';

const ClientLogo = ({ name, icon }) => (
  <div className="flex items-center gap-2 group cursor-pointer px-8">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:bg-glowave-primary-blue/10 transition-all duration-500 border border-white/5 group-hover:border-glowave-primary-blue/20">
      <div className="w-5 h-5 bg-white/20 rounded-sm group-hover:bg-glowave-primary-blue/50 transition-colors" />
    </div>
    <span className="text-white text-2xl font-bold font-display tracking-tight group-hover:text-white transition-colors duration-500">
      {name}
    </span>
  </div>
);

const Clients = () => {
  const clients = [
    { name: "Nebula", icon: "" },
    { name: "Vertex", icon: "" },
    { name: "Quantum", icon: "" },
    { name: "Aether", icon: "" },
    { name: "Sonic", icon: "" },
    { name: "Orbit", icon: "" },
    { name: "Flux", icon: "" },
    { name: "Pulse", icon: "" },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1035], // Adjusted for the total width of the logos + gap
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-24 bg-glowave-dark-bg/30 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/2 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">
            Trusted by 500+ global brands
          </span>
        </motion.div>
      </div>

      <div className="relative flex items-center">
        {/* Left Fade Edge */}
        <div className="absolute left-0 inset-y-0 w-40 bg-linear-to-r from-glowave-dark-bg to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {/* Double the list for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <ClientLogo key={index} name={client.name} />
          ))}
        </motion.div>

        {/* Right Fade Edge */}
        <div className="absolute right-0 inset-y-0 w-40 bg-linear-to-l from-glowave-dark-bg to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Clients;
