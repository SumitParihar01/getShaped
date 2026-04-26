import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-[#0f172a] z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-10 md:p-16 rounded-3xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)] text-black">
            <Rocket size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-100">
            Start Your Personalized Journey
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Stop guessing. Let our algorithm generate the perfect nutrition and exercise matrix for your body right now.
          </p>
          
          <Link to="/dashboard">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-5 px-10 rounded-full shadow-lg transition-transform"
            >
              Calculate My Nutrition Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
