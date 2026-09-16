import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote } from "lucide-react";

const degrees = ["Business", "Engineering", "Economics", "Law"] as const;
type Degree = (typeof degrees)[number];

const profiles: Record<Degree, { match: string; line: string }> = {
  Business: {
    match: "Sheryl Sandberg",
    line: "Consulting-track analyst with quant-heavy impact bullets — your structure scores in the top decile.",
  },
  Engineering: {
    match: "Sundar Pichai",
    line: "Builder's CV: systems-level projects with measurable outcomes, exactly the pattern we match to product roles.",
  },
  Economics: {
    match: "Christine Lagarde",
    line: "Policy-minded, data-fluent — your profile pattern matches strategy and public-sector tracks.",
  },
  Law: {
    match: "Amal Clooney",
    line: "Argument-led CV with high-precision language — a strong signal for legal and advisory tracks.",
  },
};

const ProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [degree, setDegree] = useState<Degree>("Business");
  const active = profiles[degree];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Proof, not promises</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
            Already helping students at Saint Louis University, IE University, German UDS and XU Exponential get matched to roles they'd never have found on a job board.
          </h2>

          <div className="border-l-2 border-primary/30 pl-5 py-1">
            <Quote className="w-5 h-5 text-primary/40 mb-2" />
            <p className="text-sm text-gray-600 leading-relaxed italic mb-3">
              "I used to track applications in a spreadsheet. ApplyLab feels like having a career assistant. Landed my role in three weeks."
            </p>
            <p className="text-xs font-semibold text-gray-900">Sarah Chen · Student, pilot programme</p>
          </div>
        </motion.div>

        {/* Fun, shareable CV-match hook */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-gray-200 bg-[hsl(222,40%,97%)] p-7 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-4">The fun one</p>
            <h3 className="text-lg font-bold text-gray-900 mb-1">See who your CV matches.</h3>
            <p className="text-xs text-gray-500 mb-5">Pick your degree — we compare your CV patterns to well-known early-career profiles.</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {degrees.map((d) => (
                <button
                  key={d}
                  onClick={() => setDegree(d)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    degree === d
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Your CV profile is similar to a young <span className="text-primary">{active.match}</span>
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{active.line}</p>
            </div>

            <p className="text-[10px] text-gray-400 mt-4">
              A playful benchmark based on early-career CV patterns — your real match report is more precise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
