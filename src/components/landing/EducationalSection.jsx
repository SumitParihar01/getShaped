import { motion } from 'framer-motion';
import { Flame, Droplets, Utensils, Clock } from 'lucide-react';

const concepts = [
  {
    title: "Caloric Balance",
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    desc: "Weight change is driven by calories. Eat less than you burn (deficit) to lose weight. Eat more (surplus) to gain."
  },
  {
    title: "Macronutrients",
    icon: Utensils,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    desc: "Proteins build muscle. Carbs provide quick energy for workouts. Fats support hormones and overall health."
  },
  {
    title: "Meal Timing",
    icon: Clock,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    desc: "When you eat matters less than how much. But protein before and after workouts maximizes muscle protein synthesis."
  },
  {
    title: "Hydration",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    desc: "Water is essential for metabolic functions, joint lubrication, and preventing muscle cramps during exercise."
  }
];

export default function EducationalSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Science of Nutrition</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            You don't need a PhD to get in shape. Understanding these four core pillars will give you absolute control over your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 tracking-wide">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all shadow-xl"
            >
              <div className={`w-14 h-14 rounded-xl ${concept.bg} ${concept.color} flex items-center justify-center mb-6`}>
                <concept.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{concept.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {concept.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
