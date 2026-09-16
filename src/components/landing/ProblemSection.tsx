import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScanSearch, Crosshair, Wrench } from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    title: "See your fit",
    desc: "One CV upload scores you against real roles and career tracks — with a transparent percentage, not a vibe.",
  },
  {
    icon: Crosshair,
    title: "Know your gaps",
    desc: "Every score comes with the reason behind it: the missing keyword, the weak bullet, the track you haven't considered.",
  },
  {
    icon: Wrench,
    title: "Close them",
    desc: "Fix what the score flags — and watch your fit rise before you apply anywhere.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Why this isn't another CV tool</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Most tools help you look better on paper.{" "}
            <span className="text-gray-400">We tell you where you actually fit — and why.</span>
          </h2>
        </motion.div>

        {/* Verb-framed process row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative bg-[hsl(220,70%,14%)] rounded-2xl p-7 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-sky-400/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-sky-400" />
                </div>
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-4 lg:-right-3 z-10 text-gray-300 text-xl select-none">→</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
