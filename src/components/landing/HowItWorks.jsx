import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Set Your Goal", desc: "Tell us if you want to lose fat, build muscle, or maintain your weight." },
  { num: "02", title: "Pick Preferences", desc: "Choose vegetarian or non-vegetarian, and input your daily calorie target." },
  { num: "03", title: "Algorithmic Match", desc: "Our system calculates macro distribution and builds a meal plan matrix." },
  { num: "04", title: "Track Progress", desc: "Mark exercises as done and follow your progressive journey each day." }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-slate-900 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How Your Plan Is Generated</h2>
          <p className="text-slate-400 text-lg">Four simple steps to absolute personalization.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-800 md:bg-slate-900 p-6 md:p-0 rounded-2xl md:rounded-none group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 mx-auto flex items-center justify-center font-bold text-xl text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-black transition-colors shadow-lg shadow-black/50">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-center text-slate-200 mb-3">{step.title}</h3>
                <p className="text-center text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
