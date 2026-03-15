import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const studentFeatures = [
  {
    num: "01",
    title: "Job Board",
    desc: "Intelligent matching surfaces roles where students are genuinely competitive — improving application quality and reducing wasted effort across your cohort.",
    items: [
      { letter: "L", color: "bg-blue-500", role: "Product Designer", company: "Linear", score: "98% Match" },
      { letter: "V", color: "bg-foreground", role: "Frontend Engineer", company: "Vercel", score: "95% Match" },
      { letter: "S", color: "bg-green-500", role: "Marketing Intern", company: "Spotify", score: "92% Match" },
    ],
  },
  {
    num: "02",
    title: "Resume Lab",
    desc: "Line-by-line feedback that improves your ATS score, strengthens impact statements, and plugs keyword gaps in seconds.",
    atsScore: 92,
    suggestions: [
      "Suggestion: Add metrics to your 2nd bullet point.",
      "Skills section optimized for Tech roles.",
    ],
  },
  {
    num: "03",
    title: "Application Tracker",
    desc: "A visual pipeline that automatically updates your status across every process, with reminders and follow-up prompts built in.",
    pipeline: ["Applied", "Interview", "Offer", "Accepted!"],
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"students" | "teams">("students");

  return (
    <section ref={ref} id="universities" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Features</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">The infrastructure behind better career outcomes.</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-12 bg-secondary rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab("students")}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "students" ? "bg-card text-foreground shadow-precision" : "text-muted-foreground"
            }`}
          >
            Student Experience
          </button>
          <button
            onClick={() => setActiveTab("teams")}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "teams" ? "bg-card text-foreground shadow-precision" : "text-muted-foreground"
            }`}
          >
            Institutional Dashboard
          </button>
        </div>

        {activeTab === "students" ? (
          <div className="space-y-8">
            {studentFeatures.map((feature, i) => (
              <motion.div
                key={feature.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-xl p-8 shadow-precision"
              >
                <div>
                  <span className="text-xs text-muted-foreground font-mono">{feature.num}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>

                <div className="bg-secondary rounded-lg p-4">
                  {feature.items && (
                    <div className="space-y-3">
                      {feature.items.map((item) => (
                        <div key={item.role} className="flex items-center gap-3 bg-card rounded-lg p-3">
                          <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center text-xs font-bold text-foreground`}>
                            {item.letter}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{item.role}</p>
                            <p className="text-xs text-muted-foreground">{item.company}</p>
                          </div>
                          <span className="text-xs text-emerald-400 font-medium">{item.score}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.atsScore && (
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-muted-foreground">ATS Score</span>
                        <span className="text-2xl font-bold text-foreground">{feature.atsScore}/100</span>
                      </div>
                      <div className="flex gap-2">
                        {["Impact", "Keywords", "Format"].map((l) => (
                          <span key={l} className="text-[10px] px-2 py-1 rounded bg-card text-muted-foreground">{l}</span>
                        ))}
                      </div>
                      {feature.suggestions?.map((s, j) => (
                        <p key={j} className="text-xs text-muted-foreground bg-card rounded p-2">
                          {s}
                        </p>
                      ))}
                    </div>
                  )}

                  {feature.pipeline && (
                    <div className="flex items-center gap-2">
                      {feature.pipeline.map((stage, j) => (
                        <div key={stage} className="flex items-center gap-2">
                          <div className={`px-3 py-2 rounded-lg text-xs font-medium ${
                            j === feature.pipeline!.length - 1
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-card text-muted-foreground"
                          }`}>
                            {stage}
                          </div>
                          {j < feature.pipeline!.length - 1 && (
                            <div className="w-4 h-px bg-muted" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-xl p-12 shadow-precision text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-3">University Analytics Dashboard</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Real-time visibility into student placement rates, engagement metrics, and career outcomes across your institution.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
