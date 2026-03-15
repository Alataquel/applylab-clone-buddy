import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BookOpen, Globe, AlertTriangle, TrendingUp, ArrowUpRight } from "lucide-react";

const InfrastructureSection = () => {
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <Users className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Analysis</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                Deep, individual-level insights into every student's career journey. Track application activity, engagement patterns, and progress across your entire cohort in real time.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-wider px-1">
                  <span className="flex-1">Student</span>
                  <span className="w-16 text-center">Apps</span>
                  <span className="w-16 text-center">Interviews</span>
                  <span className="w-20 text-center">Engagement</span>
                  <span className="w-16 text-center">Status</span>
                </div>
                {[
                  { name: "Emma Torres", programme: "Business 2026", apps: 18, interviews: 4, engagement: 92, status: "active" },
                  { name: "Liam Chen", programme: "Engineering 2026", apps: 12, interviews: 2, engagement: 78, status: "active" },
                  { name: "Sofia Müller", programme: "Arts 2026", apps: 3, interviews: 0, engagement: 24, status: "at-risk" },
                  { name: "Marco Rossi", programme: "Business 2026", apps: 22, interviews: 6, engagement: 95, status: "active" },
                  { name: "Aisha Khan", programme: "Engineering 2026", apps: 1, interviews: 0, engagement: 15, status: "at-risk" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-2 bg-gray-50 rounded-md px-3 py-2.5">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">{s.name}</p>
                      <p className="text-[10px] text-gray-400">{s.programme}</p>
                    </div>
                    <span className="w-16 text-center text-xs text-gray-900">{s.apps}</span>
                    <span className="w-16 text-center text-xs text-gray-900">{s.interviews}</span>
                    <div className="w-20 flex items-center justify-center gap-1">
                      <div className="w-10 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${s.engagement > 60 ? "bg-emerald-500" : "bg-amber-500"}`}
                          style={{ width: `${s.engagement}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500">{s.engagement}%</span>
                    </div>
                    <span className={`w-16 text-center text-[10px] font-medium rounded-full px-2 py-0.5 ${
                      s.status === "active" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                    }`}>
                      {s.status === "at-risk" && <AlertTriangle className="w-2.5 h-2.5 inline mr-0.5" />}
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Qualifications Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <BookOpen className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualifications Insights</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                See how your programmes translate into employability. Understand which qualifications, modules, and skill sets drive stronger career outcomes.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {[
                    { programme: "Business Admin", rate: "74%", change: "+8%" },
                    { programme: "Computer Science", rate: "82%", change: "+12%" },
                    { programme: "Marketing", rate: "61%", change: "+3%" },
                    { programme: "Finance", rate: "78%", change: "+6%" },
                  ].map((p) => (
                    <div key={p.programme} className="bg-gray-50 border border-gray-200 rounded-md p-3 text-center">
                      <p className="text-[10px] text-gray-500 mb-1">{p.programme}</p>
                      <p className="text-lg font-bold text-gray-900">{p.rate}</p>
                      <p className="text-[10px] text-emerald-500 flex items-center justify-center gap-0.5">
                        <ArrowUpRight className="w-2.5 h-2.5" />{p.change}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mb-2">Placement rate by programme</p>
                <div className="space-y-2">
                  {[
                    { name: "Computer Science", width: "82%" },
                    { name: "Finance", width: "78%" },
                    { name: "Business Admin", width: "74%" },
                    { name: "Marketing", width: "61%" },
                  ].map((b) => (
                    <div key={b.name} className="flex items-center gap-3">
                      <span className="text-[10px] text-gray-500 w-24 text-right">{b.name}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/60 rounded-full" style={{ width: b.width }} />
                      </div>
                      <span className="text-[10px] text-gray-900 w-8">{b.width}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="p-6 lg:p-8">
              <Globe className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Insights</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                Real-time labour market intelligence tailored to your student population. See which industries are hiring, what skills are in demand, and where your graduates compete.
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">Trending sectors</p>
                    <div className="space-y-2">
                      {[
                        { sector: "Technology", demand: "High", openings: "2,340", trend: "+18%" },
                        { sector: "Consulting", demand: "High", openings: "1,120", trend: "+9%" },
                        { sector: "Finance", demand: "Medium", openings: "890", trend: "+4%" },
                        { sector: "Healthcare", demand: "High", openings: "1,560", trend: "+22%" },
                      ].map((s) => (
                        <div key={s.sector} className="flex items-center gap-3 bg-gray-50 rounded-md px-3 py-2">
                          <span className="text-xs font-medium text-gray-900 flex-1">{s.sector}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            s.demand === "High" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                          }`}>{s.demand}</span>
                          <span className="text-[10px] text-gray-500 w-12 text-right">{s.openings}</span>
                          <span className="text-[10px] text-emerald-500 w-8 text-right">{s.trend}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">In-demand skills</p>
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
                      ].map((s) => (
                        <span
                          key={s.skill}
                          className={`text-[10px] px-2.5 py-1 rounded-md ${
                            s.level === "high"
                              ? "bg-primary/10 text-primary"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {s.skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-3">
                      <p className="text-[10px] text-gray-400 mb-1">Avg. graduate salary (region)</p>
                      <p className="text-xl font-bold text-gray-900">€38,200</p>
                      <p className="text-[10px] text-emerald-500 flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> +6% vs. last year
                      </p>
                    </div>
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
