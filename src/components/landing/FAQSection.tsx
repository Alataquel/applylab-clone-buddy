import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the pilot work?",
    a: "We onboard your institution in under two weeks. Our partnerships team configures the platform for your programmes, handles student rollout, and provides ongoing support. No IT integration required.",
  },
  {
    q: "What data do career teams see?",
    a: "Your team gets a live dashboard with student analysis, qualifications insights, and market insights — all aggregated and anonymised. Individual student data is never shared without explicit student consent.",
  },
  {
    q: "How do students access the platform?",
    a: "Students receive access through your institution. They get an internship board, resume lab, and automatic application tracker — and every interaction feeds data back into your institutional dashboard.",
  },
  {
    q: "Is student data safe?",
    a: "Yes. We're GDPR-compliant and privacy-by-design. Students own their data. Universities see only aggregated analytics. No personal application details are shared with employers or third parties.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on institution size and scope. We work with universities on a partnership basis — contact our team for a tailored proposal.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="about" className="py-24 px-6 lg:px-12 bg-white">
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
