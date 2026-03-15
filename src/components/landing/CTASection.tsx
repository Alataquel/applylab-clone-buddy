import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get started</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Make your career activity <span className="text-gradient italic">visible.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* For Students */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-8 shadow-precision text-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Students</p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Land your dream role</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Smart matching, AI resume tools, and automatic tracking — everything you need to get hired.
            </p>
            <a
              href="/students"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Apply for early access <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* For Universities */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-precision text-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Universities</p>
            <h3 className="text-xl font-semibold text-foreground mb-3">See what your students are doing</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Real-time placement analytics, student engagement data, and labour market insights for your career team.
            </p>
            <a
              href="/request-pilot"
              className="inline-flex items-center justify-center gap-2 text-foreground font-medium px-8 py-3.5 rounded-full text-sm border border-border hover:bg-secondary transition-colors"
            >
              Request a pilot <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
