import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center pt-48 lg:pt-56 pb-20 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-[110rem] w-full mx-auto">
        {/* Top: headline + CTA centered */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16 space-y-7">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Now in beta · Partnering with universities across Europe
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] text-foreground">
            Career outcomes{" "}
            <span className="text-gradient italic font-bold">infrastructure.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-time visibility into student career activity. Placement analytics your team can act on. The operating system for university career services.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Request a pilot <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/universities"
              className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
            >
              How it works
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
            <span>As listed in</span>
            <span className="font-semibold text-foreground">Forbes Italy Future Leaders</span>
            <span>·</span>
            <span>Used by</span>
            <span className="font-semibold text-foreground">Saint Louis University</span>
            <span>·</span>
            <span className="font-semibold text-foreground">German UDS</span>
            <span>·</span>
            <span className="font-semibold text-foreground">XU Exponential</span>
          </motion.div>
        </motion.div>

        {/* Dashboard below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="relative"
        >
          <DashboardMockup />

          {/* Demo note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-base font-medium text-muted-foreground mt-6"
          >
            ↑ This is a live demo — click around and explore the tabs
          </motion.p>

          {/* Floating card - Placement rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -top-4 -right-4 lg:right-0 bg-card rounded-xl p-4 shadow-precision-md"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <TrendingUp className="w-4 h-4 text-primary" />
              Placement rate up
            </div>
            <p className="text-2xl font-bold text-foreground mt-1">+12%</p>
            <p className="text-[10px] text-muted-foreground">vs. last semester</p>
          </motion.div>

          {/* Floating card - Active students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-4 left-4 lg:left-8 bg-card rounded-xl p-4 shadow-precision-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">716 active students</p>
                <p className="text-xs text-muted-foreground">Across 3 cohorts</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
