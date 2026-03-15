import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const StudentToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] },
    }),
  };

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Platform</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Built for the whole career journey.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* Smart Matching - tall left card (dark) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 lg:row-span-2 bg-[hsl(220,30%,8%)] rounded-2xl p-8 flex flex-col justify-between min-h-[500px] group hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Smart Matching</p>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Roles ranked by<br />real fit, not keywords
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Our model reads your full profile and surfaces only the roles where you're genuinely in the top tier of candidates.
              </p>
            </div>

            <div className="space-y-2.5 mt-8">
              {[
                { letter: "FG", color: "bg-purple-500", role: "Product Designer", company: "Figma", match: "98%" },
                { letter: "LN", color: "bg-blue-500", role: "Frontend Engineer", company: "Linear", match: "94%" },
                { letter: "SP", color: "bg-emerald-500", role: "Growth Analyst", company: "Spotify", match: "90%" },
              ].map((job) => (
                <div key={job.role} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3">
                  <div className={`w-9 h-9 rounded-lg ${job.color} flex items-center justify-center text-[10px] font-bold text-white`}>
                    {job.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{job.role}</p>
                    <p className="text-xs text-gray-500">{job.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">{job.match}</span>
                </div>
              ))}
            </div>

            <a href="/students" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-6 hover:underline">
              Explore matching <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Resume Lab - top middle card (dark) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-4 bg-[hsl(220,30%,8%)] rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Resume Lab</p>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              Beat ATS.<br />Impress humans.
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Line-by-line AI feedback that turns a generic CV into a targeted, high-scoring one.
            </p>

            <div className="flex items-start gap-6">
              {/* Score circle */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(220,15%,18%)" strokeWidth="4" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(210,100%,50%)" strokeWidth="4" strokeDasharray={`${0.92 * 175.9} 175.9`} strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">92</span>
              </div>

              <div className="flex-1 space-y-3">
                {[
                  { label: "Impact", value: 88 },
                  { label: "Keywords", value: 95 },
                  { label: "Format", value: 92 },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">{m.label}</span>
                      <span className="text-gray-300">{m.value}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${m.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ATS pass rate - top right accent card (blue) */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3 bg-primary rounded-2xl p-7 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 min-h-[220px]"
          >
            <p className="text-7xl font-extrabold text-white mb-2">94%</p>
            <p className="text-sm font-semibold text-white/90">ATS pass rate</p>
            <p className="text-xs text-white/60 mt-1">Across all student CVs</p>
          </motion.div>

          {/* Command Centre - bottom middle card (dark) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-4 bg-[hsl(220,30%,8%)] rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4">Command Centre</p>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              Every application,<br />one place.
            </h3>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {[
                { stage: "Applied", color: "bg-blue-500", count: 3 },
                { stage: "Interview", color: "bg-amber-500", count: 2 },
                { stage: "Offer", color: "bg-emerald-500", count: 1 },
              ].map((col) => (
                <div key={col.stage}>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mb-2">{col.stage}</p>
                  <div className="space-y-1.5">
                    {Array.from({ length: col.count }).map((_, j) => (
                      <div key={j} className="bg-white/5 rounded-md h-10" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* University partners - bottom right stat card (light) */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-7 flex flex-col justify-center hover:-translate-y-1 transition-transform duration-300 min-h-[220px]"
          >
            <p className="text-6xl font-extrabold text-gray-900 mb-2">10+</p>
            <p className="text-sm font-semibold text-gray-900">University partners</p>
            <p className="text-xs text-gray-400 mt-1">European institutions</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StudentToolsSection;
