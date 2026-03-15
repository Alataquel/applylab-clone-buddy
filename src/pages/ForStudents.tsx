import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, FileText, BarChart3, Search, Calendar, UserCheck, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-medium mb-3"
          >
            For Students
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance"
          >
            Your career toolkit, <span className="text-gradient italic">built to perform.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Stop guessing which roles fit. Stop sending generic CVs. ApplyLab gives you the tools to apply with precision and land with confidence.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/request-pilot"
            className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Request early access <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Features - Alternating Layout */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Feature 01 - Job Board: text left, mockup right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 01</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">Job Board</h2>
              <p className="text-base text-muted-foreground/80 font-medium mb-3">
                AI-matched opportunities tailored to your skills and goals
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our intelligent algorithm analyses your profile, skills, and preferences to surface the most relevant opportunities from thousands of listings — filtered by fit, not just keywords.
              </p>
            </div>
            <div className="bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-3">
                {[
                  { initials: "GS", color: "bg-emerald-500", role: "Analyst", company: "Goldman Sachs", score: "96%" },
                  { initials: "MC", color: "bg-purple-500", role: "Business Analyst", company: "McKinsey", score: "91%" },
                  { initials: "FG", color: "bg-green-500", role: "Product Intern", company: "Figma", score: "87%" },
                ].map((job, i) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 bg-[#232942] rounded-xl px-4 py-3.5"
                  >
                    <div className={`w-10 h-10 rounded-lg ${job.color} flex items-center justify-center text-xs font-bold text-white`}>
                      {job.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium text-white">{job.role}</p>
                        <ExternalLink className="w-3 h-3 text-white/40" />
                      </div>
                      <p className="text-xs text-white/50">{job.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">{job.score}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 px-1">
                <p className="text-xs text-white/40">Top AI matches</p>
                <a href="#" className="text-xs text-primary font-medium flex items-center gap-1">
                  View 47 more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Feature 02 - Resume Lab: mockup left, text right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="bg-[#232942] rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-[3px] border-emerald-400 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">94</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Resume Score</p>
                      <p className="text-xs text-emerald-400">Top 5% · Ready to send</p>
                    </div>
                  </div>
                  <UserCheck className="w-5 h-5 text-white/30" />
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: CheckCircle, text: "Quantified achievements added", color: "text-emerald-400" },
                  { icon: CheckCircle, text: "Keywords optimised", color: "text-emerald-400" },
                  { icon: AlertCircle, text: "Add leadership experience", color: "text-amber-400" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 bg-[#232942] rounded-xl px-4 py-3"
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <p className="text-sm text-white/80">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 02</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">Resume Lab</h2>
              <p className="text-base text-muted-foreground/80 font-medium mb-3">
                Real-time feedback to get you past the bots
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build ATS-optimised resumes with instant feedback on formatting, keywords, and impact bullets. Our AI scores your resume against each specific job description.
              </p>
            </div>
          </motion.div>

          {/* Feature 03 - Automatic Tracker: text left, mockup right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 03</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">Automatic Tracker</h2>
              <p className="text-base text-muted-foreground/80 font-medium mb-3">
                Every application, one visual pipeline
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A visual pipeline that automatically keeps every application organised. Track status in real time without lifting a finger — from application to offer.
              </p>
            </div>
            <div className="bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { stage: "Applied", color: "bg-blue-400", items: ["Spotify", "Revolut", "Wise"] },
                  { stage: "Interview", color: "bg-amber-400", items: ["Linear", "Figma"] },
                  { stage: "Offer", color: "bg-emerald-400", items: ["McKinsey"] },
                  { stage: "Accepted", color: "bg-primary", items: [] },
                ].map((col, colIdx) => (
                  <motion.div
                    key={col.stage}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + colIdx * 0.08 }}
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className={`w-2 h-2 rounded-full ${col.color}`} />
                      <span className="text-[10px] font-medium text-white">{col.stage}</span>
                    </div>
                    <div className="space-y-1.5">
                      {col.items.map((item) => (
                        <div key={item} className="bg-[#232942] rounded-lg px-2.5 py-2">
                          <p className="text-[10px] font-medium text-white/80">{item}</p>
                        </div>
                      ))}
                      {col.items.length === 0 && (
                        <div className="border border-dashed border-white/10 rounded-lg px-2.5 py-2 text-center">
                          <p className="text-[10px] text-white/20">—</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature 04 - Event Board: mockup left, text right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2.5">
                {[
                  { date: "Mar 20", title: "Tech Career Fair 2026", org: "University Events", spots: "120 spots" },
                  { date: "Mar 22", title: "Resume Workshop", org: "Google Careers", spots: "45 spots" },
                  { date: "Mar 25", title: "Finance Networking", org: "JP Morgan", spots: "30 spots" },
                ].map((event, i) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 bg-[#232942] rounded-xl px-4 py-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex flex-col items-center justify-center">
                      <span className="text-[9px] text-primary font-medium leading-none">{event.date.split(" ")[0]}</span>
                      <span className="text-xs text-primary font-bold leading-none">{event.date.split(" ")[1]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{event.title}</p>
                      <p className="text-xs text-white/50">{event.org}</p>
                    </div>
                    <span className="text-[10px] text-emerald-400">{event.spots}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center mb-6">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 04</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">Event Board</h2>
              <p className="text-base text-muted-foreground/80 font-medium mb-3">
                Never miss a career opportunity
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover career fairs, networking sessions, and workshops curated for your profile. Never miss an opportunity to connect with employers.
              </p>
            </div>
          </motion.div>

          {/* Feature 05 - Book an Advisor: text left, mockup right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center mb-6">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Feature 05</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">Book an Advisor</h2>
              <p className="text-base text-muted-foreground/80 font-medium mb-3">
                Personalised guidance, one click away
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One-click booking with your university's career advisors. Get personalised guidance on your applications, interview prep, or career direction.
              </p>
            </div>
            <div className="bg-[#1a1f36] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "Dr. Sarah Mitchell", role: "Career Strategy", availability: "Available tomorrow", slots: "3 slots" },
                  { name: "James Rodriguez", role: "Tech & Engineering", availability: "Available Thu", slots: "5 slots" },
                  { name: "Anna Kowalski", role: "Finance & Consulting", availability: "Available Fri", slots: "2 slots" },
                ].map((advisor, i) => (
                  <motion.div
                    key={advisor.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 bg-[#232942] rounded-xl px-4 py-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{advisor.name}</p>
                      <p className="text-xs text-white/50">{advisor.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-emerald-400">{advisor.availability}</p>
                      <p className="text-[10px] text-white/30">{advisor.slots}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">
              Access through your university.
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              ApplyLab is available through partner institutions. If your university isn't listed yet, request early access and we'll get in touch.
            </p>
            <motion.a
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Apply for early access <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForStudents;
