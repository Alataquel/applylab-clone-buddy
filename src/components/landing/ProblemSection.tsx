import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, BarChart3, GraduationCap, TrendingUp } from "lucide-react";

const challenges = [
  {
    icon: Eye,
    title: "No visibility",
    desc: "Career teams can't see what students are doing until it's too late. End-of-year surveys miss the full picture.",
  },
  {
    icon: BarChart3,
    title: "No actionable data",
    desc: "Placement reporting is manual, delayed, and based on estimates. Accreditation bodies expect better.",
  },
  {
    icon: GraduationCap,
    title: "Fragmented tools",
    desc: "Students use spreadsheets, random job boards, and generic templates. There's no unified system connecting them to your team.",
  },
  {
    icon: TrendingUp,
    title: "No way to intervene",
    desc: "By the time you know a student is struggling, they've already disengaged. Proactive support is impossible without live data.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The problem</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            Career services are flying blind.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Most university career teams have no real-time data on student career activity. The result: reactive support, inaccurate reporting, and poor outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-precision"
            >
              <c.icon className="w-5 h-5 text-muted-foreground mb-4" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
