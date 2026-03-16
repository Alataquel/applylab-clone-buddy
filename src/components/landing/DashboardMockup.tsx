import { useState, useRef } from "react";
import { Users, Target, FileText, BarChart3, PartyPopper, Briefcase, TrendingUp, DollarSign, ClipboardList, AlertTriangle, Flame, Cloud, Brain, Database, Code, Shield, Globe, Building2, type LucideIcon } from "lucide-react";

const navItems = ["Overview", "Students", "Analytics", "Qualification Insights", "Resume Templates", "Job & Event Postings"];

const OverviewContent = () => (
  <>
    {/* Welcome banner */}
    <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-xl px-6 py-6 mb-4 text-center">
      <h2 className="text-lg font-bold text-white mb-1">Welcome, Careers Team 👋</h2>
      <p className="text-[10px] text-gray-400">Here's your institutional overview — track student outcomes, engagement, and placements in real time.</p>
    </div>

    {/* Top KPI Row */}
    <div className="grid grid-cols-4 gap-2 mb-3">
      {[
        { label: "Total Students", value: "1,284", change: "+12%", up: true, Icon: Users },
        { label: "Placement Rate", value: "71%", change: "+4.2%", up: true, Icon: Target },
        { label: "Active Applications", value: "4,821", change: "+18%", up: true, Icon: FileText },
        { label: "Avg. Engagement", value: "83%", change: "-2.1%", up: false, Icon: BarChart3 },
      ].map((m) => (
        <div key={m.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[9px] text-gray-500">{m.label}</p>
            <m.Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.8} />
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
        { text: "Sarah Chen received an offer from Deloitte", time: "2h ago", Icon: PartyPopper },
        { text: "3 new students joined Engineering 2026", time: "5h ago", Icon: Users },
        { text: "Resume Workshop event starts tomorrow", time: "1d ago", Icon: FileText },
        { text: "Monthly placement report is ready", time: "1d ago", Icon: BarChart3 },
        { text: "New job posting: UX Designer at DesignCo", time: "2d ago", Icon: Briefcase },
      ].map((a) => (
        <div key={a.text} className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.03] rounded-lg px-3 py-1.5">
          <a.Icon className="w-3 h-3 text-primary flex-shrink-0" strokeWidth={1.8} />
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
        return <path key={level} d={path} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />;
      })}
      {/* Axes */}
      {Array.from({ length: 6 }, (_, i) => {
        const end = getPoint(i, 5);
        return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />;
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

  // Compute interview/offer rates
  const totalApps = student.applications.length;
  const interviewApps = student.applications.filter(a => ["1st Interview", "2nd Interview", "Offered"].includes(a.status)).length;
  const offerApps = student.applications.filter(a => a.status === "Offered").length;
  const interviewRate = totalApps > 0 ? Math.round((interviewApps / totalApps) * 100) : 0;
  const offerRate = totalApps > 0 ? Math.round((offerApps / totalApps) * 100) : 0;

  const isHealthy = student.status === "placed" || student.status === "in_progress";
  const activityStatus = student.status === "placed" ? "Healthy" : student.status === "in_progress" ? "Active" : "At Risk";
  const activityColor = student.status === "nothing" ? "text-rose-400 bg-rose-500/20 border-rose-500/30" : "text-emerald-400 bg-emerald-500/20 border-emerald-500/30";

  // Pipeline health
  const pipelineStatus = offerApps > 0 ? "On Track" : interviewApps > 0 ? "Progressing" : totalApps > 0 ? "Early Stage" : "No Activity";
  const pipelineDesc = offerApps > 0 ? "Healthy pipeline with interviews and offers" : interviewApps > 0 ? "Active interviews, no offers yet" : totalApps > 0 ? "Applications submitted, awaiting progress" : "No applications submitted yet";
  const pipelineColor = offerApps > 0 ? "bg-emerald-500/10 border-emerald-500/30" : interviewApps > 0 ? "bg-amber-500/10 border-amber-500/30" : totalApps > 0 ? "bg-blue-500/10 border-blue-500/30" : "bg-rose-500/10 border-rose-500/30";
  const pipelineTextColor = offerApps > 0 ? "text-emerald-400" : interviewApps > 0 ? "text-amber-400" : totalApps > 0 ? "text-blue-400" : "text-rose-400";

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
                <div className="flex justify-between"><div><p className="font-semibold text-gray-800">Saint Louis University</p><p className="text-gray-500">{student.degree}</p></div><p className="text-gray-500">2022 – 2025</p></div>
                <p className="text-gray-500 mt-0.5">GPA: 3.7/4.0 · Dean's List 2023, 2024</p>
              </div>
              <div className="mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Experience</p>
                <div className="mb-2"><div className="flex justify-between"><p className="font-semibold text-gray-800">Strategy Intern — McKinsey & Company</p><p className="text-gray-500">Jun – Aug 2024</p></div>
                  <ul className="list-disc ml-3 mt-0.5 space-y-0.5 text-gray-600"><li>Conducted market analysis for a €2B consumer goods client</li><li>Built financial models for growth strategy recommendations</li><li>Presented findings to senior partners and client C-suite</li></ul>
                </div>
                <div><div className="flex justify-between"><p className="font-semibold text-gray-800">Research Assistant — Dept. of Economics</p><p className="text-gray-500">Sep 2023 – May 2024</p></div>
                  <ul className="list-disc ml-3 mt-0.5 space-y-0.5 text-gray-600"><li>Analyzed labour market datasets using Python and R</li><li>Co-authored working paper on youth unemployment trends</li></ul>
                </div>
              </div>
              <div className="mb-3"><p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Skills</p><p className="text-gray-600">Python · R · SQL · Tableau · Financial Modelling · PowerPoint · Fluent in English, Mandarin</p></div>
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-1.5 border-b border-gray-300 pb-0.5">Certifications</p><p className="text-gray-600">CFA Level I Candidate · Google Data Analytics Certificate</p></div>
            </>
          ) : (
            <div className="mb-4">
              <p className="text-right text-gray-500 mb-4">{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
              <p className="mb-2">Dear Hiring Manager,</p>
              <p className="mb-2">I am writing to express my strong interest in the Analyst position at Deloitte. As a {student.degree} student at Saint Louis University with a passion for strategic problem-solving, I believe my academic background and internship experience make me a strong candidate.</p>
              <p className="mb-2">During my internship at McKinsey & Company, I gained hands-on experience in market analysis and financial modelling, working directly with senior partners on high-impact client engagements.</p>
              <p className="mb-2">I am particularly drawn to Deloitte's collaborative culture and commitment to developing early-career talent. I would welcome the opportunity to contribute my skills and grow within your team.</p>
              <p className="mb-4">Thank you for your consideration. I look forward to hearing from you.</p>
              <p>Sincerely,</p>
              <p className="font-semibold">{student.name}</p>
            </div>
          )}
        </div>
      </>
    );
  }

  const stageColors: Record<string, { bar: string; badge: string }> = {
    "Applied": { bar: "bg-amber-400", badge: "bg-gray-500/20 text-gray-300 border border-gray-500/30" },
    "Technical Test": { bar: "bg-primary", badge: "bg-blue-500/20 text-blue-400 border border-blue-500/30" },
    "Case Study": { bar: "bg-amber-400", badge: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" },
    "1st Interview": { bar: "bg-amber-400", badge: "bg-amber-500/20 text-amber-400 border border-amber-500/30" },
    "2nd Interview": { bar: "bg-orange-400", badge: "bg-orange-500/20 text-orange-400 border border-orange-500/30" },
    "Offered": { bar: "bg-emerald-400", badge: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" },
    "Rejected": { bar: "bg-rose-400", badge: "bg-rose-500/20 text-rose-400 border border-rose-500/30" },
  };
  const progressStages = ["Applied", "Technical Test", "Case Study", "1st Interview", "2nd Interview", "Offered"];

  return (
    <>
      {/* Top header bar */}
      <div className="flex items-center gap-3 mb-4 bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
        <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">{student.avatar}</div>
        <div className="flex-1">
          <p className="text-sm font-bold text-white">{student.name}</p>
          <p className="text-[9px] text-gray-400">{student.degree}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-full font-medium border border-white/10">3 CVs Created</span>
          <span className={`text-[8px] px-2 py-0.5 rounded-full font-semibold ${cfg.labelColor} ${cfg.bg} ${cfg.border} border`}>{cfg.label}</span>
        </div>
      </div>

      {/* Pipeline status banner */}
      <div className={`${pipelineColor} border rounded-lg px-4 py-2.5 mb-4 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <span className="text-sm">✓</span>
          <div>
            <p className={`text-[11px] font-bold ${pipelineTextColor}`}>{pipelineStatus}</p>
            <p className="text-[8px] text-gray-400">{pipelineDesc}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-base font-bold text-white">{interviewRate}%</p>
            <p className="text-[7px] text-gray-500">Interview Rate</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-white">{offerRate}%</p>
            <p className="text-[7px] text-gray-500">Offer Rate</p>
          </div>
        </div>
      </div>

      {/* Weekly Engagement + Activity Status */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[10px]">📊</span>
            <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">Weekly Engagement</p>
          </div>
          <div className="flex items-end gap-1.5 h-[40px]">
            {[35, 40, 55, 60, 50, 65, 70, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/80 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-[7px] text-gray-600">8 weeks ago</span>
            <span className="text-[7px] text-gray-600">This week</span>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[10px]">🕐</span>
            <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider">Activity Status</p>
          </div>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${activityColor}`}>{activityStatus}</span>
          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between border-b border-white/5 pb-1">
              <span className="text-[9px] text-gray-500">Last Active</span>
              <span className="text-[9px] text-white font-medium">Today</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-1">
              <span className="text-[9px] text-gray-500">Days Inactive</span>
              <span className="text-[9px] text-white font-medium">{student.status === "nothing" ? "14 days" : "Active today"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-gray-500">Avg. Engagement</span>
              <span className="text-[9px] text-white font-medium">{isHealthy ? "86%" : "23%"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content: Left info + Right applications */}
      <div className="grid grid-cols-[1fr_1.4fr] gap-4">
        {/* Left column */}
        <div>
          <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider mb-2">Information</p>
          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-[10px] text-gray-300">{student.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-[10px] text-gray-300">{student.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span className="text-[10px] text-gray-300">{student.degree}</span>
            </div>
          </div>

          <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider mb-2">Career Preferences</p>
          <div className="space-y-2 mb-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[9px]">🎯</span>
                <span className="text-[9px] text-gray-400">Target Industries</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {["Technology", "Finance"].map((t) => (
                  <span key={t} className="text-[8px] bg-white/[0.06] border border-white/10 text-gray-300 px-1.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[9px]">💼</span>
                <span className="text-[9px] text-gray-400">Target Titles</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {["SWE Intern", "Data Analyst"].map((t) => (
                  <span key={t} className="text-[8px] bg-white/[0.06] border border-white/10 text-gray-300 px-1.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[9px]">🏢</span>
                <span className="text-[9px] text-gray-400">Target Companies</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {(student.applications.slice(0, 2).map(a => a.company).length > 0 ? student.applications.slice(0, 2).map(a => a.company) : ["Google", "Goldman Sachs"]).map((t) => (
                  <span key={t} className="text-[8px] bg-white/[0.06] border border-white/10 text-gray-300 px-1.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[9px]">📍</span>
                <span className="text-[9px] text-gray-400">Location Preferences</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {["London", "Barcelona"].map((t) => (
                  <span key={t} className="text-[8px] bg-white/[0.06] border border-white/10 text-gray-300 px-1.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider mb-2">Profile Report</p>
          <SpiderChart data={student.spider} />
        </div>

        {/* Right column */}
        <div>
          <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider mb-2">Application Tracker</p>
          {student.applications.length === 0 ? (
            <p className="text-[11px] text-gray-600 italic mb-3">No applications yet</p>
          ) : (
            <div className="space-y-2 mb-3">
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
                          : isActive ? (isCurrent ? "bg-amber-400" : "bg-primary") : "bg-white/10";
                        const lineColor = isRejected
                          ? (i < rejectedAtIdx ? "bg-rose-400/50" : "bg-white/5")
                          : (i < stageIdx ? "bg-primary/50" : "bg-white/5");

                        return (
                          <div key={stage} className="flex items-center flex-1">
                            <div className="relative flex flex-col items-center">
                              <div className={`w-2.5 h-2.5 rounded-full ${dotColor} ${isCurrent ? "ring-1 ring-white/30" : ""} transition-all`} />
                              <span className={`text-[5px] mt-0.5 whitespace-nowrap ${isActive ? "text-gray-300" : "text-gray-600"}`}>
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
                          <span className="text-[5px] mt-0.5 text-rose-400">Rejected</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <p className="text-[9px] text-gray-500">Total: {totalApps} applications</p>
            </div>
          )}

          <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wider mb-2">Documents</p>
          <div className="space-y-1.5">
            {["Resume", "Cover Letter"].map((doc) => (
              <div
                key={doc}
                onClick={() => setViewingDoc(doc)}
                className="flex items-center gap-2.5 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 cursor-pointer hover:bg-white/[0.06] hover:border-primary/30 transition-all group"
              >
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <p className="text-[10px] text-white font-medium flex-1">{doc}</p>
                {doc === "Resume" && <span className="text-[8px] text-primary font-medium">✦ Grade</span>}
                <span className="text-[8px] text-gray-500 group-hover:text-primary transition-colors">👁</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-1">
            <span className="text-[8px] text-gray-500">3 CVs created</span>
          </div>
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
  const [analyticsTab, setAnalyticsTab] = useState<"overview" | "placements" | "engagement">("overview");
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);
  const [timePeriod, setTimePeriod] = useState("Month");

  const tabs = [
    { key: "overview" as const, label: "Overview" },
    { key: "placements" as const, label: "Placements & Employers" },
    { key: "engagement" as const, label: "Student Engagement" },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-bold text-white">Analytics</p>
          <p className="text-[9px] text-gray-500">University performance overview</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white/[0.03] border border-white/5 rounded-md px-2 py-1 flex items-center gap-1 cursor-pointer">
            <span className="text-[9px] text-gray-300">All Departments</span>
            <svg className="w-2.5 h-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="flex items-center bg-white/[0.03] border border-white/5 rounded-md overflow-hidden">
            {["Week", "Month", "Year", "All"].map((p) => (
              <button
                key={p}
                onClick={() => setTimePeriod(p)}
                className={`text-[8px] px-2 py-1 font-medium transition-colors ${timePeriod === p ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="flex items-center gap-0 mb-4 border-b border-white/5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setAnalyticsTab(t.key)}
            className={`text-[10px] px-3 py-2 font-medium transition-colors border-b-2 ${analyticsTab === t.key ? "border-primary text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {analyticsTab === "overview" && (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-6 gap-2 mb-3">
            {[
              { label: "Total Students", value: "1,284", change: "+5%", icon: "👥" },
              { label: "Total Applications", value: "4,821", change: "+15%", icon: "📄" },
              { label: "Placement Rate", value: "71%", change: "+4.2%", icon: "📈" },
              { label: "Average Salary", value: "$78k", change: "+8%", icon: "💰" },
              { label: "Avg Apps / Student", value: "3.8", change: "+20%", icon: "🎯" },
              { label: "CVs Created", value: "2,156", change: "+32%", icon: "📋" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px]">{s.icon}</span>
                  <span className="text-[8px] text-emerald-400 font-medium">{s.change}</span>
                </div>
                <p className="text-base font-bold text-white">{s.value}</p>
                <p className="text-[8px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Students Placed by Month + Application Funnel */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Students Placed by Month</p>
              <svg viewBox="0 0 240 90" className="w-full">
                {[0, 15, 30, 45, 60].map((v, i) => (
                  <g key={v}>
                    <line x1="25" y1={75 - i * 15} x2="235" y2={75 - i * 15} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <text x="22" y={77 - i * 15} textAnchor="end" fill="#6b7280" fontSize="3.5">{v}</text>
                  </g>
                ))}
                {/* Area fill */}
                <polygon
                  points={`25,75 ${[5,16,20,28,25,30,28,32,38,42,48,55].map((v, i) => `${25 + i * (210 / 11)},${75 - (v / 60) * 60}`).join(" ")} 235,75`}
                  fill="hsl(217, 91%, 60%, 0.08)"
                />
                <polyline
                  fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="1.5"
                  points={[5,16,20,28,25,30,28,32,38,42,48,55].map((v, i) => `${25 + i * (210 / 11)},${75 - (v / 60) * 60}`).join(" ")}
                />
                {[5,16,20,28,25,30,28,32,38,42,48,55].map((v, i) => (
                  <circle key={i} cx={25 + i * (210 / 11)} cy={75 - (v / 60) * 60} r="1.5" fill="hsl(217, 91%, 60%)" stroke="white" strokeWidth="0.5" />
                ))}
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                  <text key={m} x={25 + i * (210 / 11)} y="83" textAnchor="middle" fill="#6b7280" fontSize="3.5">{m}</text>
                ))}
              </svg>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Application Funnel</p>
              <div className="space-y-1.5">
                {[
                  { label: "Total Applications", value: 1250, pct: "100%" },
                  { label: "Screening Passed", value: 720, pct: "57.6%" },
                  { label: "Interview Invited", value: 480, pct: "38.4%" },
                  { label: "Technical Assessment", value: 350, pct: "28.0%" },
                  { label: "Final Interview", value: 220, pct: "17.6%" },
                  { label: "Offer Extended", value: 180, pct: "14.4%" },
                  { label: "Offer Accepted", value: 150, pct: "12.0%" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2">
                    <span className="text-[8px] text-gray-400 w-28 shrink-0">{f.label}</span>
                    <div className="flex-1 h-3.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/60 rounded-full flex items-center justify-center" style={{ width: f.pct }}>
                        <span className="text-[6px] text-white font-bold">{f.value.toLocaleString()}</span>
                      </div>
                    </div>
                    <span className="text-[8px] text-gray-500 w-8 text-right">{f.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Salary by Industry, Placement by Degree, Application Success */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Avg Salary by Industry</p>
              <svg viewBox="0 0 150 80" className="w-full">
                {[0, 25000, 50000, 75000, 100000].map((v, i) => (
                  <g key={v}>
                    <line x1="8" y1={70 - i * 14} x2="145" y2={70 - i * 14} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <text x="6" y={72 - i * 14} textAnchor="end" fill="#6b7280" fontSize="3">{v === 0 ? "0" : `${v/1000}k`}</text>
                  </g>
                ))}
                {[
                  { label: "Tech", value: 92 },
                  { label: "Finance", value: 88 },
                  { label: "Consulting", value: 82 },
                  { label: "Healthcare", value: 72 },
                  { label: "Education", value: 65 },
                ].map((d, i) => {
                  const barH = (d.value / 100) * 56;
                  return (
                    <g key={d.label}>
                      <rect x={18 + i * 26} y={70 - barH} width="16" height={barH} fill="hsl(217, 91%, 40%)" rx="1.5" />
                      <text x={26 + i * 26} y="77" textAnchor="middle" fill="#6b7280" fontSize="3">{d.label}</text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Placement by Degree</p>
              <svg viewBox="0 0 150 80" className="w-full">
                {[0, 65, 130, 195, 260].map((v, i) => (
                  <g key={v}>
                    <line x1="8" y1={70 - i * 14} x2="145" y2={70 - i * 14} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <text x="6" y={72 - i * 14} textAnchor="end" fill="#6b7280" fontSize="3">{v}</text>
                  </g>
                ))}
                {[
                  { label: "CS", value: 245 },
                  { label: "Eng", value: 220 },
                  { label: "Biz", value: 105 },
                  { label: "Science", value: 90 },
                  { label: "Arts", value: 80 },
                ].map((d, i) => {
                  const barH = (d.value / 260) * 56;
                  return (
                    <g key={d.label}>
                      <rect x={18 + i * 26} y={70 - barH} width="16" height={barH} fill={i < 2 ? "hsl(217, 91%, 35%)" : "hsl(217, 91%, 45%)"} rx="1.5" />
                      <text x={26 + i * 26} y="77" textAnchor="middle" fill="#6b7280" fontSize="3">{d.label}</text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Application Success by Channel</p>
              <div className="space-y-2">
                {[
                  { channel: "Career Portal", applied: 1820, interviews: 680, success: "37%" },
                  { channel: "Referrals", applied: 480, interviews: 290, success: "60%" },
                  { channel: "Job Fairs", applied: 720, interviews: 310, success: "43%" },
                  { channel: "Direct Apply", applied: 1200, interviews: 380, success: "32%" },
                  { channel: "LinkedIn", applied: 601, interviews: 160, success: "27%" },
                ].map((c) => (
                  <div key={c.channel}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[8px] text-white font-medium">{c.channel}</span>
                      <span className="text-[8px] text-emerald-400 font-bold">{c.success} success</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-0.5">
                      <div className="h-full bg-gray-400/50 rounded-full" style={{ width: c.success }} />
                    </div>
                    <p className="text-[6px] text-gray-600">{c.applied} applied → {c.interviews} interviews</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Offer Conversion + Geographic Preferences */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Offer Conversion by Industry</p>
              <div className="space-y-1.5">
                {[
                  { industry: "Technology", pct: 68 },
                  { industry: "Finance", pct: 55 },
                  { industry: "Consulting", pct: 48 },
                  { industry: "Healthcare", pct: 35 },
                  { industry: "Education", pct: 22 },
                ].map((d) => (
                  <div key={d.industry} className="flex items-center gap-2">
                    <span className="text-[8px] text-gray-400 w-16 shrink-0">{d.industry}</span>
                    <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${d.pct}%` }} />
                    </div>
                    <span className="text-[8px] text-gray-400 w-6 text-right">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[10px]">📍</span>
                <p className="text-[10px] font-semibold text-white">Geographic Preferences</p>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {[
                  { city: "London", count: 340 },
                  { city: "Remote", count: 280 },
                  { city: "New York", count: 195 },
                  { city: "Bay Area", count: 160 },
                  { city: "Berlin", count: 95 },
                  { city: "Dublin", count: 88 },
                ].map((g) => (
                  <div key={g.city} className="bg-white/[0.03] border border-white/5 rounded-lg p-2 text-center">
                    <p className="text-sm font-bold text-white">{g.count}</p>
                    <p className="text-[7px] text-gray-500">{g.city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {analyticsTab === "placements" && (
        <>
          {/* Placement Timeline */}
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 mb-3">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[10px]">⏱</span>
              <p className="text-[10px] font-semibold text-white">Placement Timeline</p>
            </div>
            <div className="flex items-center justify-around mb-4">
              {[
                { value: 18, label: "Fastest", sub: "days to placement", color: "bg-emerald-500", textColor: "text-emerald-400" },
                { value: 23, label: "Average", sub: "days overall", color: "bg-primary", textColor: "text-primary" },
                { value: 45, label: "Slowest", sub: "maximum days", color: "bg-amber-500", textColor: "text-amber-400" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${s.color} flex items-center justify-center mb-1.5`}>
                    <span className="text-base font-bold text-white">{s.value}</span>
                  </div>
                  <span className={`text-[9px] font-semibold ${s.textColor}`}>{s.label}</span>
                  <span className="text-[7px] text-gray-500">{s.sub}</span>
                </div>
              ))}
            </div>
            <div className="flex h-2.5 rounded-full overflow-hidden mb-2">
              <div className="bg-emerald-500" style={{ width: "35%" }} />
              <div className="bg-blue-500" style={{ width: "48%" }} />
              <div className="bg-amber-500" style={{ width: "17%" }} />
            </div>
            <div className="flex items-center justify-between">
              {[
                { color: "bg-emerald-500", label: "0-15 days", pct: "35%" },
                { color: "bg-blue-500", label: "16-30 days", pct: "48%" },
                { color: "bg-amber-500", label: "31+ days", pct: "17%" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${d.color}`} />
                  <span className="text-[8px] text-gray-500">{d.label}</span>
                  <span className="text-[8px] text-emerald-400 font-medium">{d.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Employers + Global Placement Map */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Top Employers</p>
              <div className="grid grid-cols-4 gap-2 pb-1 border-b border-white/5 mb-1">
                <span className="text-[7px] text-gray-500 font-semibold">Employer</span>
                <span className="text-[7px] text-gray-500 font-semibold">Industry</span>
                <span className="text-[7px] text-gray-500 font-semibold text-center">Hires</span>
                <span className="text-[7px] text-gray-500 font-semibold text-center">Rating</span>
              </div>
              {[
                { name: "Google", industry: "Technology", hires: 45, rating: 4.8 },
                { name: "Goldman Sachs", industry: "Finance", hires: 32, rating: 4.5 },
                { name: "McKinsey", industry: "Consulting", hires: 28, rating: 4.7 },
                { name: "Amazon", industry: "Technology", hires: 25, rating: 4.3 },
                { name: "Deloitte", industry: "Consulting", hires: 22, rating: 4.4 },
              ].map((e) => (
                <div key={e.name} className="grid grid-cols-4 gap-2 py-1.5 border-b border-white/[0.03] items-center">
                  <span className="text-[9px] text-white font-medium">{e.name}</span>
                  <span className="text-[9px] text-gray-500">{e.industry}</span>
                  <span className="text-[9px] text-white text-center font-medium">{e.hires}</span>
                  <div className="flex items-center justify-center gap-0.5">
                    <span className="text-[9px] text-amber-400">★</span>
                    <span className="text-[9px] text-white font-medium">{e.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[10px]">📍</span>
                <p className="text-[10px] font-semibold text-white">Global Placement Map</p>
              </div>
              <div className="relative w-full aspect-[2/1] bg-white/[0.02] rounded-lg overflow-hidden">
                {/* Simplified bubble map */}
                <svg viewBox="0 0 300 150" className="w-full h-full">
                  {/* Subtle continent outlines */}
                  <ellipse cx="80" cy="60" rx="40" ry="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <ellipse cx="150" cy="55" rx="30" ry="35" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <ellipse cx="220" cy="65" rx="35" ry="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  {/* Placement bubbles */}
                  {[
                    { cx: 60, cy: 45, r: 8, label: "SF", count: 15, color: "hsl(217, 91%, 60%)" },
                    { cx: 85, cy: 40, r: 10, label: "NY", count: 12, color: "hsl(160, 60%, 45%)" },
                    { cx: 135, cy: 35, r: 7, label: "LDN", count: 8, color: "hsl(30, 80%, 55%)" },
                    { cx: 150, cy: 40, r: 5, label: "BER", count: 6, color: "hsl(350, 65%, 55%)" },
                    { cx: 175, cy: 55, r: 4, label: "DXB", count: 5, color: "hsl(40, 80%, 55%)" },
                    { cx: 240, cy: 50, r: 6, label: "SG", count: 7, color: "hsl(280, 50%, 55%)" },
                  ].map((b, i) => (
                    <g key={i}>
                      <circle cx={b.cx} cy={b.cy} r={b.r * 2} fill={b.color} opacity="0.15" />
                      <circle cx={b.cx} cy={b.cy} r={b.r} fill={b.color} opacity="0.6" />
                      <text x={b.cx} y={b.cy + 1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="4" fontWeight="bold">{b.count}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 flex-wrap">
                {[
                  { color: "bg-blue-500", label: "San Francisco (15)" },
                  { color: "bg-emerald-500", label: "New York (12)" },
                  { color: "bg-orange-500", label: "London (8)" },
                  { color: "bg-rose-500", label: "Berlin (6)" },
                  { color: "bg-amber-500", label: "Dubai (5)" },
                  { color: "bg-purple-500", label: "Singapore (7)" },
                ].map((l) => (
                  <div key={l.label} className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
                    <span className="text-[7px] text-gray-500">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {analyticsTab === "engagement" && (
        <>
          {/* Engagement KPIs */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { label: "Weekly Active Students", value: "710", sub: "-5% vs last week", icon: "📊", subColor: "text-rose-400" },
              { label: "At-Risk (Burnout)", value: "157", sub: "12% of cohort", icon: "🔥", subColor: "text-rose-400" },
              { label: "Resume Issues", value: "512", sub: "40% of students", icon: "⚠️", subColor: "text-amber-400" },
              { label: "CVs Created This Month", value: "490", sub: "+32% vs last month", icon: "📄", subColor: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2">
                <div className="w-6 h-6 rounded-lg bg-white/[0.06] flex items-center justify-center mb-1.5">
                  <span className="text-xs">{s.icon}</span>
                </div>
                <p className="text-base font-bold text-white">{s.value}</p>
                <p className="text-[8px] text-gray-400 mb-0.5">{s.label}</p>
                <p className={`text-[8px] font-medium ${s.subColor}`}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Weekly Engagement Trend + CV Creation Trend */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Weekly Engagement Trend</p>
              <svg viewBox="0 0 220 80" className="w-full">
                {[0, 350, 700, 1050, 1400].map((v, i) => (
                  <g key={v}>
                    <line x1="25" y1={70 - i * 14} x2="215" y2={70 - i * 14} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <text x="22" y={72 - i * 14} textAnchor="end" fill="#6b7280" fontSize="3.5">{v}</text>
                  </g>
                ))}
                {/* Active Students area */}
                <polygon
                  points={`35,70 ${[700,750,800,850,780,720,690,710].map((v, i) => `${35 + i * 25},${70 - (v / 1400) * 56}`).join(" ")} 210,70`}
                  fill="hsl(217, 91%, 60%, 0.1)"
                />
                <polyline fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="1.2"
                  points={[700,750,800,850,780,720,690,710].map((v, i) => `${35 + i * 25},${70 - (v / 1400) * 56}`).join(" ")}
                />
                {/* Total Logins line */}
                <polyline fill="none" stroke="hsl(160, 60%, 50%)" strokeWidth="1.2"
                  points={[1050,1100,1200,1150,1080,1000,950,1020].map((v, i) => `${35 + i * 25},${70 - (v / 1400) * 56}`).join(" ")}
                />
                {["W1","W2","W3","W4","W5","W6","W7","W8"].map((w, i) => (
                  <text key={w} x={35 + i * 25} y="78" textAnchor="middle" fill="#6b7280" fontSize="3.5">{w}</text>
                ))}
              </svg>
              <div className="flex items-center gap-3 mt-1 justify-center">
                <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-primary rounded" /><span className="text-[7px] text-gray-500">Active Students</span></div>
                <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-emerald-500 rounded" /><span className="text-[7px] text-gray-500">Total Logins</span></div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">CV Creation Trend</p>
              <svg viewBox="0 0 220 80" className="w-full">
                {[0, 150, 300, 450, 600].map((v, i) => (
                  <g key={v}>
                    <line x1="25" y1={70 - i * 14} x2="215" y2={70 - i * 14} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <text x="22" y={72 - i * 14} textAnchor="end" fill="#6b7280" fontSize="3.5">{v}</text>
                  </g>
                ))}
                {[80,150,200,280,310,320,350,340,360,350,380,520].map((v, i) => {
                  const barH = (v / 600) * 56;
                  return (
                    <rect key={i} x={28 + i * 15.5} y={70 - barH} width="10" height={barH} fill="hsl(217, 91%, 35%)" rx="1" />
                  );
                })}
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                  <text key={m} x={33 + i * 15.5} y="78" textAnchor="middle" fill="#6b7280" fontSize="3">{m}</text>
                ))}
              </svg>
            </div>
          </div>

          {/* Resume Diagnostics + Burnout & Inactivity */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px]">📊</span>
                <p className="text-[10px] font-semibold text-white">Resume Diagnostics</p>
              </div>
              <p className="text-[7px] text-gray-600 mb-2">Students flagged based on interview-to-application and offer-to-interview rates</p>
              <div className="space-y-2">
                {[
                  { label: "On Track", count: 486, pct: "38%", color: "bg-emerald-500" },
                  { label: "Resume Issue", count: 512, pct: "40%", color: "bg-rose-500" },
                  { label: "Interview Issue", count: 286, pct: "22%", color: "bg-amber-500" },
                ].map((d) => (
                  <div key={d.label}>
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${d.color}`} />
                        <span className="text-[9px] text-gray-300">{d.label}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] text-white font-bold">{d.count}</span>
                        <span className="text-[8px] text-gray-500">{d.pct}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${d.color} rounded-full`} style={{ width: d.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 bg-white/[0.02] border border-white/5 rounded-md p-2 space-y-0.5">
                <p className="text-[7px] text-gray-400"><span className="font-semibold text-rose-400">Resume Issue:</span> Low interview rate — CV may need improvement</p>
                <p className="text-[7px] text-gray-400"><span className="font-semibold text-amber-400">Interview Issue:</span> Gets interviews but no offers — needs prep</p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px]">🔥</span>
                <p className="text-[10px] font-semibold text-white">Burnout & Inactivity Signals</p>
              </div>
              <p className="text-[7px] text-gray-600 mb-2">Students grouped by activity pattern over the last 8 weeks</p>
              <div className="space-y-2">
                {[
                  { label: "Healthy", count: 640, pct: "50%", color: "bg-emerald-500" },
                  { label: "Low Activity", count: 256, pct: "20%", color: "bg-amber-500" },
                  { label: "Declining", count: 231, pct: "18%", color: "bg-orange-500" },
                  { label: "At Risk", count: 157, pct: "12%", color: "bg-rose-500" },
                ].map((d) => (
                  <div key={d.label}>
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${d.color}`} />
                        <span className="text-[9px] text-gray-300">{d.label}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] text-white font-bold">{d.count}</span>
                        <span className="text-[8px] text-gray-500">{d.pct}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${d.color} rounded-full`} style={{ width: d.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 bg-amber-500/10 border border-amber-500/20 rounded-md p-2 flex items-center gap-1.5">
                <span className="text-[10px]">⚡</span>
                <p className="text-[7px] text-amber-400 font-medium">157 students show burnout signals and may need outreach</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const QualificationInsightsContent = () => {
  const [qualTab, setQualTab] = useState<"gaps" | "demand" | "overview">("gaps");

  return (
    <>
      {/* Header */}
      <div className="mb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[8px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-semibold">📊 Qualification Insights</span>
        </div>
        <p className="text-sm font-bold text-white">Skills & Gap Analysis</p>
        <p className="text-[9px] text-gray-500">Track student skill profiles against employer demand and identify critical gaps across your cohort.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2 mb-3 mt-3">
        {[
          { label: "Skills Tracked", value: "24", sub: "+3 new", subColor: "text-emerald-400", icon: "✦" },
          { label: "Avg. Skill Coverage", value: "64%", sub: "+5% vs last year", subColor: "text-emerald-400", icon: "📈" },
          { label: "Critical Gaps", value: "6", sub: "Action needed", subColor: "text-rose-400", icon: "⚠️" },
          { label: "Students At Risk", value: "184", sub: "Missing key skills", subColor: "text-rose-400", icon: "👥" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] text-gray-500">{s.label}</span>
              <span className="text-xs">{s.icon}</span>
            </div>
            <p className="text-lg font-bold text-white">{s.value}</p>
            <p className={`text-[8px] font-medium ${s.subColor}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Sub-tabs */}
      <div className="flex items-center gap-0 mb-4 border-b border-white/5">
        {[
          { key: "gaps" as const, label: "Skill Gaps", icon: "⚠" },
          { key: "demand" as const, label: "Industry Demand", icon: "🏢" },
          { key: "overview" as const, label: "Skills Overview", icon: "📊" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setQualTab(t.key)}
            className={`text-[10px] px-3 py-2 font-medium transition-colors border-b-2 flex items-center gap-1 ${qualTab === t.key ? "border-primary text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
          >
            <span className="text-[9px]">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {qualTab === "gaps" && (
        <div className="grid grid-cols-[1.2fr_1fr] gap-3">
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <p className="text-[10px] font-semibold text-white mb-0.5">Critical Skill Gaps</p>
            <p className="text-[7px] text-gray-500 mb-3">Skills where employer demand significantly exceeds student readiness.</p>
            <div className="space-y-2.5">
              {[
                { skill: "Cloud Computing (AWS/GCP)", gap: 44, students: 184, color: "bg-rose-500", icon: "💻" },
                { skill: "Machine Learning / AI", gap: 35, students: 156, color: "bg-rose-500", icon: "🧠" },
                { skill: "SQL & Databases", gap: 33, students: 142, color: "bg-amber-500", icon: "🗄" },
                { skill: "Python Programming", gap: 23, students: 98, color: "bg-amber-500", icon: "🐍" },
                { skill: "Cybersecurity Basics", gap: 28, students: 120, color: "bg-amber-500", icon: "🔒" },
                { skill: "Communication Skills", gap: 16, students: 67, color: "bg-amber-400", icon: "🌐" },
              ].map((g) => (
                <div key={g.skill} className="bg-white/[0.02] border border-white/5 rounded-lg px-3 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px]">{g.icon}</span>
                      <span className="text-[10px] text-white font-medium">{g.skill}</span>
                    </div>
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${g.gap > 30 ? "bg-rose-500/20 text-rose-400" : "bg-amber-500/20 text-amber-400"}`}>{g.gap}% gap</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-0.5">
                    <div className={`h-full ${g.color} rounded-full`} style={{ width: `${g.gap * 2}%` }} />
                  </div>
                  <p className="text-[7px] text-gray-500 text-right">{g.students} students lacking</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-0.5">Cohort Competency Map</p>
              <p className="text-[7px] text-gray-500 mb-2">Current student skills vs. employer requirements</p>
              {(() => {
                const labels = ["Technical", "Analytical", "Communication", "Leadership", "Domain Knowledge", "Tools & Software"];
                const studentValues = [3.5, 3.8, 4.2, 2.8, 3.0, 3.2];
                const employerValues = [4.5, 4.2, 4.0, 3.8, 4.0, 4.5];
                const cx = 80, cy = 70, maxR = 45;
                const angleStep = (Math.PI * 2) / 6;
                const getPoint = (i: number, v: number) => ({
                  x: cx + Math.sin(angleStep * i) * (v / 5) * maxR,
                  y: cy - Math.cos(angleStep * i) * (v / 5) * maxR,
                });
                const studentPoints = studentValues.map((v, i) => getPoint(i, v));
                const employerPoints = employerValues.map((v, i) => getPoint(i, v));
                const studentPath = studentPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
                const employerPath = employerPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
                return (
                  <>
                    <svg viewBox="0 0 160 140" className="w-full max-w-[220px] mx-auto">
                      {[1, 2, 3, 4, 5].map((level) => {
                        const pts = Array.from({ length: 6 }, (_, i) => getPoint(i, level));
                        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
                        return <path key={level} d={path} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />;
                      })}
                      {Array.from({ length: 6 }, (_, i) => {
                        const end = getPoint(i, 5);
                        return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />;
                      })}
                      <path d={employerPath} fill="hsl(0, 70%, 60%, 0.08)" stroke="hsl(0, 70%, 60%)" strokeWidth="1" strokeDasharray="3 2" />
                      <path d={studentPath} fill="hsl(217, 91%, 60%, 0.15)" stroke="hsl(217, 91%, 60%)" strokeWidth="1.5" />
                      {studentPoints.map((p, i) => (
                        <circle key={i} cx={p.x} cy={p.y} r="2" fill="hsl(217, 91%, 60%)" />
                      ))}
                      {labels.map((label, i) => {
                        const pt = getPoint(i, 6.5);
                        return <text key={label} x={pt.x} y={pt.y} textAnchor="middle" dominantBaseline="middle" fill="#9ca3af" fontSize="4" fontFamily="sans-serif">{label}</text>;
                      })}
                    </svg>
                    <div className="flex items-center justify-center gap-4 mt-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        <span className="text-[8px] text-gray-400">Students</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400/50 border border-rose-400 border-dashed" />
                        <span className="text-[8px] text-gray-400">Employer Req.</span>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
              <p className="text-[10px] font-semibold text-white mb-2">Most Common Skills</p>
              <div className="space-y-1.5">
                {[
                  { skill: "Microsoft Excel", pct: 80 },
                  { skill: "Communication", pct: 72 },
                  { skill: "Python", pct: 62 },
                  { skill: "Data Visualization", pct: 58 },
                  { skill: "Teamwork", pct: 56 },
                ].map((s) => (
                  <div key={s.skill} className="flex items-center gap-2">
                    <span className="text-[8px] text-gray-400 w-24 shrink-0">{s.skill}</span>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                    </div>
                    <span className="text-[8px] text-gray-400 w-7 text-right">{s.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {qualTab === "demand" && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <p className="text-[10px] font-semibold text-white mb-1">Top In-Demand Skills by Employers</p>
            <p className="text-[7px] text-gray-500 mb-2">Based on job posting analysis</p>
            <div className="space-y-1.5">
              {[
                { skill: "Cloud Computing", demand: 92, supply: 48 },
                { skill: "Data Science / ML", demand: 88, supply: 53 },
                { skill: "Python", demand: 85, supply: 62 },
                { skill: "SQL & Databases", demand: 82, supply: 49 },
                { skill: "Cybersecurity", demand: 78, supply: 50 },
                { skill: "Communication", demand: 75, supply: 72 },
                { skill: "Leadership", demand: 70, supply: 42 },
              ].map((s) => (
                <div key={s.skill}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8px] text-gray-300">{s.skill}</span>
                    <span className={`text-[7px] font-bold ${s.demand - s.supply > 20 ? "text-rose-400" : "text-amber-400"}`}>{s.demand - s.supply}% gap</span>
                  </div>
                  <div className="flex gap-0.5 h-1.5">
                    <div className="bg-primary/60 rounded-full" style={{ width: `${s.demand}%` }} />
                  </div>
                  <div className="flex gap-0.5 h-1.5 mt-0.5">
                    <div className="bg-emerald-500/60 rounded-full" style={{ width: `${s.supply}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1"><div className="w-3 h-1.5 bg-primary/60 rounded" /><span className="text-[7px] text-gray-500">Employer Demand</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-1.5 bg-emerald-500/60 rounded" /><span className="text-[7px] text-gray-500">Student Coverage</span></div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <p className="text-[10px] font-semibold text-white mb-1">Industry Hiring Trends</p>
            <p className="text-[7px] text-gray-500 mb-2">Skill demand growth over 12 months</p>
            <div className="space-y-2">
              {[
                { industry: "Technology", growth: "+28%", roles: 1840, color: "bg-primary" },
                { industry: "Finance", growth: "+15%", roles: 1200, color: "bg-emerald-500" },
                { industry: "Healthcare", growth: "+22%", roles: 890, color: "bg-purple-500" },
                { industry: "Consulting", growth: "+12%", roles: 750, color: "bg-amber-500" },
                { industry: "Education", growth: "+8%", roles: 420, color: "bg-cyan-500" },
              ].map((d) => (
                <div key={d.industry} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${d.color}`} />
                  <span className="text-[9px] text-gray-300 w-16">{d.industry}</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${d.color} rounded-full`} style={{ width: `${(d.roles / 1840) * 100}%` }} />
                  </div>
                  <span className="text-[8px] text-emerald-400 font-bold w-8">{d.growth}</span>
                  <span className="text-[7px] text-gray-500 w-12 text-right">{d.roles} roles</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {qualTab === "overview" && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <p className="text-[10px] font-semibold text-white mb-1">Technical Skills Proficiency</p>
            <div className="flex gap-2 mb-2">
              {[
                { color: "bg-emerald-500", label: "Expert" },
                { color: "bg-blue-500", label: "Advanced" },
                { color: "bg-amber-500", label: "Intermediate" },
                { color: "bg-rose-500", label: "Basic" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
                  <span className="text-[7px] text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>
            {[
              { name: "Python", total: 81, segments: [21, 30, 24, 6] },
              { name: "JavaScript", total: 72, segments: [15, 23, 24, 10] },
              { name: "SQL", total: 69, segments: [10, 20, 25, 14] },
              { name: "React", total: 55, segments: [6, 14, 22, 13] },
              { name: "Machine Learning", total: 42, segments: [5, 9, 18, 10] },
              { name: "DevOps", total: 38, segments: [3, 7, 13, 15] },
            ].map((skill) => (
              <div key={skill.name} className="mb-1.5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[8px] text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-[7px] text-gray-500">{skill.total} students</span>
                </div>
                <div className="flex h-2.5 rounded-sm overflow-hidden" style={{ width: `${(skill.total / 90) * 100}%` }}>
                  {skill.segments.map((seg, i) => {
                    const colors = ["bg-emerald-500", "bg-blue-500", "bg-amber-500", "bg-rose-500"];
                    return (
                      <div key={i} className={`${colors[i]} flex items-center justify-center`} style={{ width: `${(seg / skill.total) * 100}%` }}>
                        <span className="text-[5px] text-white font-bold">{seg}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
            <p className="text-[10px] font-semibold text-white mb-1">Certifications & Credentials</p>
            <div className="space-y-1.5 mb-3">
              {[
                { name: "AWS Solutions Architect", students: 12, color: "bg-amber-500" },
                { name: "Google Cloud Professional", students: 8, color: "bg-emerald-500" },
                { name: "Microsoft Azure", students: 6, color: "bg-purple-500" },
                { name: "Cisco CCNA", students: 5, color: "bg-rose-500" },
                { name: "CFA Level I", students: 4, color: "bg-blue-500" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <div className={`w-4 h-4 ${c.color} rounded-full flex items-center justify-center text-[6px] font-bold text-white shrink-0`}>✓</div>
                  <span className="text-[9px] text-gray-300 flex-1">{c.name}</span>
                  <span className="text-[8px] text-gray-500">{c.students}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { count: 35, label: "Total Certifications", color: "text-primary" },
                { count: "2.8", label: "Avg per Student", color: "text-emerald-400" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-md p-2 text-center">
                  <p className={`text-sm font-bold ${s.color}`}>{s.count}</p>
                  <p className="text-[7px] text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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
        { name: "Business Administration", uses: 482, color: "bg-blue-500" },
        { name: "International Relations", uses: 356, color: "bg-purple-500" },
        { name: "Computer Science", uses: 198, color: "bg-emerald-500" },
        { name: "Marketing", uses: 134, color: "bg-rose-500" },
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
    if (activeTab === 4 && showTemplateEditor) {
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
      case 4: return <ResumeTemplatesContent onOpenEditor={() => setShowTemplateEditor(true)} />;
      case 5: return <JobEventPostingsContent onSelectPosting={setSelectedPosting} />;
      default: return <OverviewContent />;
    }
  };

  return (
    <div
      className="rounded-xl overflow-hidden shadow-precision-lg border border-gray-200 relative"
      style={{
        zoom: 1.5,
        backgroundColor: "hsl(0, 0%, 100%)",
        color: "hsl(222.2, 84%, 4.9%)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(230,40%,11%)] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-gray-400 bg-white/5 px-4 py-1 rounded-md">applylab.software/careers-team</span>
        </div>
      </div>

      {/* App content */}
      <div className="flex h-[600px]">
        {/* Sidebar - stays dark */}
        <div className="w-40 border-r border-white/5 p-3 hidden sm:block bg-[hsl(230,40%,11%)]">
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

        {/* Main content - light theme */}
        <div className="flex-1 p-5 overflow-y-auto bg-white light-dashboard-content">
          {renderContent()}
        </div>
        <style>{`
          .light-dashboard-content,
          .light-dashboard-content * {
            --tw-text-opacity: 1;
          }
          .light-dashboard-content .text-white { color: #111827 !important; }
          .light-dashboard-content .text-gray-300 { color: #374151 !important; }
          .light-dashboard-content .text-gray-400 { color: #6b7280 !important; }
          .light-dashboard-content .text-gray-500 { color: #6b7280 !important; }
          .light-dashboard-content .text-gray-600 { color: #4b5563 !important; }
          .light-dashboard-content .hover\\:text-white:hover { color: #111827 !important; }
          .light-dashboard-content .hover\\:text-gray-300:hover { color: #374151 !important; }
          .light-dashboard-content .bg-white\\/\\[0\\.03\\] { background-color: #f9fafb !important; }
          .light-dashboard-content .bg-white\\/\\[0\\.02\\] { background-color: #f9fafb !important; }
          .light-dashboard-content .bg-white\\/5 { background-color: #f3f4f6 !important; }
          .light-dashboard-content .bg-white\\/10 { background-color: #f3f4f6 !important; }
          .light-dashboard-content .border-white\\/5 { border-color: #e5e7eb !important; }
          .light-dashboard-content .border-white\\/\\[0\\.03\\] { border-color: #f3f4f6 !important; }
          .light-dashboard-content .border-white\\/10 { border-color: #e5e7eb !important; }
          .light-dashboard-content .text-emerald-400 { color: #059669 !important; }
          .light-dashboard-content .text-rose-400 { color: #e11d48 !important; }
          .light-dashboard-content .text-amber-400 { color: #d97706 !important; }
          .light-dashboard-content .text-blue-400 { color: #2563eb !important; }
          .light-dashboard-content .text-cyan-400 { color: #0891b2 !important; }
          .light-dashboard-content .text-orange-400 { color: #ea580c !important; }
          .light-dashboard-content svg { color: #4b5563 !important; }
          .light-dashboard-content svg.text-primary { color: hsl(var(--primary)) !important; }
          .light-dashboard-content svg line[stroke*="rgba(255,255,255"] { stroke: rgba(0,0,0,0.08) !important; }
          .light-dashboard-content svg path[stroke*="rgba(255,255,255"] { stroke: rgba(0,0,0,0.08) !important; }
        `}</style>
      </div>
    </div>
  );
};

export default DashboardMockup;
