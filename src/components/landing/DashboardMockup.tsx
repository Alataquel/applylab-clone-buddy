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

const DashboardMockup = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

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
      <div className="flex min-h-[420px]">
        {/* Sidebar */}
        <div className="w-36 border-r border-white/5 p-4 hidden sm:block">
          <p className="text-sm font-bold text-white mb-5">ApplyLab</p>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Careers Team</p>
          <div className="space-y-0.5">
            {navItems.map((item, i) => (
              <div
                key={item}
                className={`text-xs px-3 py-2 rounded-md transition-colors ${
                  i === 0
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
        <div className="flex-1 p-5">
          {/* Metrics row */}
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

          {/* Bottom bar */}
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
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
