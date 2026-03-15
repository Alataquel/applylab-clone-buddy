import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BookOpen, Globe, AlertTriangle, TrendingUp, ArrowUpRight, ClipboardCheck, Calendar, Briefcase } from "lucide-react";
import RubricDonut from "./RubricDonut";

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

const StudentRow = ({ s, i, isInView }: { s: typeof students[0]; i: number; isInView: boolean }) => {
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

const QualCard = ({ p, i, isInView }: { p: typeof programmes[0]; i: number; isInView: boolean }) => {
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

        <div className="space-y-32">

          {/* Feature 01 - Student Analysis: text left, mockup right */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 01</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">Student Analysis</h2>
              <p className="text-base text-gray-500 font-medium mb-3">
                Deep insights into every student's career journey
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Track application activity, engagement patterns, and progress across your entire cohort in real time. Spot at-risk students before it's too late.
              </p>
            </div>
            <div className="bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-3">
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

          {/* Feature 02 - Qualifications Insights: mockup left, text right */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
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
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 02</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">Qualifications Insights</h2>
              <p className="text-base text-gray-500 font-medium mb-3">
                See how your programmes translate into employability
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Understand which qualifications, modules, and skill sets drive stronger career outcomes. Compare placement rates across programmes.
              </p>
            </div>
          </motion.div>

          {/* Feature 03 - Market Insights: text left, mockup right */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 03</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">Market Insights</h2>
              <p className="text-base text-gray-500 font-medium mb-3">
                Real-time labour market intelligence
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                See which industries are hiring, what skills are in demand, and where your graduates compete. Tailored to your student population.
              </p>
            </div>
            <div className="bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Trending sectors</p>
                <div className="space-y-2 mb-4">
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
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        s.demand === "High" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                      }`}>{s.demand}</span>
                      <span className="text-[10px] text-gray-500 w-12 text-right">{s.openings}</span>
                      <span className="text-[10px] text-emerald-400 w-8 text-right">{s.trend}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider">In-demand skills</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {[
                    { skill: "Python", level: "high" },
                    { skill: "Data Analysis", level: "high" },
                    { skill: "SQL", level: "medium" },
                    { skill: "Communication", level: "high" },
                    { skill: "React", level: "medium" },
                    { skill: "Project Management", level: "high" },
                  ].map((s, i) => (
                    <motion.span
                      key={s.skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                      className={`text-[10px] px-2.5 py-1 rounded-md ${
                        s.level === "high" ? "bg-primary/10 text-primary" : "bg-white/5 text-gray-400"
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
                  className="bg-white/5 border border-white/10 rounded-md p-3"
                >
                  <p className="text-[10px] text-gray-500 mb-1">Avg. graduate salary (region)</p>
                  <p className="text-xl font-bold text-white">€{salary.toLocaleString()}</p>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +6% vs. last year
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature 04 - Resume Rubric: mockup left, text right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <ClipboardCheck className="w-3.5 h-3.5 text-primary" />
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Business Admin 2026 — Rubric Template</p>
              </div>
              <RubricDonut variant="dark" />
              <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Student result preview</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Emma Torres", score: 87, status: "Pass" },
                    { name: "Liam Chen", score: 72, status: "Needs revision" },
                  ].map((s) => (
                    <div key={s.name} className="bg-white/5 rounded-md p-3 flex items-center gap-3">
                      <div>
                        <p className="text-xs font-medium text-white">{s.name}</p>
                        <p className="text-[10px] text-gray-400">Rubric score: <span className="font-semibold text-white">{s.score}/100</span></p>
                      </div>
                      <span className={`ml-auto text-[10px] font-medium rounded-full px-2 py-0.5 ${
                        s.status === "Pass" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                      }`}>{s.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 04</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">Resume Rubric Grading</h2>
              <p className="text-base text-gray-500 font-medium mb-3">
                Standardised, scalable CV assessment
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Define your own grading rubric by programme and degree. When students use Resume Lab, their CV is automatically scored against your institution's criteria — consistent, scalable, and advisor-free.
              </p>
            </div>
          </motion.div>

          {/* Feature 05 - Post Events: text left, mockup right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 05</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">Post Events</h2>
              <p className="text-base text-gray-500 font-medium mb-3">
                Engage students with career events
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Publish career fairs, workshops, and networking sessions. Students see them instantly on their Event Board, with RSVP tracking built in.
              </p>
            </div>
            <div className="bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                {[
                  { title: "Spring Career Fair 2026", date: "Mar 28", rsvps: 142, status: "Live" },
                  { title: "CV Masterclass", date: "Apr 03", rsvps: 56, status: "Scheduled" },
                  { title: "Alumni Panel: Tech", date: "Apr 10", rsvps: 0, status: "Draft" },
                ].map((ev, i) => (
                  <motion.div
                    key={ev.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 bg-white/5 rounded-md px-3 py-2.5"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex flex-col items-center justify-center">
                      <span className="text-[9px] text-primary font-medium leading-none">{ev.date.split(" ")[0]}</span>
                      <span className="text-xs text-primary font-bold leading-none">{ev.date.split(" ")[1]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white">{ev.title}</p>
                      <p className="text-[10px] text-gray-500">{ev.rsvps} RSVPs</p>
                    </div>
                    <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${
                      ev.status === "Live" ? "bg-emerald-500/10 text-emerald-400"
                        : ev.status === "Scheduled" ? "bg-primary/10 text-primary"
                        : "bg-white/10 text-gray-400"
                    }`}>{ev.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature 06 - Post Job Openings: mockup left, text right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                {[
                  { role: "Marketing Analyst Intern", company: "Partner: Deloitte", views: 234, apps: 18, status: "Active" },
                  { role: "Software Intern", company: "Partner: Revolut", views: 189, apps: 12, status: "Active" },
                  { role: "Research Assistant", company: "Internal", views: 95, apps: 7, status: "Closing soon" },
                ].map((job, i) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 bg-white/5 rounded-md px-3 py-2.5"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white">{job.role}</p>
                      <p className="text-[10px] text-gray-500">{job.company} · {job.views} views · {job.apps} apps</p>
                    </div>
                    <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${
                      job.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                    }`}>{job.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 06</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">Post Job Openings</h2>
              <p className="text-base text-gray-500 font-medium mb-3">
                Share roles directly to your students
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Share exclusive roles from employer partners directly to your students' Internship Board. Track views, applications, and placement outcomes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
