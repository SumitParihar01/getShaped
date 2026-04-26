import { motion } from 'framer-motion';
import { Sun, Coffee, Briefcase, Moon } from 'lucide-react';

const timeline = [
  { time: "Morning (8:00 AM)", icon: Sun, title: "Home-Style Breakfast", desc: "Start with what you know. Poha, Upma, or Eggs. We just fix the portion size.", color: "text-yellow-400" },
  { time: "Office (1:30 PM)", icon: Briefcase, title: "Lunch at Work", desc: "Rice, Dal, and Chicken/Paneer. Easily packable, no weird ingredients.", color: "text-blue-400" },
  { time: "Evening (5:00 PM)", icon: Coffee, title: "Chai & Cravings", desc: "Yes, you can have your chai. We plan for a 150 calorie buffer so evening hunger won't ruin your diet.", color: "text-orange-400" },
  { time: "Night (8:30 PM)", icon: Moon, title: "Light Dinner", desc: "Finish the day with something light but high in protein to recover while you sleep.", color: "text-purple-400" }
];

export default function DayInLife() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Day In Real Life</h2>
          <p className="text-slate-400 text-lg">Your diet shouldn't isolate you. Here's how our plan fits your actual schedule.</p>
        </div>

        <div className="relative border-l-2 border-slate-700 md:ml-12 ml-6 pb-4">
          {timeline.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-12 mt-1 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-500 flex items-center justify-center -translate-x-[5px]">
                <event.icon size={14} className={event.color} />
              </div>
              
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/50 shadow-lg hover:border-slate-500 transition-colors">
                <span className="text-sm font-semibold text-green-400 uppercase tracking-widest">{event.time}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-2 mb-2">{event.title}</h3>
                <p className="text-slate-400 leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
