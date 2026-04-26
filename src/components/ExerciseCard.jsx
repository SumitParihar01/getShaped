import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Move, Zap, Activity, CheckCircle } from 'lucide-react';

const iconMap = {
  move: Move,
  zap: Zap,
  activity: Activity,
};

export default function ExerciseCard({ exercise, onToggleComplete, completed }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[exercise.icon] || Activity;

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`rounded-xl overflow-hidden border shadow-lg transition-colors ${
        completed ? 'bg-green-900/40 border-green-700/50' : 'bg-slate-800 border-slate-700'
      }`}
    >
      <div 
        className={`p-5 flex items-center justify-between cursor-pointer transition-colors ${
          completed ? 'hover:bg-green-800/30' : 'hover:bg-slate-750'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete();
            }}
            className={`p-2 rounded-full transition-colors ${
              completed ? 'bg-green-500 text-black' : 'bg-slate-700 text-slate-400 hover:text-green-400'
            }`}
          >
            <CheckCircle size={24} />
          </button>
          
          <div className={`p-2 rounded-lg ${completed ? 'text-green-400' : 'text-blue-400 bg-slate-900/50'}`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${completed ? 'text-green-100 line-through' : 'text-slate-100'}`}>
              {exercise.name}
            </h3>
            <p className="text-sm text-slate-400">
              {exercise.duration !== '-' ? exercise.duration : `${exercise.sets} Sets x ${exercise.reps} Reps`}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
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
            <div className="p-5 border-t border-slate-700/50 bg-slate-900/20">
              <p className="text-sm text-slate-300 leading-relaxed">
                {exercise.description}
              </p>
              
              <div className="flex gap-6 mt-4">
                {exercise.sets !== '-' && (
                  <div>
                    <span className="block text-xs text-slate-500">Sets</span>
                    <span className="font-semibold text-slate-200">{exercise.sets}</span>
                  </div>
                )}
                {exercise.reps !== '-' && (
                  <div>
                    <span className="block text-xs text-slate-500">Reps</span>
                    <span className="font-semibold text-slate-200">{exercise.reps}</span>
                  </div>
                )}
                {exercise.duration !== '-' && (
                  <div>
                    <span className="block text-xs text-slate-500">Duration</span>
                    <span className="font-semibold text-slate-200">{exercise.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
