import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, BarChart3 } from "lucide-react";

const StudentToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Student-facing tools</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Better tools for students. Better data for you.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Students get a modern career toolkit — and every interaction feeds back into your institutional dashboard.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Internship Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <Search className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Internship Board</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                Intelligent matching surfaces roles where students are genuinely competitive — improving application quality and reducing noise across your institution.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-gray-100 rounded-lg p-4 space-y-2">
                {[
                  { letter: "F", color: "bg-purple-500", role: "Product Design Intern", company: "Figma", match: "98%", location: "Remote" },
                  { letter: "L", color: "bg-blue-500", role: "Frontend Engineering Intern", company: "Linear", match: "95%", location: "London" },
                  { letter: "S", color: "bg-emerald-500", role: "Growth Marketing Intern", company: "Spotify", match: "92%", location: "Stockholm" },
                  { letter: "M", color: "bg-amber-500", role: "Strategy Analyst Intern", company: "McKinsey", match: "88%", location: "Madrid" },
                ].map((job) => (
                  <div key={job.role} className="flex items-center gap-3 bg-card rounded-md px-3 py-3">
                    <div className={`w-8 h-8 rounded-md ${job.color} flex items-center justify-center text-[10px] font-bold text-foreground`}>
                      {job.letter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">{job.role}</p>
                      <p className="text-[10px] text-muted-foreground">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">{job.match}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resume Lab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-precision overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <FileText className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Resume Lab</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                AI-powered CV feedback that raises the baseline quality of every student application. Line-by-line optimisation, at scale.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-secondary rounded-lg p-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  <div className="bg-card rounded-md p-3 text-center">
                    <p className="text-2xl font-bold text-foreground">92</p>
                    <p className="text-[10px] text-muted-foreground">Overall Score</p>
                  </div>
                  {[
                    { label: "Impact", value: "88%", color: "text-amber-400" },
                    { label: "Keywords", value: "95%", color: "text-emerald-400" },
                    { label: "Format", value: "92%", color: "text-primary" },
                  ].map((m) => (
                    <div key={m.label} className="bg-card rounded-md p-3 text-center">
                      <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                      <p className="text-[10px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { type: "suggestion", text: "Add metrics to your 2nd bullet point to quantify impact." },
                    { type: "optimised", text: "Skills section optimised for Technology sector roles." },
                    { type: "suggestion", text: "Consider adding a project section to showcase relevant work." },
                  ].map((s, i) => (
                    <div key={i} className={`rounded-md px-3 py-2.5 text-xs ${
                      s.type === "suggestion"
                        ? "bg-amber-500/5 text-amber-300/80"
                        : "bg-emerald-500/5 text-emerald-300/80"
                    }`}>
                      {s.type === "suggestion" ? "💡 " : "✓ "}{s.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Automatic Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl shadow-precision overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <BarChart3 className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Automatic Tracker</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                A shared pipeline that automatically tracks every student's applications — giving your team and students real-time status visibility.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-secondary rounded-lg p-4">
                {/* Pipeline columns */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    {
                      stage: "Applied",
                      color: "bg-blue-400",
                      items: [
                        { company: "Spotify", role: "Marketing", days: "2d ago" },
                        { company: "Revolut", role: "Product", days: "3d ago" },
                        { company: "Wise", role: "Ops", days: "5d ago" },
                      ],
                    },
                    {
                      stage: "Interview",
                      color: "bg-amber-400",
                      items: [
                        { company: "Linear", role: "Engineering", days: "Tomorrow" },
                        { company: "Figma", role: "Design", days: "Thu" },
                      ],
                    },
                    {
                      stage: "Offer",
                      color: "bg-emerald-400",
                      items: [
                        { company: "McKinsey", role: "Strategy", days: "Pending" },
                      ],
                    },
                    {
                      stage: "Accepted",
                      color: "bg-primary",
                      items: [],
                    },
                  ].map((col) => (
                    <div key={col.stage}>
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className={`w-2 h-2 rounded-full ${col.color}`} />
                        <span className="text-[10px] font-medium text-foreground">{col.stage}</span>
                        <span className="text-[10px] text-muted-foreground">{col.items.length}</span>
                      </div>
                      <div className="space-y-1.5">
                        {col.items.map((item) => (
                          <div key={item.company} className="bg-card rounded-md p-2">
                            <p className="text-[10px] font-medium text-foreground">{item.company}</p>
                            <p className="text-[9px] text-muted-foreground">{item.role}</p>
                            <p className="text-[9px] text-muted-foreground/60 mt-0.5">{item.days}</p>
                          </div>
                        ))}
                        {col.items.length === 0 && (
                          <div className="border border-dashed border-border/30 rounded-md p-2 text-center">
                            <p className="text-[9px] text-muted-foreground/40">—</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentToolsSection;
