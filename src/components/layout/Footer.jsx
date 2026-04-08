import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-glow-blue shadow-[0_0_15px_rgba(0,210,255,0.8)]" />
              <span>Glowave</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Empowering brands with cutting-edge digital growth strategies and high-performance immersive experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-glow-blue transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-glow-blue transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-glow-blue transition-colors">
                <FiGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-glow-blue transition-colors">
                <FiInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Growth Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Subscribe to our newsletter for insights on digital growth.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-glow-blue transition-colors"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1.5 bg-glow-blue text-white py-1.5 px-4 rounded-full text-sm font-medium hover:bg-glow-primary transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Glowave Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
