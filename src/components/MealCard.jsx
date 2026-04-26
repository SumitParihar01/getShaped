import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Coffee, Sun, Moon, Apple } from 'lucide-react';

const iconMap = {
  coffee: Coffee,
  sun: Sun,
  moon: Moon,
  apple: Apple,
};

export default function MealCard({ mealType, mealData, dailyCalories }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[mealData.icon] || Coffee;
  
  const caloriePercent = Math.min(Math.round((mealData.calories / dailyCalories) * 100), 100);

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg"
    >
      <div 
        className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-750 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-700 rounded-full text-green-400">
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 capitalize">{mealType}</h3>
            <p className="text-sm text-slate-400">{mealData.name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-lg font-bold text-slate-100">{mealData.calories} <span className="text-sm font-normal text-slate-400">kcal</span></p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-5 border-t border-slate-700 bg-slate-800/50">
              <div className="sm:hidden mb-4">
                <p className="text-lg font-bold text-slate-100">{mealData.calories} <span className="text-sm font-normal text-slate-400">kcal</span></p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Caloric Share ({caloriePercent}%)</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div 
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${caloriePercent}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-5 text-center">
                <div className="bg-slate-700 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Protein</p>
                  <p className="font-semibold text-slate-200">{mealData.macros.p}g</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Carbs</p>
                  <p className="font-semibold text-slate-200">{mealData.macros.c}g</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Fats</p>
                  <p className="font-semibold text-slate-200">{mealData.macros.f}g</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Food Items:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {mealData.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-400">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
