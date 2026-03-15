import { useState, useRef } from "react";

const navItems = ["Overview", "Students", "Analytics", "Qualification Insights", "Market Insights", "Resume Templates", "Job & Event Postings"];

const OverviewContent = () => (
  <>
    {/* Top KPI Row */}
    <div className="grid grid-cols-4 gap-2 mb-3">
      {[
        { label: "Total Students", value: "1,284", change: "+12%", up: true, icon: "👥" },
        { label: "Placement Rate", value: "71%", change: "+4.2%", up: true, icon: "🎯" },
        { label: "Active Applications", value: "4,821", change: "+18%", up: true, icon: "📄" },
        { label: "Avg. Engagement", value: "83%", change: "-2.1%", up: false, icon: "📊" },
      ].map((m) => (
        <div key={m.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[9px] text-gray-500">{m.label}</p>
            <span className="text-xs">{m.icon}</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-white">{m.value}</span>
            <span className={`text-[9px] font-medium ${m.up ? "text-emerald-400" : "text-rose-400"}`}>{m.change}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Second row: Charts + Top Placements */}
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-3">
      {/* Mini bar chart - Applications trend */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <p className="text-[9px] text-gray-500 mb-1">Applications This Week</p>
        <div className="flex items-end gap-1 h-[50px]">
          {[
            { day: "Mon", h: 65 }, { day: "Tue", h: 45 }, { day: "Wed", h: 80 },
            { day: "Thu", h: 55 }, { day: "Fri", h: 90 }, { day: "Sat", h: 30 }, { day: "Sun", h: 40 },
          ].map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full bg-primary/70 rounded-sm" style={{ height: `${d.h * 0.5}px` }} />
              <span className="text-[6px] text-gray-600">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interviews breakdown */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[9px] text-gray-500">Interviews This Month</p>
          <span className="text-sm font-bold text-white">186</span>
        </div>
        <div className="space-y-1.5 mt-1">
          {[
            { label: "Scheduled", pct: 42, color: "bg-primary" },
            { label: "Completed", pct: 35, color: "bg-emerald-500" },
            { label: "Pending", pct: 23, color: "bg-amber-500" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="text-[7px] text-gray-500 w-14">{b.label}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full">
                <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }} />
              </div>
              <span className="text-[7px] text-gray-400">{b.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Placement by industry mini donut */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <p className="text-[9px] text-gray-500 mb-1">Top Industries</p>
        <div className="space-y-1">
          {[
            { name: "Finance", pct: 28, color: "bg-blue-500" },
            { name: "Consulting", pct: 22, color: "bg-emerald-500" },
            { name: "Technology", pct: 20, color: "bg-purple-500" },
            { name: "Healthcare", pct: 15, color: "bg-amber-500" },
            { name: "Other", pct: 15, color: "bg-gray-500" },
          ].map((ind) => (
            <div key={ind.name} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${ind.color} flex-shrink-0`} />
              <span className="text-[8px] text-gray-400 flex-1">{ind.name}</span>
              <div className="w-16 h-1 bg-white/5 rounded-full">
                <div className={`h-full ${ind.color} rounded-full`} style={{ width: `${ind.pct * 3}%` }} />
              </div>
              <span className="text-[8px] text-gray-500 w-6 text-right">{ind.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Third row: Active Postings + Recent Students */}
    <div className="grid grid-cols-2 gap-2 mb-3">
      {/* Active postings summary */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] text-gray-500 font-semibold">Active Postings</p>
          <span className="text-[8px] text-primary">View all →</span>
        </div>
        {[
          { title: "Software Engineer Intern", company: "TechCorp", type: "Job", count: 48, color: "bg-blue-500" },
          { title: "Career Fair 2026", company: "University", type: "Event", count: 312, color: "bg-emerald-500" },
          { title: "Marketing Analyst", company: "MediaGroup", type: "Job", count: 27, color: "bg-blue-500" },
        ].map((p) => (
          <div key={p.title} className="flex items-center gap-2 py-1.5 border-b border-white/[0.03] last:border-0">
            <div className={`px-1 py-0.5 rounded text-[6px] font-bold text-white ${p.color}`}>{p.type}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-white font-medium truncate">{p.title}</p>
              <p className="text-[7px] text-gray-500">{p.company}</p>
            </div>
            <span className="text-[10px] font-bold text-white">{p.count}</span>
          </div>
        ))}
      </div>

      {/* Recent placed students */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] text-gray-500 font-semibold">Recently Placed</p>
          <span className="text-[8px] text-primary">View all →</span>
        </div>
        {[
          { name: "Sarah Chen", company: "Deloitte", role: "Analyst", avatar: "SC" },
          { name: "James Wilson", company: "Google", role: "SWE Intern", avatar: "JW" },
          { name: "Maria Garcia", company: "McKinsey", role: "Associate", avatar: "MG" },
        ].map((s) => (
          <div key={s.name} className="flex items-center gap-2 py-1.5 border-b border-white/[0.03] last:border-0">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center text-[7px] font-bold text-white flex-shrink-0">{s.avatar}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-white font-medium">{s.name}</p>
              <p className="text-[7px] text-gray-500">{s.role} at {s.company}</p>
            </div>
            <span className="text-[7px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full font-medium">Placed</span>
          </div>
        ))}
      </div>
    </div>

    {/* Recent Activity */}
    <p className="text-[9px] text-gray-500 font-semibold mb-1.5">Recent Activity</p>
    <div className="space-y-1">
      {[
        { text: "Sarah Chen received an offer from Deloitte", time: "2h ago", icon: "🎉" },
        { text: "3 new students joined Engineering 2026", time: "5h ago", icon: "👥" },
        { text: "Resume Workshop event starts tomorrow", time: "1d ago", icon: "📄" },
        { text: "Monthly placement report is ready", time: "1d ago", icon: "📊" },
        { text: "New job posting: UX Designer at DesignCo", time: "2d ago", icon: "💼" },
      ].map((a) => (
        <div key={a.text} className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.03] rounded-lg px-3 py-1.5">
          <span className="text-[10px]">{a.icon}</span>
          <p className="text-[9px] text-gray-300 flex-1">{a.text}</p>
          <span className="text-[8px] text-gray-600">{a.time}</span>
        </div>
      ))}
    </div>
  </>
);

const appStages = ["Applied", "Technical Test", "Case Study", "1st Interview", "2nd Interview", "Offered", "Rejected"] as const;
type AppStatus = typeof appStages[number];

const studentsData = [
  { name: "Sarah Chen", email: "s.chen@uni.edu", degree: "BSc Business Admin", phone: "+44 7911 123456", status: "placed" as const, avatar: "SC",
    spider: { certifications: 4, languages: 3, projects: 5, skills: 4, experience: 3, gpa: 4 },
    applications: [
      { company: "Deloitte", role: "Analyst", status: "Offered" as AppStatus },
      { company: "McKinsey", role: "Associate", status: "2nd Interview" as AppStatus },
      { company: "Goldman Sachs", role: "Intern", status: "Technical Test" as AppStatus },
      { company: "PwC", role: "Consultant", status: "Applied" as AppStatus },
      { company: "BCG", role: "Associate", status: "Rejected" as AppStatus },
    ]},
  { name: "James Miller", email: "j.miller@uni.edu", degree: "MEng Computer Science", phone: "+44 7922 234567", status: "in_progress" as const, avatar: "JM",
    spider: { certifications: 2, languages: 4, projects: 3, skills: 5, experience: 2, gpa: 3 },
    applications: [
      { company: "Google", role: "SWE Intern", status: "Case Study" as AppStatus },
      { company: "Meta", role: "Engineer", status: "1st Interview" as AppStatus },
      { company: "Amazon", role: "SDE Intern", status: "Applied" as AppStatus },
    ]},
  { name: "Priya Patel", email: "p.patel@uni.edu", degree: "BA Fine Arts", phone: "+44 7933 345678", status: "nothing" as const, avatar: "PP",
    spider: { certifications: 1, languages: 2, projects: 2, skills: 3, experience: 1, gpa: 3 },
    applications: []},
  { name: "Lucas Wang", email: "l.wang@uni.edu", degree: "MSc Finance", phone: "+44 7944 456789", status: "placed" as const, avatar: "LW",
    spider: { certifications: 3, languages: 3, projects: 4, skills: 4, experience: 4, gpa: 5 },
    applications: [
      { company: "JP Morgan", role: "Analyst", status: "Offered" as AppStatus },
      { company: "HSBC", role: "Graduate", status: "2nd Interview" as AppStatus },
      { company: "Barclays", role: "Analyst", status: "1st Interview" as AppStatus },
      { company: "Citi", role: "Associate", status: "Rejected" as AppStatus },
    ]},
  { name: "Emma Johnson", email: "e.johnson@uni.edu", degree: "Dual Bachelors in Business & Data Analytics", phone: "+44 7955 567890", status: "in_progress" as const, avatar: "EJ",
    spider: { certifications: 3, languages: 2, projects: 3, skills: 3, experience: 2, gpa: 4 },
    applications: [
      { company: "PwC", role: "Consultant", status: "Case Study" as AppStatus },
      { company: "EY", role: "Analyst", status: "Technical Test" as AppStatus },
      { company: "Accenture", role: "Analyst", status: "Applied" as AppStatus },
    ]},
  { name: "Omar Hassan", email: "o.hassan@uni.edu", degree: "MEng Electrical Engineering", phone: "+44 7966 678901", status: "placed" as const, avatar: "OH",
    spider: { certifications: 4, languages: 5, projects: 4, skills: 5, experience: 3, gpa: 4 },
    applications: [
      { company: "Siemens", role: "Engineer", status: "Offered" as AppStatus },
      { company: "Tesla", role: "Hardware Eng", status: "1st Interview" as AppStatus },
    ]},
  { name: "Mia Thompson", email: "m.thompson@uni.edu", degree: "BA Graphic Design", phone: "+44 7977 789012", status: "in_progress" as const, avatar: "MT",
    spider: { certifications: 2, languages: 2, projects: 5, skills: 4, experience: 2, gpa: 3 },
    applications: [
      { company: "Pentagram", role: "Junior Designer", status: "2nd Interview" as AppStatus },
      { company: "IDEO", role: "Design Intern", status: "Technical Test" as AppStatus },
    ]},
  { name: "Daniel Kim", email: "d.kim@uni.edu", degree: "BSc Economics", phone: "+44 7988 890123", status: "nothing" as const, avatar: "DK",
    spider: { certifications: 1, languages: 1, projects: 1, skills: 2, experience: 1, gpa: 2 },
    applications: []},
  { name: "Aisha Begum", email: "a.begum@uni.edu", degree: "M.Sc. Data Science", phone: "+44 7999 901234", status: "placed" as const, avatar: "AB",
    spider: { certifications: 5, languages: 3, projects: 4, skills: 5, experience: 4, gpa: 5 },
    applications: [
      { company: "Amazon", role: "Data Scientist", status: "Offered" as AppStatus },
      { company: "Netflix", role: "ML Engineer", status: "Case Study" as AppStatus },
      { company: "Spotify", role: "Data Analyst", status: "Rejected" as AppStatus },
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
    <svg viewBox="0 0 160 160" className="w-full max-w-[260px]">
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
  const [viewingDoc, setViewingDoc] = useState<string | null>(null);

  if (viewingDoc) {
    return (
      <>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setViewingDoc(null)} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <p className="text-sm font-semibold text-white">{student.name} — {viewingDoc}</p>
        </div>
        {/* Mock document viewer */}
        <div className="bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg text-gray-900 text-[10px] leading-relaxed">
          {viewingDoc === "Resume" ? (
            <>
              <div className="text-center mb-4 border-b border-gray-200 pb-3">
                <p className="text-sm font-bold text-gray-900">{student.name}</p>
                <p className="text-[9px] text-gray-500 mt-0.5">{student.email} · {student.phone}</p>
                <p className="text-[9px] text-gray-500">{student.degree}</p>
              </div>
              <div className="mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Education</p>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">Saint Louis University</p>
                    <p className="text-gray-500">{student.degree}</p>
                  </div>
                  <p className="text-gray-500">2022 – 2025</p>
                </div>
                <p className="text-gray-500 mt-0.5">GPA: 3.7/4.0 · Dean's List 2023, 2024</p>
              </div>
              <div className="mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Experience</p>
                <div className="mb-2">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">Strategy Intern — McKinsey & Company</p>
                    <p className="text-gray-500">Jun – Aug 2024</p>
                  </div>
                  <ul className="list-disc ml-3 mt-0.5 space-y-0.5 text-gray-600">
                    <li>Conducted market analysis for a €2B consumer goods client</li>
                    <li>Built financial models for growth strategy recommendations</li>
                    <li>Presented findings to senior partners and client C-suite</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">Research Assistant — Dept. of Economics</p>
                    <p className="text-gray-500">Sep 2023 – May 2024</p>
                  </div>
                  <ul className="list-disc ml-3 mt-0.5 space-y-0.5 text-gray-600">
                    <li>Analyzed labour market datasets using Python and R</li>
                    <li>Co-authored working paper on youth unemployment trends</li>
                  </ul>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Skills</p>
                <p className="text-gray-600">Python · R · SQL · Tableau · Financial Modelling · PowerPoint · Fluent in English, Mandarin</p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Certifications</p>
                <p className="text-gray-600">CFA Level I Candidate · Google Data Analytics Certificate</p>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-right text-gray-500 mb-4">{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                <p className="mb-2">Dear Hiring Manager,</p>
                <p className="mb-2">I am writing to express my strong interest in the Analyst position at Deloitte. As a {student.degree} student at Saint Louis University with a passion for strategic problem-solving, I believe my academic background and internship experience make me a strong candidate.</p>
                <p className="mb-2">During my internship at McKinsey & Company, I gained hands-on experience in market analysis and financial modelling, working directly with senior partners on high-impact client engagements. This experience sharpened my analytical thinking and ability to distil complex data into actionable recommendations.</p>
                <p className="mb-2">My research work in the Department of Economics further developed my quantitative skills, where I used Python and R to analyse large-scale labour market datasets. I am confident these skills would translate well to Deloitte's analytical frameworks.</p>
                <p className="mb-2">I am particularly drawn to Deloitte's collaborative culture and commitment to developing early-career talent. I would welcome the opportunity to contribute my skills and grow within your team.</p>
                <p className="mb-4">Thank you for your consideration. I look forward to hearing from you.</p>
                <p>Sincerely,</p>
                <p className="font-semibold">{student.name}</p>
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <div className={`flex items-center gap-3 mb-5 ${cfg.bg} ${cfg.border} border rounded-lg px-4 py-3`}>
        <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">{student.avatar}</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{student.name}</p>
          <p className="text-[10px] text-gray-400">{student.email}</p>
        </div>
        <span className={`text-[9px] font-semibold ${cfg.labelColor}`}>{cfg.label}</span>
      </div>

      <div className="grid grid-cols-[1fr_1.5fr] gap-5">
        {/* Left: Info + Spider + Documents */}
        <div>
          <p className="text-[11px] text-gray-500 mb-2 font-medium">Information</p>
          <div className="space-y-2 mb-5 bg-white/[0.02] border border-white/5 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-[11px] text-gray-300">{student.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-[11px] text-gray-300">{student.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span className="text-[11px] text-gray-300">{student.degree}</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 mb-2 font-medium">Profile Report</p>
          <div className="mb-5">
            <SpiderChart data={student.spider} />
          </div>

          <p className="text-[11px] text-gray-500 mb-2 font-medium">Documents</p>
          <div className="space-y-1.5">
            {["Resume", "Cover Letter"].map((doc) => (
              <div
                key={doc}
                onClick={() => setViewingDoc(doc)}
                className="flex items-center gap-2.5 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 cursor-pointer hover:bg-white/[0.06] hover:border-primary/30 transition-all group"
              >
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <p className="text-[11px] text-white font-medium flex-1">{doc}</p>
                <span className="text-[8px] text-gray-500 group-hover:text-primary transition-colors">View →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Applications */}
        <div>
          <p className="text-[11px] text-gray-500 mb-2 font-medium">Application Tracker</p>
          {student.applications.length === 0 ? (
            <p className="text-[11px] text-gray-600 italic mb-3">No applications yet</p>
          ) : (
            <>
              {(() => {
                const stageColors: Record<string, { bar: string; badge: string }> = {
                  "Applied": { bar: "bg-gray-400", badge: "bg-gray-500/20 text-gray-400" },
                  "Technical Test": { bar: "bg-blue-400", badge: "bg-blue-500/20 text-blue-400" },
                  "Case Study": { bar: "bg-cyan-400", badge: "bg-cyan-500/20 text-cyan-400" },
                  "1st Interview": { bar: "bg-amber-400", badge: "bg-amber-500/20 text-amber-400" },
                  "2nd Interview": { bar: "bg-orange-400", badge: "bg-orange-500/20 text-orange-400" },
                  "Offered": { bar: "bg-emerald-400", badge: "bg-emerald-500/20 text-emerald-400" },
                  "Rejected": { bar: "bg-rose-400", badge: "bg-rose-500/20 text-rose-400" },
                };
                const progressStages = ["Applied", "Technical Test", "Case Study", "1st Interview", "2nd Interview", "Offered"];
                const total = student.applications.length;

                return (
                  <div>
                    <div className="space-y-2">
                      {student.applications.map((app) => {
                        const stageIdx = progressStages.indexOf(app.status);
                        const isRejected = app.status === "Rejected";
                        const colors = stageColors[app.status] || stageColors["Applied"];
                        const rejectedAtIdx = isRejected ? Math.max(0, 1) : stageIdx;
                        
                        return (
                          <div key={app.company + app.role} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="text-[11px] font-semibold text-white">{app.role}</p>
                                <p className="text-[9px] text-gray-500">{app.company}</p>
                              </div>
                              <span className={`text-[8px] font-bold px-2 py-0.5 rounded-md ${colors.badge}`}>{app.status}</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              {progressStages.map((stage, i) => {
                                const isActive = isRejected ? i <= rejectedAtIdx : i <= stageIdx;
                                const isCurrent = isRejected ? false : i === stageIdx;
                                const dotColor = isRejected
                                  ? (i <= rejectedAtIdx ? "bg-rose-400" : "bg-white/10")
                                  : isActive ? stageColors[stage]?.bar || "bg-primary" : "bg-white/10";
                                const lineColor = isRejected
                                  ? (i < rejectedAtIdx ? "bg-rose-400/50" : "bg-white/5")
                                  : (i < stageIdx ? `${stageColors[progressStages[i]]?.bar || "bg-primary"}/50` : "bg-white/5");

                                return (
                                  <div key={stage} className="flex items-center flex-1">
                                    <div className="relative flex flex-col items-center">
                                      <div className={`w-2.5 h-2.5 rounded-full ${dotColor} ${isCurrent ? "ring-1 ring-white/30" : ""} transition-all`} />
                                      <span className={`text-[6px] mt-0.5 whitespace-nowrap ${isActive ? "text-gray-300" : "text-gray-600"}`}>
                                        {stage.replace("1st ", "1st\u00A0").replace("2nd ", "2nd\u00A0")}
                                      </span>
                                    </div>
                                    {i < progressStages.length - 1 && (
                                      <div className={`flex-1 h-[1.5px] mx-0.5 rounded ${lineColor}`} />
                                    )}
                                  </div>
                                );
                              })}
                              {isRejected && (
                                <div className="flex flex-col items-center ml-0.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 flex items-center justify-center">
                                    <span className="text-[6px] text-white font-bold">✕</span>
                                  </div>
                                  <span className="text-[6px] mt-0.5 text-rose-400">Rejected</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <span className="text-[10px] text-gray-500">Total: {total} applications</span>
                    </div>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const StudentsContent = ({ onSelectStudent }: { onSelectStudent: (student: typeof studentsData[0]) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [degreeFilter, setDegreeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showDegreeDropdown, setShowDegreeDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const degrees = ["All", ...Array.from(new Set(studentsData.map(s => s.degree)))];
  const statuses = ["All", "Placed", "In Progress", "No Activity"];
  const statusMap: Record<string, string> = { "Placed": "placed", "In Progress": "in_progress", "No Activity": "nothing" };

  const filtered = studentsData.filter((s) => {
    const matchesSearch = searchQuery === "" || s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDegree = degreeFilter === "All" || s.degree === degreeFilter;
    const matchesStatus = statusFilter === "All" || s.status === statusMap[statusFilter];
    return matchesSearch && matchesDegree && matchesStatus;
  });

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-500">All Students <span className="text-primary">({filtered.length})</span></p>
        <div className="flex gap-1.5">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1 text-[10px] text-gray-300 placeholder-gray-500 outline-none focus:border-primary/50 w-24"
          />
          {/* Degree filter */}
          <div className="relative">
            <div
              onClick={(e) => { e.stopPropagation(); setShowDegreeDropdown(!showDegreeDropdown); setShowStatusDropdown(false); }}
              className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1 cursor-pointer hover:bg-white/[0.06] transition-colors flex items-center gap-1"
            >
              <span className="text-[10px] text-gray-400 truncate max-w-[80px]">{degreeFilter === "All" ? "All degrees" : degreeFilter.split(" ").slice(0, 2).join(" ")}</span>
              <svg className="w-2.5 h-2.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            {showDegreeDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-[hsl(230,40%,13%)] border border-white/10 rounded-lg py-1 z-30 w-48 shadow-xl max-h-40 overflow-y-auto">
                {degrees.map((d) => (
                  <div key={d} onClick={(e) => { e.stopPropagation(); setDegreeFilter(d); setShowDegreeDropdown(false); }}
                    className={`px-3 py-1.5 text-[10px] cursor-pointer hover:bg-white/[0.06] transition-colors ${d === degreeFilter ? "text-primary font-semibold" : "text-gray-400"}`}>
                    {d}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Status filter */}
          <div className="relative">
            <div
              onClick={(e) => { e.stopPropagation(); setShowStatusDropdown(!showStatusDropdown); setShowDegreeDropdown(false); }}
              className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1 cursor-pointer hover:bg-white/[0.06] transition-colors flex items-center gap-1"
            >
              <span className="text-[10px] text-gray-400">{statusFilter === "All" ? "All status" : statusFilter}</span>
              <svg className="w-2.5 h-2.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            {showStatusDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-[hsl(230,40%,13%)] border border-white/10 rounded-lg py-1 z-30 w-32 shadow-xl">
                {statuses.map((st) => (
                  <div key={st} onClick={(e) => { e.stopPropagation(); setStatusFilter(st); setShowStatusDropdown(false); }}
                    className={`px-3 py-1.5 text-[10px] cursor-pointer hover:bg-white/[0.06] transition-colors ${st === statusFilter ? "text-primary font-semibold" : "text-gray-400"}`}>
                    {st}
                  </div>
                ))}
              </div>
            )}
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
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-gray-500">
          <svg className="w-8 h-8 mb-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <p className="text-[11px]">No students match your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {filtered.map((s) => {
            const cfg = statusConfig[s.status];
            return (
              <div
                key={s.name}
                onClick={(e) => { e.stopPropagation(); onSelectStudent(s); }}
                className={`${cfg.bg} ${cfg.border} border rounded-lg px-3 py-3 cursor-pointer hover:brightness-125 transition-all`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary shrink-0">{s.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-white">{s.name}</p>
                    <span className={`text-[8px] font-semibold ${cfg.labelColor}`}>{cfg.label}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-2.5 h-2.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-[9px] text-gray-400 truncate">{s.email}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <span className="text-[9px] text-gray-400 truncate">{s.degree}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-[9px] text-gray-400">{s.applications.length} application{s.applications.length !== 1 ? "s" : ""}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

const AnalyticsContent = () => {
  const statCards = [
    { label: "Total Students", value: "1,284", change: "+5% vs last year", icon: (
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )},
    { label: "Total Applications", value: "4,821", change: "+15% vs last year", icon: (
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )},
    { label: "Students Who Applied", value: "912", change: "+8% vs last year", icon: (
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )},
    { label: "Placed Students", value: "648", change: "+12% vs last year", icon: (
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )},
    { label: "Avg. Applications per Student", value: "5.3", change: "+20% vs last month", icon: (
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )},
    { label: "Average Salary", value: "$68,400", change: "+8% vs last year", icon: (
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
  ];

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const placedByMonth = [12, 18, 22, 35, 48, 56, 62, 71, 85, 94, 102, 110];
  const maxPlaced = Math.max(...placedByMonth);

  const degreeData = [
    { degree: "CS", placed: 230, rate: 92 },
    { degree: "Eng", placed: 210, rate: 88 },
    { degree: "Biz", placed: 185, rate: 78 },
    { degree: "Sci", placed: 105, rate: 72 },
    { degree: "Arts", placed: 85, rate: 65 },
    { degree: "Other", placed: 70, rate: 60 },
  ];
  const maxDegree = 250;

  const funnelData = [
    { label: "Total Applications", value: 4821, pct: "100%" },
    { label: "Application Submitted", value: 3842, pct: "79.7%" },
    { label: "Under Review", value: 2156, pct: "44.7%" },
    { label: "Interview Stage", value: 1284, pct: "26.6%" },
    { label: "Offer Received", value: 648, pct: "13.4%" },
  ];

  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  return (
    <>
      {/* Stat Cards - 2 rows of 3 */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {statCards.slice(0, 3).map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center mb-2">{s.icon}</div>
            <span className="text-lg font-bold text-white">{s.value}</span>
            <p className="text-[10px] text-gray-400 mb-0.5">{s.label}</p>
            <p className="text-[9px] text-emerald-400 font-medium">{s.change}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {statCards.slice(3).map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center mb-2">{s.icon}</div>
            <span className="text-lg font-bold text-white">{s.value}</span>
            <p className="text-[10px] text-gray-400 mb-0.5">{s.label}</p>
            <p className="text-[9px] text-emerald-400 font-medium">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* Line Chart - Distinct Students Placed by Month */}
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-semibold text-white mb-0.5">Distinct Students Placed by Month</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-primary rounded" /><span className="text-[8px] text-gray-500">Distinct Students Placed</span></div>
          </div>
          <svg viewBox="0 0 220 80" className="w-full">
            {/* Y grid lines */}
            {[0, 20, 40, 60, 80].map((y) => (
              <line key={y} x1="25" y1={70 - (y / maxPlaced) * 60} x2="215" y2={70 - (y / maxPlaced) * 60} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            ))}
            {/* Y labels */}
            {[0, 30, 60, 90, 120].map((v, i) => (
              <text key={v} x="22" y={70 - (i * 15)} textAnchor="end" fill="#6b7280" fontSize="4">{v}</text>
            ))}
            {/* Line */}
            <polyline
              fill="none"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth="1.5"
              points={placedByMonth.map((v, i) => `${25 + i * (190 / 11)},${70 - (v / maxPlaced) * 60}`).join(" ")}
            />
            {/* Dots */}
            {placedByMonth.map((v, i) => (
              <circle key={i} cx={25 + i * (190 / 11)} cy={70 - (v / maxPlaced) * 60} r="2" fill="hsl(217, 91%, 60%)" />
            ))}
            {/* X labels */}
            {months.map((m, i) => (
              <text key={m} x={25 + i * (190 / 11)} y="78" textAnchor="middle" fill="#6b7280" fontSize="4">{m}</text>
            ))}
          </svg>
        </div>

        {/* Bar Chart - Placement & Employability by Degree */}
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-semibold text-white mb-0.5">Placement & Employability by Degree</p>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1"><div className="w-3 h-2 bg-primary rounded-sm" /><span className="text-[8px] text-gray-500">Placed Students</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-2 bg-primary/40 rounded-sm" /><span className="text-[8px] text-gray-500">Employability Rate (%)</span></div>
          </div>
          <svg viewBox="0 0 220 80" className="w-full">
            {/* Y grid */}
            {[0, 50, 100, 150, 200, 250].map((v) => (
              <g key={v}>
                <line x1="25" y1={70 - (v / maxDegree) * 60} x2="215" y2={70 - (v / maxDegree) * 60} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <text x="22" y={72 - (v / maxDegree) * 60} textAnchor="end" fill="#6b7280" fontSize="4">{v}</text>
              </g>
            ))}
            {/* Bars */}
            {degreeData.map((d, i) => {
              const x = 35 + i * 30;
              const barH1 = (d.placed / maxDegree) * 60;
              const barH2 = (d.rate / maxDegree) * 60;
              return (
                <g key={d.degree}>
                  <rect x={x} y={70 - barH1} width="8" height={barH1} fill="hsl(217, 91%, 60%)" rx="1" />
                  <rect x={x + 10} y={70 - barH2} width="8" height={barH2} fill="hsl(217, 91%, 60%, 0.4)" rx="1" />
                  <text x={x + 9} y="78" textAnchor="middle" fill="#6b7280" fontSize="3.5">{d.degree}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Application Funnel */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <p className="text-[10px] font-semibold text-white mb-2">Application Funnel by Stage & Status</p>
        <div className="space-y-1.5">
          {funnelData.map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <span className="text-[8px] text-gray-400 w-24 shrink-0">{f.label}</span>
              <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary/50 rounded-full flex items-center justify-center" style={{ width: f.pct }}>
                  <span className="text-[6px] text-white font-medium">{f.value.toLocaleString()}</span>
                </div>
              </div>
              <span className="text-[8px] text-gray-500 w-8 text-right">{f.pct}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Employers Table */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mt-3">
        <p className="text-[10px] font-semibold text-white mb-2">Top Employers</p>
        <div className="space-y-0">
          <div className="grid grid-cols-4 gap-2 pb-1 border-b border-white/5">
            <span className="text-[8px] text-primary font-semibold">Employer</span>
            <span className="text-[8px] text-primary font-semibold">Industry</span>
            <span className="text-[8px] text-primary font-semibold text-center">Hires</span>
            <span className="text-[8px] text-primary font-semibold text-center">Rating</span>
          </div>
          {[
            { name: "Deloitte", industry: "Finance", hires: 12, rating: "★★★★★" },
            { name: "Google", industry: "Technology", hires: 9, rating: "★★★★★" },
            { name: "McKinsey & Co.", industry: "Consulting", hires: 8, rating: "★★★★☆" },
            { name: "JP Morgan", industry: "Finance", hires: 7, rating: "★★★★☆" },
            { name: "Siemens", industry: "Manufacturing", hires: 6, rating: "★★★★☆" },
          ].map((e) => (
            <div key={e.name} className="grid grid-cols-4 gap-2 py-1.5 border-b border-white/[0.03]">
              <span className="text-[9px] text-gray-300">{e.name}</span>
              <span className="text-[9px] text-gray-500">{e.industry}</span>
              <span className="text-[9px] text-white text-center font-medium">{e.hires}</span>
              <span className="text-[8px] text-amber-400 text-center">{e.rating}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Placement Speed */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mt-3">
        <p className="text-[10px] font-semibold text-white mb-3">Placement Speed</p>
        <div className="flex items-center justify-around mb-3">
          {[
            { value: 18, label: "Fastest", sub: "Average days", color: "bg-emerald-500", textColor: "text-emerald-400" },
            { value: 23, label: "Average", sub: "Overall average", color: "bg-purple-500", textColor: "text-purple-400" },
            { value: 45, label: "Slowest", sub: "Maximum days", color: "bg-orange-500", textColor: "text-orange-400" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center mb-1`}>
                <span className="text-sm font-bold text-white">{s.value}</span>
              </div>
              <span className={`text-[9px] font-semibold ${s.textColor}`}>{s.label}</span>
              <span className="text-[7px] text-gray-500">{s.sub}</span>
            </div>
          ))}
        </div>
        <div className="flex h-2 rounded-full overflow-hidden mb-2">
          <div className="bg-emerald-500" style={{ width: "35%" }} />
          <div className="bg-blue-500" style={{ width: "48%" }} />
          <div className="bg-orange-500" style={{ width: "17%" }} />
        </div>
        <div className="flex items-center justify-between">
          {[
            { color: "bg-emerald-500", label: "0-15 days", pct: "35%" },
            { color: "bg-blue-500", label: "16-30 days", pct: "48%" },
            { color: "bg-orange-500", label: "31+ days", pct: "17%" },
          ].map((d) => (
            <div key={d.label} className="flex items-center gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${d.color}`} />
              <span className="text-[8px] text-gray-500">{d.label}</span>
              <span className="text-[8px] text-emerald-400 font-medium">{d.pct}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Global Placement Distribution */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mt-3">
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className="text-[10px] font-semibold text-white">Global Placement Distribution</p>
          <span className="text-[7px] text-gray-500 ml-auto">Hover over pins for details</span>
        </div>
        <div className="relative bg-[hsl(220,25%,10%)] rounded-lg overflow-hidden" style={{ height: 220 }}>
          {/* SVG World Map - Natural Earth style */}
          <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(220,30%,12%)" />
                <stop offset="100%" stopColor="hsl(220,25%,9%)" />
              </linearGradient>
              <filter id="landGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="1000" height="500" fill="url(#oceanGrad)" />
            {/* Latitude/longitude grid */}
            {[83,167,250,333,417].map(y => <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="hsl(220,20%,14%)" strokeWidth="0.4" strokeDasharray="4 4" />)}
            {[100,200,300,400,500,600,700,800,900].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" stroke="hsl(220,20%,14%)" strokeWidth="0.4" strokeDasharray="4 4" />)}
            
            {/* North America */}
            <path d="M50,80 Q80,60 130,55 Q160,50 190,55 Q210,50 230,60 Q250,55 260,65 L265,75 Q270,80 268,90 L260,105 Q255,115 250,120 L245,130 Q240,140 230,150 L220,160 Q210,165 200,168 L185,172 Q170,175 155,178 L140,180 Q120,185 110,180 Q95,175 85,165 L75,150 Q65,140 60,125 L55,110 Q50,100 48,90 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            {/* Greenland */}
            <path d="M230,35 Q250,30 270,35 Q280,40 275,50 Q270,58 260,55 Q245,50 240,45 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.6" />
            {/* Central America */}
            <path d="M140,180 Q150,182 158,190 Q162,195 165,205 Q160,210 155,208 Q148,200 142,195 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.6" />
            {/* South America */}
            <path d="M165,210 Q180,205 195,210 Q210,218 220,235 Q228,255 225,280 Q220,310 210,335 Q200,355 185,370 Q170,380 160,375 Q150,365 145,345 Q140,320 138,295 Q136,270 140,245 Q145,225 155,215 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            
            {/* Europe */}
            <path d="M420,50 Q440,42 460,45 Q475,42 490,48 Q500,50 505,58 L508,65 Q510,72 508,80 Q505,88 498,95 L490,100 Q480,105 470,108 L458,110 Q445,112 435,108 Q425,105 420,98 L418,88 Q415,78 418,68 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            {/* UK & Ireland */}
            <path d="M405,55 Q412,50 418,52 Q422,55 420,62 Q416,68 410,65 Q405,62 405,58 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.6" />
            {/* Scandinavia */}
            <path d="M458,28 Q465,22 472,25 Q478,30 480,40 Q478,48 474,45 Q468,38 462,35 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.6" />
            {/* Italy */}
            <path d="M462,80 Q468,78 470,85 Q472,92 470,100 Q466,105 462,100 Q460,92 461,85 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.5" />
            
            {/* Africa */}
            <path d="M430,120 Q450,115 475,118 Q495,122 510,135 Q520,150 525,170 Q528,195 525,220 Q520,250 510,275 Q498,300 480,315 Q465,325 450,320 Q435,315 425,300 Q415,280 412,255 Q410,230 412,205 Q415,180 420,155 Q425,135 430,125 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            {/* Madagascar */}
            <path d="M535,275 Q540,270 543,278 Q545,288 542,295 Q538,298 535,292 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.5" />
            
            {/* Middle East */}
            <path d="M510,100 Q530,95 545,100 Q555,108 558,118 Q555,128 548,130 Q535,132 525,128 Q515,122 512,112 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.6" />
            
            {/* Russia / Central Asia */}
            <path d="M500,30 Q550,22 620,25 Q680,28 740,35 Q780,42 800,55 Q810,65 805,75 Q795,82 780,78 Q750,72 720,68 Q680,62 640,58 Q600,55 560,52 Q530,50 510,48 Q502,45 500,38 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            
            {/* India */}
            <path d="M600,110 Q615,105 625,112 Q632,120 635,135 Q636,150 630,165 Q625,175 615,178 Q605,175 600,165 Q595,150 596,135 Q597,120 600,112 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.7" />
            
            {/* Southeast Asia */}
            <path d="M660,120 Q680,115 700,118 Q715,122 720,132 Q722,142 715,148 Q705,152 695,148 Q680,142 670,135 Q662,128 660,122 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.6" />
            {/* Indonesia */}
            <path d="M680,180 Q700,175 720,178 Q740,182 755,185 Q765,190 760,195 Q750,198 735,195 Q715,192 695,188 Q682,186 680,182 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.5" />
            
            {/* China / East Asia */}
            <path d="M660,55 Q690,48 720,52 Q745,55 760,65 Q770,75 768,88 Q765,100 755,108 Q742,115 725,112 Q705,108 690,100 Q675,90 668,78 Q662,68 660,58 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            {/* Japan */}
            <path d="M780,60 Q788,55 792,62 Q795,72 793,82 Q790,88 785,85 Q781,78 780,68 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.5" />
            {/* Korea */}
            <path d="M770,68 Q775,65 778,70 Q780,76 778,80 Q775,82 772,78 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.4" />
            
            {/* Australia */}
            <path d="M740,260 Q770,250 800,255 Q830,260 850,275 Q860,290 855,310 Q845,325 825,330 Q800,335 775,328 Q755,320 745,305 Q738,290 740,275 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.8" />
            {/* New Zealand */}
            <path d="M880,320 Q885,315 888,322 Q890,332 887,340 Q883,342 880,335 Z" fill="hsl(220,20%,20%)" stroke="hsl(220,15%,28%)" strokeWidth="0.4" />
          </svg>
          
          {/* Interactive pins */}
          {[
            { x: "13%", y: "30%", city: "San Francisco", count: 28, salary: "$92K", color: "bg-purple-500", industry: "Technology" },
            { x: "19%", y: "26%", city: "New York", count: 42, salary: "$88K", color: "bg-blue-500", industry: "Finance" },
            { x: "16%", y: "22%", city: "Toronto", count: 15, salary: "$76K", color: "bg-emerald-500", industry: "Consulting" },
            { x: "43%", y: "18%", city: "London", count: 56, salary: "$85K", color: "bg-primary", industry: "Finance" },
            { x: "47%", y: "17%", city: "Berlin", count: 18, salary: "$72K", color: "bg-amber-500", industry: "Technology" },
            { x: "54%", y: "24%", city: "Dubai", count: 12, salary: "$95K", color: "bg-orange-500", industry: "Consulting" },
            { x: "72%", y: "30%", city: "Singapore", count: 24, salary: "$82K", color: "bg-cyan-500", industry: "Finance" },
            { x: "79%", y: "18%", city: "Tokyo", count: 19, salary: "$78K", color: "bg-rose-500", industry: "Technology" },
            { x: "76%", y: "22%", city: "Hong Kong", count: 16, salary: "$90K", color: "bg-amber-400", industry: "Finance" },
            { x: "82%", y: "60%", city: "Sydney", count: 14, salary: "$74K", color: "bg-emerald-400", industry: "Healthcare" },
            { x: "46%", y: "48%", city: "Lagos", count: 8, salary: "$45K", color: "bg-pink-500", industry: "Technology" },
            { x: "18%", y: "60%", city: "São Paulo", count: 11, salary: "$52K", color: "bg-violet-500", industry: "Finance" },
          ].map((pin, i) => (
            <div
              key={i}
              className="absolute cursor-pointer"
              style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredPin(i)}
              onMouseLeave={() => setHoveredPin(null)}
            >
              {/* Pulse ring */}
              <div className={`absolute -inset-1.5 ${pin.color} rounded-full animate-ping opacity-15`} />
              {/* Pin dot */}
              <div className={`relative w-5 h-5 ${pin.color} rounded-full border-2 border-white/40 flex items-center justify-center shadow-lg shadow-black/30 transition-all duration-200 ${hoveredPin === i ? "scale-[1.6] z-20 border-white/60" : "scale-100"}`}>
                <span className="text-[6px] text-white font-bold">{pin.count}</span>
              </div>
              {/* Tooltip on hover */}
              {hoveredPin === i && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[hsl(230,35%,15%)] border border-white/15 rounded-xl px-3 py-2.5 shadow-2xl z-30 whitespace-nowrap animate-fade-in backdrop-blur-sm">
                  <p className="text-xs font-bold text-white">{pin.city}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`w-2 h-2 rounded-full ${pin.color}`} />
                    <span className="text-[10px] text-gray-400">{pin.industry}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-1.5 pt-1.5 border-t border-white/10">
                    <div>
                      <p className="text-[8px] text-gray-500">Placements</p>
                      <p className="text-xs font-bold text-white">{pin.count}</p>
                    </div>
                    <div>
                      <p className="text-[8px] text-gray-500">Avg Salary</p>
                      <p className="text-xs font-bold text-emerald-400">{pin.salary}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-gray-500">12 countries</span>
            <span className="text-[8px] text-gray-600">•</span>
            <span className="text-[8px] text-gray-500">263 placements</span>
          </div>
          <div className="flex items-center gap-1.5">
            {[
              { color: "bg-primary", label: "Finance" },
              { color: "bg-purple-500", label: "Tech" },
              { color: "bg-emerald-500", label: "Other" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-0.5">
                <div className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
                <span className="text-[7px] text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const QualificationInsightsContent = () => {
  const skillLevels = [
    { color: "bg-emerald-500", label: "Expert (4)" },
    { color: "bg-blue-500", label: "Advanced (3)" },
    { color: "bg-amber-500", label: "Intermediate (2)" },
    { color: "bg-rose-500", label: "Basic (1)" },
  ];

  const techSkills = [
    { name: "Python", total: 81, segments: [21, 30, 24, 6] },
    { name: "JavaScript", total: 72, segments: [15, 23, 24, 10] },
    { name: "SQL", total: 69, segments: [10, 20, 25, 14] },
    { name: "React", total: 55, segments: [6, 14, 22, 13] },
    { name: "Machine Learning", total: 42, segments: [5, 9, 18, 10] },
    { name: "DevOps", total: 38, segments: [3, 7, 13, 15] },
  ];

  const bizSkills = [
    { name: "Financial Analysis", total: 83, segments: [25, 30, 18, 10] },
    { name: "Market Research", total: 68, segments: [8, 14, 27, 19] },
    { name: "Data Visualization", total: 51, segments: [5, 13, 19, 14] },
    { name: "Public Speaking", total: 47, segments: [6, 16, 13, 12] },
    { name: "Project Mgmt", total: 54, segments: [8, 16, 18, 12] },
  ];

  const employabilityData = [
    { skill: "DevOps", letter: "D", color: "bg-rose-500", students: 22, placed: 20, skillRate: "90.9%", overallRate: "78.2%", impact: "+16.2%", level: "High" },
    { skill: "Machine Learning", letter: "M", color: "bg-amber-500", students: 42, placed: 38, skillRate: "90.5%", overallRate: "78.2%", impact: "+15.7%", level: "High" },
    { skill: "Python", letter: "P", color: "bg-emerald-500", students: 85, placed: 72, skillRate: "84.7%", overallRate: "78.2%", impact: "+8.3%", level: "High" },
    { skill: "React", letter: "R", color: "bg-blue-500", students: 55, placed: 44, skillRate: "80.0%", overallRate: "78.2%", impact: "+2.3%", level: "" },
    { skill: "SQL", letter: "S", color: "bg-emerald-400", students: 68, placed: 52, skillRate: "76.5%", overallRate: "78.2%", impact: "-2.2%", level: "" },
  ];

  const renderSkillBar = (skill: { name: string; total: number; segments: number[] }) => {
    const maxTotal = 90;
    return (
      <div key={skill.name} className="mb-1.5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[8px] text-gray-300 font-medium">{skill.name}</span>
          <span className="text-[7px] text-gray-500">Total: {skill.total}</span>
        </div>
        <div className="flex h-2.5 rounded-sm overflow-hidden" style={{ width: `${(skill.total / maxTotal) * 100}%` }}>
          {skill.segments.map((seg, i) => (
            <div key={i} className={`${skillLevels[i].color} flex items-center justify-center`} style={{ width: `${(seg / skill.total) * 100}%` }}>
              <span className="text-[5px] text-white font-bold">{seg}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Technical Skills Proficiency */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-amber-400 text-xs">✦</span>
          <p className="text-[10px] font-semibold text-white">Technical Skills Proficiency</p>
        </div>
        <div className="flex gap-2 mb-2">
          {skillLevels.map((l) => (
            <div key={l.label} className="flex items-center gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
              <span className="text-[7px] text-gray-500">{l.label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[8px] text-gray-400 font-semibold mb-1">Programming & Development</p>
            {techSkills.map(renderSkillBar)}
          </div>
          <div>
            <p className="text-[8px] text-gray-400 font-semibold mb-1">Business & Analytics</p>
            {bizSkills.map(renderSkillBar)}
          </div>
        </div>
      </div>

      {/* Skill Level Summary */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {[
          { count: 127, label: "Expert Level Skills", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
          { count: 230, label: "Advanced Level Skills", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
          { count: 303, label: "Intermediate Level Skills", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
          { count: 181, label: "Basic Level Skills", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} border rounded-lg px-2 py-2 text-center`}>
            <p className={`text-sm font-bold ${s.color}`}>{s.count}</p>
            <p className="text-[7px] text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Education Level Analysis */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
          <p className="text-[10px] font-semibold text-white">Education Level Analysis</p>
        </div>
        <div className="space-y-2">
          {[
            { degree: "Bachelor's Degree", pct: "68%", students: 17, color: "bg-blue-500" },
            { degree: "Master's Degree", pct: "24%", students: 6, color: "bg-emerald-500" },
            { degree: "PhD", pct: "8%", students: 2, color: "bg-purple-500" },
          ].map((d) => (
            <div key={d.degree} className="flex items-center justify-between border-b border-white/5 pb-1.5">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${d.color}`} />
                <span className="text-[10px] text-gray-300">{d.degree}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-white font-semibold">{d.pct}</span>
                <span className="text-[8px] text-gray-500 ml-1">{d.students} students</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Overview */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <p className="text-[10px] font-semibold text-white">Certifications Overview</p>
        </div>
        <div className="space-y-1">
          {[
            { name: "AWS Certified Solutions Architect", abbr: "AWS", students: 12, color: "bg-amber-500" },
            { name: "Google Cloud Professional", abbr: "GC", students: 8, color: "bg-emerald-500" },
            { name: "Microsoft Azure Fundamentals", abbr: "MS", students: 6, color: "bg-purple-500" },
            { name: "Cisco CCNA", abbr: "CS", students: 5, color: "bg-rose-500" },
          ].map((c) => (
            <div key={c.name} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 ${c.color}/10`}>
              <div className={`w-5 h-5 ${c.color} rounded-full flex items-center justify-center text-[7px] font-bold text-white shrink-0`}>{c.abbr}</div>
              <span className="text-[9px] text-gray-300 flex-1">{c.name}</span>
              <span className={`text-[9px] font-semibold ${c.color.replace("bg-", "text-")}`}>{c.students} students</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Employability Impact */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <div className="flex items-center gap-1.5 mb-1">
          <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <p className="text-[10px] font-semibold text-white">Skill Employability Impact</p>
        </div>
        <p className="text-[7px] text-gray-500 mb-2 ml-4">How each skill affects student placement rates</p>
        <div className="grid grid-cols-7 gap-1 pb-1 border-b border-white/5 mb-1">
          {["Skill", "Students", "Placed", "Skill Rate", "Overall", "Impact", ""].map((h, i) => (
            <span key={i} className="text-[7px] text-gray-500 font-semibold">{h}</span>
          ))}
        </div>
        {employabilityData.map((d) => (
          <div key={d.skill} className="grid grid-cols-7 gap-1 py-1 border-b border-white/[0.03] items-center">
            <div className="flex items-center gap-1">
              <div className={`w-3 h-3 ${d.color} rounded-full flex items-center justify-center text-[6px] font-bold text-white`}>{d.letter}</div>
              <span className="text-[8px] text-gray-300">{d.skill}</span>
            </div>
            <span className="text-[8px] text-gray-400">{d.students}</span>
            <span className="text-[8px] text-gray-400">{d.placed}</span>
            <span className="text-[8px] text-white font-semibold">{d.skillRate}</span>
            <span className="text-[8px] text-gray-500">{d.overallRate}</span>
            <span className={`text-[8px] font-semibold ${d.impact.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>{d.impact}</span>
            {d.level ? <span className="text-[6px] font-bold px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400">{d.level}</span> : <span />}
          </div>
        ))}
        <div className="grid grid-cols-3 gap-1.5 mt-2">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-1.5">
            <p className="text-[7px] text-emerald-300">Top Performing Skills</p>
            <p className="text-[9px] font-bold text-emerald-400">ML, DevOps</p>
            <p className="text-[6px] text-emerald-300/60">+16% impact on placement</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-md px-2 py-1.5">
            <p className="text-[7px] text-amber-300">Solid Foundation</p>
            <p className="text-[9px] font-bold text-amber-400">Python</p>
            <p className="text-[6px] text-amber-300/60">+8.3% impact on placement</p>
          </div>
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-md px-2 py-1.5">
            <p className="text-[7px] text-rose-300">Needs Attention</p>
            <p className="text-[9px] font-bold text-rose-400">SQL</p>
            <p className="text-[6px] text-rose-300/60">-2.2% below average</p>
          </div>
        </div>
      </div>

      {/* Critical Skill Gaps */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-amber-400 text-[10px]">⚠</span>
          <p className="text-[10px] font-semibold text-white">Critical Skill Gaps</p>
        </div>
        <p className="text-[7px] text-gray-500 mb-2 ml-4">Skills with high demand but low student coverage</p>
        {[
          { skill: "DevOps", coverage: 22, impact: "+16.2%", gap: 12.6, priority: "CRITICAL" },
          { skill: "Machine Learning", coverage: 15, impact: "+15.7%", gap: 13.3, priority: "CRITICAL" },
        ].map((g) => (
          <div key={g.skill} className="bg-white/[0.02] border border-white/5 rounded-lg px-2.5 py-2 mb-1.5">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="text-[10px] text-white font-semibold">{g.skill}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-rose-400">{g.gap}</span>
                <p className="text-[7px] text-gray-500">gap score</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-1.5">
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] text-gray-500">Student Coverage</span>
                  <span className="text-[8px] text-rose-400 font-semibold">{g.coverage}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full"><div className="h-full bg-rose-500 rounded-full" style={{ width: `${g.coverage}%` }} /></div>
                <p className="text-[6px] text-gray-600 mt-0.5">{100 - g.coverage}% of students lack this skill</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] text-gray-500">Employability Impact</span>
                  <span className="text-[8px] text-emerald-400 font-semibold">{g.impact}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{ width: "80%" }} /></div>
                <p className="text-[6px] text-gray-600 mt-0.5">Above average placement rate</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-[7px] text-gray-500">Priority Level:</span>
                <span className="text-[7px] font-bold text-rose-400 bg-rose-500/20 px-1.5 py-0.5 rounded">{g.priority}</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-medium">{g.gap} potential impact points</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const MarketInsightsContent = () => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const demand = [45, 52, 58, 72, 85, 95, 120, 135, 150, 165, 180, 210];
  const supply = [60, 68, 75, 90, 110, 130, 155, 170, 185, 195, 205, 220];
  const maxVal = 230;

  const concentrationByIndustry = [
    { name: "Tech", val: 4.2, color: "hsl(217, 91%, 60%)" },
    { name: "Fin", val: 3.8, color: "hsl(142, 71%, 45%)" },
    { name: "Health", val: 3.5, color: "hsl(0, 84%, 60%)" },
    { name: "Mfg", val: 2.8, color: "hsl(271, 91%, 65%)" },
    { name: "Consult", val: 4.3, color: "hsl(45, 93%, 47%)" },
    { name: "Edu", val: 1.8, color: "hsl(330, 81%, 60%)" },
    { name: "Retail", val: 1.5, color: "hsl(142, 71%, 45%)" },
    { name: "Media", val: 3.0, color: "hsl(25, 95%, 53%)" },
  ];
  const maxConc = 4.5;

  return (
    <>
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {[
          { label: "Market Concentration Index", value: "3.2", sub: "Moderately concentrated market", color: "bg-blue-500/10 border-blue-500/20", iconColor: "text-blue-400", valueColor: "text-blue-400" },
          { label: "Market Growth", value: "+12.5%", sub: "vs last quarter", color: "bg-emerald-500/10 border-emerald-500/20", iconColor: "text-emerald-400", valueColor: "text-emerald-400" },
          { label: "Geographic Reach", value: "24", sub: "Active hire regions", color: "bg-purple-500/10 border-purple-500/20", iconColor: "text-purple-400", valueColor: "text-purple-400" },
          { label: "Industry Diversity", value: "18", sub: "Active sectors", color: "bg-orange-500/10 border-orange-500/20", iconColor: "text-orange-400", valueColor: "text-orange-400" },
        ].map((c) => (
          <div key={c.label} className={`${c.color} border rounded-lg px-2 py-2`}>
            <p className={`text-[7px] ${c.valueColor} font-medium`}>{c.label.split(" ").slice(-2).join(" ")}</p>
            <p className={`text-sm font-bold ${c.valueColor}`}>{c.value}</p>
            <p className="text-[10px] text-white font-semibold mt-0.5">{c.label}</p>
            <p className="text-[7px] text-gray-500">{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Demand vs Supply + Concentration by Industry */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-semibold text-white mb-0.5">Demand vs Supply Trends</p>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-primary rounded" /><span className="text-[7px] text-gray-500">Job Demand</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-emerald-400 rounded" /><span className="text-[7px] text-gray-500">Student Supply</span></div>
          </div>
          <svg viewBox="0 0 220 80" className="w-full">
            {[0, 50, 100, 150, 200].map((v) => (
              <g key={v}><line x1="25" y1={70 - (v / maxVal) * 60} x2="215" y2={70 - (v / maxVal) * 60} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" /><text x="22" y={72 - (v / maxVal) * 60} textAnchor="end" fill="#6b7280" fontSize="4">{v}</text></g>
            ))}
            <polyline fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="1.5" points={demand.map((v, i) => `${25 + i * (190 / 11)},${70 - (v / maxVal) * 60}`).join(" ")} />
            <polyline fill="none" stroke="hsl(142, 71%, 45%)" strokeWidth="1.5" points={supply.map((v, i) => `${25 + i * (190 / 11)},${70 - (v / maxVal) * 60}`).join(" ")} />
            {demand.map((v, i) => <circle key={`d${i}`} cx={25 + i * (190 / 11)} cy={70 - (v / maxVal) * 60} r="1.5" fill="hsl(217, 91%, 60%)" />)}
            {supply.map((v, i) => <circle key={`s${i}`} cx={25 + i * (190 / 11)} cy={70 - (v / maxVal) * 60} r="1.5" fill="hsl(142, 71%, 45%)" />)}
            {months.map((m, i) => <text key={m} x={25 + i * (190 / 11)} y="78" textAnchor="middle" fill="#6b7280" fontSize="3.5">{m}</text>)}
          </svg>
        </div>

        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] font-semibold text-white mb-2">Concentration Index by Industry</p>
          <svg viewBox="0 0 220 80" className="w-full">
            {[0, 1.5, 3.0, 4.5].map((v) => (
              <g key={v}><line x1="25" y1={70 - (v / maxConc) * 60} x2="215" y2={70 - (v / maxConc) * 60} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" /><text x="22" y={72 - (v / maxConc) * 60} textAnchor="end" fill="#6b7280" fontSize="4">{v}</text></g>
            ))}
            {concentrationByIndustry.map((d, i) => {
              const barH = (d.val / maxConc) * 60;
              const x = 30 + i * 23;
              return (
                <g key={d.name}>
                  <rect x={x} y={70 - barH} width="14" height={barH} fill={d.color} rx="1.5" />
                  <text x={x + 7} y="78" textAnchor="middle" fill="#6b7280" fontSize="3.5">{d.name}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Geographic Concentration Heatmap */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <p className="text-[10px] font-semibold text-white mb-1">Geographic Concentration Heatmap</p>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-[7px] text-gray-500">Low Concentration</span>
          <div className="flex h-1.5 rounded-full overflow-hidden w-16">
            <div className="flex-1 bg-pink-300" /><div className="flex-1 bg-pink-400" /><div className="flex-1 bg-rose-400" /><div className="flex-1 bg-red-500" />
          </div>
          <span className="text-[7px] text-gray-500">High Concentration</span>
        </div>
        <div className="grid grid-cols-6 gap-1 mb-2">
          {[
            { city: "San Francisco", val: 4.8, color: "bg-purple-500" },
            { city: "New York", val: 4.2, color: "bg-blue-500" },
            { city: "Seattle", val: 3.9, color: "bg-blue-400" },
            { city: "Austin", val: 3.5, color: "bg-emerald-500" },
            { city: "Boston", val: 3.2, color: "bg-emerald-400" },
            { city: "Chicago", val: 2.8, color: "bg-amber-500" },
            { city: "Los Angeles", val: 2.5, color: "bg-amber-400" },
            { city: "Denver", val: 2.2, color: "bg-orange-400" },
            { city: "Atlanta", val: 1.9, color: "bg-orange-500" },
            { city: "Miami", val: 1.6, color: "bg-rose-400" },
            { city: "Dallas", val: 1.3, color: "bg-rose-500" },
            { city: "Phoenix", val: 1.0, color: "bg-pink-400" },
          ].map((c) => (
            <div key={c.city} className={`${c.color} rounded-md px-1.5 py-1.5 text-center`}>
              <span className="text-[6px] text-white font-bold block">{c.city}</span>
              <span className="text-[7px] text-white/80 font-medium">{c.val}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Highest Concentration", city: "San Francisco", val: "4.8 concentration index", color: "bg-purple-500/15 border-purple-500/30", dot: "bg-purple-500" },
            { label: "Balanced Market", city: "Boston", val: "3.2 concentration index", color: "bg-emerald-500/15 border-emerald-500/30", dot: "bg-emerald-500" },
            { label: "Low Concentration", city: "Phoenix", val: "1.0 concentration index", color: "bg-rose-500/15 border-rose-500/30", dot: "bg-rose-500" },
          ].map((c) => (
            <div key={c.city} className={`${c.color} border rounded-lg px-2 py-1.5`}>
              <div className="flex items-center gap-1 mb-0.5">
                <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                <span className="text-[7px] text-gray-400">{c.label}</span>
              </div>
              <p className="text-[10px] text-white font-semibold">{c.city}</p>
              <p className="text-[7px] text-gray-500">{c.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Opportunity Matrix */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <p className="text-[10px] font-semibold text-white mb-2">Market Opportunity Matrix</p>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[
            { industry: "Technology", assessment: "Strong Market", conc: "High", success: "High", color: "bg-emerald-500/10 border-emerald-500/20" },
            { industry: "Finance", assessment: "Consider Diversification", conc: "High", success: "Medium", color: "bg-amber-500/10 border-amber-500/20" },
            { industry: "Healthcare", assessment: "Growth Opportunity", conc: "Medium", success: "High", color: "bg-blue-500/10 border-blue-500/20" },
            { industry: "Manufacturing", assessment: "Balanced Market", conc: "Medium", success: "Medium", color: "bg-gray-500/10 border-gray-500/20" },
            { industry: "Consulting", assessment: "High Risk", conc: "High", success: "Low", color: "bg-rose-500/10 border-rose-500/20" },
            { industry: "Education", assessment: "Emerging Market", conc: "Low", success: "High", color: "bg-purple-500/10 border-purple-500/20" },
          ].map((m) => (
            <div key={m.industry} className={`${m.color} border rounded-lg px-2 py-1.5`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] text-white font-semibold">{m.industry}</span>
                <span className="text-[7px] text-gray-400">{m.assessment}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[7px] text-gray-500">Conc: <span className={`font-semibold ${m.conc === "High" ? "text-rose-400" : m.conc === "Medium" ? "text-amber-400" : "text-emerald-400"}`}>{m.conc}</span></span>
                <span className="text-[7px] text-gray-500">Success: <span className={`font-semibold ${m.success === "High" ? "text-emerald-400" : m.success === "Medium" ? "text-amber-400" : "text-rose-400"}`}>{m.success}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Market Concentration Analysis */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
        <p className="text-[10px] font-semibold text-white mb-2">Detailed Market Concentration Analysis</p>
        <div className="grid grid-cols-7 gap-1 pb-1 border-b border-white/5 mb-1">
          {["Industry", "Conc. Index", "Total Jobs", "Applications", "Success Rate", "Avg Salary", "Assessment"].map((h) => (
            <span key={h} className="text-[6px] text-gray-500 font-semibold">{h}</span>
          ))}
        </div>
        {[
          { industry: "Technology", letter: "T", color: "bg-rose-500", conc: 4.2, jobs: 245, apps: 1029, rate: "78.5%", salary: "$85,000", assessment: "Strong Market", assessColor: "text-emerald-400 bg-emerald-500/20" },
          { industry: "Finance", letter: "F", color: "bg-blue-500", conc: 3.8, jobs: 189, apps: 718, rate: "72.3%", salary: "$82,000", assessment: "Diversify", assessColor: "text-amber-400 bg-amber-500/20" },
          { industry: "Healthcare", letter: "H", color: "bg-emerald-500", conc: 3.5, jobs: 156, apps: 542, rate: "81.2%", salary: "$78,000", assessment: "Growth", assessColor: "text-blue-400 bg-blue-500/20" },
          { industry: "Consulting", letter: "C", color: "bg-amber-500", conc: 4.3, jobs: 98, apps: 412, rate: "45.8%", salary: "$75,000", assessment: "High Risk", assessColor: "text-rose-400 bg-rose-500/20" },
          { industry: "Education", letter: "E", color: "bg-purple-500", conc: 1.8, jobs: 67, apps: 124, rate: "68.4%", salary: "$52,000", assessment: "Emerging", assessColor: "text-purple-400 bg-purple-500/20" },
        ].map((d) => (
          <div key={d.industry} className="grid grid-cols-7 gap-1 py-1 border-b border-white/[0.03] items-center">
            <div className="flex items-center gap-1">
              <div className={`w-3 h-3 ${d.color} rounded-full flex items-center justify-center text-[6px] font-bold text-white`}>{d.letter}</div>
              <span className="text-[8px] text-gray-300">{d.industry}</span>
            </div>
            <span className="text-[8px] text-amber-400 font-semibold">{d.conc}</span>
            <span className="text-[8px] text-gray-400">{d.jobs}</span>
            <span className="text-[8px] text-gray-400">{d.apps}</span>
            <span className="text-[8px] text-emerald-400 font-semibold">{d.rate}</span>
            <span className="text-[8px] text-gray-300">{d.salary}</span>
            <span className={`text-[6px] font-bold px-1 py-0.5 rounded ${d.assessColor}`}>{d.assessment}</span>
          </div>
        ))}
      </div>

      {/* Concentration Trends Over Time */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <p className="text-[10px] font-semibold text-white mb-0.5">Concentration Trends Over Time</p>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-primary rounded" /><span className="text-[7px] text-gray-500">Technology</span></div>
          <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-emerald-400 rounded" /><span className="text-[7px] text-gray-500">Finance</span></div>
          <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-amber-400 rounded" /><span className="text-[7px] text-gray-500">Healthcare</span></div>
        </div>
        <svg viewBox="0 0 220 60" className="w-full">
          {[2.0, 3.0, 4.0, 5.0].map((v) => (
            <g key={v}><line x1="20" y1={55 - ((v - 2) / 3) * 45} x2="215" y2={55 - ((v - 2) / 3) * 45} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" /><text x="17" y={57 - ((v - 2) / 3) * 45} textAnchor="end" fill="#6b7280" fontSize="2.8">{v.toFixed(1)}</text></g>
          ))}
          {/* Tech line - rising */}
          <polyline fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="1.5" points={[3.5,3.6,3.7,3.8,3.9,4.0,4.1,4.1,4.2,4.3,4.3,4.2].map((v,i) => `${25+i*(190/11)},${55-((v-2)/3)*45}`).join(" ")} />
          {/* Finance line - stable */}
          <polyline fill="none" stroke="hsl(142, 71%, 45%)" strokeWidth="1.5" points={[3.2,3.3,3.4,3.5,3.5,3.6,3.6,3.7,3.7,3.8,3.8,3.8].map((v,i) => `${25+i*(190/11)},${55-((v-2)/3)*45}`).join(" ")} />
          {/* Healthcare line - gradual */}
          <polyline fill="none" stroke="hsl(45, 93%, 47%)" strokeWidth="1.5" points={[2.8,2.9,3.0,3.0,3.1,3.1,3.2,3.2,3.3,3.4,3.5,3.5].map((v,i) => `${25+i*(190/11)},${55-((v-2)/3)*45}`).join(" ")} />
          {months.map((m, i) => <text key={m} x={25 + i * (190 / 11)} y="62" textAnchor="middle" fill="#6b7280" fontSize="3.5">{m}</text>)}
        </svg>
      </div>
    </>
  );
};

const rubricSections = [
  { name: "Education", color: "bg-amber-400", pct: 20, subs: [
    { label: "Degree level", weight: 9 }, { label: "GPA / grades", weight: 5 }, { label: "Field of study relevance", weight: 6 },
  ]},
  { name: "Experience", color: "bg-orange-400", pct: 35, subs: [
    { label: "Number of experiences", weight: 7 }, { label: "Average duration", weight: 8 }, { label: "Relevance to target role", weight: 8 },
    { label: "Quantifiable impact", weight: 7 }, { label: "Career progression", weight: 5 },
  ]},
  { name: "Skills", color: "bg-amber-500", pct: 20, subs: [
    { label: "Technical skills", weight: 8 }, { label: "Soft skills", weight: 6 }, { label: "Industry tools", weight: 6 },
  ]},
  { name: "Languages", color: "bg-emerald-400", pct: 10, subs: [
    { label: "Number of languages", weight: 5 }, { label: "Proficiency levels", weight: 5 },
  ]},
  { name: "Projects", color: "bg-cyan-400", pct: 10, subs: [
    { label: "Relevance", weight: 5 }, { label: "Complexity", weight: 5 },
  ]},
  { name: "Certifications", color: "bg-purple-400", pct: 5, subs: [
    { label: "Industry certifications", weight: 5 },
  ]},
];

const MiniDonut = () => {
  const segments = [
    { pct: 20, color: "#fbbf24" },
    { pct: 35, color: "#fb923c" },
    { pct: 20, color: "#f59e0b" },
    { pct: 10, color: "#34d399" },
    { pct: 10, color: "#22d3ee" },
    { pct: 5, color: "#a78bfa" },
  ];
  let acc = 0;
  return (
    <svg viewBox="0 0 36 36" className="w-20 h-20">
      {segments.map((s, i) => {
        const dash = s.pct;
        const offset = 100 - acc;
        acc += dash;
        return (
          <circle key={i} cx="18" cy="18" r="15.9" fill="none" stroke={s.color} strokeWidth="3.5"
            strokeDasharray={`${dash} ${100 - dash}`} strokeDashoffset={offset} />
        );
      })}
      <text x="18" y="19" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">100%</text>
    </svg>
  );
};

const TemplateEditorContent = ({ onBack }: { onBack: () => void }) => {
  const [sections, setSections] = useState(
    rubricSections.map(s => ({ ...s, subs: s.subs.map(sub => ({ ...sub })) }))
  );

  const updateWeight = (sectionIdx: number, subIdx: number, delta: number) => {
    setSections(prev => {
      const next = prev.map(s => ({ ...s, subs: s.subs.map(sub => ({ ...sub })) }));
      const newWeight = Math.max(1, Math.min(15, next[sectionIdx].subs[subIdx].weight + delta));
      next[sectionIdx].subs[subIdx].weight = newWeight;
      // Recalculate section pct as sum of sub weights
      next[sectionIdx].pct = next[sectionIdx].subs.reduce((a, b) => a + b.weight, 0);
      return next;
    });
  };

  const totalWeight = sections.reduce((a, s) => a + s.pct, 0);

  const DynamicDonut = () => {
    const segments = sections.map(s => ({
      pct: totalWeight > 0 ? (s.pct / totalWeight) * 100 : 0,
      color: s.color.replace("bg-", ""),
    }));
    const colorMap: Record<string, string> = {
      "amber-400": "#fbbf24", "orange-400": "#fb923c", "amber-500": "#f59e0b",
      "emerald-400": "#34d399", "cyan-400": "#22d3ee", "purple-400": "#a78bfa",
    };
    let acc = 0;
    return (
      <svg viewBox="0 0 36 36" className="w-20 h-20">
        {segments.map((s, i) => {
          const dash = s.pct;
          const offset = 100 - acc;
          acc += dash;
          return (
            <circle key={i} cx="18" cy="18" r="15.9" fill="none" stroke={colorMap[s.color] || "#888"} strokeWidth="3.5"
              strokeDasharray={`${dash} ${100 - dash}`} strokeDashoffset={offset} />
          );
        })}
        <text x="18" y="19" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">{totalWeight}%</text>
      </svg>
    );
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-[10px]">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Templates
          </button>
          <div className="w-px h-4 bg-white/10" />
          <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" /></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Dual Degree Business Administration and Data Analysis</p>
            <p className="text-[9px] text-gray-500">Edit grading template</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="text-[9px] bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 px-3 py-1.5 rounded-md font-medium transition-colors border border-white/10">Cancel</button>
          <button className="text-[9px] bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-md font-medium transition-colors">Save Changes</button>
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] gap-4">
        {/* Left: Weight Distribution Donut */}
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-3">
          <p className="text-[10px] text-gray-400 font-semibold mb-2">Weight Distribution</p>
          <div className="flex justify-center">
            <DynamicDonut />
          </div>
          {totalWeight !== 100 && (
            <p className={`text-[8px] text-center mt-1 ${totalWeight > 100 ? "text-rose-400" : "text-amber-400"}`}>
              {totalWeight > 100 ? `${totalWeight - 100}% over` : `${100 - totalWeight}% remaining`}
            </p>
          )}
          <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1">
            {sections.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${s.color}`} />
                <span className="text-[8px] text-gray-400">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Rubric Sections */}
        <div className="space-y-3 overflow-y-auto max-h-[480px] pr-1">
          {sections.map((section, sIdx) => (
            <div key={section.name} className="bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3">
              {/* Section header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${section.color}`} />
                  <span className="text-[11px] font-bold text-white">{section.name}</span>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-md border border-amber-500/30 text-amber-400 bg-amber-500/10">{section.pct}% total</span>
              </div>
              {/* Color bar */}
              <div className={`h-[3px] ${section.color} rounded-full mb-3 transition-all`} style={{ width: `${Math.min(section.pct * 2.5, 100)}%` }} />

              {/* Sub-criteria header */}
              <div className="grid grid-cols-[1fr_80px_70px] gap-2 mb-1.5 pb-1 border-b border-white/5">
                <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold">Sub-Criterion</span>
                <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold text-center">Impact</span>
                <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold text-center">Weight</span>
              </div>

              {/* Sub-criteria rows */}
              <div className="space-y-1.5">
                {section.subs.map((sub, subIdx) => (
                  <div key={sub.label} className="grid grid-cols-[1fr_80px_70px] gap-2 items-center">
                    <span className="text-[10px] text-gray-300">{sub.label}</span>
                    <div className="h-1.5 bg-white/5 rounded-full">
                      <div className={`h-full ${section.color} rounded-full transition-all`} style={{ width: `${sub.weight * 10}%` }} />
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => updateWeight(sIdx, subIdx, -1)}
                        className="w-4 h-4 rounded bg-white/[0.06] hover:bg-white/[0.12] text-gray-400 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                      >
                        −
                      </button>
                      <span className="text-[10px] text-white font-semibold bg-white/[0.05] border border-white/10 rounded px-1.5 py-0.5 min-w-[22px] text-center">{sub.weight}</span>
                      <button
                        onClick={() => updateWeight(sIdx, subIdx, 1)}
                        className="w-4 h-4 rounded bg-white/[0.06] hover:bg-white/[0.12] text-gray-400 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                      >
                        +
                      </button>
                      <span className="text-[8px] text-gray-500">%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section total */}
              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/5">
                <span className="text-[9px] text-gray-500">Section total</span>
                <span className="text-[10px] font-bold text-amber-400">{section.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ResumeTemplatesContent = ({ onOpenEditor }: { onOpenEditor: () => void }) => (
  <>
    <p className="text-xs text-gray-500 mb-3">Available Templates</p>
    <div className="grid grid-cols-2 gap-2 mb-4">
      {[
        { name: "Classic Professional", uses: 482, color: "bg-blue-500" },
        { name: "Modern Minimal", uses: 356, color: "bg-purple-500" },
        { name: "Creative Portfolio", uses: 198, color: "bg-emerald-500" },
        { name: "Executive", uses: 134, color: "bg-rose-500" },
      ].map((t) => (
        <div key={t.name} onClick={onOpenEditor} className="bg-white/[0.03] border border-white/5 rounded-lg p-3 hover:bg-white/[0.06] transition-colors cursor-pointer">
          <div className={`w-full h-16 ${t.color}/15 rounded-md mb-2 flex items-center justify-center`}>
            <svg className={`w-6 h-6 ${t.color.replace("bg-", "text-")}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <p className="text-xs font-medium text-white">{t.name}</p>
          <p className="text-[9px] text-gray-500">{t.uses} students using</p>
        </div>
      ))}
    </div>
    <button onClick={onOpenEditor} className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-gray-400 text-xs font-medium py-2.5 rounded-lg transition-colors">
      + Upload New Template
    </button>
  </>
);

const postingsData = [
  { title: "Software Engineer Intern", company: "TechCorp", type: "Job" as const, applicants: 48, typeColor: "bg-blue-500", status: "Active", posted: "Mar 1, 2026", deadline: "Apr 15, 2026" },
  { title: "Career Fair 2026", company: "University", type: "Event" as const, applicants: 312, typeColor: "bg-emerald-500", status: "Active", posted: "Feb 20, 2026", deadline: "Mar 25, 2026" },
  { title: "Marketing Analyst", company: "MediaGroup", type: "Job" as const, applicants: 27, typeColor: "bg-blue-500", status: "Active", posted: "Mar 5, 2026", deadline: "Apr 20, 2026" },
  { title: "Resume Workshop", company: "Career Services", type: "Event" as const, applicants: 89, typeColor: "bg-emerald-500", status: "Active", posted: "Mar 8, 2026", deadline: "Mar 30, 2026" },
  { title: "Financial Analyst", company: "CapitalOne", type: "Job" as const, applicants: 63, typeColor: "bg-blue-500", status: "Active", posted: "Mar 10, 2026", deadline: "Apr 30, 2026" },
  { title: "Data Science Bootcamp", company: "TechEd", type: "Event" as const, applicants: 156, typeColor: "bg-emerald-500", status: "Active", posted: "Mar 2, 2026", deadline: "Apr 1, 2026" },
  { title: "UX Designer", company: "DesignCo", type: "Job" as const, applicants: 34, typeColor: "bg-blue-500", status: "Active", posted: "Mar 12, 2026", deadline: "May 1, 2026" },
];

const applicantsForPosting = [
  { name: "Sarah Chen", email: "sarah.chen@uni.edu", gpa: "3.9", status: "Reviewed", applied: "Mar 3, 2026" },
  { name: "James Wilson", email: "j.wilson@uni.edu", gpa: "3.7", status: "Shortlisted", applied: "Mar 4, 2026" },
  { name: "Maria Garcia", email: "m.garcia@uni.edu", gpa: "3.8", status: "New", applied: "Mar 5, 2026" },
  { name: "David Kim", email: "d.kim@uni.edu", gpa: "3.5", status: "Interviewed", applied: "Mar 6, 2026" },
  { name: "Emily Brown", email: "e.brown@uni.edu", gpa: "3.6", status: "New", applied: "Mar 7, 2026" },
  { name: "Alex Patel", email: "a.patel@uni.edu", gpa: "3.4", status: "Reviewed", applied: "Mar 8, 2026" },
  { name: "Lisa Wang", email: "l.wang@uni.edu", gpa: "3.9", status: "Shortlisted", applied: "Mar 9, 2026" },
  { name: "Tom Martinez", email: "t.martinez@uni.edu", gpa: "3.3", status: "New", applied: "Mar 10, 2026" },
];

const PostingDetailContent = ({ posting, onBack }: { posting: typeof postingsData[0]; onBack: () => void }) => {
  const statusColors: Record<string, string> = {
    New: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Reviewed: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Shortlisted: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Interviewed: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-[10px]">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <div className="w-px h-4 bg-white/10" />
          <div className={`px-2 py-0.5 rounded text-[8px] font-bold text-white ${posting.typeColor}`}>{posting.type}</div>
          <div>
            <p className="text-xs font-semibold text-white">{posting.title}</p>
            <p className="text-[9px] text-gray-500">{posting.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md font-medium">{posting.status}</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: "Total Applicants", value: posting.applicants, icon: "👥" },
          { label: "Shortlisted", value: Math.floor(posting.applicants * 0.25), icon: "⭐" },
          { label: "Interviewed", value: Math.floor(posting.applicants * 0.12), icon: "🎯" },
          { label: "Days Left", value: 18, icon: "📅" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-lg p-3 text-center">
            <p className="text-base mb-0.5">{s.icon}</p>
            <p className="text-sm font-bold text-white">{s.value}</p>
            <p className="text-[8px] text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <p className="text-[8px] text-gray-500 mb-0.5">Posted</p>
          <p className="text-[10px] text-white font-medium">{posting.posted}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <p className="text-[8px] text-gray-500 mb-0.5">Deadline</p>
          <p className="text-[10px] text-white font-medium">{posting.deadline}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <p className="text-[8px] text-gray-500 mb-0.5">Type</p>
          <p className="text-[10px] text-white font-medium">{posting.type === "Job" ? "Full-time" : "In-person"}</p>
        </div>
      </div>

      {/* Applicants table */}
      <div className="bg-white/[0.03] border border-white/5 rounded-lg">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <p className="text-[10px] font-semibold text-white">{posting.type === "Job" ? "Applicants" : "Registrants"}</p>
          <p className="text-[9px] text-gray-500">{applicantsForPosting.length} total</p>
        </div>
        {/* Table header */}
        <div className="grid grid-cols-[1fr_1fr_60px_80px_80px] gap-2 px-4 py-1.5 border-b border-white/5">
          <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold">Name</span>
          <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold">Email</span>
          <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold text-center">GPA</span>
          <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold text-center">Status</span>
          <span className="text-[7px] text-gray-500 uppercase tracking-wider font-semibold text-right">Applied</span>
        </div>
        {/* Rows */}
        <div className="max-h-[240px] overflow-y-auto">
          {applicantsForPosting.map((a) => (
            <div key={a.name} className="grid grid-cols-[1fr_1fr_60px_80px_80px] gap-2 px-4 py-2 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors items-center">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">{a.name.split(" ").map(n => n[0]).join("")}</div>
                <span className="text-[10px] text-white font-medium truncate">{a.name}</span>
              </div>
              <span className="text-[9px] text-gray-400 truncate">{a.email}</span>
              <span className="text-[10px] text-white font-medium text-center">{a.gpa}</span>
              <div className="flex justify-center">
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full border font-medium ${statusColors[a.status]}`}>{a.status}</span>
              </div>
              <span className="text-[9px] text-gray-500 text-right">{a.applied}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const JobEventPostingsContent = ({ onSelectPosting }: { onSelectPosting: (p: typeof postingsData[0]) => void }) => (
  <>
    <div className="flex items-center justify-between mb-4">
      <p className="text-xs text-gray-500">Active Postings</p>
      <button className="text-[10px] bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-md font-medium transition-colors">+ New Posting</button>
    </div>
    <div className="space-y-3">
      {postingsData.map((p) => (
        <div key={p.title} className="flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-xl px-5 py-4 transition-colors cursor-pointer group" onClick={() => onSelectPosting(p)}>
          <div className={`px-2 py-1 rounded-md text-[9px] font-bold text-white ${p.typeColor} flex-shrink-0`}>{p.type}</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-white">{p.title}</p>
            <p className="text-[10px] text-gray-500">{p.company}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-white">{p.applicants}</p>
              <p className="text-[9px] text-gray-500">{p.type === "Job" ? "applicants" : "registered"}</p>
            </div>
            <button className="text-[9px] bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 px-3 py-1.5 rounded-md font-medium transition-colors border border-white/10 opacity-0 group-hover:opacity-100">View</button>
          </div>
        </div>
      ))}
    </div>
  </>
);

const DashboardMockup = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState<typeof studentsData[0] | null>(null);
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [selectedPosting, setSelectedPosting] = useState<typeof postingsData[0] | null>(null);

  const renderContent = () => {
    if (activeTab === 1 && selectedStudent) {
      return <StudentDetailContent student={selectedStudent} onBack={() => setSelectedStudent(null)} />;
    }
    if (activeTab === 5 && showTemplateEditor) {
      return <TemplateEditorContent onBack={() => setShowTemplateEditor(false)} />;
    }
    if (activeTab === 6 && selectedPosting) {
      return <PostingDetailContent posting={selectedPosting} onBack={() => setSelectedPosting(null)} />;
    }
    switch (activeTab) {
      case 0: return <OverviewContent />;
      case 1: return <StudentsContent onSelectStudent={setSelectedStudent} />;
      case 2: return <AnalyticsContent />;
      case 3: return <QualificationInsightsContent />;
      case 4: return <MarketInsightsContent />;
      case 5: return <ResumeTemplatesContent onOpenEditor={() => setShowTemplateEditor(true)} />;
      case 6: return <JobEventPostingsContent onSelectPosting={setSelectedPosting} />;
      default: return <OverviewContent />;
    }
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-precision-lg bg-[hsl(230,40%,11%)] border border-white/5 relative">
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
      <div className="flex min-h-[600px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-white/5 p-3 hidden sm:block">
          <p className="text-xs font-bold text-white mb-4">ApplyLab</p>
          <p className="text-[9px] uppercase tracking-wider text-gray-500 mb-2">Careers Team</p>
          <div className="space-y-0.5">
            {navItems.map((item, i) => (
              <div
                key={item}
                onClick={() => { setActiveTab(i); setSelectedStudent(null); setShowTemplateEditor(false); setSelectedPosting(null); }}
                className={`text-[10px] px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
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
        <div className="flex-1 p-5 overflow-y-auto max-h-[600px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
