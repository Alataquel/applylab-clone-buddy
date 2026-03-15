import { useState, useRef } from "react";

const navItems = ["Students", "Analytics", "Qualification Insights", "Market Insights", "Resume Templates", "Job & Event Postings"];

const students = [
  { name: "Sarah Chen", email: "s.chen@uni.edu", cohort: "Business 2026", status: "Placed", statusColor: "text-emerald-400", avatar: "SC" },
  { name: "James Miller", email: "j.miller@uni.edu", cohort: "Engineering 2026", status: "Interviewing", statusColor: "text-blue-400", avatar: "JM" },
  { name: "Priya Patel", email: "p.patel@uni.edu", cohort: "Arts & Design 2026", status: "At Risk", statusColor: "text-rose-400", avatar: "PP" },
  { name: "Lucas Wang", email: "l.wang@uni.edu", cohort: "Finance 2026", status: "Placed", statusColor: "text-emerald-400", avatar: "LW" },
  { name: "Emma Johnson", email: "e.johnson@uni.edu", cohort: "Business 2026", status: "Applying", statusColor: "text-amber-400", avatar: "EJ" },
  { name: "Omar Hassan", email: "o.hassan@uni.edu", cohort: "Engineering 2026", status: "Placed", statusColor: "text-emerald-400", avatar: "OH" },
  { name: "Mia Thompson", email: "m.thompson@uni.edu", cohort: "Arts & Design 2026", status: "Interviewing", statusColor: "text-blue-400", avatar: "MT" },
  { name: "Daniel Kim", email: "d.kim@uni.edu", cohort: "Finance 2026", status: "At Risk", statusColor: "text-rose-400", avatar: "DK" },
];

const StudentsContent = () => (
  <>
    <div className="flex items-center justify-between mb-3">
      <p className="text-xs text-gray-500">All Students</p>
      <div className="flex gap-1.5">
        <div className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1">
          <span className="text-[10px] text-gray-400">Search...</span>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1">
          <span className="text-[10px] text-gray-400">Filter</span>
        </div>
      </div>
    </div>
    <div className="space-y-1.5">
      {students.map((s) => (
        <div key={s.name} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-3 py-2.5 transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0">{s.avatar}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white">{s.name}</p>
            <p className="text-[10px] text-gray-500">{s.email}</p>
          </div>
          <div className="text-right">
            <span className={`text-[10px] font-medium ${s.statusColor}`}>{s.status}</span>
            <p className="text-[9px] text-gray-600">{s.cohort}</p>
          </div>
        </div>
      ))}
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
