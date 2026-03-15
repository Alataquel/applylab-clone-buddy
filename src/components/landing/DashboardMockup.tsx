import { useState, useRef } from "react";

const navItems = ["Overview", "Students", "Qualifications", "Market", "Reports"];

const cohorts = [
  { name: "Business 2026", students: 342, placed: "68%", trend: "+12%" },
  { name: "Engineering 2026", students: 218, placed: "74%", trend: "+8%" },
  { name: "Arts & Design 2026", students: 156, placed: "61%", trend: "+15%" },
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
      className="rounded-xl overflow-hidden shadow-precision-lg bg-card transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 text-center text-xs text-muted-foreground">applylab.software/dashboard</div>
      </div>

      {/* App content */}
      <div className="flex min-h-[400px]">
        {/* Sidebar */}
        <div className="w-44 border-r border-border/50 p-5 space-y-1 hidden sm:block">
          <p className="text-sm font-semibold text-foreground mb-5">ApplyLab</p>
          {navItems.map((item, i) => (
            <div
              key={item}
              className={`text-xs px-3 py-2.5 rounded-md ${
                i === 0
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 space-y-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Active students", value: "716" },
              { label: "Placement rate", value: "68%" },
              { label: "Avg. applications", value: "14.2" },
            ].map((s) => (
              <div key={s.label} className="bg-secondary rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-foreground leading-tight">{s.value}</p>
                <p className="text-[11px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Cohort table */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Cohort performance</p>
            <div className="space-y-2">
              {cohorts.map((c) => (
                <div key={c.name} className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="text-[11px] text-muted-foreground">{c.students} students</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{c.placed}</p>
                    <p className="text-[11px] text-emerald-400">{c.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini bar chart */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Weekly application volume</p>
            <div className="flex items-end gap-1.5 h-16">
              {[35, 50, 42, 65, 58, 72, 68, 80, 75, 90, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-primary/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
