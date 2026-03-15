import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const PlatformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="students" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Platform</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Built for the whole career journey.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Smart Matching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-precision group hover:-translate-y-0.5 transition-transform"
          >
            <p className="text-xs text-primary font-medium mb-2">Smart Matching</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Roles ranked by <span className="text-gradient">real fit</span>, not keywords
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Our model reads your full profile and surfaces only the roles where you're genuinely in the top tier of candidates.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { initials: "FG", color: "bg-purple-500", role: "Product Designer", company: "Figma", score: "98%" },
                { initials: "LN", color: "bg-blue-500", role: "Frontend Engineer", company: "Linear", score: "94%" },
                { initials: "SP", color: "bg-green-500", role: "Growth Analyst", company: "Spotify", score: "90%" },
              ].map((m) => (
                <div key={m.initials} className="flex items-center gap-3 py-1.5">
                  <div className={`w-7 h-7 rounded-md ${m.color} flex items-center justify-center text-[10px] font-bold text-foreground`}>
                    {m.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{m.role}</p>
                    <p className="text-xs text-muted-foreground">{m.company}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">{m.score}</span>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Explore matching <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Resume Lab - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-precision group hover:-translate-y-0.5 transition-transform"
          >
            <p className="text-xs text-primary font-medium mb-2">Resume Lab</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Beat ATS. <span className="text-gradient">Impress humans.</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Line-by-line AI feedback that turns a generic CV into a targeted, high-scoring one.
            </p>

            <div className="bg-secondary rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-bold text-foreground">92</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Impact", value: "88%" },
                  { label: "Keywords", value: "95%" },
                  { label: "Format", value: "92%" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-primary">94%</p>
              <p className="text-xs text-muted-foreground">ATS pass rate</p>
              <p className="text-[10px] text-muted-foreground/60">Across all student CVs</p>
            </div>
          </motion.div>

          {/* Command Centre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-6 shadow-precision group hover:-translate-y-0.5 transition-transform"
          >
            <p className="text-xs text-primary font-medium mb-2">Command Centre</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Every application, <span className="text-gradient">one place.</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Track your full pipeline from application to offer, with automated status updates.
            </p>

            <div className="space-y-3">
              {["Applied", "Interview", "Offer"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    i === 0 ? "bg-blue-400" : i === 1 ? "bg-amber-400" : "bg-emerald-400"
                  }`} />
                  <span className="text-sm text-foreground font-medium">{stage}</span>
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        i === 0 ? "bg-blue-400 w-4/5" : i === 1 ? "bg-amber-400 w-1/2" : "bg-emerald-400 w-1/4"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-secondary rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-foreground">12+</p>
              <p className="text-xs text-muted-foreground">University partners</p>
              <p className="text-[10px] text-muted-foreground/60">European institutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
