import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Gauge, ListChecks } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: GraduationCap,
    title: "Tell us your degree and goals",
    desc: "Two minutes: upload your CV, pick your degree, and say what you're aiming for.",
  },
  {
    num: "02",
    icon: Gauge,
    title: "We score your fit against real roles and tracks",
    desc: "Your CV is scored against live roles and career tracks — with a transparent fit % and the reasoning behind it.",
  },
  {
    num: "03",
    icon: ListChecks,
    title: "Get matched roles + exactly what to improve",
    desc: "A shortlist of roles you're genuinely right for, and a clear list of what raises each score.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="how-it-works" className="py-24 px-6 lg:px-12 bg-[hsl(220,25%,7%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">How it works</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Three steps. No noise.
          </h2>
          <p className="text-base text-gray-400 mt-4 leading-relaxed">
            From CV upload to matched roles in under two minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="rounded-2xl p-7 bg-white/[0.03] border border-white/[0.06] hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-gray-500 font-mono">{s.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
