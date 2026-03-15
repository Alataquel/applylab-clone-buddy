import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

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
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get started</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6">
            See what visibility <span className="text-gradient italic">looks like.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-gray-500 mb-10 max-w-lg mx-auto"
        >
          We onboard universities in under two weeks. Request a pilot and our partnerships team will walk you through the platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="/request-pilot"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-medium px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Request a pilot <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/universities"
            className="inline-flex items-center justify-center gap-2 text-gray-500 font-medium px-8 py-3.5 rounded-full text-sm border border-gray-200 hover:text-gray-900 transition-colors"
          >
            Learn how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
