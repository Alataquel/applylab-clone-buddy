import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const roles = [
  {
    role: "Business Analyst",
    company: "McKinsey & Company",
    score: 92,
    why: "Strong case-prep signal on your CV",
    accent: "text-emerald-400",
    chip: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    role: "Marketing Intern",
    company: "Spotify",
    score: 84,
    why: "Your campus campaign project matches",
    accent: "text-sky-400",
    chip: "bg-sky-400/10 border-sky-400/20",
  },
  {
    role: "Consulting Track",
    company: "BCG",
    score: 78,
    why: "Add Excel modelling to raise this",
    accent: "text-amber-400",
    chip: "bg-amber-400/10 border-amber-400/20",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-44 lg:pt-52 pb-24 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-[110rem] w-full mx-auto">
        {/* Top: headline + CTA centered */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-14 space-y-7">

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] text-foreground">
            Stop applying blind.{" "}
            <span className="text-gradient italic font-bold">Get matched.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload your CV, get a fit score against real roles, and see exactly why you match.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Get your matches <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
            <span>As listed in</span>
            <span className="font-semibold text-foreground">Forbes Italy Future Leaders</span>
            <span>·</span>
            <span>Trusted by students at</span>
            <span className="font-semibold text-foreground">Saint Louis University</span>
            <span>·</span>
            <span className="font-semibold text-foreground">German UDS</span>
            <span>·</span>
            <span className="font-semibold text-foreground">XU Exponential</span>
            <span>·</span>
            <span className="font-semibold text-foreground">IE University</span>
          </motion.div>

        </motion.div>

        {/* Match report card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-6 lg:p-8 shadow-2xl">
            {/* Card header */}
            <div className="flex items-start justify-between gap-4 mb-7">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1.5">Your match report</p>
                <h2 className="text-lg font-semibold text-foreground">BSc Business Administration · Class of 2026</h2>
              </div>
              <span className="text-[10px] text-muted-foreground border border-border/60 rounded-full px-3 py-1 whitespace-nowrap">
                Live score
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
              {/* Fit score ring */}
              <div
                className="relative w-36 h-36 rounded-full flex-shrink-0"
                style={{
                  background: "conic-gradient(hsl(var(--primary)) 0% 87%, hsl(var(--muted) / 0.3) 87% 100%)",
                }}
              >
                <div className="absolute inset-[10px] rounded-full bg-card flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-foreground tracking-tight">87%</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Fit score</span>
                </div>
              </div>

              <div className="text-left space-y-3">
                <p className="text-sm font-medium text-foreground">You're a strong fit for consulting and marketing tracks.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scored against 240 real roles and 12 career tracks. Below: your top matches — and exactly what moves each number up.
                </p>
              </div>
            </div>

            {/* Matched roles */}
            <div className="space-y-2.5">
              {roles.map((r, i) => (
                <motion.div
                  key={r.role}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-background/40 px-4 py-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{r.company.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{r.role}</p>
                    <p className="text-xs text-muted-foreground truncate">{r.company}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-foreground">{r.score}%</p>
                    <span className={`text-[10px] leading-tight inline-block mt-0.5 px-2 py-0.5 rounded-full border ${r.chip} ${r.accent}`}>
                      {r.why}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-[11px] text-muted-foreground mt-6 text-center">
              What you'll see two minutes after uploading your CV.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
