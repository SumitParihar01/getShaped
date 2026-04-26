import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const macroData = {
  "Fat Loss": [
    { name: 'Protein', value: 40, color: '#3b82f6' }, // blue
    { name: 'Carbs', value: 30, color: '#eab308' },   // yellow
    { name: 'Fats', value: 30, color: '#ef4444' },    // red
  ],
  "Muscle Gain": [
    { name: 'Protein', value: 30, color: '#3b82f6' },
    { name: 'Carbs', value: 50, color: '#eab308' },
    { name: 'Fats', value: 20, color: '#ef4444' },
  ],
  "Maintenance": [
    { name: 'Protein', value: 30, color: '#3b82f6' },
    { name: 'Carbs', value: 40, color: '#eab308' },
    { name: 'Fats', value: 30, color: '#ef4444' },
  ]
};

export default function InteractiveVisuals() {
  const [activeGoal, setActiveGoal] = useState('Fat Loss');
  const data = macroData[activeGoal];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 w-full space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Master Your Macros</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Every fitness goal requires a different fuel ratio. See how we adjust your proteins, carbs, and fats to turn your body into a fat-burning or muscle-building machine.
            </p>

            <div className="flex flex-col gap-3">
              {Object.keys(macroData).map((goal) => (
                <button
                  key={goal}
                  onClick={() => setActiveGoal(goal)}
                  className={`px-6 py-4 rounded-xl text-left font-semibold transition-all duration-300 flex items-center border ${
                    activeGoal === goal 
                      ? 'bg-slate-800 border-green-500 text-green-400 shadow-md' 
                      : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                  }`}
                >
                  <span className="flex-1">{goal} Macro Split</span>
                  {activeGoal === goal && (
                     <motion.div layoutId="macroIndicator" className="w-2 h-2 rounded-full bg-green-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full h-[400px] bg-slate-800/50 rounded-3xl p-6 border border-slate-700 flex flex-col">
          <h3 className="text-center font-bold text-xl text-slate-200 mb-4">{activeGoal} Configuration</h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  animationDuration={1000}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem', color: '#f8fafc' }}
                  itemStyle={{ color: '#f8fafc' }}
                  formatter={(value) => [`${value}%`, 'Target']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-center gap-6 mt-4">
            {data.map(item => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-slate-300 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
