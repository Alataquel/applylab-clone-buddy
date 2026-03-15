import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, BarChart3 } from "lucide-react";

const tools = [
  {
    icon: Search,
    title: "Internship Board",
    desc: "Intelligent matching surfaces roles where students are genuinely competitive — improving application quality and reducing noise across your institution.",
  },
  {
    icon: FileText,
    title: "Resume Lab",
    desc: "AI-powered CV feedback that raises the baseline quality of every student application. Line-by-line optimisation, at scale.",
  },
  {
    icon: BarChart3,
    title: "Automatic Tracker",
    desc: "A shared pipeline that automatically tracks every student's applications — giving your team and students real-time status visibility.",
  },
];

const StudentToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Student-facing tools</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            Better tools for students. Better data for you.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Students get a modern career toolkit — and every interaction feeds back into your institutional dashboard. The more students engage, the more your team can see.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-precision hover:-translate-y-0.5 transition-transform"
            >
              <t.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentToolsSection;
