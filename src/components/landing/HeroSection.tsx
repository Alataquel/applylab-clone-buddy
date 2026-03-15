import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Now in beta · Partnering with universities across Europe
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance text-foreground">
            Career outcomes{" "}
            <span className="text-gradient italic font-bold">infrastructure.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-md leading-relaxed">
            The platform that powers how universities track, support, and improve student career outcomes — from first application to first job.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Request access <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
            >
              Request a pilot
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Partnered with</p>
            <div className="flex flex-wrap gap-2">
              {["Saint Louis University", "German UDS", "XU Exponential", "IE University"].map((name) => (
                <span key={name} className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-md">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="relative"
        >
          <DashboardMockup />

          {/* Floating card - Interview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -top-4 -right-4 lg:right-0 bg-card rounded-xl p-4 shadow-precision-md"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              Interview scheduled
            </div>
            <p className="text-xs text-muted-foreground mt-1">Figma · Tomorrow, 10:00 AM</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              Confirmed
            </div>
          </motion.div>

          {/* Floating card - ATS Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-4 left-4 lg:left-8 bg-card rounded-xl p-4 shadow-precision-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                94
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">ATS Score</p>
                <p className="text-xs text-muted-foreground">Resume ready</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
