import { useState, useRef } from "react";

const navItems = ["Overview", "Students", "Analytics", "Qualification Insights", "Market Insights", "Resume Templates", "Job & Event Postings"];

const OverviewContent = () => (
  <>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { label: "Total Students", value: "1,284", change: "+12%", up: true },
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

    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <p className="text-[10px] text-gray-500 mb-1">Applications Sent</p>
        <span className="text-lg font-bold text-white">4,821</span>
        <div className="mt-2 flex gap-1">
          {[65, 45, 80, 55, 70, 90, 60, 75, 85, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/30 rounded-sm" style={{ height: `${h * 0.3}px` }}>
              <div className="w-full bg-primary rounded-sm" style={{ height: `${h * 0.2}px`, marginTop: `${(h * 0.3) - (h * 0.2)}px` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
        <p className="text-[10px] text-gray-500 mb-1">Interviews This Month</p>
        <span className="text-lg font-bold text-white">186</span>
        <div className="mt-2 space-y-1.5">
          {[
            { label: "Scheduled", pct: 42, color: "bg-primary" },
            { label: "Completed", pct: 35, color: "bg-emerald-500" },
            { label: "Pending", pct: 23, color: "bg-amber-500" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="text-[8px] text-gray-500 w-14">{b.label}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full">
                <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500 mb-2">Recent Activity</p>
    <div className="space-y-1.5">
      {[
        { text: "Sarah Chen received an offer from Deloitte", time: "2h ago", icon: "🎉" },
        { text: "3 new students joined Engineering 2026", time: "5h ago", icon: "👥" },
        { text: "Resume Workshop event starts tomorrow", time: "1d ago", icon: "📄" },
        { text: "Monthly placement report is ready", time: "1d ago", icon: "📊" },
      ].map((a) => (
        <div key={a.text} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <span className="text-xs">{a.icon}</span>
          <p className="text-[10px] text-gray-300 flex-1">{a.text}</p>
          <span className="text-[9px] text-gray-600">{a.time}</span>
        </div>
      ))}
    </div>
  </>
);

const studentsData = [
  { name: "Sarah Chen", email: "s.chen@uni.edu", degree: "BSc Business Admin", phone: "+44 7911 123456", status: "placed" as const, avatar: "SC",
    spider: { certifications: 4, languages: 3, projects: 5, skills: 4, experience: 3, gpa: 4 },
    applications: [
      { company: "Deloitte", role: "Analyst", status: "Offered" },
      { company: "McKinsey", role: "Associate", status: "Interview" },
      { company: "Goldman Sachs", role: "Intern", status: "Applied" },
      { company: "PwC", role: "Consultant", status: "Submitted" },
      { company: "BCG", role: "Associate", status: "Rejected" },
    ]},
  { name: "James Miller", email: "j.miller@uni.edu", degree: "MEng Computer Science", phone: "+44 7922 234567", status: "in_progress" as const, avatar: "JM",
    spider: { certifications: 2, languages: 4, projects: 3, skills: 5, experience: 2, gpa: 3 },
    applications: [
      { company: "Google", role: "SWE Intern", status: "Interview" },
      { company: "Meta", role: "Engineer", status: "Applied" },
      { company: "Amazon", role: "SDE Intern", status: "Submitted" },
    ]},
  { name: "Priya Patel", email: "p.patel@uni.edu", degree: "BA Fine Arts", phone: "+44 7933 345678", status: "nothing" as const, avatar: "PP",
    spider: { certifications: 1, languages: 2, projects: 2, skills: 3, experience: 1, gpa: 3 },
    applications: []},
  { name: "Lucas Wang", email: "l.wang@uni.edu", degree: "MSc Finance", phone: "+44 7944 456789", status: "placed" as const, avatar: "LW",
    spider: { certifications: 3, languages: 3, projects: 4, skills: 4, experience: 4, gpa: 5 },
    applications: [
      { company: "JP Morgan", role: "Analyst", status: "Offered" },
      { company: "HSBC", role: "Graduate", status: "Offered" },
      { company: "Barclays", role: "Analyst", status: "Interview" },
      { company: "Citi", role: "Associate", status: "Rejected" },
    ]},
  { name: "Emma Johnson", email: "e.johnson@uni.edu", degree: "Dual Bachelors in Business & Data Analytics", phone: "+44 7955 567890", status: "in_progress" as const, avatar: "EJ",
    spider: { certifications: 3, languages: 2, projects: 3, skills: 3, experience: 2, gpa: 4 },
    applications: [
      { company: "PwC", role: "Consultant", status: "Interview" },
      { company: "EY", role: "Analyst", status: "Applied" },
      { company: "Accenture", role: "Analyst", status: "Submitted" },
    ]},
  { name: "Omar Hassan", email: "o.hassan@uni.edu", degree: "MEng Electrical Engineering", phone: "+44 7966 678901", status: "placed" as const, avatar: "OH",
    spider: { certifications: 4, languages: 5, projects: 4, skills: 5, experience: 3, gpa: 4 },
    applications: [
      { company: "Siemens", role: "Engineer", status: "Offered" },
      { company: "Tesla", role: "Hardware Eng", status: "Interview" },
    ]},
  { name: "Mia Thompson", email: "m.thompson@uni.edu", degree: "BA Graphic Design", phone: "+44 7977 789012", status: "in_progress" as const, avatar: "MT",
    spider: { certifications: 2, languages: 2, projects: 5, skills: 4, experience: 2, gpa: 3 },
    applications: [
      { company: "Pentagram", role: "Junior Designer", status: "Interview" },
      { company: "IDEO", role: "Design Intern", status: "Applied" },
    ]},
  { name: "Daniel Kim", email: "d.kim@uni.edu", degree: "BSc Economics", phone: "+44 7988 890123", status: "nothing" as const, avatar: "DK",
    spider: { certifications: 1, languages: 1, projects: 1, skills: 2, experience: 1, gpa: 2 },
    applications: []},
  { name: "Aisha Begum", email: "a.begum@uni.edu", degree: "M.Sc. Data Science", phone: "+44 7999 901234", status: "placed" as const, avatar: "AB",
    spider: { certifications: 5, languages: 3, projects: 4, skills: 5, experience: 4, gpa: 5 },
    applications: [
      { company: "Amazon", role: "Data Scientist", status: "Offered" },
      { company: "Netflix", role: "ML Engineer", status: "Interview" },
      { company: "Spotify", role: "Data Analyst", status: "Rejected" },
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
          <p className="text-[10px] text-gray-500 mb-2">Application Tracker</p>
          {student.applications.length === 0 ? (
            <p className="text-[10px] text-gray-600 italic mb-3">No applications yet</p>
          ) : (
            <>
              {/* Funnel summary */}
              {(() => {
                const stages = [
                  { label: "Submitted", key: "Submitted", color: "bg-gray-400" },
                  { label: "Applied", key: "Applied", color: "bg-blue-400" },
                  { label: "Interview", key: "Interview", color: "bg-amber-400" },
                  { label: "Offered", key: "Offered", color: "bg-emerald-400" },
                  { label: "Rejected", key: "Rejected", color: "bg-rose-400" },
                ];
                const total = student.applications.length;
                const counts = stages.map(s => ({
                  ...s,
                  count: student.applications.filter(a => a.status === s.key).length,
                })).filter(s => s.count > 0);

                return (
                  <div className="mb-3">
                    {/* Funnel bars */}
                    <div className="space-y-1 mb-2">
                      {counts.map((s) => (
                        <div key={s.label} className="flex items-center gap-2">
                          <span className="text-[8px] text-gray-500 w-14 text-right">{s.label}</span>
                          <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${s.color} rounded-full flex items-center pl-1.5`} style={{ width: `${(s.count / total) * 100}%`, minWidth: '20%' }}>
                              <span className="text-[7px] text-white font-bold">{s.count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-[9px] text-gray-500">Total: {total} applications</span>
                    </div>

                    {/* Application list */}
                    <div className="space-y-1">
                      {student.applications.map((app) => {
                        const stageOrder = ["Submitted", "Applied", "Interview", "Offered", "Rejected"];
                        const stageIdx = stageOrder.indexOf(app.status);
                        const isRejected = app.status === "Rejected";
                        return (
                          <div key={app.company + app.role} className="bg-white/[0.03] border border-white/5 rounded-md px-2 py-1.5">
                            <div className="flex items-center justify-between mb-1">
                              <div>
                                <p className="text-[10px] font-medium text-white">{app.role}</p>
                                <p className="text-[8px] text-gray-500">{app.company}</p>
                              </div>
                              <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded ${
                                app.status === "Offered" ? "bg-emerald-500/20 text-emerald-400" :
                                app.status === "Interview" ? "bg-amber-500/20 text-amber-400" :
                                app.status === "Rejected" ? "bg-rose-500/20 text-rose-400" :
                                app.status === "Applied" ? "bg-blue-500/20 text-blue-400" :
                                "bg-gray-500/20 text-gray-400"
                              }`}>{app.status}</span>
                            </div>
                            {/* Stage progress dots */}
                            <div className="flex items-center gap-0.5">
                              {["Submitted", "Applied", "Interview", "Offered"].map((stage, i) => (
                                <div key={stage} className="flex items-center">
                                  <div className={`w-1.5 h-1.5 rounded-full ${
                                    isRejected ? (i <= Math.min(stageIdx, 2) ? "bg-rose-400" : "bg-white/10") :
                                    i <= stageIdx ? "bg-primary" : "bg-white/10"
                                  }`} />
                                  {i < 3 && <div className={`w-3 h-[1px] ${
                                    isRejected ? (i < Math.min(stageIdx, 2) ? "bg-rose-400/50" : "bg-white/5") :
                                    i < stageIdx ? "bg-primary/50" : "bg-white/5"
                                  }`} />}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </>
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
        <div className="relative bg-[hsl(210,30%,12%)] rounded-lg overflow-hidden" style={{ height: 180 }}>
          {/* SVG World Map */}
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* Ocean background */}
            <rect width="800" height="400" fill="hsl(210,30%,15%)" />
            {/* Simplified continent paths */}
            {/* North America */}
            <path d="M80,60 L120,45 L180,50 L200,70 L210,100 L200,130 L180,150 L160,160 L140,155 L120,170 L100,160 L80,130 L70,100 Z" fill="hsl(210,25%,22%)" stroke="hsl(210,20%,28%)" strokeWidth="0.5" />
            {/* South America */}
            <path d="M140,180 L170,175 L190,200 L200,240 L195,280 L180,310 L160,330 L145,320 L130,290 L125,250 L130,220 Z" fill="hsl(210,25%,22%)" stroke="hsl(210,20%,28%)" strokeWidth="0.5" />
            {/* Europe */}
            <path d="M340,50 L380,45 L420,55 L430,80 L420,100 L400,110 L370,105 L350,95 L340,80 Z" fill="hsl(210,25%,22%)" stroke="hsl(210,20%,28%)" strokeWidth="0.5" />
            {/* Africa */}
            <path d="M360,120 L400,115 L420,130 L430,170 L425,220 L410,260 L390,280 L370,275 L355,250 L350,210 L345,170 Z" fill="hsl(210,25%,22%)" stroke="hsl(210,20%,28%)" strokeWidth="0.5" />
            {/* Asia */}
            <path d="M440,40 L520,35 L600,50 L660,70 L680,100 L670,140 L640,160 L600,170 L550,160 L500,140 L460,120 L440,90 Z" fill="hsl(210,25%,22%)" stroke="hsl(210,20%,28%)" strokeWidth="0.5" />
            {/* Australia */}
            <path d="M620,240 L680,235 L720,250 L730,280 L710,300 L670,305 L640,290 L625,270 Z" fill="hsl(210,25%,22%)" stroke="hsl(210,20%,28%)" strokeWidth="0.5" />
            {/* Grid lines */}
            {[100,200,300].map(y => <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} stroke="hsl(210,20%,18%)" strokeWidth="0.3" />)}
            {[160,320,480,640].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" stroke="hsl(210,20%,18%)" strokeWidth="0.3" />)}
          </svg>
          {/* Interactive pins */}
          {[
            { x: "15%", y: "28%", city: "San Francisco", count: 28, salary: "$92K", color: "bg-purple-500", industry: "Technology" },
            { x: "20%", y: "25%", city: "New York", count: 42, salary: "$88K", color: "bg-blue-500", industry: "Finance" },
            { x: "18%", y: "32%", city: "Toronto", count: 15, salary: "$76K", color: "bg-emerald-500", industry: "Consulting" },
            { x: "44%", y: "22%", city: "London", count: 56, salary: "$85K", color: "bg-primary", industry: "Finance" },
            { x: "47%", y: "25%", city: "Berlin", count: 18, salary: "$72K", color: "bg-amber-500", industry: "Technology" },
            { x: "50%", y: "28%", city: "Dubai", count: 12, salary: "$95K", color: "bg-orange-500", industry: "Consulting" },
            { x: "62%", y: "22%", city: "Singapore", count: 24, salary: "$82K", color: "bg-cyan-500", industry: "Finance" },
            { x: "68%", y: "25%", city: "Tokyo", count: 19, salary: "$78K", color: "bg-rose-500", industry: "Technology" },
            { x: "72%", y: "30%", city: "Hong Kong", count: 16, salary: "$90K", color: "bg-amber-400", industry: "Finance" },
            { x: "80%", y: "62%", city: "Sydney", count: 14, salary: "$74K", color: "bg-emerald-400", industry: "Healthcare" },
            { x: "46%", y: "42%", city: "Lagos", count: 8, salary: "$45K", color: "bg-pink-500", industry: "Technology" },
            { x: "16%", y: "55%", city: "São Paulo", count: 11, salary: "$52K", color: "bg-violet-500", industry: "Finance" },
          ].map((pin, i) => (
            <div
              key={i}
              className="absolute cursor-pointer group"
              style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredPin(i)}
              onMouseLeave={() => setHoveredPin(null)}
            >
              {/* Pulse ring */}
              <div className={`absolute inset-0 ${pin.color} rounded-full animate-ping opacity-20`} style={{ width: 16, height: 16, margin: "auto" }} />
              {/* Pin dot */}
              <div className={`relative w-4 h-4 ${pin.color} rounded-full border-2 border-white/30 flex items-center justify-center shadow-lg transition-transform ${hoveredPin === i ? "scale-150 z-20" : "scale-100"}`}>
                <span className="text-[5px] text-white font-bold">{pin.count}</span>
              </div>
              {/* Tooltip on hover */}
              {hoveredPin === i && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[hsl(230,40%,13%)] border border-white/10 rounded-lg px-2.5 py-2 shadow-xl z-30 whitespace-nowrap animate-fade-in">
                  <p className="text-[10px] font-bold text-white">{pin.city}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${pin.color}`} />
                    <span className="text-[8px] text-gray-400">{pin.industry}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1 pt-1 border-t border-white/5">
                    <div>
                      <p className="text-[7px] text-gray-500">Placements</p>
                      <p className="text-[10px] font-bold text-white">{pin.count}</p>
                    </div>
                    <div>
                      <p className="text-[7px] text-gray-500">Avg Salary</p>
                      <p className="text-[10px] font-bold text-emerald-400">{pin.salary}</p>
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
            <g key={v}><line x1="25" y1={55 - ((v - 2) / 3) * 45} x2="215" y2={55 - ((v - 2) / 3) * 45} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" /><text x="22" y={57 - ((v - 2) / 3) * 45} textAnchor="end" fill="#6b7280" fontSize="4">{v.toFixed(1)}</text></g>
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

const TemplateEditorContent = ({ onBack }: { onBack: () => void }) => (
  <>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" /></svg>
        </div>
        <div>
          <p className="text-xs font-medium text-white">Dual Degree Business & Data</p>
          <p className="text-[9px] text-gray-500">Edit grading template</p>
        </div>
      </div>
      <button className="text-[9px] bg-primary hover:bg-primary/90 text-white px-2.5 py-1 rounded-md font-medium transition-colors">Save</button>
    </div>

    <div className="grid grid-cols-[70px_1fr] gap-2">
      {/* Donut */}
      <div>
        <p className="text-[8px] text-gray-500 mb-1">Weights</p>
        <MiniDonut />
        <div className="mt-1 space-y-0.5">
          {rubricSections.map((s) => (
            <div key={s.name} className="flex items-center gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
              <span className="text-[7px] text-gray-500">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-2 overflow-y-auto max-h-[420px] pr-1">
        {rubricSections.map((section) => (
          <div key={section.name} className="bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-2">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${section.color}`} />
                <span className="text-[10px] font-semibold text-white">{section.name}</span>
              </div>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400`}>{section.pct}% total</span>
            </div>
            <div className={`h-0.5 ${section.color} rounded-full mb-1.5`} style={{ width: `${section.pct * 2}%` }} />
            <div className="space-y-1">
              {section.subs.map((sub) => (
                <div key={sub.label} className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400 flex-1">{sub.label}</span>
                  <div className="w-12 h-1 bg-white/5 rounded-full">
                    <div className={`h-full ${section.color} rounded-full`} style={{ width: `${sub.weight * 10}%` }} />
                  </div>
                  <span className="text-[8px] text-gray-500 w-5 text-right border border-white/10 rounded px-0.5">{sub.weight}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

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
        <div key={t.name} className="bg-white/[0.03] border border-white/5 rounded-lg p-3 hover:bg-white/[0.06] transition-colors cursor-pointer">
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
  const [selectedStudent, setSelectedStudent] = useState<typeof studentsData[0] | null>(null);
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isExpanded) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    if (!isExpanded) setTilt({ x: 0, y: 0 });
  };

  const handleFirstClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTilt({ x: 0, y: 0 });
    }
  };

  const renderContent = () => {
    if (activeTab === 1 && selectedStudent) {
      return <StudentDetailContent student={selectedStudent} onBack={() => setSelectedStudent(null)} />;
    }
    if (activeTab === 5 && showTemplateEditor) {
      return <TemplateEditorContent onBack={() => setShowTemplateEditor(false)} />;
    }
    switch (activeTab) {
      case 0: return <OverviewContent />;
      case 1: return <StudentsContent onSelectStudent={setSelectedStudent} />;
      case 2: return <AnalyticsContent />;
      case 3: return <QualificationInsightsContent />;
      case 4: return <MarketInsightsContent />;
      case 5: return <ResumeTemplatesContent onOpenEditor={() => setShowTemplateEditor(true)} />;
      case 6: return <JobEventPostingsContent />;
      default: return <OverviewContent />;
    }
  };

  return (
    <>
      {/* Overlay backdrop when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] animate-fade-in cursor-pointer"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleFirstClick}
        className={`rounded-xl overflow-hidden shadow-precision-lg bg-[hsl(230,40%,11%)] border border-white/5 transition-all duration-500 ease-out ${
          isExpanded
            ? "fixed top-[3%] left-[5%] right-[5%] bottom-[3%] z-[100] cursor-default"
            : "relative cursor-pointer"
        }`}
        style={
          isExpanded
            ? { transform: "none" }
            : {
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
              }
        }
      >
        {/* Expand hint when not expanded */}
        {!isExpanded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-xl">
            <div className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              Click to explore live demo
            </div>
          </div>
        )}

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
          {isExpanded && (
            <button
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>

        {/* App content */}
        <div className={`flex ${isExpanded ? "h-[calc(100%-40px)]" : "min-h-[540px]"}`}>
          {/* Sidebar */}
          <div className={`${isExpanded ? "w-52" : "w-44"} border-r border-white/5 p-4 hidden sm:block`}>
            <p className="text-sm font-bold text-white mb-5">ApplyLab</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Careers Team</p>
            <div className="space-y-0.5">
              {navItems.map((item, i) => (
                <div
                  key={item}
                  onClick={(e) => { e.stopPropagation(); setActiveTab(i); setSelectedStudent(null); setShowTemplateEditor(false); }}
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
          <div className={`flex-1 p-5 overflow-y-auto ${isExpanded ? "max-h-full" : "max-h-[540px]"}`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMockup;
