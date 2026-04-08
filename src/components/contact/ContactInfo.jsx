import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const InfoItem = ({ Icon, label, value, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl group-hover:bg-glowave-primary-blue/10 group-hover:text-glowave-primary-blue group-hover:border-glowave-primary-blue/20 transition-all duration-500 shadow-xl">
      <Icon />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">{label}</p>
      <p className="text-white text-lg font-medium group-hover:text-glowave-primary-blue transition-colors duration-500">{value}</p>
    </div>
  </motion.div>
);

const ContactInfo = () => {
  const details = [
    { icon: FiPhone, label: "Direct Line", value: "+1 (555) GLOWAVE" },
    { icon: FiMail, label: "Email Nexus", value: "hello@glowave.com" },
    { icon: FiMapPin, label: "Studio Hub", value: "123 Digital Ave, Tech District" },
    { icon: FiClock, label: "Operational Hours", value: "09:00 - 18:00 EST" }
  ];

  return (
    <div className="flex flex-col gap-10">
      {details.map((detail, index) => (
        <InfoItem 
          key={index} 
          Icon={detail.icon} 
          label={detail.label} 
          value={detail.value} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default ContactInfo;
