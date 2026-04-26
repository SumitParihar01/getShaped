import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

const foodDatabase = [
  { id: 1, name: "2 Rotis", p: 6, c: 30, f: 2, cals: 160 },
  { id: 2, name: "1 Cup Rice", p: 4, c: 45, f: 0.5, cals: 200 },
  { id: 3, name: "Dal Tadka", p: 9, c: 20, f: 5, cals: 150 },
  { id: 4, name: "100g Paneer", p: 18, c: 2, f: 20, cals: 260 },
  { id: 5, name: "2 Boiled Eggs", p: 12, c: 1, f: 10, cals: 140 },
  { id: 6, name: "Chicken Curry", p: 25, c: 8, f: 15, cals: 250 },
  { id: 7, name: "Mixed Sabzi", p: 3, c: 15, f: 7, cals: 120 }
];

export default function InteractivePlate() {
  const [plate, setPlate] = useState([]);
  
  const handleAdd = (food) => {
    setPlate([...plate, { ...food, key: Math.random().toString() }]);
  };

  const handleRemove = (keyToRemove) => {
    setPlate(plate.filter(item => item.key !== keyToRemove));
  };

  const totals = useMemo(() => {
    return plate.reduce((acc, curr) => ({
      p: acc.p + curr.p,
      c: acc.c + curr.c,
      f: acc.f + curr.f,
      cals: acc.cals + curr.cals
    }), { p: 0, c: 0, f: 0, cals: 0 });
  }, [plate]);

  const feedback = useMemo(() => {
    if (plate.length === 0) return "Add some food to your plate!";
    if (totals.p < 15) return "Low protein — try adding paneer, eggs, or chicken.";
    if (totals.c > 80) return "High carbs — maybe swap rice for a dal or sabzi.";
    if (totals.p >= 20 && totals.cals < 600) {
      if (plate.length >= 3) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
      return "Perfectly balanced meal! Great job.";
    }
    return "Looking good, keep adjusting!";
  }, [totals, plate.length]);

  return (
    <section id="whats-on-plate" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What's On Your Plate?</h2>
          <p className="text-slate-400 text-lg">Don't guess your nutrition. Build a typical meal and see the real breakdown.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Food Selection */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-6 text-slate-200">Tap to add food</h3>
            <div className="grid grid-cols-2 gap-4">
              {foodDatabase.map((food) => (
                <motion.button
                  key={food.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAdd(food)}
                  className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex items-center justify-between text-left hover:border-green-500 hover:text-green-400 transition-colors"
                >
                  <div>
                    <p className="font-semibold">{food.name}</p>
                    <p className="text-xs text-slate-400">{food.cals} kcal</p>
                  </div>
                  <Plus size={18} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Plate Visualization */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-md aspect-square bg-slate-800 rounded-full border-8 border-slate-700 shadow-2xl relative flex items-center justify-center p-8 overflow-hidden mb-8 shadow-green-500/10">
              <AnimatePresence>
                {plate.length === 0 && (
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="text-slate-500 text-center"
                  >
                    Your plate is empty.<br/>Add your favorites!
                  </motion.p>
                )}
                
                <div className="flex flex-wrap justify-center content-center gap-2 w-full h-full">
                  {plate.map((item) => (
                    <motion.div
                      key={item.key}
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      layout
                      onClick={() => handleRemove(item.key)}
                      className="bg-slate-700 text-slate-200 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-600 flex items-center gap-1 cursor-pointer hover:bg-red-500/20 hover:text-red-400 hover:border-red-500 transition-colors"
                    >
                      {item.name} <Minus size={14} />
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>

            {/* Smart Feedback & Macros */}
            <div className="w-full max-w-md bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-3 mb-6 bg-blue-500/10 p-4 rounded-xl text-blue-400 border border-blue-500/20">
                <Info size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{feedback}</p>
              </div>

              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Calories</p>
                  <p className="text-xl font-bold text-slate-100">{totals.cals}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Protein</p>
                  <p className="text-xl font-bold text-blue-400">{totals.p}g</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Carbs</p>
                  <p className="text-xl font-bold text-yellow-400">{totals.c}g</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Fats</p>
                  <p className="text-xl font-bold text-red-400">{totals.f}g</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
