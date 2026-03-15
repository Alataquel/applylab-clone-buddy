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

const statConfig = [
  { end: 85, prefix: "", suffix: "%", label: "Reduction in manual reporting" },
  { end: 100, prefix: "", suffix: "x", label: "More visibility into career activity" },
  { end: 1, prefix: "", suffix: " day", label: "Average onboarding time" },
];

const CountUpStat = ({ config, isInView, delay }: { config: typeof statConfig[0]; isInView: boolean; delay: number }) => {
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setTriggered(true), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, delay]);

  const display = useCountUp(config.end, 1.3, triggered, config.prefix, config.suffix);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
      className="text-center"
    >
      <p className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{display}</p>
      <p className="text-sm text-gray-500 mt-2">{config.label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-12 bg-white border-t border-b border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {statConfig.map((config, i) => (
          <CountUpStat key={config.label} config={config} isInView={isInView} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
