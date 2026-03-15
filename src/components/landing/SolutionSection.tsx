import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, BarChart3, Briefcase } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    number: "01",
    title: "Real-time student visibility",
    description: "See every student's career activity as it happens — applications sent, interviews scheduled, events attended. No more waiting for end-of-year surveys.",
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Institutional analytics & reporting",
    description: "Track placement rates, compare programme performance, and surface cohort-level trends — all in real time. From qualification benchmarks to market-fit scores, every metric your accreditation bodies and leadership need is generated automatically.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Student-facing career tools",
    description: "A unified portal with AI resume grading, job boards, event discovery, application tracking, and advisor booking — all branded to your university.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
];

interface SolutionSectionProps {
  variant?: "dark" | "light";
}

const SolutionSection = ({ variant = "dark" }: SolutionSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isLight = variant === "light";

  return (
    <section ref={ref} className={`py-24 px-6 lg:px-12 ${isLight ? "bg-white" : "bg-[hsl(220,25%,7%)]"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The solution</p>
          <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
            Three layers of intelligence.
          </h2>
          <p className={`text-sm leading-relaxed ${isLight ? "text-gray-500" : "text-gray-400"}`}>
            ApplyLab gives your career team the data to intervene early, report with confidence, and improve outcomes year over year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl ${s.bgColor} flex items-center justify-center mb-5`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-2">Layer {s.number}</p>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
