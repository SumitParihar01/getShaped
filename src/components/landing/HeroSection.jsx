import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

export default function HeroSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto text-center relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 text-green-400">
              <Activity size={28} />
              <span className="text-xl font-bold tracking-widest uppercase shadow-black drop-shadow-md">GetShaped</span>
            </div>
            <div className="bg-slate-900/60 backdrop-blur border border-slate-700 text-slate-300 text-sm font-mono px-3 py-1 rounded-full shadow-lg">
              {time.toLocaleTimeString()}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-xl shadow-black">
            No More Confusing Diets. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 flex-1 to-blue-500">
              Just Real Results.
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md shadow-black font-medium">
            Your personal, smart diet coach. We analyze your Indian lifestyle and body type to build practical, personalized nutrition that actually works.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <Link to="/dashboard">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-[0_0_30px_rgba(34,197,94,0.4)]"
              >
                Create My Diet Plan <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <a href="#whats-on-plate">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/80 backdrop-blur-md hover:bg-slate-700 text-slate-100 font-bold py-4 px-8 rounded-full border border-slate-600 transition-colors w-full sm:w-auto"
              >
                Fix My Diet
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
