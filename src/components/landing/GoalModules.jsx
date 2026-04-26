import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const goalModules = [
  {
    title: "Fat Loss Science",
    color: "from-orange-500 to-red-500",
    explanation: "Achieve a caloric deficit. We structure your meals to be high in protein and fiber to keep you full while your body burns stored fat for energy.",
    logic: "High Protein • Moderate Carbs • Low Fats",
    results: "1-2 lbs of steady fat loss per week while retaining lean muscle mass.",
  },
  {
    title: "Muscle Gain Nutrition",
    color: "from-blue-500 to-cyan-500",
    explanation: "You need a caloric surplus to synthesize new muscle tissue. We provide the precise energy surplus required without excessive fat gain.",
    logic: "High Protein • High Carbs • Moderate Fats",
    results: "0.5-1 lbs of lean muscle gain per week with improved gym recovery.",
  },
  {
    title: "Maintenance Strategy",
    color: "from-green-500 to-emerald-500",
    explanation: "Fuel your active lifestyle without fluctuating weight. We calculate your exact Total Daily Energy Expenditure (TDEE).",
    logic: "Balanced Protein, Carbs, and Fats",
    results: "Stable body weight, improved energy levels, and body recomposition over time.",
  }
];

export default function GoalModules() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Goal-Based Learning Modules</h2>
          <p className="text-slate-400 text-lg">Every body is different. Learn the science behind your specific goal.</p>
        </div>

        <div className="space-y-8">
          {goalModules.map((module, idx) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700/50 flex flex-col md:flex-row items-center gap-8 shadow-xl"
            >
              <div className="flex-1 w-full space-y-6">
                <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${module.color}`}>
                  {module.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">{module.explanation}</p>
                
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Sample Diet Logic</p>
                  <p className="font-semibold text-slate-200">{module.logic}</p>
                </div>
                
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Expected Results</p>
                  <p className="text-green-400 font-medium">{module.results}</p>
                </div>
              </div>
              
              <div className="flex-1 w-full flex justify-center items-center">
                 <Link to="/dashboard">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-slate-900 font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-colors bg-gradient-to-r ${module.color} shadow-lg`}
                    >
                      Start This Plan <ArrowRight size={20} />
                    </motion.button>
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
