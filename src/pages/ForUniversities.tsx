import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Users, BookOpen, Globe, AlertTriangle, TrendingUp, ArrowUpRight, Shield } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ForUniversities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Universities</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Career outcomes you can <span className="text-gradient italic">actually measure.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Three layers of intelligence that give your career team the data to intervene early, report with confidence, and improve outcomes year over year.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "85%", label: "Reduction in manual reporting" },
            { value: "100×", label: "More visibility into career activity" },
            { value: "1 day", label: "Average onboarding time" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
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
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The platform</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">Your institutional dashboard.</h2>
          </motion.div>

          <div className="space-y-8">
            {/* Student Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl shadow-precision overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Users className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Student Analysis</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    Deep, individual-level insights into every student's career journey. Track application activity, engagement patterns, and progress across your entire cohort in real time.
                  </p>
                </motion.div>
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
                  ].map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex items-center gap-2 bg-card rounded-md px-3 py-2.5"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground">{s.name}</p>
                        <p className="text-[10px] text-muted-foreground">{s.programme}</p>
                      </div>
                      <span className="w-16 text-center text-xs text-foreground">{s.apps}</span>
                      <span className="w-16 text-center text-xs text-foreground">{s.interviews}</span>
                      <div className="w-20 flex items-center justify-center gap-1">
                        <div className="w-10 h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${s.engagement > 60 ? "bg-emerald-400" : "bg-amber-400"}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.engagement}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Qualifications Insights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-xl shadow-precision overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <BookOpen className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Qualifications Insights</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    See how your programmes translate into employability. Understand which qualifications, modules, and skill sets drive stronger career outcomes.
                  </p>
                </motion.div>
              </div>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {[
                      { programme: "Business Admin", rate: "74%", change: "+8%" },
                      { programme: "Computer Science", rate: "82%", change: "+12%" },
                      { programme: "Marketing", rate: "61%", change: "+3%" },
                      { programme: "Finance", rate: "78%", change: "+6%" },
                    ].map((p, i) => (
                      <motion.div
                        key={p.programme}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                        className="bg-card rounded-md p-3 text-center"
                      >
                        <p className="text-[10px] text-muted-foreground mb-1">{p.programme}</p>
                        <p className="text-lg font-bold text-foreground">{p.rate}</p>
                        <p className="text-[10px] text-emerald-400 flex items-center justify-center gap-0.5">
                          <ArrowUpRight className="w-2.5 h-2.5" />{p.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mb-2">Placement rate by programme</p>
                  <div className="space-y-2">
                    {[
                      { name: "Computer Science", width: 82 },
                      { name: "Finance", width: 78 },
                      { name: "Business Admin", width: 74 },
                      { name: "Marketing", width: 61 },
                    ].map((b, i) => (
                      <div key={b.name} className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground w-24 text-right">{b.name}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.width}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                          />
                        </div>
                        <span className="text-[10px] text-foreground w-8">{b.width}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Market Insights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-xl shadow-precision overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Globe className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Market Insights</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    Real-time labour market intelligence tailored to your student population. See which industries are hiring, what skills are in demand, and where your graduates compete.
                  </p>
                </motion.div>
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
                        ].map((s, i) => (
                          <motion.div
                            key={s.sector}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                            whileHover={{ x: 4, transition: { duration: 0.2 } }}
                            className="flex items-center gap-3 bg-card rounded-md px-3 py-2"
                          >
                            <span className="text-xs font-medium text-foreground flex-1">{s.sector}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                              s.demand === "High" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                            }`}>{s.demand}</span>
                            <span className="text-[10px] text-muted-foreground w-12 text-right">{s.openings}</span>
                            <span className="text-[10px] text-emerald-400 w-8 text-right">{s.trend}</span>
                          </motion.div>
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
                        ].map((s, i) => (
                          <motion.span
                            key={s.skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                            className={`text-[10px] px-2.5 py-1 rounded-md ${
                              s.level === "high"
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {s.skill}
                          </motion.span>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-4 bg-card rounded-md p-3"
                      >
                        <p className="text-[10px] text-muted-foreground mb-1">Avg. graduate salary (region)</p>
                        <p className="text-xl font-bold text-foreground">€38,200</p>
                        <p className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                          <TrendingUp className="w-2.5 h-2.5" /> +6% vs. last year
                        </p>
                      </motion.div>
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5 }}
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
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
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
