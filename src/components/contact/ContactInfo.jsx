import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const ContactInfo = () => {
  const details = [
    { icon: FiMail, label: "Email Us", value: "hello@glowave.agency", desc: "For general inquiries and partnerships." },
    { icon: FiPhone, label: "Call Us", value: "+1 (555) 000-0000", desc: "Available Mon-Fri, 9am - 6pm EST." },
    { icon: FiMapPin, label: "Visit Us", value: "123 Innovation Drive", desc: "New York, NY 10001, USA" },
    { icon: FiClock, label: "Office Hours", value: "Mon - Fri, 9am - 6pm", desc: "Weekends by appointment only." }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="w-12 h-12 bg-glow-blue/10 rounded-2xl flex items-center justify-center text-glow-blue text-xl border border-glow-blue/20">
            <detail.icon />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-[10px] opacity-40">{detail.label}</h4>
            <p className="text-white text-lg font-bold mb-1">{detail.value}</p>
            <p className="text-white/40 text-xs leading-relaxed">{detail.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
