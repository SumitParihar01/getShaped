import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PersonalizationPanel from '../components/PersonalizationPanel';
import MealCard from '../components/MealCard';
import ExerciseCard from '../components/ExerciseCard';
import { dietPlans } from '../data/mockDietPlans';
import { exercisePlans } from '../data/mockExercisePlans';
import { ArrowLeft } from 'lucide-react';

function Dashboard() {
  const [goal, setGoal] = useState('fat loss');
  const [dietPreference, setDietPreference] = useState('non-veg');
  const [dailyCalories, setDailyCalories] = useState(2000);
  const [activeTab, setActiveTab] = useState('diet');
  
  // Track completed workouts by index string or id
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const currentDietPlan = dietPlans[goal][dietPreference];
  const currentExercisePlan = exercisePlans[goal];
  
  // Calculate mock "consumed" just for demonstration
  const consumedCalories = useMemo(() => {
    return Object.values(currentDietPlan).reduce((acc, meal) => acc + meal.calories, 0);
  }, [currentDietPlan]);

  const totalMacros = useMemo(() => {
    return Object.values(currentDietPlan).reduce((acc, meal) => {
      acc.p += meal.macros.p;
      acc.c += meal.macros.c;
      acc.f += meal.macros.f;
      return acc;
    }, { p: 0, c: 0, f: 0 });
  }, [currentDietPlan]);

  const toggleExercise = (index) => {
    setCompletedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-4 md:p-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-green-400 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <Header 
          consumedCalories={consumedCalories} 
          dailyCalories={dailyCalories}
          remainingMacros={totalMacros} 
        />
        
        <main className="mt-8">
          <PersonalizationPanel 
            goal={goal} setGoal={setGoal} 
            dailyCalories={dailyCalories} setDailyCalories={setDailyCalories} 
            dietPreference={dietPreference} setDietPreference={setDietPreference}
          />

          <div className="flex bg-slate-800 rounded-lg p-1 w-full max-w-sm mx-auto mb-8 border border-slate-700">
            <button
              onClick={() => setActiveTab('diet')}
              className={`flex-1 py-2 text-sm rounded-md transition-all duration-300 font-medium ${
                activeTab === 'diet' 
                  ? 'bg-gradient-to-r from-green-500 to-green-400 text-black shadow' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Diet Plan
            </button>
            <button
              onClick={() => setActiveTab('exercise')}
              className={`flex-1 py-2 text-sm rounded-md transition-all duration-300 font-medium ${
                activeTab === 'exercise' 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-black shadow' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Exercise Plan
            </button>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === 'diet' && (
                <motion.div
                  key="diet"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-bold text-slate-100 mb-4 px-2 tracking-wide">
                    Your {dietPreference === 'veg' ? 'Vegetarian' : ''} Diet Plan
                  </h2>
                  {Object.entries(currentDietPlan).map(([mealType, mealData]) => (
                    <MealCard 
                      key={mealType} 
                      mealType={mealType} 
                      mealData={mealData} 
                      dailyCalories={dailyCalories} 
                    />
                  ))}
                </motion.div>
              )}

              {activeTab === 'exercise' && (
                <motion.div
                  key="exercise"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between px-2 mb-4">
                    <h2 className="text-xl font-bold text-slate-100 tracking-wide">Today's Workout</h2>
                    <span className="text-sm text-blue-400 font-medium">
                      {completedExercises.size} / {currentExercisePlan.length} Completed
                    </span>
                  </div>
                  
                  {completedExercises.size === currentExercisePlan.length && (
                    <motion.div 
                      className="bg-green-900/40 border border-green-500/50 text-green-300 p-4 rounded-xl text-center mb-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      🎉 Amazing job! You crushed your workout today!
                    </motion.div>
                  )}

                  {currentExercisePlan.map((exercise, idx) => (
                    <ExerciseCard 
                      key={idx}
                      exercise={exercise}
                      completed={completedExercises.has(idx)}
                      onToggleComplete={() => toggleExercise(idx)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
