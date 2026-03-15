import { useState, useRef } from "react";

const navItems = ["Dashboard", "Job Board", "My CVs", "Tracking", "Analytics"];

const cohorts = [
  { name: "Business 2026", students: 342, placed: "68%", trend: "+12%", color: "bg-purple-500", letter: "B2" },
  { name: "Engineering 2026", students: 218, placed: "74%", trend: "+8%", color: "bg-blue-500", letter: "E2" },
  { name: "Arts & Design 2026", students: 156, placed: "61%", trend: "+15%", color: "bg-emerald-500", letter: "A2" },
  { name: "Finance 2026", students: 198, placed: "72%", trend: "+10%", color: "bg-rose-500", letter: "F2" },
  { name: "Marketing 2026", students: 124, placed: "65%", trend: "+7%", color: "bg-indigo-500", letter: "M2" },
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
      className="rounded-xl overflow-hidden shadow-precision-lg bg-[hsl(222,50%,11%)] border border-white/5 transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(222,45%,9%)] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-gray-500 bg-white/5 px-4 py-1 rounded-md">applylab.software/dashboard</span>
        </div>
      </div>

      {/* App content */}
      <div className="flex min-h-[420px]">
        {/* Sidebar */}
        <div className="w-36 border-r border-white/5 p-4 hidden sm:block">
          <p className="text-sm font-bold text-white mb-5">ApplyLab</p>
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
          <p className="text-xs text-gray-500 mb-4">Top matches · Today</p>

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
                <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full">{c.placed}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
              Optimise Resume
            </button>
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-5 h-3 bg-gray-600 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
