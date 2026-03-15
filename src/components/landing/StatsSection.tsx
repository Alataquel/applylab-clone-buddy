import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const useCountUp = (end: number, duration: number, start: boolean, prefix = "", suffix = "") => {
  const [display, setDisplay] = useState(prefix + "0" + suffix);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(prefix + Math.round(eased * end) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration, prefix, suffix]);
  return display;
};

const CountUpStat = ({ stat, isInView, delay }: { stat: { value: string; label: string }; isInView: boolean; delay: number }) => {
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setTriggered(true), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, delay]);

  // Parse the stat value
  let display: string;
  if (stat.value === "12+") {
    display = useCountUp(12, 1.5, triggered, "", "+");
  } else if (stat.value === "3x") {
    display = useCountUp(3, 1.2, triggered, "", "x");
  } else {
    display = useCountUp(2, 1.2, triggered, "< ", " weeks");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
      className="text-center"
    >
      <p className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{display}</p>
      <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
    </motion.div>
  );
};

const stats = [
  { value: "12+", label: "University partners" },
  { value: "3x", label: "More visibility into career activity" },
  { value: "< 2 weeks", label: "Average onboarding time" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-12 bg-white border-t border-b border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <CountUpStat key={stat.label} stat={stat} isInView={isInView} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
