import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function NoFancyFood() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">No Fancy Food Needed</h2>
          <p className="text-slate-400 text-lg">You don't need expensive imports. You just need the right balance.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-red-950/20 border border-red-900/50 p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <XCircle size={32} />
              <h3 className="text-2xl font-bold text-slate-200">The "Insta" Diet</h3>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2"><span className="text-red-500">❌</span> $20 Acai Bowls</li>
              <li className="flex items-center gap-2"><span className="text-red-500">❌</span> Hard-to-find Quinoa salads</li>
              <li className="flex items-center gap-2"><span className="text-red-500">❌</span> Expensive, flavorless syrups</li>
              <li className="flex items-center gap-2"><span className="text-red-500">❌</span> Impossible to sustain locally</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-green-900/20 border border-green-500/50 p-8 rounded-3xl shadow-[0_0_40px_rgba(34,197,94,0.1)] relative"
          >
            <div className="absolute -top-4 -right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Our Approach</div>
            <div className="flex items-center gap-3 mb-6 text-green-400">
              <CheckCircle2 size={32} />
              <h3 className="text-2xl font-bold text-slate-200">The GetShaped Diet</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Roti / Rice (Standard Carb Source)</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Dal & Sabzi (High Fiber)</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Paneer, Eggs, Chicken (Easy Protein)</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Costs less, highly sustainable</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
