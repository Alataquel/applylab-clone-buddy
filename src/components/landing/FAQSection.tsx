import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I get access to ApplyLab?",
    a: "ApplyLab is currently running as a closed pilot with select partner universities. If your institution is already a partner, you'll receive access through them. If not, you can request a pilot for your university—we'll be in touch.",
  },
  {
    q: "How does the AI Resume Builder work?",
    a: "Our AI analyses your resume line by line, checking for impact statement quality, keyword coverage, formatting, and overall coherence. It provides specific, actionable suggestions to improve your CV.",
  },
  {
    q: "Can I track applications from any job board?",
    a: "Yes. You can add applications from any source and track them through your personal pipeline, from applied to offer stage.",
  },
  {
    q: "Do you share my data with employers?",
    a: "No. Your personal data is never shared with employers without your explicit consent. Your university sees only aggregated, anonymized analytics.",
  },
  {
    q: "How do universities access the analytics dashboard?",
    a: "University career teams receive a dedicated admin dashboard during onboarding. It provides real-time visibility into student engagement and placement outcomes.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">Common questions.</h2>
          <p className="text-sm text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a href="#" className="text-primary hover:underline">Contact support →</a>
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-border/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
