import { useState, useRef } from "react";

const navItems = ["Students", "Analytics", "Qualification Insights", "Market Insights", "Resume Templates", "Job & Event Postings"];

const studentsData = [
  { name: "Sarah Chen", email: "s.chen@uni.edu", degree: "BSc Business Admin", phone: "+44 7911 123456", status: "placed" as const, avatar: "SC",
    spider: { certifications: 4, languages: 3, projects: 5, skills: 4, experience: 3, gpa: 4 },
    applications: [
      { company: "Deloitte", role: "Analyst", status: "Offered" },
      { company: "McKinsey", role: "Associate", status: "Interview" },
      { company: "Goldman Sachs", role: "Intern", status: "Applied" },
    ]},
  { name: "James Miller", email: "j.miller@uni.edu", degree: "MEng Computer Science", phone: "+44 7922 234567", status: "in_progress" as const, avatar: "JM",
    spider: { certifications: 2, languages: 4, projects: 3, skills: 5, experience: 2, gpa: 3 },
    applications: [
      { company: "Google", role: "SWE Intern", status: "Interview" },
      { company: "Meta", role: "Engineer", status: "Applied" },
    ]},
  { name: "Priya Patel", email: "p.patel@uni.edu", degree: "BA Fine Arts", phone: "+44 7933 345678", status: "nothing" as const, avatar: "PP",
    spider: { certifications: 1, languages: 2, projects: 2, skills: 3, experience: 1, gpa: 3 },
    applications: []},
  { name: "Lucas Wang", email: "l.wang@uni.edu", degree: "MSc Finance", phone: "+44 7944 456789", status: "placed" as const, avatar: "LW",
    spider: { certifications: 3, languages: 3, projects: 4, skills: 4, experience: 4, gpa: 5 },
    applications: [
      { company: "JP Morgan", role: "Analyst", status: "Offered" },
      { company: "HSBC", role: "Graduate", status: "Offered" },
    ]},
  { name: "Emma Johnson", email: "e.johnson@uni.edu", degree: "Dual Bachelors in Business & Data Analytics", phone: "+44 7955 567890", status: "in_progress" as const, avatar: "EJ",
    spider: { certifications: 3, languages: 2, projects: 3, skills: 3, experience: 2, gpa: 4 },
    applications: [
      { company: "PwC", role: "Consultant", status: "Interview" },
      { company: "EY", role: "Analyst", status: "Applied" },
      { company: "Accenture", role: "Analyst", status: "Applied" },
    ]},
  { name: "Omar Hassan", email: "o.hassan@uni.edu", degree: "MEng Electrical Engineering", phone: "+44 7966 678901", status: "placed" as const, avatar: "OH",
    spider: { certifications: 4, languages: 5, projects: 4, skills: 5, experience: 3, gpa: 4 },
    applications: [
      { company: "Siemens", role: "Engineer", status: "Offered" },
    ]},
  { name: "Mia Thompson", email: "m.thompson@uni.edu", degree: "BA Graphic Design", phone: "+44 7977 789012", status: "in_progress" as const, avatar: "MT",
    spider: { certifications: 2, languages: 2, projects: 5, skills: 4, experience: 2, gpa: 3 },
    applications: [
      { company: "Pentagram", role: "Junior Designer", status: "Interview" },
    ]},
  { name: "Daniel Kim", email: "d.kim@uni.edu", degree: "BSc Economics", phone: "+44 7988 890123", status: "nothing" as const, avatar: "DK",
    spider: { certifications: 1, languages: 1, projects: 1, skills: 2, experience: 1, gpa: 2 },
    applications: []},
  { name: "Aisha Begum", email: "a.begum@uni.edu", degree: "M.Sc. Data Science", phone: "+44 7999 901234", status: "placed" as const, avatar: "AB",
    spider: { certifications: 5, languages: 3, projects: 4, skills: 5, experience: 4, gpa: 5 },
    applications: [
      { company: "Amazon", role: "Data Scientist", status: "Offered" },
      { company: "Netflix", role: "ML Engineer", status: "Interview" },
    ]},
];

const statusConfig = {
  placed: { bg: "bg-emerald-500/15", border: "border-emerald-500/40", label: "Placed", labelColor: "text-emerald-400" },
  in_progress: { bg: "bg-amber-500/15", border: "border-amber-500/40", label: "In Progress", labelColor: "text-amber-400" },
  nothing: { bg: "bg-rose-500/15", border: "border-rose-500/40", label: "No Activity", labelColor: "text-rose-400" },
};

// Mini spider/radar chart as SVG
const SpiderChart = ({ data }: { data: { certifications: number; languages: number; projects: number; skills: number; experience: number; gpa: number } }) => {
  const labels = ["Certifications", "Languages", "Projects", "Skills", "Experience", "GPA"];
  const values = [data.certifications, data.languages, data.projects, data.skills, data.experience, data.gpa];
  const cx = 80, cy = 80, maxR = 55;
  const angleStep = (Math.PI * 2) / 6;

  const getPoint = (i: number, v: number) => ({
    x: cx + Math.sin(angleStep * i) * (v / 5) * maxR,
    y: cy - Math.cos(angleStep * i) * (v / 5) * maxR,
  });

  const gridLevels = [1, 2, 3, 4, 5];
  const dataPoints = values.map((v, i) => getPoint(i, v));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";

  return (
    <svg viewBox="0 0 160 160" className="w-full max-w-[160px]">
      {/* Grid */}
      {gridLevels.map((level) => {
        const pts = Array.from({ length: 6 }, (_, i) => getPoint(i, level));
        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
        return <path key={level} d={path} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />;
      })}
      {/* Axes */}
      {Array.from({ length: 6 }, (_, i) => {
        const end = getPoint(i, 5);
        return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />;
      })}
      {/* Data area */}
      <path d={dataPath} fill="hsl(217, 91%, 60%, 0.2)" stroke="hsl(217, 91%, 60%)" strokeWidth="1.5" />
      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2" fill="hsl(217, 91%, 60%)" />
      ))}
      {/* Labels */}
      {labels.map((label, i) => {
        const pt = getPoint(i, 6.2);
        return (
          <text key={label} x={pt.x} y={pt.y} textAnchor="middle" dominantBaseline="middle" fill="#9ca3af" fontSize="5" fontFamily="sans-serif">
            {label}
          </text>
        );
      })}
    </svg>
  );
};

const StudentDetailContent = ({ student, onBack }: { student: typeof studentsData[0]; onBack: () => void }) => {
  const cfg = statusConfig[student.status];
  return (
    <>
      {/* Header */}
      <div className={`flex items-center gap-3 mb-4 ${cfg.bg} ${cfg.border} border rounded-lg px-3 py-3`}>
        <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0">{student.avatar}</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{student.name}</p>
          <p className="text-[10px] text-gray-400">{student.email}</p>
        </div>
        <span className={`text-[9px] font-semibold ${cfg.labelColor}`}>{cfg.label}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Left: Info + Spider */}
        <div>
          <p className="text-[10px] text-gray-500 mb-2">Information</p>
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-[10px] text-gray-300">{student.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-[10px] text-gray-300">{student.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span className="text-[10px] text-gray-300">{student.degree}</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mb-1">Profile Report</p>
          <SpiderChart data={student.spider} />
        </div>

        {/* Right: Applications + Documents */}
        <div>
          <p className="text-[10px] text-gray-500 mb-2">Job Applications</p>
          {student.applications.length === 0 ? (
            <p className="text-[10px] text-gray-600 italic mb-3">No applications yet</p>
          ) : (
            <div className="space-y-1 mb-3">
              {student.applications.map((app) => (
                <div key={app.company + app.role} className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-md px-2 py-1.5">
                  <div>
                    <p className="text-[10px] font-medium text-white">{app.role}</p>
                    <p className="text-[9px] text-gray-500">{app.company}</p>
                  </div>
                  <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded ${
                    app.status === "Offered" ? "bg-emerald-500/20 text-emerald-400" :
                    app.status === "Interview" ? "bg-amber-500/20 text-amber-400" :
                    "bg-blue-500/20 text-blue-400"
                  }`}>{app.status}</span>
                </div>
              ))}
            </div>
          )}

          <p className="text-[10px] text-gray-500 mb-2">Documents</p>
          <div className="space-y-1">
            {["Resume", "Cover Letter"].map((doc) => (
              <div key={doc} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-md px-2 py-1.5 cursor-pointer hover:bg-white/[0.06] transition-colors">
                <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <p className="text-[10px] text-white">{doc}</p>
                <svg className="w-3 h-3 text-gray-500 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const StudentsContent = ({ onSelectStudent }: { onSelectStudent: (student: typeof studentsData[0]) => void }) => (
  <>
    <div className="flex items-center justify-between mb-3">
      <p className="text-xs text-gray-500">All Students</p>
      <div className="flex gap-1.5">
        <div className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1">
          <span className="text-[10px] text-gray-400">Search...</span>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1">
          <span className="text-[10px] text-gray-400">All degrees</span>
        </div>
      </div>
    </div>
    {/* Legend */}
    <div className="flex gap-3 mb-3">
      {[
        { color: "bg-emerald-400", label: "Placed" },
        { color: "bg-amber-400", label: "In Progress" },
        { color: "bg-rose-400", label: "No Activity" },
      ].map((l) => (
        <div key={l.label} className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${l.color}`} />
          <span className="text-[9px] text-gray-500">{l.label}</span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      {studentsData.map((s) => {
        const cfg = statusConfig[s.status];
        return (
          <div
            key={s.name}
            onClick={() => onSelectStudent(s)}
            className={`${cfg.bg} ${cfg.border} border rounded-lg px-2.5 py-2 cursor-pointer hover:brightness-125 transition-all`}
          >
            <p className="text-[10px] font-semibold text-white">{s.name}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <svg className="w-2.5 h-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-[8px] text-gray-400 truncate">{s.email}</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <svg className="w-2.5 h-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span className="text-[8px] text-gray-400 truncate">{s.degree}</span>
            </div>
          </div>
        );
      })}
    </div>
  </>
);

const AnalyticsContent = () => (
  <>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { label: "Active Students", value: "1,284", change: "+12%", up: true },
        { label: "Placement Rate", value: "71%", change: "+4.2%", up: true },
        { label: "Avg. Engagement", value: "83%", change: "-2.1%", up: false },
      ].map((m) => (
        <div key={m.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] text-gray-500 mb-1">{m.label}</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">{m.value}</span>
            <span className={`text-[10px] font-medium ${m.up ? "text-emerald-400" : "text-rose-400"}`}>{m.change}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-500 mb-3">Cohort Breakdown</p>
    <div className="space-y-2">
      {[
        { name: "Business 2026", students: 342, placed: "68%", risk: 12, color: "bg-purple-500", letter: "B2" },
        { name: "Engineering 2026", students: 218, placed: "74%", risk: 5, color: "bg-blue-500", letter: "E2" },
        { name: "Arts & Design 2026", students: 156, placed: "61%", risk: 23, color: "bg-emerald-500", letter: "A2" },
        { name: "Finance 2026", students: 198, placed: "72%", risk: 8, color: "bg-rose-500", letter: "F2" },
      ].map((c) => (
        <div key={c.name} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-4 py-3 transition-colors">
          <div className={`w-9 h-9 rounded-lg ${c.color} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}>{c.letter}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">{c.name}</p>
            <p className="text-[11px] text-gray-500">{c.students} students</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-emerald-400">{c.placed}</span>
            <p className="text-[10px] text-gray-500">{c.risk} at risk</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4">
      <button className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
        Generate Report
      </button>
    </div>
  </>
);

const QualificationInsightsContent = () => (
  <>
    <p className="text-xs text-gray-500 mb-3">Qualification Distribution</p>
    <div className="grid grid-cols-2 gap-2 mb-4">
      {[
        { label: "Bachelor's", count: 824, pct: "64%" },
        { label: "Master's", count: 312, pct: "24%" },
        { label: "MBA", count: 98, pct: "8%" },
        { label: "PhD", count: 50, pct: "4%" },
      ].map((q) => (
        <div key={q.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] text-gray-500">{q.label}</p>
          <div className="flex items-baseline justify-between">
            <span className="text-base font-bold text-white">{q.count}</span>
            <span className="text-[10px] font-medium text-primary">{q.pct}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-500 mb-2">Top Skills</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {["Data Analysis", "Python", "Communication", "Project Mgmt", "SQL", "Leadership", "Excel", "Marketing"].map((skill) => (
        <span key={skill} className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">{skill}</span>
      ))}
    </div>
    <p className="text-xs text-gray-500 mb-2">Certifications Held</p>
    <div className="space-y-1.5">
      {["Google Analytics", "AWS Cloud Practitioner", "PMP", "CFA Level I"].map((cert) => (
        <div key={cert} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <p className="text-xs text-white">{cert}</p>
        </div>
      ))}
    </div>
  </>
);

const MarketInsightsContent = () => (
  <>
    <p className="text-xs text-gray-500 mb-3">Industry Demand Trends</p>
    <div className="space-y-2 mb-4">
      {[
        { industry: "Technology", demand: "Very High", growth: "+18%", bar: "w-[90%]" },
        { industry: "Finance", demand: "High", growth: "+12%", bar: "w-[75%]" },
        { industry: "Healthcare", demand: "High", growth: "+15%", bar: "w-[78%]" },
        { industry: "Consulting", demand: "Medium", growth: "+6%", bar: "w-[55%]" },
        { industry: "Education", demand: "Medium", growth: "+4%", bar: "w-[48%]" },
      ].map((ind) => (
        <div key={ind.industry} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs font-medium text-white">{ind.industry}</p>
            <span className="text-[10px] font-medium text-emerald-400">{ind.growth}</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full">
            <div className={`h-full bg-primary rounded-full ${ind.bar}`} />
          </div>
          <p className="text-[9px] text-gray-500 mt-1">Demand: {ind.demand}</p>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-500 mb-2">Top Hiring Locations</p>
    <div className="flex flex-wrap gap-1.5">
      {["London", "New York", "Singapore", "Berlin", "Toronto", "Sydney"].map((loc) => (
        <span key={loc} className="text-[10px] bg-white/[0.05] text-gray-300 px-2.5 py-1 rounded-md">{loc}</span>
      ))}
    </div>
  </>
);

const ResumeTemplatesContent = () => (
  <>
    <p className="text-xs text-gray-500 mb-3">Available Templates</p>
    <div className="grid grid-cols-2 gap-2 mb-4">
      {[
        { name: "Classic Professional", uses: 482, color: "bg-blue-500" },
        { name: "Modern Minimal", uses: 356, color: "bg-purple-500" },
        { name: "Creative Portfolio", uses: 198, color: "bg-emerald-500" },
        { name: "Executive", uses: 134, color: "bg-rose-500" },
      ].map((t) => (
        <div key={t.name} className="bg-white/[0.03] border border-white/5 rounded-lg p-3 hover:bg-white/[0.06] transition-colors cursor-pointer">
          <div className={`w-full h-16 ${t.color}/15 rounded-md mb-2 flex items-center justify-center`}>
            <svg className={`w-6 h-6 ${t.color.replace("bg-", "text-")}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <p className="text-xs font-medium text-white">{t.name}</p>
          <p className="text-[9px] text-gray-500">{t.uses} students using</p>
        </div>
      ))}
    </div>
    <button className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-gray-400 text-xs font-medium py-2.5 rounded-lg transition-colors">
      + Upload New Template
    </button>
  </>
);

const JobEventPostingsContent = () => (
  <>
    <div className="flex items-center justify-between mb-3">
      <p className="text-xs text-gray-500">Active Postings</p>
      <button className="text-[10px] bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-md font-medium transition-colors">+ New Posting</button>
    </div>
    <div className="space-y-2 mb-4">
      {[
        { title: "Software Engineer Intern", company: "TechCorp", type: "Job", applicants: 48, typeColor: "bg-blue-500" },
        { title: "Career Fair 2026", company: "University", type: "Event", applicants: 312, typeColor: "bg-emerald-500" },
        { title: "Marketing Analyst", company: "MediaGroup", type: "Job", applicants: 27, typeColor: "bg-blue-500" },
        { title: "Resume Workshop", company: "Career Services", type: "Event", applicants: 89, typeColor: "bg-emerald-500" },
        { title: "Financial Analyst", company: "CapitalOne", type: "Job", applicants: 63, typeColor: "bg-blue-500" },
      ].map((p) => (
        <div key={p.title} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-3 py-2.5 transition-colors">
          <div className={`px-1.5 py-0.5 rounded text-[8px] font-bold text-white ${p.typeColor} flex-shrink-0`}>{p.type}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white">{p.title}</p>
            <p className="text-[10px] text-gray-500">{p.company}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-white">{p.applicants}</p>
            <p className="text-[9px] text-gray-500">{p.type === "Job" ? "applicants" : "registered"}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const DashboardMockup = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <StudentsContent />;
      case 1: return <AnalyticsContent />;
      case 2: return <QualificationInsightsContent />;
      case 3: return <MarketInsightsContent />;
      case 4: return <ResumeTemplatesContent />;
      case 5: return <JobEventPostingsContent />;
      default: return <StudentsContent />;
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-xl overflow-hidden shadow-precision-lg bg-[hsl(230,40%,11%)] border border-white/5 transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(230,38%,9%)] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-gray-500 bg-white/5 px-4 py-1 rounded-md">applylab.software/careers-team</span>
        </div>
      </div>

      {/* App content */}
      <div className="flex min-h-[460px]">
        {/* Sidebar */}
        <div className="w-44 border-r border-white/5 p-4 hidden sm:block">
          <p className="text-sm font-bold text-white mb-5">ApplyLab</p>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Careers Team</p>
          <div className="space-y-0.5">
            {navItems.map((item, i) => (
              <div
                key={item}
                onClick={() => setActiveTab(i)}
                className={`text-[11px] px-3 py-2 rounded-md transition-colors cursor-pointer ${
                  i === activeTab
                    ? "bg-primary text-white font-medium"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-y-auto max-h-[460px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
