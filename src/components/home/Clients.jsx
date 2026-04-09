import { motion } from 'framer-motion';

const ClientLogo = ({ name, icon }) => (
  <div className="flex items-center gap-2 group cursor-pointer px-8">
    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:bg-glowave-primary-blue/10 transition-all duration-500 border border-slate-100 group-hover:border-glowave-primary-blue/20 shadow-sm">
      <div className="w-5 h-5 bg-slate-200 rounded-sm group-hover:bg-glowave-primary-blue/50 transition-colors" />
    <img src={icon} className='w-full object-cover' alt="" />
    </div>
    <span className="text-glowave-text text-2xl font-bold font-display tracking-tight group-hover:text-glowave-primary-blue transition-colors duration-500">
      {name}
    </span>
  </div>
);

const Clients = () => {
  const clients = [
    { name: "Nebula", icon: "https://static.vecteezy.com/system/resources/previews/063/140/620/non_2x/nebula-logo-abstract-illustration-black-hole-galaxy-deep-logo-simple-purple-vector.jpg" },
    { name: "Vertex", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tduzQ2rDXPP7IQujh18yS2C0VfQdSj5gLw&s" },
    { name: "Quantum", icon: "https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149248382.jpg?semt=ais_hybrid&w=740&q=80" },
    { name: "Aether", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-bYc9jKhN3uibXpX7ANghQjNu3-bHdnIcw&s" },
    { name: "Sonic", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8LPxjthZwCklyeAZK1mpMmk52BNZ2h8Q_w&s" },
    { name: "Orbit", icon: "https://cdn.dribbble.com/userupload/4210277/file/still-23905a29c0d11509a492712a31c8fa68.png" },
    { name: "Flux", icon: "https://cdn.dribbble.com/userupload/38616454/file/original-34c068527265e40f3b47a292d8ad323a.jpg" },
    { name: "Pulse", icon: "https://images-platform.99static.com/sP6hl_l_7XzKjjtOH7TJbcPqkmk=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/119/119544/attachment_119544480" },
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
    <section className="py-24 bg-white/30 border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-100 bg-glowave-primary-blue/20 mb-6 shadow-2xl"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-black">
            Trusted by 500+ global brands
          </span>
        </motion.div>
      </div>

      <div className="relative flex items-center">
        {/* Left Fade Edge */}
        <div className="absolute left-0 inset-y-0 w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {/* Double the list for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <ClientLogo key={index} name={client.name} icon={client.icon} />
          ))}
        </motion.div>

        {/* Right Fade Edge */}
        <div className="absolute right-0 inset-y-0 w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Clients;
