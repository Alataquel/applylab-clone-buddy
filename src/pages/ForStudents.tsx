import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, FileText, BarChart3, Search } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const cardChildVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0, 0.15, 1] },
  }),
};

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Students</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Your career toolkit, <span className="text-gradient italic">built to perform.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Stop guessing which roles fit. Stop sending generic CVs. ApplyLab gives you the tools to apply with precision and land with confidence.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Request early access <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features with Visuals */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Internship Board */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0, 0.15, 1] }}
            className="bg-card rounded-xl shadow-precision overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">01</span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-xl font-semibold text-foreground mb-3"
              >
                Internship Board
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="text-sm text-muted-foreground leading-relaxed max-w-lg"
              >
                Roles ranked by genuine fit — not keyword overlap. Our matching model reads your full profile and surfaces only the positions where you'd genuinely stand out.
              </motion.p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-secondary rounded-lg p-4 space-y-2">
                {[
                  { letter: "F", color: "bg-purple-500", role: "Product Design Intern", company: "Figma", match: "98%", location: "Remote" },
                  { letter: "L", color: "bg-blue-500", role: "Frontend Engineering Intern", company: "Linear", match: "95%", location: "London" },
                  { letter: "S", color: "bg-emerald-500", role: "Growth Marketing Intern", company: "Spotify", match: "92%", location: "Stockholm" },
                  { letter: "M", color: "bg-amber-500", role: "Strategy Analyst Intern", company: "McKinsey", match: "88%", location: "Madrid" },
                ].map((job, i) => (
                  <motion.div
                    key={job.role}
                    custom={i}
                    variants={cardChildVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-card rounded-md px-3 py-3"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <div className={`w-8 h-8 rounded-md ${job.color} flex items-center justify-center text-[10px] font-bold text-foreground`}>
                      {job.letter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">{job.role}</p>
                      <p className="text-[10px] text-muted-foreground">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">{job.match}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resume Lab */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0.15, 1] }}
            className="bg-card rounded-xl shadow-precision overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">02</span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-xl font-semibold text-foreground mb-3"
              >
                Resume Lab
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="text-sm text-muted-foreground leading-relaxed max-w-lg"
              >
                Line-by-line AI feedback on your CV. Strengthen impact statements, improve formatting, and close keyword gaps — in seconds, not hours.
              </motion.p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-secondary rounded-lg p-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-card rounded-md p-3 text-center"
                  >
                    <p className="text-2xl font-bold text-foreground">92</p>
                    <p className="text-[10px] text-muted-foreground">Overall Score</p>
                  </motion.div>
                  {[
                    { label: "Impact", value: "88%", color: "text-amber-400" },
                    { label: "Keywords", value: "95%", color: "text-emerald-400" },
                    { label: "Format", value: "92%", color: "text-primary" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                      className="bg-card rounded-md p-3 text-center"
                    >
                      <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                      <p className="text-[10px] text-muted-foreground">{m.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { type: "suggestion", text: "Add metrics to your 2nd bullet point to quantify impact." },
                    { type: "optimised", text: "Skills section optimised for Technology sector roles." },
                    { type: "suggestion", text: "Consider adding a project section to showcase relevant work." },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className={`rounded-md px-3 py-2.5 text-xs ${
                        s.type === "suggestion"
                          ? "bg-amber-500/5 text-amber-300/80"
                          : "bg-emerald-500/5 text-emerald-300/80"
                      }`}
                    >
                      {s.type === "suggestion" ? "💡 " : "✓ "}{s.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Automatic Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0, 0.15, 1] }}
            className="bg-card rounded-xl shadow-precision overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">03</span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-xl font-semibold text-foreground mb-3"
              >
                Automatic Tracker
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="text-sm text-muted-foreground leading-relaxed max-w-lg"
              >
                A visual pipeline that automatically keeps every application organised. Track status in real time without lifting a finger.
              </motion.p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-secondary rounded-lg p-4">
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
                  ].map((col, colIdx) => (
                    <motion.div
                      key={col.stage}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + colIdx * 0.1 }}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className={`w-2 h-2 rounded-full ${col.color}`} />
                        <span className="text-[10px] font-medium text-foreground">{col.stage}</span>
                        <span className="text-[10px] text-muted-foreground">{col.items.length}</span>
                      </div>
                      <div className="space-y-1.5">
                        {col.items.map((item, i) => (
                          <motion.div
                            key={item.company}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + colIdx * 0.1 + i * 0.08 }}
                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                            className="bg-card rounded-md p-2"
                          >
                            <p className="text-[10px] font-medium text-foreground">{item.company}</p>
                            <p className="text-[9px] text-muted-foreground">{item.role}</p>
                            <p className="text-[9px] text-muted-foreground/60 mt-0.5">{item.days}</p>
                          </motion.div>
                        ))}
                        {col.items.length === 0 && (
                          <div className="border border-dashed border-border/30 rounded-md p-2 text-center">
                            <p className="text-[9px] text-muted-foreground/40">—</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">
              Access through your university.
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              ApplyLab is available through partner institutions. If your university isn't listed yet, request early access and we'll get in touch.
            </p>
            <motion.a
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Apply for early access <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForStudents;
