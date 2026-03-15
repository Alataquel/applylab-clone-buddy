import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get involved</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-12">
            Make career outcomes <span className="text-gradient italic">visible.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto"
        >
          We're building career outcomes infrastructure with a select group of partner universities. Request a pilot to see what visibility looks like.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <a
            href="#"
            className="bg-foreground text-background rounded-xl p-6 text-left hover:opacity-90 transition-opacity group"
          >
            <p className="text-sm font-semibold mb-1">For Students</p>
            <p className="text-xs opacity-70">Apply for early access</p>
          </a>
          <a
            href="#"
            className="bg-card rounded-xl p-6 text-left shadow-precision hover:-translate-y-0.5 transition-transform"
          >
            <p className="text-sm font-semibold text-foreground mb-1">For Universities</p>
            <p className="text-xs text-muted-foreground">Pilot programme · Onboarded by our team</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
