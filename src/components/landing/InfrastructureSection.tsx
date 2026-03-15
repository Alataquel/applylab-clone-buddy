import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BookOpen, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "Student Analysis",
    desc: "Deep, individual-level insights into every student's career journey. Track application activity, engagement patterns, and progress across your entire cohort in real time.",
    highlights: ["Application volume & conversion", "Engagement scoring", "At-risk student alerts"],
  },
  {
    icon: BookOpen,
    title: "Qualifications Insights",
    desc: "See how your programmes translate into employability. Understand which qualifications, modules, and skill sets drive stronger career outcomes.",
    highlights: ["Placement rates by programme", "Curriculum gap analysis", "Peer benchmarking"],
  },
  {
    icon: Globe,
    title: "Market Insights",
    desc: "Real-time labour market intelligence tailored to your student population. See which industries are hiring, what skills are in demand, and where your graduates compete.",
    highlights: ["Regional demand signals", "Sector-level trends", "Salary benchmarking"],
  },
];

const InfrastructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The platform</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            Your institutional dashboard.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Three layers of intelligence that give your career team the data to intervene early, report with confidence, and improve outcomes year over year.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-precision hover:-translate-y-0.5 transition-transform flex flex-col"
            >
              <c.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
              <ul className="mt-auto space-y-2">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
