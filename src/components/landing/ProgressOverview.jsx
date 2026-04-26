import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Droplets, Utensils, Egg } from 'lucide-react';

const habits = [
  { id: 1, text: "Drink 1 glass of water before eating", icon: Droplets, color: "text-blue-400" },
  { id: 2, text: "Eat protein first", icon: Egg, color: "text-orange-400" },
  { id: 3, text: "Don't eat distracted (No phone)", icon: Utensils, color: "text-purple-400" }
];

export default function ProgressOverview() {
  const [checkedHabits, setCheckedHabits] = useState(new Set());

  const toggleHabit = (id) => {
    const newSet = new Set(checkedHabits);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCheckedHabits(newSet);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Rings / Graph UI */}
        <div className="flex-1 w-full bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative">
          <h3 className="text-xl font-bold text-slate-200 mb-8 text-center">Smart Progress Visualization</h3>
          
          <div className="flex justify-center mb-8 relative">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="#1e293b" strokeWidth="16" fill="transparent" />
              <motion.circle
                cx="96" cy="96" r="80"
                stroke="#22c55e" strokeWidth="16" fill="transparent" strokeLinecap="round"
                strokeDasharray={502}
                initial={{ strokeDashoffset: 502 }}
                whileInView={{ strokeDashoffset: 150 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <circle cx="96" cy="96" r="60" stroke="#1e293b" strokeWidth="16" fill="transparent" />
              <motion.circle
                cx="96" cy="96" r="60"
                stroke="#3b82f6" strokeWidth="16" fill="transparent" strokeLinecap="round"
                strokeDasharray={376}
                initial={{ strokeDashoffset: 376 }}
                whileInView={{ strokeDashoffset: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-slate-100">70%</span>
              <span className="text-xs text-slate-400">Completion</span>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-slate-700">
            <p className="text-sm font-semibold text-green-400">🔥 Consistency Streak: 12 Days</p>
            <p className="text-xs text-slate-400 mt-1">"You're 2 days away from building a solid habit!"</p>
          </div>
        </div>

        {/* Habit Tips */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Habit-Based Coaching</h2>
          <p className="text-slate-400 text-lg mb-8">We don't just give you a static meal plan. We act as your daily coach to build foundational habits.</p>

          <div className="space-y-4">
            {habits.map((habit) => {
              const isChecked = checkedHabits.has(habit.id);
              return (
                <motion.div 
                  key={habit.id}
                  whileHover={{ x: 5 }}
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-5 rounded-2xl border cursor-pointer flex items-center justify-between transition-colors ${
                    isChecked ? 'bg-green-900/20 border-green-500/50' : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isChecked ? 'bg-green-500 text-black' : 'bg-slate-700 text-slate-400'}`}>
                      <habit.icon size={20} className={!isChecked ? habit.color : ''} />
                    </div>
                    <span className={`font-medium ${isChecked ? 'text-green-300 line-through opacity-70' : 'text-slate-200'}`}>
                      {habit.text}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center border ${isChecked ? 'bg-green-500 border-green-500 text-black' : 'border-slate-500 text-transparent'}`}>
                    <Check size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
