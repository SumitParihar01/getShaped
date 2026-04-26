import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  
  // Date formatting: "Mon, 27 Apr 2026"
  const dateString = time.toLocaleDateString(undefined, { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });

  return (
    <div className="z-50">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -2 }}
        className="relative overflow-hidden backdrop-blur-md bg-slate-800/60 border border-slate-600/50 rounded-2xl p-4 lg:p-5 shadow-lg flex flex-col items-start min-w-[200px]"
      >
        {/* Date */}
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
          {dateString}
        </div>
        
        {/* Time with slight slide animation on minute change */}
        <div className="flex items-baseline font-mono mb-2">
          <AnimatePresence mode="popLayout">
            <motion.span 
              key={timeString}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-slate-100 tracking-tight"
            >
              {timeString}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Subtle Motivational Text */}
        <div className="mt-1 text-slate-500 text-[11px] font-medium tracking-wide flex items-center gap-1.5 opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span>
          Keep moving forward 💪
        </div>

      </motion.div>
    </div>
  );
}
