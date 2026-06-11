import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileWarning, Clock, Inbox } from "lucide-react";

const problems = [
  {
    icon: Search,
    accent: "text-sky-400 bg-sky-400/10",
    layer: "Problem 01",
    title: "You're applying into a black hole.",
    desc: "Generic CVs, copy-paste cover letters, no signal on what's actually working. Most applications never even get read.",
  },
  {
    icon: FileWarning,
    accent: "text-amber-400 bg-amber-400/10",
    layer: "Problem 02",
    title: "Your CV isn't built for the role.",
    desc: "Recruiters spend 7 seconds on your resume. Without tailored keywords, formatting, and metrics, you don't make the shortlist.",
  },
  {
    icon: Clock,
    accent: "text-emerald-400 bg-emerald-400/10",
    layer: "Problem 03",
    title: "Interview prep is scattered and slow.",
    desc: "PDFs, YouTube videos, random forums. No structured way to prep for behavioral, case, or technical interviews on demand.",
  },
  {
    icon: Inbox,
    accent: "text-purple-400 bg-purple-400/10",
    layer: "Problem 04",
    title: "You lose track of every application.",
    desc: "Spreadsheets, tabs, screenshots. No single place to see who you've applied to, who responded, and what's next.",
  },
];

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
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The problem</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            The job search is broken.
          </h2>
          <p className="text-base text-gray-500 mt-4 leading-relaxed">
            Hundreds of applications, weeks of silence, no idea what's working. ApplyLab fixes the four things slowing you down.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[hsl(220,25%,10%)] rounded-2xl p-7 flex flex-col gap-5 min-h-[280px]"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.accent}`}>
                <p.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-sky-400 font-semibold mb-2">{p.layer}</p>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
