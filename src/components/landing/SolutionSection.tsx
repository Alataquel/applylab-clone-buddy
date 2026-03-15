import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, BarChart3, Briefcase, ArrowRight } from "lucide-react";

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
    description: "Auto-generated placement reports, programme-level comparisons, and cohort analytics. Everything accreditation bodies and leadership need — without the manual work.",
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

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[hsl(220,25%,7%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The solution</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Three layers of intelligence.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
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
              <div className="mt-5 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
