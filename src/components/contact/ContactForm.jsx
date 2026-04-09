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
    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 group-focus-within:text-glowave-primary-blue transition-colors ml-1">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:border-glowave-primary-blue/30 focus:bg-white/10 transition-all duration-500 placeholder:text-white/10 tracking-tight"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-sm focus:outline-none focus:border-glowave-primary-blue/30 focus:bg-white/10 transition-all duration-500 placeholder:text-white/10 tracking-tight"
      />
    )}
  </motion.div>
);

const ContactForm = () => {
  return (
    <div className="relative group">
      {/* Background Glow */}
      <div className="absolute inset-x-0 -inset-y-5 bg-glowave-primary-blue/5 blur-3xl rounded-[4rem] -z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="glass-effect p-10 md:p-14 rounded-[3.5rem] border border-white/5 shadow-3xl relative overflow-hidden">
        {/* Progress bar accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-glowave-primary-blue to-transparent" />
        
        <form className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FormInput label="Strategic Identity" placeholder="Marcus Thorne" />
            <FormInput label="Communication Node" type="email" placeholder="marcus@agency.com" />
          </div>
          
          <FormInput label="Project Objective" placeholder="How can we architect your dominance?" isTextArea={true} />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='flex flex-col justify-center items-center'
          >
            <Button variant="primary" className="w-full sm:w-auto px-12 py-5 text-lg group">
              Send Message
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <p className="text-[10px] text-center text-white/20 mt-8 uppercase tracking-[0.3em] font-bold">
              Protocol initiation: typical within 4 business hours
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
