const matches = [
  { initials: "FG", color: "bg-purple-500", role: "Product Designer", company: "Figma", score: "98%" },
  { initials: "LN", color: "bg-blue-500", role: "Frontend Engineer", company: "Linear", score: "95%" },
  { initials: "SP", color: "bg-green-500", role: "Growth Analyst", company: "Spotify", score: "91%" },
  { initials: "MK", color: "bg-amber-500", role: "Strategy Associate", company: "McKinsey", score: "88%" },
  { initials: "DM", color: "bg-rose-500", role: "Data Scientist", company: "DeepMind", score: "85%" },
];

const navItems = ["Dashboard", "Internship Board", "My CVs", "Tracking", "Analytics"];

const DashboardMockup = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-precision-lg bg-card">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center text-xs text-muted-foreground">applylab.software</div>
      </div>

      {/* App content */}
      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-border/50 p-4 space-y-1 hidden sm:block">
          <p className="text-sm font-semibold text-foreground mb-4">ApplyLab</p>
          {navItems.map((item, i) => (
            <div
              key={item}
              className={`text-xs px-3 py-2 rounded-md ${
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
        <div className="flex-1 p-4 space-y-3">
          <p className="text-xs text-muted-foreground">Top matches · Today</p>
          {matches.map((m) => (
            <div key={m.initials} className="flex items-center gap-3 py-2">
              <div className={`w-8 h-8 rounded-lg ${m.color} flex items-center justify-center text-xs font-bold text-foreground`}>
                {m.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{m.role}</p>
                <p className="text-xs text-muted-foreground">{m.company}</p>
              </div>
              <span className="text-xs font-semibold text-emerald-400">{m.score}</span>
            </div>
          ))}
          <button className="w-full mt-2 py-2.5 rounded-lg text-sm font-medium text-foreground bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-opacity">
            Optimise Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
