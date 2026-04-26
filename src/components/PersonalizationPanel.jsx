import { motion } from 'framer-motion';

export default function PersonalizationPanel({ 
  goal, setGoal, 
  dailyCalories, setDailyCalories,
  dietPreference, setDietPreference
}) {
  const goals = ['fat loss', 'maintenance', 'muscle gain'];
  const diets = ['non-veg', 'veg'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800 rounded-xl p-6 shadow-lg mb-8 border border-slate-700"
    >
      <h2 className="text-xl font-bold text-slate-100 mb-4">Personalization Engine</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Fitness Goal</label>
          <div className="flex bg-slate-900 rounded-lg p-1">
            {goals.map((g) => (
              <button
                key={g}
                onClick={() => setGoal(g)}
                className={`flex-1 py-1.5 px-2 text-xs sm:text-sm rounded-md capitalize transition-all duration-300 ${
                  goal === g 
                    ? 'bg-blue-500 text-white font-semibold shadow' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Diet Preference</label>
          <div className="flex bg-slate-900 rounded-lg p-1">
            {diets.map((d) => (
              <button
                key={d}
                onClick={() => setDietPreference(d)}
                className={`flex-1 py-1.5 px-2 text-xs sm:text-sm rounded-md capitalize transition-all duration-300 ${
                  dietPreference === d 
                    ? 'bg-green-500 text-black font-semibold shadow' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Target Calories: <span className="text-green-400 font-bold">{dailyCalories} kcal</span>
          </label>
          <input 
            type="range" 
            min="1200" 
            max="4000" 
            step="50"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(Number(e.target.value))}
            className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1200</span>
            <span>4000</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
