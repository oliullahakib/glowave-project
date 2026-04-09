import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-1000 flex items-center justify-center">
      <div className="relative">
        {/* Pulsing Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-glowave-primary-blue rounded-full blur-3xl -z-1"
        />
        
        {/* Animated Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex flex-col items-center"
        >
          <div className="w-20 h-20 relative mb-8">
             {/* Stylized geometric loader - replaced with a stylized 'G' or Brand mark concept */}
             <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-glowave-primary-blue w-full"
                   initial={{ x: "-100%" }}
                   animate={{ x: "100%" }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
             </div>
             <div className="absolute inset-0 border-2 border-slate-200 rounded-2xl rotate-45" />
             <div className="absolute inset-2 border border-glowave-primary-blue/30 rounded-xl -rotate-12" />
          </div>
          
          <span className="text-glowave-text text-xs font-bold uppercase tracking-[0.5em] ml-2">Loading</span>
        </motion.div>
      </div>
    </div>
  );
};

export default PageLoader;
