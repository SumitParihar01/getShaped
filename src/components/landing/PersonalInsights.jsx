import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Scale, Zap } from 'lucide-react';

const insightData = {
  fat_loss: {
    message: "We need a 400-500 kcal deficit. We keep your protein high to protect your muscle, and moderate your carbs so you still have energy for your day.",
    cards: [
      { id: 1, title: "Protein First", desc: "Protects muscle and keeps you insanely full.", icon: Target, color: "text-blue-400", bg: "bg-blue-400/10" },
      { id: 2, title: "Energy Deficit", desc: "The only scientific way your body burns stored fat.", icon: Scale, color: "text-orange-400", bg: "bg-orange-400/10" }
    ]
  },
  muscle_gain: {
    message: "We put you in a clean surplus. Excess calories combined with high carbs ensure your muscles recover and grow larger after every workout.",
    cards: [
      { id: 1, title: "Caloric Surplus", desc: "Provides the building blocks for new tissue.", icon: Scale, color: "text-green-400", bg: "bg-green-400/10" },
      { id: 2, title: "Carb Heavy", desc: "Fuels intense workouts and spikes insulin for growth.", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" }
    ]
  }
};

export default function PersonalInsights() {
  const [goal, setGoal] = useState('fat_loss');
  const currentInsight = insightData[goal];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why This Works For <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">YOU</span></h2>
          <p className="text-slate-400 text-lg">Your body isn't a calculator. It's a biological engine.</p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Toggle */}
          <div className="flex bg-slate-900 rounded-xl p-1 mb-8 w-fit mx-auto relative z-10 border border-slate-700">
            <button 
              onClick={() => setGoal('fat_loss')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${goal === 'fat_loss' ? 'bg-orange-500 text-black shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Fat Loss 🔥
            </button>
            <button 
              onClick={() => setGoal('muscle_gain')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${goal === 'muscle_gain' ? 'bg-blue-500 text-black shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Muscle Gain 💪
            </button>
          </div>

          <div className="min-h-[200px] relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={goal}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-center text-xl md:text-2xl font-medium text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
                  "{currentInsight.message}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentInsight.cards.map((card) => (
                    <div key={card.id} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 flex items-start gap-4 hover:border-slate-500 transition-colors">
                      <div className={`p-3 rounded-xl ${card.bg} ${card.color} shrink-0`}>
                        <card.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 mb-1">{card.title}</h4>
                        <p className="text-sm text-slate-400">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
