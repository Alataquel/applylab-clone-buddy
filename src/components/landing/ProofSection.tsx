import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Quote } from "lucide-react";
import sluLogo from "@/assets/universities/slu.png.asset.json";
import ieLogo from "@/assets/universities/ie-university.jpg.asset.json";
import germanUdsLogo from "@/assets/universities/german-uds.svg.asset.json";
import xuLogo from "@/assets/universities/xu-university.png.asset.json";

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

const pressLinks = [
  {
    source: "Forbes Italy Next Leaders",
    title: "Featured as student founders building ApplyLab",
    href: "https://nextleaders.forbes.it/articoli/da-studenti-a-imprenditori",
  },
  {
    source: "Saint Louis University Madrid",
    title: "Founder talk on landing internships",
    href: "https://www.slu.edu/madrid/news/2026/applylab-founder-speaks-at-slu-madrid-on-landing-internships.php",
  },
];

const universityLogos = [
  { name: "Saint Louis University", src: sluLogo.url, className: "h-14 sm:h-16" },
  { name: "IE University", src: ieLogo.url, className: "h-16 sm:h-20" },
  { name: "German UDS", src: germanUdsLogo.url, className: "h-10 sm:h-12" },
  { name: "XU Exponential University", src: xuLogo.url, className: "h-12 sm:h-14" },
];

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
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Trusted by students at</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-7">
            Students are finding where they fit — then closing the gap.
          </h2>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 mb-8" aria-label="Universities where students use ApplyLab">
            {universityLogos.map((university) => (
              <div key={university.name} className="flex min-h-28 items-center justify-center bg-white px-5 py-4">
                <img
                  src={university.src}
                  alt={university.name}
                  className={`${university.className} w-auto max-w-full object-contain`}
                />
              </div>
            ))}
          </div>

          <div className="border-l-2 border-primary/30 pl-5 py-1">
            <Quote className="w-5 h-5 text-primary/40 mb-2" />
            <p className="text-sm text-gray-600 leading-relaxed italic mb-3">
              "I used to track applications in a spreadsheet. ApplyLab feels like having a career assistant. Landed my role in three weeks."
            </p>
            <p className="text-xs font-semibold text-gray-900">Sarah Chen · Student, pilot programme</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {pressLinks.map((link) => (
              <a
                key={link.source}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-200 bg-[hsl(222,40%,97%)] p-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">{link.source}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">{link.title}</p>
              </a>
            ))}
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
