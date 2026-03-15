import { motion } from "framer-motion";
import GridBackground from "@/components/landing/GridBackground";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DashboardMockup from "@/components/landing/DashboardMockup";
import SolutionSection from "@/components/landing/SolutionSection";
import { ArrowRight, Users, BookOpen, Globe, AlertTriangle, TrendingUp, ArrowUpRight, Shield, ClipboardCheck, Calendar, Briefcase, Monitor } from "lucide-react";
import RubricDonut from "@/components/landing/RubricDonut";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ForUniversities = () => {
  return (
    <GridBackground>
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Universities</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Career outcomes you can <span className="text-gradient italic">actually measure.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              One platform that connects student career activity, employer data, and reporting — so your team can intervene early, prove impact, and improve outcomes year over year.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SolutionSection variant="light" />

      {/* Interactive Demo */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <Monitor className="w-3.5 h-3.5" />
              Interactive Demo
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-3">
              See the platform in action.
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Explore a fully interactive preview of the institutional dashboard — click through tabs, drill into student profiles, and see how data flows in real time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="h-[640px] overflow-hidden rounded-xl"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "85%", label: "Reduction in manual reporting" },
            { value: "100×", label: "More visibility into career activity" },
            { value: "1 day", label: "Average onboarding time" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features - Alternating Layout */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The platform</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-4">Your institutional dashboard.</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
              Real-time visibility, early-warning signals, and auto-generated reports — everything your career team needs in one place.
            </p>
          </motion.div>

          <div className="space-y-32">

            {/* Feature 01 - Student Analysis: text left, mockup right */}
            <motion.div
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
                  {[
                    { name: "Emma Torres", programme: "Business 2026", apps: 18, interviews: 4, engagement: 92, status: "active" },
                    { name: "Liam Chen", programme: "Engineering 2026", apps: 12, interviews: 2, engagement: 78, status: "active" },
                    { name: "Sofia Müller", programme: "Arts 2026", apps: 3, interviews: 0, engagement: 24, status: "at-risk" },
                    { name: "Marco Rossi", programme: "Business 2026", apps: 22, interviews: 6, engagement: 95, status: "active" },
                    { name: "Aisha Khan", programme: "Engineering 2026", apps: 1, interviews: 0, engagement: 15, status: "at-risk" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-2 bg-[#232942] rounded-md px-3 py-2.5"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-white">{s.name}</p>
                        <p className="text-[10px] text-white/50">{s.programme}</p>
                      </div>
                      <span className="w-16 text-center text-xs text-white">{s.apps}</span>
                      <span className="w-16 text-center text-xs text-white">{s.interviews}</span>
                      <div className="w-20 flex items-center justify-center gap-1">
                        <div className="w-10 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${s.engagement > 60 ? "bg-emerald-400" : "bg-amber-400"}`} style={{ width: `${s.engagement}%` }} />
                        </div>
                        <span className="text-[10px] text-white/50">{s.engagement}%</span>
                      </div>
                      <span className={`w-16 text-center text-[10px] font-medium rounded-full px-2 py-0.5 ${
                        s.status === "active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                      }`}>
                        {s.status === "at-risk" && <AlertTriangle className="w-2.5 h-2.5 inline mr-0.5" />}
                        {s.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature 02 - Qualifications Insights: mockup left, text right */}
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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                  {[
                    { programme: "Business Admin", rate: "74%", change: "+8%" },
                    { programme: "Computer Science", rate: "82%", change: "+12%" },
                    { programme: "Marketing", rate: "61%", change: "+3%" },
                    { programme: "Finance", rate: "78%", change: "+6%" },
                  ].map((p, i) => (
                    <motion.div
                      key={p.programme}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="bg-[#232942] rounded-md p-3 text-center"
                    >
                      <p className="text-[10px] text-white/50 mb-1">{p.programme}</p>
                      <p className="text-lg font-bold text-white">{p.rate}</p>
                      <p className="text-[10px] text-emerald-400 flex items-center justify-center gap-0.5">
                        <ArrowUpRight className="w-2.5 h-2.5" />{p.change}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] text-white/40 mb-2">Placement rate by programme</p>
                <div className="space-y-2">
                  {[
                    { name: "Computer Science", width: 82 },
                    { name: "Finance", width: 78 },
                    { name: "Business Admin", width: 74 },
                    { name: "Marketing", width: 61 },
                  ].map((b) => (
                    <div key={b.name} className="flex items-center gap-3">
                      <span className="text-[10px] text-white/40 w-24 text-right">{b.name}</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/60 rounded-full" style={{ width: `${b.width}%` }} />
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
                  Understand which qualifications, modules, and skill sets drive stronger career outcomes. Compare placement rates across programmes and track improvements over time.
                </p>
              </div>
            </motion.div>

            {/* Feature 03 - Market Insights: text left, mockup right */}
            <motion.div
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
                <p className="text-[10px] text-white/40 mb-2 uppercase tracking-wider">Trending sectors</p>
                <div className="space-y-2 mb-4">
                  {[
                    { sector: "Technology", demand: "High", openings: "2,340", trend: "+18%" },
                    { sector: "Consulting", demand: "High", openings: "1,120", trend: "+9%" },
                    { sector: "Finance", demand: "Medium", openings: "890", trend: "+4%" },
                    { sector: "Healthcare", demand: "High", openings: "1,560", trend: "+22%" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.sector}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 bg-[#232942] rounded-md px-3 py-2"
                    >
                      <span className="text-xs font-medium text-white flex-1">{s.sector}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        s.demand === "High" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                      }`}>{s.demand}</span>
                      <span className="text-[10px] text-white/40 w-12 text-right">{s.openings}</span>
                      <span className="text-[10px] text-emerald-400 w-8 text-right">{s.trend}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] text-white/40 mb-2 uppercase tracking-wider">In-demand skills</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["Python", "Data Analysis", "SQL", "Communication", "React", "Project Management", "Strategic Thinking"].map((skill) => (
                    <span key={skill} className="text-[10px] px-2.5 py-1 rounded-md bg-primary/10 text-primary">{skill}</span>
                  ))}
                </div>
                <div className="bg-[#232942] rounded-md p-3">
                  <p className="text-[10px] text-white/40 mb-1">Avg. graduate salary (region)</p>
                  <p className="text-xl font-bold text-white">€38,200</p>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +6% vs. last year
                  </p>
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
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Business Admin 2026 — Rubric Template</p>
                </div>
                <RubricDonut variant="dark" />
                <div className="border-t border-white/10 pt-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Student result preview</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Emma Torres", score: 87, status: "Pass" },
                      { name: "Liam Chen", score: 72, status: "Needs revision" },
                    ].map((s) => (
                      <div key={s.name} className="bg-[#232942] rounded-md p-3 flex items-center gap-3">
                        <div>
                          <p className="text-xs font-medium text-white">{s.name}</p>
                          <p className="text-[10px] text-white/40">Rubric score: <span className="font-semibold text-white">{s.score}/100</span></p>
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
                <div className="space-y-2.5">
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
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 bg-[#232942] rounded-xl px-4 py-3"
                    >
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex flex-col items-center justify-center">
                        <span className="text-[9px] text-primary font-medium leading-none">{ev.date.split(" ")[0]}</span>
                        <span className="text-xs text-primary font-bold leading-none">{ev.date.split(" ")[1]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">{ev.title}</p>
                        <p className="text-xs text-white/50">{ev.rsvps} RSVPs</p>
                      </div>
                      <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${
                        ev.status === "Live" ? "bg-emerald-500/10 text-emerald-400"
                          : ev.status === "Scheduled" ? "bg-primary/10 text-primary"
                          : "bg-white/10 text-white/40"
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
                <div className="space-y-2.5">
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
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 bg-[#232942] rounded-xl px-4 py-3"
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">{job.role}</p>
                        <p className="text-xs text-white/50">{job.company} · {job.views} views · {job.apps} apps</p>
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


      {/* How it works + GDPR */}
      <section className="py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Process</p>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">How the pilot works.</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                { step: "01", title: "Request a pilot", desc: "Fill in the form and our partnerships team will reach out within 48 hours." },
                { step: "02", title: "Onboarding call", desc: "We configure ApplyLab for your institution — programmes, branding, integrations." },
                { step: "03", title: "Student rollout", desc: "Students receive access through your institution. We provide launch support and materials." },
                { step: "04", title: "Outcomes dashboard", desc: "Career teams get access to live analytics within the first week of student activity." },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-xs text-primary font-mono mt-1">{s.step}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 text-center lg:sticky lg:top-32 w-full lg:w-56"
          >
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-sm font-bold text-foreground mb-2">GDPR Compliant</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Fully compliant with European data protection regulations. Student and institutional data is handled with the highest security standards.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </GridBackground>
  );
};

export default ForUniversities;
