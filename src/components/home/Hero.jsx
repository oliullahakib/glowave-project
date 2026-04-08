import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const AnimatedShape = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 4;
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
    meshRef.current.rotation.z = Math.sin(t / 4) / 4;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#00d2ff"
        speed={3}
        distort={0.4}
        radius={1}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background 3D Element */}
      <div className="absolute top-1/2 right-[-10%] w-[60%] h-[80%] -translate-y-1/2 z-0 hidden lg:block opacity-60">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <AnimatedShape />
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full border border-glowave-primary-blue/30 bg-glowave-primary-blue/10 text-glowave-primary-blue text-sm font-medium mb-6">
              Empowering Digital Futures
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-8">
              Navigate Your Brand to <br />
              <span className="text-gradient">
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
              We combine data-driven strategies with high-end creative execution to scale your digital presence beyond expectations.
            </p>
            <div className="flex flex-col sm:row items-center gap-4">
              <Button variant="primary" className="w-full sm:w-auto">
                Start Your Journey
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold font-display">250+</p>
                <p className="text-white/40 text-sm">Worldwide Clients</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold font-display">95%</p>
                <p className="text-white/40 text-sm">Success Rate</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold font-display">15+</p>
                <p className="text-white/40 text-sm">Year Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-blue/20 rounded-full blur-[150px] -z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-glow-primary/20 rounded-full blur-[120px] -z-1" />
    </section>
  );
};

export default Hero;
