import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-green-400">
            <Activity size={28} />
            <span className="text-xl font-bold tracking-widest uppercase">GetShaped</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Understand What <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 flex-1 to-blue-500">
              Fuels Your Body
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Science-backed diet plans made simple. We analyze your goals and body type to generate highly personalized nutrition strategies that actually work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Explore Diet Plans <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <a href="#how-it-works">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-4 px-8 rounded-full border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Learn The Science
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
