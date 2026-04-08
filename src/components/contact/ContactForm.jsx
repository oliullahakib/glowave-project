import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="glass-effect p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-glowave-primary-blue/5 rounded-full blur-3xl -z-1" />
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs font-bold uppercase tracking-widest px-1">Full Name</label>
            <input 
              name="name"
              type="text" 
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-glow-blue transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs font-bold uppercase tracking-widest px-1">Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-glowave-primary-blue transition-colors"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-white/40 text-xs font-bold uppercase tracking-widest px-1">Subject</label>
          <input 
            name="subject"
            type="text" 
            required
            value={formState.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-glowave-primary-blue transition-colors"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-white/40 text-xs font-bold uppercase tracking-widest px-1">Message</label>
          <textarea 
            name="message"
            required
            rows="5"
            value={formState.message}
            onChange={handleChange}
            placeholder="Tell us about your brand goals..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-glowave-primary-blue transition-colors resize-none"
          ></textarea>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="py-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {isSent && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm text-center font-medium"
          >
            Thank you! Your message has been sent successfully.
          </motion.p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
