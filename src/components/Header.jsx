import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function Header({ consumedCalories, dailyCalories, remainingMacros }) {
  const percentConsumed = Math.min(Math.round((consumedCalories / dailyCalories) * 100), 100);
  const strokeDasharray = 250;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentConsumed) / 100;

  return (
    <header className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">
      <div>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2 flex items-center gap-2">
          <Activity className="text-green-400" />
          GetShaped
        </h1>
        <p className="text-slate-400">Fuel your body to hit your goals.</p>
      </div>

      <div className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#0f172a"
              strokeWidth="8"
              fill="transparent"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="#22c55e"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: strokeDasharray }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-slate-100">{percentConsumed}%</span>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-slate-100">{consumedCalories}</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider">/ {dailyCalories} Kcal</p>

          <div className="flex gap-3 mt-2">
            <div className="text-xs">
              <span className="text-blue-400 font-semibold">{remainingMacros.p}g</span> <span className="text-slate-500">P</span>
            </div>
            <div className="text-xs">
              <span className="text-yellow-400 font-semibold">{remainingMacros.c}g</span> <span className="text-slate-500">C</span>
            </div>
            <div className="text-xs">
              <span className="text-red-400 font-semibold">{remainingMacros.f}g</span> <span className="text-slate-500">F</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
