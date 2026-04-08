import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiSend } from 'react-icons/fi';

const FormInput = ({ label, type = "text", placeholder, isTextArea = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col gap-2 group w-full"
  >
    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-focus-within:text-glowave-primary-blue transition-colors ml-1">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-glowave-primary-blue/50 focus:bg-white/[0.08] transition-all duration-300 placeholder:text-white/10"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-glowave-primary-blue/50 focus:bg-white/[0.08] transition-all duration-300 placeholder:text-white/10"
      />
    )}
  </motion.div>
);

const ContactForm = () => {
  return (
    <div className="relative group">
      {/* Background Glow */}
      <div className="absolute inset-x-0 -inset-y-5 bg-glowave-primary-blue/5 blur-3xl rounded-[3rem] -z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Progress bar accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-glowave-primary-blue/50 to-transparent" />
        
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput label="Full Name" placeholder="Marcus Thorne" />
            <FormInput label="Email Address" type="email" placeholder="marcus@agency.com" />
          </div>
          
          <FormInput label="Project Inquiry" placeholder="How can we scale your brand?" isTextArea={true} />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="btn-premium w-full py-5 group/btn">
              Dispatch Message 
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-[9px] text-center text-white/20 mt-6 uppercase tracking-[0.2em] font-medium">
              Response time: typically within 4 business hours
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
