import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Sarah K.", role: "Lost 15lbs", text: "I finally understand how to eat. The dashboard dynamically showing my macros made fat loss feel like a breeze. Highly recommended!" },
  { name: "Mike T.", role: "Gained 8lbs Muscle", text: "I struggled to put on size because I wasn't eating enough. The interactive pie charts showed me I was lacking carbs. Game changer." },
  { name: "Elena R.", role: "Vegetarian Athlete", text: "Most apps ignore vegetarians or just give you salads. GetShaped actually gave me high-protein plant-based options that hit my goals." }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted By Thousands</h2>
          <p className="text-green-400 font-semibold mb-2">87% of users improved their fitness consistency</p>
          <p className="text-slate-400 text-lg">See what the community has achieved.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="text-slate-100 font-bold">{review.name}</p>
                <p className="text-green-400 text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
