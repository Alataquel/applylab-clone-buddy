import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does matching work?",
    a: "Upload your CV and tell us your degree and goals. We score your fit against real roles and career tracks, and show you exactly why you match — and what to improve to score higher.",
  },
  {
    q: "What exactly is a fit score?",
    a: "A transparent percentage that measures how closely your CV matches a specific role or track. Every score comes with the reasoning behind it — no black-box rankings.",
  },
  {
    q: "What's included in my plan?",
    a: "Every plan includes the full platform: smart matching, CV feedback, tailored cover letters, the job & internship board, automatic application tracking, and interview & case prep. The only difference is the commitment length.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Every plan starts with a 7-day free trial, and you can cancel in two clicks — no emails, no phone calls.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We're GDPR-compliant and privacy-by-design. Your CV and application data belong to you, and are never shared with employers or third parties.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="about" className="py-24 px-6 lg:px-12 bg-[hsl(222,40%,96%)]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">Common questions.</h2>
          <p className="text-sm text-gray-500">
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
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
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
