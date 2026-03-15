import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, BarChart3, GraduationCap, TrendingUp } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The problem</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Career services are flying blind.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* No visibility - tall left card (dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:row-span-2 bg-[hsl(220,25%,10%)] rounded-2xl p-8 flex flex-col justify-between min-h-[420px] hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">No visibility</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Career teams can't see what students are doing until it's too late. End-of-year surveys miss the full picture.
              </p>
            </div>

            {/* Mini visualization */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 rounded-full bg-white/10 flex-1">
                  <div className="h-2 rounded-full bg-primary/60 w-[15%]" />
                </div>
                <span className="text-xs text-gray-500">15% tracked</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 rounded-full bg-white/10 flex-1">
                  <div className="h-2 rounded-full bg-primary/60 w-[8%]" />
                </div>
                <span className="text-xs text-gray-500">8% engaged</span>
              </div>
              <p className="text-[11px] text-gray-500 mt-2">Most activity happens outside your systems</p>
            </div>
          </motion.div>

          {/* No actionable data - top middle (white) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
              <BarChart3 className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No actionable data</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Placement reporting is manual, delayed, and based on estimates. Accreditation bodies expect better.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Q1", "Q2", "Q3"].map((q) => (
                <div key={q} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                  <p className="text-[10px] text-gray-500 mb-1">{q}</p>
                  <p className="text-xs text-gray-400">No data</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stat accent card - top right (blue) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-primary rounded-2xl p-7 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 min-h-[200px]"
          >
            <p className="text-6xl font-extrabold text-white mb-2">67%</p>
            <p className="text-sm font-semibold text-white/90">of students</p>
            <p className="text-xs text-white/60 mt-1">never visit career services</p>
          </motion.div>

          {/* Fragmented tools - bottom middle (dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 bg-[hsl(220,25%,10%)] rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fragmented tools</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Students use spreadsheets, random job boards, and generic templates. There's no unified system.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {["Spreadsheets", "Job boards", "PDFs", "Email"].map((tool) => (
                <span key={tool} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* No way to intervene - bottom right (dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3 bg-[hsl(220,25%,10%)] rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No way to intervene</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              By the time you know a student is struggling, they've already disengaged. Proactive support is impossible.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
