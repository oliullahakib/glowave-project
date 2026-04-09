import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion, useSpring } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

// 3D Glass Sphere Component
const GlassSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 4;
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#0066CC"
        speed={2}
        distort={0.4}
        radius={1}
        roughness={0.1}
        metalness={0.8}
        emissive="#004C99"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

// Floating Badge Component
const FloatingBadge = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`glass-effect px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-slate-200 ${className}`}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-glowave-primary-blue animate-pulse" />
      {children}
    </motion.div>
  </motion.div>
);

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const smoothX = useSpring(mousePos.x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mousePos.y, { stiffness: 50, damping: 20 });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-28 md:pt-48 pb-20 overflow-hidden bg-white"
    >
      {/* 3D Background Canvas */}
      <div className="absolute top-1/2 right-[-5%] w-[55%] h-[80%] -translate-y-1/2 z-0 hidden lg:block opacity-80 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <GlassSphere />
          </Float>
        </Canvas>
      </div>

      {/* Liquid Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glowave-primary-blue/20 rounded-full blur-[120px] animate-pulse -z-1" />
      <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-glowave-deep-blue/20 rounded-full blur-[120px] animate-pulse -z-1" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ x: smoothX, y: smoothY }}
            className="relative"
          >
            {/* Floating Badges */}
            <div className="absolute -top-12 -left-4 hidden md:block">
              <FloatingBadge delay={0.2} className="text-glowave-primary-blue">SEO Optimized</FloatingBadge>
            </div>
            <div className="absolute top-1/2 -right-12 hidden lg:block translate-x-24 -translate-y-12">
              <FloatingBadge delay={0.4}>AI Performance</FloatingBadge>
            </div>

            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block py-2 px-5 rounded-full border border-slate-200 bg-white shadow-sm text-glowave-primary-blue text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              The Next Evolution of Growth
            </motion.span>

            <h1 className="text-display-large leading-[0.95] mb-12 tracking-tighter">
              Architecting <br />
              <span className="text-gradient">
                Digital Dominance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-2xl font-medium tracking-tight">
              We engineer high-performance visual experiences and strategic growth systems for the world's most ambitious brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Button variant="primary" className="w-full sm:w-auto px-12 py-5 text-lg group">
                <Link to="/contact">Initialize Project</Link>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>    
            </div>

            {/* Social Proof / Stats */}
            <div className="mt-20 flex flex-wrap items-center gap-12">
               <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-glowave-primary-blue flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                  50k+
                </div>
              </div>
              <div>
                <p className="text-slate-700 font-bold">Trusted by 500+ scale-ups</p>
                <div className="flex gap-1 text-glowave-primary-blue mt-1">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
