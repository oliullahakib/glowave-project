import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi';
import logo from '../../assets/glowavelogo.png';

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    whileHover={{ y: -5, backgroundColor: 'rgba(0, 98, 224, 0.2)' }}
    className="w-12 h-12 rounded-2xl glass-effect flex items-center justify-center text-slate-600 hover:text-glowave-primary-blue transition-colors group"
  >
    <Icon className="text-xl group-hover:scale-110 transition-transform" />
  </motion.a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-slate-500 hover:text-glowave-primary-blue transition-all duration-300 flex items-center gap-2 group"
    >
      <span className="w-0 h-px bg-glowave-primary-blue group-hover:w-4 transition-all" />
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glowave-primary-blue/5 rounded-full blur-[120px] -z-1" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link to="/" className="text-3xl font-bold font-display tracking-tighter flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-premium-glow flex items-center justify-center">
                <img src={logo} alt="Glowave Logo" className="w-full h-full object-contain" />
              </div>
              <span>Glowave</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm">
              Architecting digital futures through data-inspired strategy and premium experience design.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={FiTwitter} href="#" />
              <SocialIcon Icon={FiLinkedin} href="#" />
              <SocialIcon Icon={FiGithub} href="#" />
              <SocialIcon Icon={FiInstagram} href="#" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-glowave-text font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="flex flex-col gap-5">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/blog">Journal</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-glowave-text font-bold mb-8 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="flex flex-col gap-5 text-sm">
              <FooterLink to="/services">Growth Strategy</FooterLink>
              <FooterLink to="/services">Brand Identity</FooterLink>
              <FooterLink to="/services">Web Performance</FooterLink>
              <FooterLink to="/services">AI Solutions</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="glass-effect rounded-4xl p-8 border border-slate-200 relative">
              <h4 className="text-xl font-bold mb-4">Stay Synchronized</h4>
              <p className="text-slate-500 text-sm mb-8">Get quarterly insights on digital growth and high-end design.</p>
              
              <form className="space-y-4">
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-glowave-primary-blue transition-colors text-glowave-text"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-glowave-primary-blue text-white py-4 rounded-2xl text-sm font-bold hover:bg-glowave-deep-blue transition-all flex items-center justify-center gap-2"
                >
                  Join the Circle <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
            <a href="#" className="hover:text-glowave-primary-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-glowave-primary-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-glowave-primary-blue transition-colors">Cookies</a>
          </div>
          
          <p className="text-black text-xs font-medium">
            © {new Date().getFullYear()} Glowave Agency. Built for the modern web.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
