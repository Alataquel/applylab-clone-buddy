import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BookOpen, Globe, AlertTriangle, TrendingUp, ArrowUpRight } from "lucide-react";

const useCountUp = (end: number, isInView: boolean, duration = 1200, delay = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = end / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.round(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, end, duration, delay]);
  return count;
};

const AnimatedBar = ({ width, isInView, delay, color }: { width: number; isInView: boolean; delay: number; color: string }) => (
  <motion.div
    className={`h-full rounded-full ${color}`}
    initial={{ width: 0 }}
    animate={isInView ? { width: `${width}%` } : { width: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0, 0, 1] }}
  />
);

const StudentRow = ({ s, i, isInView }: { s: { name: string; programme: string; apps: number; interviews: number; engagement: number; status: string }; i: number; isInView: boolean }) => {
  const apps = useCountUp(s.apps, isInView, 800, 300 + i * 150);
  const interviews = useCountUp(s.interviews, isInView, 800, 300 + i * 150);
  const engagement = useCountUp(s.engagement, isInView, 800, 300 + i * 150);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
      className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2.5"
    >
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-white">{s.name}</p>
        <p className="text-[10px] text-gray-500">{s.programme}</p>
      </div>
      <span className="w-16 text-center text-xs text-white">{apps}</span>
      <span className="w-16 text-center text-xs text-white">{interviews}</span>
      <div className="w-20 flex items-center justify-center gap-1">
        <div className="w-10 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <AnimatedBar
            width={s.engagement}
            isInView={isInView}
            delay={0.3 + i * 0.15}
            color={s.engagement > 60 ? "bg-emerald-400" : "bg-amber-400"}
          />
        </div>
        <span className="text-[10px] text-gray-400">{engagement}%</span>
      </div>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
        className={`w-16 text-center text-[10px] font-medium rounded-full px-2 py-0.5 ${
          s.status === "active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
        }`}
      >
        {s.status === "at-risk" && <AlertTriangle className="w-2.5 h-2.5 inline mr-0.5" />}
        {s.status}
      </motion.span>
    </motion.div>
  );
};

const QualCard = ({ p, i, isInView }: { p: { programme: string; rate: string; change: string; rateNum: number }; i: number; isInView: boolean }) => {
  const rate = useCountUp(p.rateNum, isInView, 1000, 200 + i * 100);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-md p-3 text-center"
    >
      <p className="text-[10px] text-gray-500 mb-1">{p.programme}</p>
      <p className="text-lg font-bold text-white">{rate}%</p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 + i * 0.1 }}
        className="text-[10px] text-emerald-400 flex items-center justify-center gap-0.5"
      >
        <ArrowUpRight className="w-2.5 h-2.5" />{p.change}
      </motion.p>
    </motion.div>
  );
};

const students = [
  { name: "Emma Torres", programme: "Business 2026", apps: 18, interviews: 4, engagement: 92, status: "active" },
  { name: "Liam Chen", programme: "Engineering 2026", apps: 12, interviews: 2, engagement: 78, status: "active" },
  { name: "Sofia Müller", programme: "Arts 2026", apps: 3, interviews: 0, engagement: 24, status: "at-risk" },
  { name: "Marco Rossi", programme: "Business 2026", apps: 22, interviews: 6, engagement: 95, status: "active" },
  { name: "Aisha Khan", programme: "Engineering 2026", apps: 1, interviews: 0, engagement: 15, status: "at-risk" },
];

const programmes = [
  { programme: "Business Admin", rate: "74%", change: "+8%", rateNum: 74 },
  { programme: "Computer Science", rate: "82%", change: "+12%", rateNum: 82 },
  { programme: "Marketing", rate: "61%", change: "+3%", rateNum: 61 },
  { programme: "Finance", rate: "78%", change: "+6%", rateNum: 78 },
];

const bars = [
  { name: "Computer Science", width: 82 },
  { name: "Finance", width: 78 },
  { name: "Business Admin", width: 74 },
  { name: "Marketing", width: 61 },
];

const InfrastructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

  const salary = useCountUp(38200, isInView3, 1200, 400);

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The platform</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Your institutional dashboard.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Three layers of intelligence that give your career team the data to intervene early, report with confidence, and improve outcomes year over year.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Student Analysis */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#0e1226] rounded-xl overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <Users className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Student Analysis</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                Deep, individual-level insights into every student's career journey. Track application activity, engagement patterns, and progress across your entire cohort in real time.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider px-1">
                  <span className="flex-1">Student</span>
                  <span className="w-16 text-center">Apps</span>
                  <span className="w-16 text-center">Interviews</span>
                  <span className="w-20 text-center">Engagement</span>
                  <span className="w-16 text-center">Status</span>
                </div>
                {students.map((s, i) => (
                  <StudentRow key={s.name} s={s} i={i} isInView={isInView} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Qualifications Insights */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#0e1226] rounded-xl overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <BookOpen className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Qualifications Insights</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                See how your programmes translate into employability. Understand which qualifications, modules, and skill sets drive stronger career outcomes.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {programmes.map((p, i) => (
                    <QualCard key={p.programme} p={p} i={i} isInView={isInView2} />
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 mb-2">Placement rate by programme</p>
                <div className="space-y-2">
                  {bars.map((b, i) => (
                    <div key={b.name} className="flex items-center gap-3">
                      <span className="text-[10px] text-gray-500 w-24 text-right">{b.name}</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <AnimatedBar width={b.width} isInView={isInView2} delay={0.3 + i * 0.12} color="bg-primary/60" />
                      </div>
                      <span className="text-[10px] text-white w-8">{b.width}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Insights */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[hsl(220,25%,10%)] rounded-xl overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <Globe className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Market Insights</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                Real-time labour market intelligence tailored to your student population. See which industries are hiring, what skills are in demand, and where your graduates compete.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Trending sectors</p>
                    <div className="space-y-2">
                      {[
                        { sector: "Technology", demand: "High", openings: "2,340", trend: "+18%" },
                        { sector: "Consulting", demand: "High", openings: "1,120", trend: "+9%" },
                        { sector: "Finance", demand: "Medium", openings: "890", trend: "+4%" },
                        { sector: "Healthcare", demand: "High", openings: "1,560", trend: "+22%" },
                      ].map((s, i) => (
                        <motion.div
                          key={s.sector}
                          initial={{ opacity: 0, x: -15 }}
                          animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                          className="flex items-center gap-3 bg-white/5 rounded-md px-3 py-2"
                        >
                          <span className="text-xs font-medium text-white flex-1">{s.sector}</span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className={`text-[10px] px-2 py-0.5 rounded-full ${
                              s.demand === "High" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                            }`}
                          >
                            {s.demand}
                          </motion.span>
                          <span className="text-[10px] text-gray-500 w-12 text-right">{s.openings}</span>
                          <span className="text-[10px] text-emerald-400 w-8 text-right">{s.trend}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider">In-demand skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { skill: "Python", level: "high" },
                        { skill: "Data Analysis", level: "high" },
                        { skill: "Financial Modelling", level: "medium" },
                        { skill: "Project Management", level: "high" },
                        { skill: "SQL", level: "medium" },
                        { skill: "Communication", level: "high" },
                        { skill: "React", level: "medium" },
                        { skill: "Strategic Thinking", level: "high" },
                        { skill: "Machine Learning", level: "medium" },
                        { skill: "Stakeholder Mgmt", level: "medium" },
                      ].map((s, i) => (
                        <motion.span
                          key={s.skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                          className={`text-[10px] px-2.5 py-1 rounded-md ${
                            s.level === "high"
                              ? "bg-primary/10 text-primary"
                              : "bg-white/5 text-gray-400"
                          }`}
                        >
                          {s.skill}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="mt-4 bg-white/5 border border-white/10 rounded-md p-3"
                    >
                      <p className="text-[10px] text-gray-500 mb-1">Avg. graduate salary (region)</p>
                      <p className="text-xl font-bold text-white">€{salary.toLocaleString()}</p>
                      <p className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> +6% vs. last year
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
