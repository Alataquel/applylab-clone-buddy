import { useState, useRef } from "react";

const navItems = ["Overview", "Cohorts", "Students", "Reports", "Settings"];

const metrics = [
  { label: "Active Students", value: "1,284", change: "+12%", up: true },
  { label: "Placement Rate", value: "71%", change: "+4.2%", up: true },
  { label: "Avg. Engagement", value: "83%", change: "-2.1%", up: false },
];

const cohorts = [
  { name: "Business 2026", students: 342, placed: "68%", risk: 12, color: "bg-purple-500", letter: "B2" },
  { name: "Engineering 2026", students: 218, placed: "74%", risk: 5, color: "bg-blue-500", letter: "E2" },
  { name: "Arts & Design 2026", students: 156, placed: "61%", risk: 23, color: "bg-emerald-500", letter: "A2" },
  { name: "Finance 2026", students: 198, placed: "72%", risk: 8, color: "bg-rose-500", letter: "F2" },
];

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

const cohortStudents: Record<string, typeof students> = {
  "Business 2026": [
    { name: "Sarah Chen", email: "s.chen@uni.edu", cohort: "Business 2026", status: "Placed", statusColor: "text-emerald-400", avatar: "SC" },
    { name: "Emma Johnson", email: "e.johnson@uni.edu", cohort: "Business 2026", status: "Applying", statusColor: "text-amber-400", avatar: "EJ" },
    { name: "Alex Rivera", email: "a.rivera@uni.edu", cohort: "Business 2026", status: "Interviewing", statusColor: "text-blue-400", avatar: "AR" },
  ],
  "Engineering 2026": [
    { name: "James Miller", email: "j.miller@uni.edu", cohort: "Engineering 2026", status: "Interviewing", statusColor: "text-blue-400", avatar: "JM" },
    { name: "Omar Hassan", email: "o.hassan@uni.edu", cohort: "Engineering 2026", status: "Placed", statusColor: "text-emerald-400", avatar: "OH" },
  ],
  "Arts & Design 2026": [
    { name: "Priya Patel", email: "p.patel@uni.edu", cohort: "Arts & Design 2026", status: "At Risk", statusColor: "text-rose-400", avatar: "PP" },
    { name: "Mia Thompson", email: "m.thompson@uni.edu", cohort: "Arts & Design 2026", status: "Interviewing", statusColor: "text-blue-400", avatar: "MT" },
  ],
  "Finance 2026": [
    { name: "Lucas Wang", email: "l.wang@uni.edu", cohort: "Finance 2026", status: "Placed", statusColor: "text-emerald-400", avatar: "LW" },
    { name: "Daniel Kim", email: "d.kim@uni.edu", cohort: "Finance 2026", status: "At Risk", statusColor: "text-rose-400", avatar: "DK" },
  ],
};

const reportData = [
  { label: "Total Placements", value: "912", change: "+18%", up: true },
  { label: "Avg. Time to Place", value: "34 days", change: "-6 days", up: true },
  { label: "Employer Satisfaction", value: "94%", change: "+2.1%", up: true },
];

const OverviewContent = () => (
  <>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] text-gray-500 mb-1">{m.label}</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">{m.value}</span>
            <span className={`text-[10px] font-medium ${m.up ? "text-emerald-400" : "text-rose-400"}`}>{m.change}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-500 mb-3">Cohort Overview</p>
    <div className="space-y-2">
      {cohorts.map((c) => (
        <div key={c.name} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-4 py-3 transition-colors">
          <div className={`w-9 h-9 rounded-lg ${c.color} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}>
            {c.letter}
          </div>
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
    <div className="mt-4 flex gap-2 items-center">
      <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-lg px-4 py-2.5 flex-shrink-0">
        <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </div>
        <div>
          <p className="text-xs font-medium text-white">1,284 active students</p>
          <p className="text-[10px] text-gray-500">Across 4 cohorts</p>
        </div>
      </div>
      <button className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
        Generate Report
      </button>
    </div>
  </>
);

const CohortsContent = ({ onSelectCohort }: { onSelectCohort: (name: string) => void }) => (
  <>
    <p className="text-xs text-gray-500 mb-3">All Cohorts</p>
    <div className="space-y-2">
      {cohorts.map((c) => (
        <div
          key={c.name}
          onClick={() => onSelectCohort(c.name)}
          className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-4 py-3 transition-colors cursor-pointer"
        >
          <div className={`w-9 h-9 rounded-lg ${c.color} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}>
            {c.letter}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">{c.name}</p>
            <p className="text-[11px] text-gray-500">{c.students} students</p>
          </div>
          <div className="text-right flex items-center gap-2">
            <div>
              <span className="text-sm font-semibold text-emerald-400">{c.placed}</span>
              <p className="text-[10px] text-gray-500">{c.risk} at risk</p>
            </div>
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4">
      <button className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-gray-400 text-xs font-medium py-2.5 rounded-lg transition-colors">
        + Create New Cohort
      </button>
    </div>
  </>
);

const CohortDetailContent = ({ cohortName, onBack }: { cohortName: string; onBack: () => void }) => {
  const cohortInfo = cohorts.find(c => c.name === cohortName);
  const studentList = cohortStudents[cohortName] || [];
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className={`w-7 h-7 rounded-md ${cohortInfo?.color} flex items-center justify-center text-[9px] font-bold text-white`}>
          {cohortInfo?.letter}
        </div>
        <p className="text-sm font-medium text-white">{cohortName}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <p className="text-[10px] text-gray-500">Students</p>
          <p className="text-base font-bold text-white">{cohortInfo?.students}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <p className="text-[10px] text-gray-500">Placed</p>
          <p className="text-base font-bold text-emerald-400">{cohortInfo?.placed}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
          <p className="text-[10px] text-gray-500">At Risk</p>
          <p className="text-base font-bold text-rose-400">{cohortInfo?.risk}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-2">Students in {cohortName}</p>
      <div className="space-y-1.5">
        {studentList.map((s) => (
          <div key={s.name} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-3 py-2.5 transition-colors">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary flex-shrink-0">{s.avatar}</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white">{s.name}</p>
              <p className="text-[10px] text-gray-500">{s.email}</p>
            </div>
            <span className={`text-[10px] font-medium ${s.statusColor}`}>{s.status}</span>
          </div>
        ))}
      </div>
    </>
  );
};

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

const ReportsContent = () => (
  <>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {reportData.map((m) => (
        <div key={m.label} className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5">
          <p className="text-[10px] text-gray-500 mb-1">{m.label}</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">{m.value}</span>
            <span className="text-[10px] font-medium text-emerald-400">{m.change}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-500 mb-3">Recent Reports</p>
    <div className="space-y-2">
      {["Q4 Placement Summary", "Monthly Engagement", "Cohort Performance"].map((r) => (
        <div key={r} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-lg px-4 py-3 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-white">{r}</p>
            <p className="text-[10px] text-gray-500">Generated 2 days ago</p>
          </div>
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </div>
      ))}
    </div>
    <div className="mt-4">
      <button className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
        Generate New Report
      </button>
    </div>
  </>
);

const SettingsContent = () => (
  <>
    <p className="text-xs text-gray-500 mb-4">Platform Settings</p>
    <div className="space-y-3">
      {[
        { label: "University Name", value: "Oxford University", type: "text" },
        { label: "Notification Email", value: "careers@oxford.edu", type: "text" },
        { label: "Auto-Reports", value: "Enabled", type: "toggle" },
        { label: "Risk Threshold", value: "30 days inactive", type: "text" },
      ].map((s) => (
        <div key={s.label} className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3">
          <div>
            <p className="text-xs font-medium text-white">{s.label}</p>
            <p className="text-[10px] text-gray-500">{s.value}</p>
          </div>
          {s.type === "toggle" ? (
            <div className="w-8 h-4 rounded-full bg-primary relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white" />
            </div>
          ) : (
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
          )}
        </div>
      ))}
    </div>
  </>
);

const DashboardMockup = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCohort, setSelectedCohort] = useState<string | null>(null);
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
      case 0: return <OverviewContent />;
      case 1: return selectedCohort 
        ? <CohortDetailContent cohortName={selectedCohort} onBack={() => setSelectedCohort(null)} />
        : <CohortsContent onSelectCohort={setSelectedCohort} />;
      case 2: return <StudentsContent />;
      case 3: return <ReportsContent />;
      case 4: return <SettingsContent />;
      default: return <OverviewContent />;
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
        <div className="w-40 border-r border-white/5 p-4 hidden sm:block">
          <p className="text-sm font-bold text-white mb-5">ApplyLab</p>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Careers Team</p>
          <div className="space-y-0.5">
            {navItems.map((item, i) => (
              <div
                key={item}
                onClick={() => { setActiveTab(i); setSelectedCohort(null); }}
                className={`text-xs px-3 py-2 rounded-md transition-colors cursor-pointer ${
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
