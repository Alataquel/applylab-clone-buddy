import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Users, BookOpen, Globe, AlertTriangle, TrendingUp, ArrowUpRight, Shield } from "lucide-react";

const ForUniversities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Universities</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Career outcomes you can <span className="text-gradient italic">actually measure.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Three layers of intelligence that give your career team the data to intervene early, report with confidence, and improve outcomes year over year.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "94%", label: "CV optimisation rate" },
            { value: "3×", label: "More visibility into career activity" },
            { value: "< 2 weeks", label: "Average onboarding time" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboard Features with Visuals */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The platform</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">Your institutional dashboard.</h2>
          </motion.div>

          <div className="space-y-8">
            {/* Student Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl shadow-precision overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <Users className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Student Analysis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Deep, individual-level insights into every student's career journey. Track application activity, engagement patterns, and progress across your entire cohort in real time.
                </p>
              </div>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <div className="bg-secondary rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider px-1">
                    <span className="flex-1">Student</span>
                    <span className="w-16 text-center">Apps</span>
                    <span className="w-16 text-center">Interviews</span>
                    <span className="w-20 text-center">Engagement</span>
                    <span className="w-16 text-center">Status</span>
                  </div>
                  {[
                    { name: "Emma Torres", programme: "Business 2026", apps: 18, interviews: 4, engagement: 92, status: "active" },
                    { name: "Liam Chen", programme: "Engineering 2026", apps: 12, interviews: 2, engagement: 78, status: "active" },
                    { name: "Sofia Müller", programme: "Arts 2026", apps: 3, interviews: 0, engagement: 24, status: "at-risk" },
                    { name: "Marco Rossi", programme: "Business 2026", apps: 22, interviews: 6, engagement: 95, status: "active" },
                    { name: "Aisha Khan", programme: "Engineering 2026", apps: 1, interviews: 0, engagement: 15, status: "at-risk" },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center gap-2 bg-card rounded-md px-3 py-2.5">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground">{s.name}</p>
                        <p className="text-[10px] text-muted-foreground">{s.programme}</p>
                      </div>
                      <span className="w-16 text-center text-xs text-foreground">{s.apps}</span>
                      <span className="w-16 text-center text-xs text-foreground">{s.interviews}</span>
                      <div className="w-20 flex items-center justify-center gap-1">
                        <div className="w-10 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${s.engagement > 60 ? "bg-emerald-400" : "bg-amber-400"}`}
                            style={{ width: `${s.engagement}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-muted-foreground">{s.engagement}%</span>
                      </div>
                      <span className={`w-16 text-center text-[10px] font-medium rounded-full px-2 py-0.5 ${
                        s.status === "active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                      }`}>
                        {s.status === "at-risk" && <AlertTriangle className="w-2.5 h-2.5 inline mr-0.5" />}
                        {s.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Qualifications Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-xl shadow-precision overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <BookOpen className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Qualifications Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  See how your programmes translate into employability. Understand which qualifications, modules, and skill sets drive stronger career outcomes.
                </p>
              </div>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {[
                      { programme: "Business Admin", rate: "74%", change: "+8%" },
                      { programme: "Computer Science", rate: "82%", change: "+12%" },
                      { programme: "Marketing", rate: "61%", change: "+3%" },
                      { programme: "Finance", rate: "78%", change: "+6%" },
                    ].map((p) => (
                      <div key={p.programme} className="bg-card rounded-md p-3 text-center">
                        <p className="text-[10px] text-muted-foreground mb-1">{p.programme}</p>
                        <p className="text-lg font-bold text-foreground">{p.rate}</p>
                        <p className="text-[10px] text-emerald-400 flex items-center justify-center gap-0.5">
                          <ArrowUpRight className="w-2.5 h-2.5" />{p.change}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mb-2">Placement rate by programme</p>
                  <div className="space-y-2">
                    {[
                      { name: "Computer Science", width: "82%" },
                      { name: "Finance", width: "78%" },
                      { name: "Business Admin", width: "74%" },
                      { name: "Marketing", width: "61%" },
                    ].map((b) => (
                      <div key={b.name} className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground w-24 text-right">{b.name}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary/60 rounded-full" style={{ width: b.width }} />
                        </div>
                        <span className="text-[10px] text-foreground w-8">{b.width}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Market Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl shadow-precision overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <Globe className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Market Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Real-time labour market intelligence tailored to your student population. See which industries are hiring, what skills are in demand, and where your graduates compete.
                </p>
              </div>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-wider">Trending sectors</p>
                      <div className="space-y-2">
                        {[
                          { sector: "Technology", demand: "High", openings: "2,340", trend: "+18%" },
                          { sector: "Consulting", demand: "High", openings: "1,120", trend: "+9%" },
                          { sector: "Finance", demand: "Medium", openings: "890", trend: "+4%" },
                          { sector: "Healthcare", demand: "High", openings: "1,560", trend: "+22%" },
                        ].map((s) => (
                          <div key={s.sector} className="flex items-center gap-3 bg-card rounded-md px-3 py-2">
                            <span className="text-xs font-medium text-foreground flex-1">{s.sector}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                              s.demand === "High" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                            }`}>{s.demand}</span>
                            <span className="text-[10px] text-muted-foreground w-12 text-right">{s.openings}</span>
                            <span className="text-[10px] text-emerald-400 w-8 text-right">{s.trend}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-wider">In-demand skills</p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { skill: "Python", level: "high" },
                          { skill: "Data Analysis", level: "high" },
                          { skill: "Financial Modelling", level: "medium" },
                          { skill: "Project Management", level: "high" },
                          { skill: "SQL", level: "medium" },
                          { skill: "Communication", level: "high" },
                          { skill: "React", level: "medium" },
                          { skill: "Strategic Thinking", level: "high" },
                        ].map((s) => (
                          <span
                            key={s.skill}
                            className={`text-[10px] px-2.5 py-1 rounded-md ${
                              s.level === "high"
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {s.skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 bg-card rounded-md p-3">
                        <p className="text-[10px] text-muted-foreground mb-1">Avg. graduate salary (region)</p>
                        <p className="text-xl font-bold text-foreground">€38,200</p>
                        <p className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                          <TrendingUp className="w-2.5 h-2.5" /> +6% vs. last year
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Sovereignty */}
      <section className="py-16 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-6 h-6 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground tracking-tight mb-3">GDPR compliant</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              ApplyLab is fully GDPR compliant. We take data privacy seriously and ensure all student and institutional data is handled in accordance with European data protection regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Process</p>
            <h2 className="text-2xl font-bold text-foreground tracking-tight">How the pilot works.</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Request a pilot", desc: "Fill in the form and our partnerships team will reach out within 48 hours." },
              { step: "02", title: "Onboarding call", desc: "We configure ApplyLab for your institution — programmes, branding, integrations." },
              { step: "03", title: "Student rollout", desc: "Students receive access through your institution. We provide launch support and materials." },
              { step: "04", title: "Outcomes dashboard", desc: "Career teams get access to live analytics within the first week of student activity." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-6 items-start"
              >
                <span className="text-xs text-primary font-mono mt-1">{s.step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForUniversities;
