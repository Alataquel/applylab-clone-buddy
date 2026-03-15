import { useState, useEffect } from "react";
import { LayoutGrid, ClipboardList, FileText, ChevronDown, Briefcase, CalendarDays, Video, User, Settings, UserCircle, Mail, Search, MapPin, Clock, Bookmark, ExternalLink, Eye, Pencil, Trash2, ArrowRight, RotateCcw, FileCheck, Sparkles, GraduationCap, X, Check } from "lucide-react";

const navIcons = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Tracker", icon: ClipboardList },
  { label: "Resume", icon: FileText, hasDropdown: true },
  { label: "Job Board", icon: Briefcase },
  { label: "Events", icon: CalendarDays },
  { label: "Meetings", icon: Video },
];

/* ─── Dashboard Tab ─── */
const DashboardContent = () => (
  <>
    {/* Hero welcome */}
    <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-xl px-6 py-8 mb-5 text-center">
      <h2 className="text-lg font-bold text-foreground mb-1">Welcome Antonio!</h2>
      <p className="text-[10px] text-muted-foreground">The world is changing, the way you apply should too!</p>
    </div>

    {/* Quick actions */}
    <div className="grid grid-cols-3 gap-2 mb-5">
      {[
        { Icon: UserCircle, title: "Complete Your Profile", desc: "Update your information to improve your opportunities" },
        { Icon: Briefcase, title: "Start Looking for Jobs", desc: "Find opportunities that match your profile" },
        { Icon: Mail, title: "Email Status Tracking", desc: "Automatically track your applications", badge: "New" },
      ].map((a) => (
        <div key={a.title} className="bg-card border border-border rounded-lg px-3 py-3 relative">
          {a.badge && (
            <span className="absolute top-2 right-2 text-[6px] bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 font-bold">{a.badge}</span>
          )}
          <a.Icon className="w-4 h-4 mb-1" style={{ color: "hsl(228, 76%, 35%)" }} strokeWidth={1.8} />
          <p className="text-[9px] font-semibold text-foreground leading-tight">{a.title}</p>
          <p className="text-[7px] text-muted-foreground mt-0.5 leading-tight">{a.desc}</p>
        </div>
      ))}
    </div>

    {/* Recent Applications */}
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold text-foreground">Recent Applications</p>
        <div className="flex gap-1.5">
          <button className="text-[7px] border border-border rounded px-2 py-0.5 text-muted-foreground">Add Manually</button>
          <button className="text-[7px] text-primary font-medium">View All</button>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1fr_1.5fr_0.6fr_0.6fr] gap-1 px-3 py-1.5 border-b border-border">
          {["COMPANY", "POSITION", "DATE APPLIED", "STATUS"].map((h) => (
            <span key={h} className="text-[6px] text-muted-foreground font-semibold uppercase tracking-wider">{h}</span>
          ))}
        </div>
        {[
          { company: "CT Digital Forum", logo: "CD", color: "bg-pink-500", position: "Frontend Developer (React, Typescript)", date: "2/25/2026", status: "Applied", statusColor: "text-primary bg-primary/10" },
          { company: "Deloitte", logo: "D", color: "bg-blue-600", position: "Consultant junior Transaction Services", date: "1/24/2026", status: "Second Round", statusColor: "text-foreground bg-secondary" },
          { company: "Decathlon France", logo: "D", color: "bg-emerald-500", position: "STAGE Créateur de Contenu & Automatisation", date: "12/19/2025", status: "Offer Extended", statusColor: "text-emerald-600 bg-emerald-500/10" },
          { company: "PerspectivIA", logo: "P", color: "bg-purple-500", position: "Alternance Employé(e) Polyvalent(e)", date: "12/12/2025", status: "Interview Invited", statusColor: "text-primary bg-primary/10" },
        ].map((app) => (
          <div key={app.company} className="grid grid-cols-[1fr_1.5fr_0.6fr_0.6fr] gap-1 px-3 py-2 items-center border-b border-border/50 last:border-b-0">
            <div className="flex items-center gap-1.5">
              <div className={`w-5 h-5 rounded-md ${app.color} flex items-center justify-center text-[6px] font-bold text-white`}>{app.logo}</div>
              <span className="text-[8px] font-medium text-foreground">{app.company}</span>
            </div>
            <span className="text-[7px] text-muted-foreground truncate">{app.position}</span>
            <span className="text-[7px] text-muted-foreground">{app.date}</span>
            <span className={`text-[6px] font-medium rounded-full px-1.5 py-0.5 w-fit ${app.statusColor}`}>{app.status}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Application Status - Donut Chart */}
    <div className="bg-card border border-border rounded-xl p-4 mb-5">
      <p className="text-[10px] font-bold text-foreground mb-3">Application Status</p>
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Donut chart */}
        <div className="flex justify-center">
          <svg viewBox="0 0 120 120" className="w-32 h-32">
            {/* Background circle */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="hsl(210, 40%, 96%)" strokeWidth="18" />
            {/* Applied - blue */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="hsl(228, 76%, 55%)" strokeWidth="18"
              strokeDasharray={`${(4/17)*283} ${283 - (4/17)*283}`} strokeDashoffset="0" transform="rotate(-90 60 60)" />
            {/* Second round - dark navy */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="hsl(228, 40%, 25%)" strokeWidth="18"
              strokeDasharray={`${(4/17)*283} ${283 - (4/17)*283}`} strokeDashoffset={`${-(4/17)*283}`} transform="rotate(-90 60 60)" />
            {/* Offer extended - emerald */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="hsl(160, 60%, 45%)" strokeWidth="18"
              strokeDasharray={`${(4/17)*283} ${283 - (4/17)*283}`} strokeDashoffset={`${-(8/17)*283}`} transform="rotate(-90 60 60)" />
            {/* Interview invited - dark */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="hsl(228, 30%, 35%)" strokeWidth="18"
              strokeDasharray={`${(3/17)*283} ${283 - (3/17)*283}`} strokeDashoffset={`${-(12/17)*283}`} transform="rotate(-90 60 60)" />
            {/* Accepted - bright green */}
            <circle cx="60" cy="60" r="45" fill="none" stroke="hsl(142, 71%, 45%)" strokeWidth="18"
              strokeDasharray={`${(2/17)*283} ${283 - (2/17)*283}`} strokeDashoffset={`${-(15/17)*283}`} transform="rotate(-90 60 60)" />
          </svg>
        </div>
        {/* Stats + Legend */}
        <div>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {[
              { label: "Interviews", value: "41%" },
              { label: "Offers", value: "24%" },
              { label: "Accepted", value: "12%" },
            ].map((s) => (
              <div key={s.label} className="border border-border rounded-md px-2 py-1.5">
                <p className="text-[6px] text-muted-foreground">{s.label}</p>
                <p className="text-sm font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: "Applied", count: 4, color: "bg-[hsl(228,76%,55%)]" },
              { label: "Second round", count: 4, color: "bg-[hsl(228,40%,25%)]" },
              { label: "Offer extended", count: 4, color: "bg-[hsl(160,60%,45%)]" },
              { label: "Interview invited", count: 3, color: "bg-[hsl(228,30%,35%)]" },
              { label: "Accepted", count: 2, color: "bg-[hsl(142,71%,45%)]" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1 border border-border rounded-full px-2 py-0.5">
                <div className={`w-2 h-2 rounded-full ${l.color}`} />
                <span className="text-[7px] text-foreground">{l.label}</span>
                <span className="text-[7px] text-muted-foreground">{l.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom row: Upcoming Events + Book a Meeting */}
    <div className="grid grid-cols-2 gap-3">
      {/* Upcoming Events */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" style={{ color: "hsl(228, 76%, 35%)" }} strokeWidth={1.8} />
            <p className="text-[10px] font-bold text-foreground">Upcoming Events</p>
          </div>
          <span className="text-[7px] text-primary font-medium flex items-center gap-0.5 cursor-pointer">View All <ArrowRight className="w-2.5 h-2.5" /></span>
        </div>
        <div className="space-y-2">
          {[
            { type: "In-Person", title: "NVIDIA GTC 2026", date: "Mon, Mar 16, 8 AM – Thu, Mar 19, 6 PM PDT", time: "8:00 AM - 6:00 PM", typeColor: "bg-rose-500" },
            { type: "In-Person", title: "Student & Community Voice AI Summit", date: "Thu, Mar 19, 5 PM – Sat, Mar 21, 12 PM", time: "5:00 PM - 12:00 PM", typeColor: "bg-rose-500" },
            { type: "Virtual", title: "HYBRID Workshop Vestibular Rehabilitation & Concussion Certification (Mar 21, 2026)", date: "Sat, Mar 21", time: "12:00 PM - Invalid Date", typeColor: "bg-emerald-600" },
          ].map((ev) => (
            <div key={ev.title} className="border border-border rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`text-[5px] text-white font-bold rounded px-1 py-0.5 ${ev.typeColor}`}>{ev.type}</span>
                <p className="text-[8px] font-semibold text-foreground">{ev.title}</p>
              </div>
              <div className="flex items-center gap-2 text-[6px] text-muted-foreground mb-1.5">
                <span className="flex items-center gap-0.5"><CalendarDays className="w-2 h-2" /> {ev.date}</span>
                <span className="flex items-center gap-0.5"><Clock className="w-2 h-2" /> {ev.time}</span>
                <span className="flex items-center gap-0.5"><MapPin className="w-2 h-2" /> {ev.type}</span>
              </div>
              <button className="text-[7px] border border-border rounded px-2 py-0.5 text-muted-foreground flex items-center gap-0.5">Register <ExternalLink className="w-2 h-2" /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Book a Meeting */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5" style={{ color: "hsl(228, 76%, 35%)" }} strokeWidth={1.8} />
            <p className="text-[10px] font-bold text-foreground">Book a Meeting</p>
          </div>
          <span className="text-[7px] text-primary font-medium flex items-center gap-0.5 cursor-pointer">All Advisors <ArrowRight className="w-2.5 h-2.5" /></span>
        </div>
        <p className="text-[7px] text-muted-foreground mb-3">Schedule a one-on-one session with our career advisors to get personalized guidance.</p>
        <div className="space-y-2">
          {[
            { name: "Rania", specialty: "Tech Industry, Graduate Studies", initials: "R", color: "bg-primary" },
            { name: "Yan Bernard", specialty: "Resume Review, Academic Advising", initials: "YB", color: "bg-gray-400" },
          ].map((adv) => (
            <div key={adv.name} className="border border-border rounded-lg px-3 py-2.5 flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded-full ${adv.color} flex items-center justify-center text-[8px] font-bold text-white`}>{adv.initials}</div>
              <div className="flex-1">
                <p className="text-[9px] font-semibold text-foreground">{adv.name}</p>
                <p className="text-[7px] text-muted-foreground">{adv.specialty}</p>
              </div>
              <button className="text-[7px] bg-primary text-primary-foreground rounded px-2.5 py-1 font-medium">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

/* ─── Application Tracker Tab ─── */
const TrackerContent = () => {
  const columns = [
    {
      stage: "Applied", count: 4, color: "border-primary",
      items: [
        { title: "Frontend Developer (React,Typescript)", company: "CT Digital Forum", date: "2/25/2026", days: "18d" },
        { title: "Service Desk Team Member", company: "The Warehouse", date: "10/23/2025", days: "143d" },
      ],
    },
    {
      stage: "Interview", count: 3, color: "border-amber-400",
      items: [
        { title: "Alternance Employé(e) Polyvalent(e)", company: "PerspectivIA", date: "12/12/2025", days: "93d" },
        { title: "test", company: "Test", date: "12/5/2025", days: "100d" },
      ],
    },
    {
      stage: "2nd Round", count: 4, color: "border-blue-400",
      items: [
        { title: "Consultant junior Transaction Services", company: "Deloitte", date: "1/24/2026", days: "50d" },
        { title: "Data Analyst", company: "Test", date: "11/27/2025", days: "108d" },
      ],
    },
    {
      stage: "Offer", count: 4, color: "border-emerald-400",
      items: [
        { title: "STAGE Créateur de Contenu & Automatisation", company: "Decathlon France", date: "12/19/2025", days: "86d" },
        { title: "Backend Software Engineer", company: "Revolut", date: "11/3/2025", days: "132d" },
      ],
    },
    {
      stage: "Accepted", count: 2, color: "border-emerald-500",
      items: [
        { title: "tudo", company: "New test", date: "12/5/2025", days: "100d" },
        { title: "CFO", company: "ApplyLab", date: "11/27/2025", days: "108d" },
      ],
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-foreground italic">Application Tracker</h3>
          <p className="text-[7px] text-muted-foreground">Drag and drop cards to update their status.</p>
        </div>
        <div className="flex gap-1.5">
          <button className="text-[7px] bg-primary text-primary-foreground rounded px-2 py-1 font-medium">+ Add Application</button>
          <button className="text-[7px] border border-border rounded px-2 py-1 text-muted-foreground">Add Manually</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-3 border-b border-border pb-1.5">
        {["All (17)", "Applied (4)", "Interview (3)", "2nd Round (4)", "Offer (4)", "Accepted (2)", "Rejected (0)"].map((t, i) => (
          <span key={t} className={`text-[7px] font-medium pb-1 ${i === 0 ? "text-foreground border-b-2 border-primary" : "text-muted-foreground"}`}>{t}</span>
        ))}
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-5 gap-1.5">
        {columns.map((col) => (
          <div key={col.stage} className={`border-t-2 ${col.color} bg-card rounded-lg p-1.5`}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] font-semibold text-foreground">{col.stage}</span>
              <span className="text-[7px] text-muted-foreground bg-secondary rounded-full w-4 h-4 flex items-center justify-center">{col.count}</span>
            </div>
            <div className="space-y-1">
              {col.items.map((item) => (
                <div key={item.title} className="bg-background border border-border rounded-md p-1.5">
                  <p className="text-[7px] font-medium text-foreground leading-tight mb-0.5">{item.title}</p>
                  <p className="text-[6px] text-muted-foreground">{item.company} · {item.date}</p>
                  <span className="text-[6px] text-primary bg-primary/10 rounded px-1 py-0.5 mt-1 inline-block">{item.days}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

/* ─── Resume Tab (with sub-tabs) ─── */
const ResumeContent = ({ subTab }: { subTab: "grader" | "builder" | "coverLetters" }) => {
  return (
    <>
      {subTab === "grader" && <ResumeGraderContent />}
      {subTab === "builder" && <ResumeBuilderContent />}
      {subTab === "coverLetters" && <CoverLettersContent />}
    </>
  );
};

const ResumeGraderContent = () => {
  const [graderState, setGraderState] = useState<"idle" | "uploading" | "grading" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [showGradingInfo, setShowGradingInfo] = useState(false);

  const startGrading = () => {
    setGraderState("uploading");
    setProgress(0);
    setTimeout(() => {
      setGraderState("grading");
      let p = 0;
      const interval = setInterval(() => {
        p += Math.random() * 18 + 5;
        if (p >= 100) { p = 100; clearInterval(interval); setTimeout(() => setGraderState("done"), 400); }
        setProgress(Math.min(p, 100));
      }, 300);
    }, 1200);
  };

  const resetGrader = () => { setGraderState("idle"); setProgress(0); };

  if (graderState === "done") {
    const categories = [
      {
        name: "Education", weight: 20, score: 11.7, max: 20, color: "bg-amber-400", dotColor: "text-amber-500",
        summary: "The student has a relevant degree, but lacks GPA/grades and field of study relevance.",
        subs: [
          { name: "Degree level", desc: "The student has a dual degree in Business Administration and Data Analysis, which is highly relevant to the diploma.", wt: 9, raw: 90, weighted: 8.10, barColor: "bg-amber-400" },
          { name: "GPA / grades", desc: "The student does not provide GPA/grades information.", wt: 5, raw: 0, weighted: 0.00, barColor: "bg-gray-300" },
          { name: "Field of study relevance", desc: "The student's degree is relevant, but lacks specific details about the field of study.", wt: 6, raw: 60, weighted: 3.60, barColor: "bg-amber-400" },
        ],
      },
      {
        name: "Experience", weight: 35, score: 18.6, max: 35, color: "bg-orange-400", dotColor: "text-orange-500",
        summary: "The student has relevant work experience, but lacks quantifiable impact and career progression.",
        subs: [
          { name: "Number of experiences", desc: "The student has 5 relevant work experiences.", wt: 7, raw: 80, weighted: 5.60, barColor: "bg-amber-400" },
          { name: "Relevance to target role", desc: "The student's work experiences are highly relevant to the diploma.", wt: 8, raw: 80, weighted: 6.40, barColor: "bg-amber-400" },
          { name: "Quantifiable impact", desc: "The student does not provide quantifiable impact information.", wt: 7, raw: 20, weighted: 1.40, barColor: "bg-orange-300" },
          { name: "Career progression", desc: "The student's work experiences lack clear career progression.", wt: 5, raw: 40, weighted: 2.00, barColor: "bg-orange-300" },
        ],
      },
      {
        name: "Skills", weight: 20, score: 9.4, max: 20, color: "bg-amber-400", dotColor: "text-amber-500",
        summary: "The student has relevant technical skills, but lacks skill diversity and proficiency levels.",
        subs: [
          { name: "Relevant technical skills", desc: "The student has relevant technical skills such as Python and Financial Modeling.", wt: 8, raw: 80, weighted: 6.40, barColor: "bg-amber-400" },
          { name: "Skill proficiency levels", desc: "The student does not provide proficiency levels for their skills.", wt: 6, raw: 20, weighted: 1.20, barColor: "bg-orange-300" },
          { name: "Skill diversity", desc: "The student's skills lack diversity, with most being related to programming and tools.", wt: 3, raw: 20, weighted: 0.60, barColor: "bg-orange-300" },
          { name: "Soft skills", desc: "The student has some soft skills such as Chess and National Basketball.", wt: 3, raw: 40, weighted: 1.20, barColor: "bg-amber-400" },
        ],
      },
      {
        name: "Languages", weight: 5, score: 3.2, max: 5, color: "bg-emerald-500", dotColor: "text-emerald-500",
        summary: "The student has relevant languages, but lacks language certifications.",
        subs: [
          { name: "Number of languages", desc: "The student has 2 relevant languages.", wt: 2, raw: 80, weighted: 1.60, barColor: "bg-emerald-500" },
          { name: "Proficiency level", desc: "The student has native proficiency in English and Spanish.", wt: 2, raw: 80, weighted: 1.60, barColor: "bg-emerald-500" },
          { name: "Language certifications", desc: "The student does not provide language certifications.", wt: 1, raw: 0, weighted: 0.00, barColor: "bg-gray-300" },
        ],
      },
      {
        name: "Projects", weight: 8, score: 3.2, max: 8, color: "bg-emerald-500", dotColor: "text-emerald-500",
        summary: "The student has relevant projects, but lacks technical complexity and project relevance.",
        subs: [
          { name: "Number of projects", desc: "The student has 2 relevant projects.", wt: 3, raw: 60, weighted: 1.80, barColor: "bg-emerald-500" },
          { name: "Technical complexity", desc: "Projects show moderate technical depth.", wt: 3, raw: 40, weighted: 1.20, barColor: "bg-orange-300" },
          { name: "Project relevance", desc: "Projects are somewhat relevant to the target field.", wt: 2, raw: 10, weighted: 0.20, barColor: "bg-gray-300" },
        ],
      },
    ];

    return (
      <div className="max-h-[460px] overflow-y-auto pr-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="relative">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-foreground">Resume Grading Results</h3>
              <div
                className="relative"
                onMouseEnter={() => setShowGradingInfo(true)}
                onMouseLeave={() => setShowGradingInfo(false)}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center cursor-help">
                  <span className="text-[7px] font-bold text-primary">i</span>
                </div>
                {showGradingInfo && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 w-48 bg-foreground text-background rounded-lg px-3 py-2 shadow-lg z-50">
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-foreground" />
                    <p className="text-[7px] leading-relaxed font-medium">This grading is based on the weighting distributions set by your career advisor for your specific degree programme.</p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[7px] text-muted-foreground">Evaluated against the <span className="text-primary font-semibold">Dual Degree Business Administration and Data Analysis</span> template</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={resetGrader} className="text-[7px] border border-border rounded px-2 py-1 text-muted-foreground flex items-center gap-0.5"><RotateCcw className="w-2 h-2" /> Grade Again</button>
            <div className="border-2 border-orange-400 rounded-lg px-3 py-1.5 text-center">
              <p className="text-lg font-bold text-orange-500">48</p>
              <p className="text-[6px] text-muted-foreground uppercase tracking-wider font-semibold">Overall Score</p>
            </div>
          </div>
        </div>

        {/* Diploma Alignment */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg px-3 py-2 mb-3">
          <p className="text-[7px] font-bold text-primary uppercase tracking-wider mb-0.5">🎓 Diploma Alignment</p>
          <p className="text-[7px] text-primary">The student's diploma is highly relevant to the Dual Degree Business Administration and Data Analysis program.</p>
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-lg px-3 py-2 mb-3">
          <p className="text-[7px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Summary</p>
          <p className="text-[7px] text-foreground">The student has a good foundation, but lacks specific details and quantifiable impact in some areas.</p>
        </div>

        {/* Strengths */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 mb-3">
          <p className="text-[7px] font-bold text-emerald-700 mb-1">✓ Strengths</p>
          <ul className="text-[7px] text-emerald-700 space-y-0.5 ml-2">
            <li>Relevant work experience</li>
            <li>Technical skills such as Python and Financial Modeling</li>
            <li>Native proficiency in English and Spanish</li>
          </ul>
        </div>

        {/* Category Sections */}
        {categories.map((cat) => (
          <div key={cat.name} className="mb-3">
            {/* Category header */}
            <div className="bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-400 rounded-r-lg px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                <span className="text-[9px] font-bold text-foreground">{cat.name}</span>
                <span className="text-[6px] text-orange-500 bg-orange-100 rounded-full px-1.5 py-0.5 font-semibold">{cat.weight}% weight</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${cat.color}`} style={{ width: `${(cat.score / cat.max) * 100}%` }} />
                </div>
                <span className="text-[8px] font-bold text-orange-500">{cat.score} / {cat.max}</span>
              </div>
            </div>

            {/* Category summary */}
            <p className="text-[7px] text-muted-foreground italic px-3 py-1.5">{cat.summary}</p>

            {/* Sub-criteria table */}
            <div className="px-3">
              <div className="grid grid-cols-[2fr_0.4fr_0.6fr_0.5fr] gap-1 mb-1">
                <span className="text-[6px] text-muted-foreground uppercase tracking-wider font-semibold">Sub-Criterion</span>
                <span className="text-[6px] text-muted-foreground uppercase tracking-wider font-semibold text-right">Wt.</span>
                <span className="text-[6px] text-muted-foreground uppercase tracking-wider font-semibold text-right">Raw Score</span>
                <span className="text-[6px] text-muted-foreground uppercase tracking-wider font-semibold text-right">Weighted</span>
              </div>
              {cat.subs.map((sub) => (
                <div key={sub.name} className="grid grid-cols-[2fr_0.4fr_0.6fr_0.5fr] gap-1 py-1 border-t border-border/50 items-center">
                  <div>
                    <p className="text-[7px] font-semibold text-foreground">{sub.name}</p>
                    <p className="text-[6px] text-muted-foreground">{sub.desc}</p>
                  </div>
                  <span className="text-[7px] text-primary font-semibold text-right">{sub.wt}%</span>
                  <div className="flex items-center justify-end gap-1">
                    <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${sub.barColor}`} style={{ width: `${sub.raw}%` }} />
                    </div>
                    <span className="text-[7px] text-foreground">{sub.raw}</span>
                  </div>
                  <span className="text-[7px] font-bold text-foreground text-right">{sub.weighted.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <h3 className="text-sm font-bold text-foreground italic mb-0.5">How good is your Resume?</h3>
      <p className="text-[7px] text-muted-foreground mb-3">Upload your resume as PDF and get an instant review and suggestions.</p>

      {/* Step 1 */}
      <div className="border border-primary/30 rounded-lg p-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[6px] bg-primary text-primary-foreground rounded px-1.5 py-0.5 font-bold mr-1.5">STEP 1</span>
            <span className="text-[8px] font-semibold text-foreground">Choose your degree template scope</span>
          </div>
          <span className="text-[6px] text-primary bg-primary/10 rounded-full px-2 py-0.5">Selected: Dual Degree Business Administration and Data Analysis</span>
        </div>
        <p className="text-[7px] text-muted-foreground mb-1.5">Select your degree before grading so your review uses the right university rubric.</p>
        <div className="bg-secondary rounded-md px-2 py-1.5">
          <p className="text-[7px] text-muted-foreground mb-0.5">Degree</p>
          <div className="bg-card border border-border rounded px-2 py-1 text-[8px] text-foreground">Dual Degree Business Administration and Data Analysis</div>
          <p className="text-[6px] text-muted-foreground mt-1">Your selected degree is saved for your next upload.</p>
          <p className="text-[6px] text-primary mt-0.5">Using Dual Degree Business Administration and Data Analysis template</p>
        </div>
      </div>

      {/* Upload area + preview */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="border border-dashed border-border rounded-lg p-4 text-center">
          {graderState === "idle" && (
            <>
              <div className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-[8px] font-medium inline-block mb-1">Upload your Resume (PDF)</div>
              <p className="text-[7px] text-primary">or drop it here</p>
              <button onClick={startGrading} className="w-full bg-primary text-primary-foreground rounded-md py-1.5 text-[8px] font-medium mt-3 hover:bg-primary/90 transition-colors">Review my resume</button>
            </>
          )}
          {graderState === "uploading" && (
            <div className="py-4">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-[8px] font-semibold text-foreground">Uploading Antonio_Rossi_CV.pdf...</p>
              <p className="text-[7px] text-muted-foreground mt-0.5">Processing document</p>
            </div>
          )}
          {graderState === "grading" && (
            <div className="py-2">
              <Sparkles className="w-5 h-5 text-primary mx-auto mb-1.5 animate-pulse" />
              <p className="text-[8px] font-semibold text-foreground mb-1">Grading your resume...</p>
              <div className="w-full bg-secondary rounded-full h-1.5 mb-1">
                <div className="bg-primary h-1.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-[7px] text-muted-foreground">{Math.round(progress)}% — Analyzing against rubric template</p>
            </div>
          )}
        </div>
        <div className="border border-border rounded-lg p-4 flex items-center justify-center">
          {graderState === "idle" ? (
            <div className="text-center">
              <ExternalLink className="w-4 h-4 text-muted-foreground mb-1 mx-auto" />
              <p className="text-[8px] text-muted-foreground">Upload a PDF to preview.</p>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-50 rounded p-2">
              <div className="border-b border-gray-200 pb-1 mb-1.5">
                <p className="text-[8px] font-bold text-gray-800">Antonio Rossi</p>
                <p className="text-[6px] text-gray-500">Business & Data Analysis Student</p>
                <p className="text-[5px] text-gray-400">antonio.rossi@email.com · +34 612 345 678 · Madrid, Spain</p>
              </div>
              <p className="text-[5px] text-gray-400 font-semibold uppercase mb-0.5">Experience</p>
              <p className="text-[5px] text-gray-600">Data Analyst Intern — Deloitte</p>
              <p className="text-[5px] text-gray-600">Marketing Assistant — L'Oréal</p>
              <p className="text-[5px] text-gray-400 font-semibold uppercase mt-1 mb-0.5">Education</p>
              <p className="text-[5px] text-gray-600">Dual Degree Business Admin & Data Analysis</p>
              <p className="text-[5px] text-gray-400 font-semibold uppercase mt-1 mb-0.5">Skills</p>
              <p className="text-[5px] text-gray-600">Python, Financial Modeling, SQL, Tableau</p>
            </div>
          )}
        </div>
      </div>

      {/* What we check */}
      <div className="border border-border rounded-lg p-3">
        <p className="text-[9px] font-semibold text-foreground mb-2 flex items-center gap-1"><FileCheck className="w-3 h-3" /> What we check</p>
        <div className="grid grid-cols-2 gap-1.5">
          {["Contact", "Experiences", "Education", "Skills", "Summary", "Format"].map((c) => (
            <div key={c} className="flex items-center gap-1.5">
              <span className="text-[8px] text-muted-foreground">•</span>
              <span className="text-[8px] text-foreground">{c}</span>
            </div>
          ))}
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-md px-2 py-1.5 mt-2">
          <p className="text-[7px] text-muted-foreground flex items-start gap-1"><Sparkles className="w-2.5 h-2.5 shrink-0 mt-0.5" /> Keep descriptions concise and quantifiable. Adding measurable results is a great way to make your experiences more impactful.</p>
        </div>
      </div>
    </>
  );
};

const colorOptions = [
  { name: "Blue", class: "bg-blue-500", hex: "#3b82f6", hsl: "217 91% 60%" },
  { name: "Rose", class: "bg-rose-500", hex: "#f43f5e", hsl: "350 89% 60%" },
  { name: "Emerald", class: "bg-emerald-500", hex: "#10b981", hsl: "160 84% 39%" },
  { name: "Teal", class: "bg-teal-500", hex: "#14b8a6", hsl: "173 80% 40%" },
  { name: "Amber", class: "bg-amber-500", hex: "#f59e0b", hsl: "38 92% 50%" },
  { name: "Orange", class: "bg-orange-500", hex: "#f97316", hsl: "25 95% 53%" },
  { name: "Pink", class: "bg-pink-500", hex: "#ec4899", hsl: "330 81% 60%" },
  { name: "Purple", class: "bg-purple-500", hex: "#a855f7", hsl: "271 81% 65%" },
  { name: "Cyan", class: "bg-cyan-500", hex: "#06b6d4", hsl: "189 94% 43%" },
  { name: "Black", class: "bg-gray-900", hex: "#111827", hsl: "221 39% 11%" },
];

const templates = ["Modern", "Classic", "Minimal", "Executive"];

const ResumeBuilderContent = () => {
  const [fields, setFields] = useState({
    headline: "Frontend Developer & UX Designer",
    fullName: "Antonio Rossi",
    summary: "Creative frontend developer with 2+ years of experience building responsive web applications. Passionate about clean code, accessibility, and user-centered design. Proficient in React, TypeScript, and modern CSS frameworks.",
    email: "antonio.rossi@email.com",
    phone: "+39 345 678 9012",
    website: "antoniorossi.dev",
    location: "Milan, Italy",
    linkedin: "linkedin.com/in/antoniorossi",
    github: "github.com/arossi",
  });
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState("Modern");
  const [templateDropdownOpen, setTemplateDropdownOpen] = useState(false);

  const updateField = (key: string, value: string) => setFields(prev => ({ ...prev, [key]: value }));
  const autofillAll = () => setFields({
    headline: "Frontend Developer & UX Designer",
    fullName: "Antonio Rossi",
    summary: "Creative frontend developer with 2+ years of experience building responsive web applications. Passionate about clean code, accessibility, and user-centered design. Proficient in React, TypeScript, and modern CSS frameworks.",
    email: "antonio.rossi@email.com",
    phone: "+39 345 678 9012",
    website: "antoniorossi.dev",
    location: "Milan, Italy",
    linkedin: "linkedin.com/in/antoniorossi",
    github: "github.com/arossi",
  });
  const accentColor = colorOptions[selectedColor].hex;

  const isClassic = selectedTemplate === "Classic";
  const isMinimal = selectedTemplate === "Minimal";
  const isExecutive = selectedTemplate === "Executive";

  return (
    <div className="grid grid-cols-[0.8fr_1.4fr_0.8fr] gap-0">
      {/* Left sidebar - Editable Form */}
      <div className="bg-[hsl(228,50%,20%)] rounded-l-lg p-2.5 text-white space-y-2 max-h-[560px] overflow-y-auto">
        <button onClick={autofillAll} className="w-full text-[6px] text-blue-300 bg-blue-400/10 rounded px-1.5 py-1 border border-blue-400/20 hover:bg-blue-400/20 transition-colors font-medium">⚡ Autofill from profile</button>
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Basics</p>
        {([
          ["headline", "Headline"],
          ["fullName", "Full name"],
          ["summary", "Summary"],
          ["email", "Email"],
          ["phone", "Phone"],
          ["website", "Website"],
          ["location", "Location"],
          ["linkedin", "LinkedIn"],
          ["github", "GitHub"],
        ] as const).map(([key, label]) => (
          <div key={key}>
            <p className="text-[6px] text-white/50 mb-0.5">{label}</p>
            {key === "summary" ? (
              <textarea
                value={fields[key]}
                onChange={(e) => updateField(key, e.target.value)}
                className="w-full bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/90 outline-none focus:ring-1 focus:ring-blue-400/50 resize-none"
                rows={3}
              />
            ) : (
              <input
                type="text"
                value={fields[key]}
                onChange={(e) => updateField(key, e.target.value)}
                className="w-full bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/90 outline-none focus:ring-1 focus:ring-blue-400/50"
              />
            )}
          </div>
        ))}
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider mt-2">Experience</p>
        <button className="text-[7px] text-blue-300 border border-blue-400/30 rounded px-2 py-0.5">+ Add Experience</button>
      </div>

      {/* Center - Resume Preview */}
      <div className="bg-[hsl(228,40%,25%)] p-4 flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-3">
          <button className="text-[7px] text-blue-300">← Back to My CVs</button>
          <button className="text-[7px] text-blue-300 border border-blue-400/30 rounded px-2 py-0.5">⬇ Save as PDF</button>
        </div>
        <div className="bg-white rounded shadow-lg w-full border border-white/20 overflow-y-auto scrollbar-thin" style={{ fontFamily: isClassic ? "Georgia, serif" : isExecutive ? "Garamond, serif" : "Inter, sans-serif" }}>
          
          {/* MODERN template */}
          {!isClassic && !isMinimal && !isExecutive && (
            <div className="p-4">
              <div className="border-b-2 pb-2 mb-3" style={{ borderColor: accentColor }}>
                <h4 className="text-sm font-bold text-gray-900">{fields.fullName}</h4>
                <p className="text-[7px] text-gray-500">{fields.headline}</p>
                <div className="flex items-center gap-3 mt-1 text-[6px] text-gray-400">
                  <span>{fields.email}</span><span>{fields.phone}</span><span>{fields.location}</span>
                </div>
                <div className="flex items-center gap-3 mt-0.5 text-[6px]" style={{ color: accentColor }}>
                  <span>{fields.linkedin}</span><span>{fields.github}</span><span>{fields.website}</span>
                </div>
              </div>
              <ResumeBody accentColor={accentColor} summary={fields.summary} />
            </div>
          )}

          {/* CLASSIC template */}
          {isClassic && (
            <div className="p-4">
              <div className="text-center mb-3 pb-2 border-b border-gray-300">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{fields.fullName}</h4>
                <p className="text-[7px] text-gray-500 italic">{fields.headline}</p>
                <div className="flex items-center justify-center gap-2 mt-1 text-[6px] text-gray-400">
                  <span>{fields.email}</span><span>|</span><span>{fields.phone}</span><span>|</span><span>{fields.location}</span>
                </div>
              </div>
              <ResumeBody accentColor={accentColor} summary={fields.summary} sectionStyle="border-b border-gray-200 pb-1 mb-1" />
            </div>
          )}

          {/* MINIMAL template */}
          {isMinimal && (
            <div className="p-5">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-900">{fields.fullName}</h4>
                <p className="text-[7px] mt-0.5" style={{ color: accentColor }}>{fields.headline}</p>
                <div className="flex items-center gap-2 mt-1.5 text-[6px] text-gray-400">
                  <span>{fields.email}</span><span>·</span><span>{fields.phone}</span><span>·</span><span>{fields.location}</span>
                </div>
              </div>
              <ResumeBody accentColor={accentColor} summary={fields.summary} minimal />
            </div>
          )}

          {/* EXECUTIVE template */}
          {isExecutive && (
            <div className="flex">
              <div className="w-[35%] p-3" style={{ backgroundColor: accentColor + "12" }}>
                <h4 className="text-[10px] font-bold text-gray-900 mb-0.5">{fields.fullName}</h4>
                <p className="text-[6px] mb-2" style={{ color: accentColor }}>{fields.headline}</p>
                <div className="space-y-1.5 text-[6px] text-gray-500">
                  <p>{fields.email}</p><p>{fields.phone}</p><p>{fields.location}</p><p style={{ color: accentColor }}>{fields.linkedin}</p><p style={{ color: accentColor }}>{fields.github}</p>
                </div>
                <div className="mt-3">
                  <p className="text-[6px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Skills</p>
                  <div className="space-y-0.5 text-[6px] text-gray-600">
                    <p>TypeScript, JavaScript</p><p>React, Next.js, Node.js</p><p>Python, SQL</p><p>Git, Docker, Figma</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[6px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Languages</p>
                  <div className="space-y-0.5 text-[6px] text-gray-600">
                    <p>Italian — Native</p><p>English — C1</p><p>French — B1</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4">
                <ResumeBody accentColor={accentColor} summary={fields.summary} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right sidebar - Settings */}
      <div className="bg-[hsl(228,50%,20%)] rounded-r-lg p-2.5 space-y-2.5 text-white max-h-[560px] overflow-y-auto">
        <div>
          <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Preview</p>
          <label className="flex items-center gap-1.5 mt-1">
            <input type="checkbox" className="w-2.5 h-2.5 rounded" />
            <span className="text-[7px] text-white/60">Enforce one page</span>
          </label>
          <div className="text-[6px] text-white/40 mt-1 space-y-0.5">
            <p>• Changes are saved automatically</p>
            <p>• Preview updates in real-time</p>
          </div>
        </div>
        <div className="relative">
          <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Template</p>
          <button
            onClick={() => setTemplateDropdownOpen(!templateDropdownOpen)}
            className="w-full bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/70 mt-0.5 text-left flex items-center justify-between hover:bg-white/15 transition-colors"
          >
            {selectedTemplate}
            <ChevronDown className="w-2.5 h-2.5" />
          </button>
          {templateDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-0.5 bg-[hsl(228,50%,15%)] border border-white/10 rounded shadow-lg z-20">
              {templates.map((t) => (
                <button
                  key={t}
                  onClick={() => { setSelectedTemplate(t); setTemplateDropdownOpen(false); }}
                  className={`block w-full text-left px-2 py-1 text-[7px] transition-colors ${selectedTemplate === t ? "text-blue-300 bg-white/10" : "text-white/60 hover:bg-white/5 hover:text-white/80"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Colors</p>
          <p className="text-[6px] text-white/50">Primary Color</p>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: accentColor }} />
            <span className="text-[7px] text-white/70">{colorOptions[selectedColor].hex}</span>
          </div>
          <p className="text-[6px] text-white/50 mt-1">Quick Colors</p>
          <div className="flex gap-1 mt-0.5 flex-wrap">
            {colorOptions.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`w-3 h-3 rounded cursor-pointer transition-transform hover:scale-125 ${c.class} ${selectedColor === i ? "ring-1 ring-blue-300 ring-offset-1 ring-offset-[hsl(228,50%,20%)]" : ""}`}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Typography</p>
          <p className="text-[6px] text-white/50">Font Family</p>
          <div className="bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/70 mt-0.5">
            {isClassic ? "Georgia" : isExecutive ? "Garamond" : "Inter"}
          </div>
        </div>
        <div>
          <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Page Layout</p>
          <p className="text-[6px] text-white/50">Page Size</p>
          <div className="bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/70 mt-0.5">A4 (210 × 297 mm)</div>
        </div>
      </div>
    </div>
  );
};

/* Shared resume body across templates */
const ResumeBody = ({ accentColor, summary, sectionStyle, minimal }: { accentColor: string; summary: string; sectionStyle?: string; minimal?: boolean }) => (
  <div className={`space-y-2.5 ${minimal ? "space-y-3" : ""}`}>
    <div className={sectionStyle}>
      <p className="text-[7px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Professional Summary</p>
      <p className="text-[6px] text-gray-600 leading-relaxed">{summary}</p>
    </div>
    <div className={sectionStyle}>
      <p className="text-[7px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Professional Experience</p>
      <div className="mb-2">
        <div className="flex justify-between">
          <div><p className="text-[7px] font-semibold text-gray-800">Frontend Developer Intern</p><p className="text-[6px]" style={{ color: accentColor }}>Deloitte Digital</p></div>
          <div className="text-right"><p className="text-[6px] text-gray-500">Jun 2025 – Present</p><p className="text-[6px] text-gray-400">Milan, Italy</p></div>
        </div>
        <ul className="text-[6px] text-gray-600 ml-2 mt-0.5 space-y-0.5">
          <li>• Built reusable React component library used across 3 client projects, reducing dev time by 40%</li>
          <li>• Implemented responsive dashboards with real-time data visualization using D3.js and Chart.js</li>
          <li>• Collaborated with UX team to improve accessibility scores from 72 to 96 (Lighthouse)</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between">
          <div><p className="text-[7px] font-semibold text-gray-800">Web Developer (Freelance)</p><p className="text-[6px]" style={{ color: accentColor }}>Self-Employed</p></div>
          <div className="text-right"><p className="text-[6px] text-gray-500">Jan 2024 – May 2025</p><p className="text-[6px] text-gray-400">Remote</p></div>
        </div>
        <ul className="text-[6px] text-gray-600 ml-2 mt-0.5 space-y-0.5">
          <li>• Designed and developed 12+ responsive websites for small businesses and startups</li>
          <li>• Achieved 95+ PageSpeed scores through image optimization and lazy loading</li>
        </ul>
      </div>
    </div>
    <div className={sectionStyle}>
      <p className="text-[7px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Education</p>
      <div className="flex justify-between">
        <div><p className="text-[7px] font-semibold text-gray-800">MSc Computer Science</p><p className="text-[6px]" style={{ color: accentColor }}>Politecnico di Milano</p></div>
        <p className="text-[6px] text-gray-500">Sep 2024 – Present</p>
      </div>
      <div className="flex justify-between mt-1.5">
        <div><p className="text-[7px] font-semibold text-gray-800">BSc Computer Engineering</p><p className="text-[6px]" style={{ color: accentColor }}>Università degli Studi di Milano</p></div>
        <p className="text-[6px] text-gray-500">Sep 2021 – Jul 2024</p>
      </div>
    </div>
    {!minimal && (
      <>
        <div className={sectionStyle}>
          <p className="text-[7px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Technical Skills</p>
          <div className="grid grid-cols-2 gap-1 text-[6px] text-gray-600">
            <div><span className="font-semibold text-gray-700">Languages:</span> TypeScript, JavaScript, Python</div>
            <div><span className="font-semibold text-gray-700">Frameworks:</span> React, Next.js, Node.js</div>
            <div><span className="font-semibold text-gray-700">Tools:</span> Git, Docker, Figma, Jira</div>
            <div><span className="font-semibold text-gray-700">Cloud:</span> AWS, Vercel, Supabase</div>
          </div>
        </div>
        <div className={sectionStyle}>
          <p className="text-[7px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Languages</p>
          <div className="flex gap-3 text-[6px] text-gray-600">
            <span><span className="font-semibold text-gray-700">Italian</span> — Native</span>
            <span><span className="font-semibold text-gray-700">English</span> — C1</span>
            <span><span className="font-semibold text-gray-700">French</span> — B1</span>
          </div>
        </div>
      </>
    )}
  </div>
);

const fakeCoverLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the Software Engineer position at Google Inc. As a dual degree student in Business Administration and Data Analysis with hands-on experience in full-stack development, I am confident in my ability to contribute meaningfully to your engineering team.

During my internship at Deloitte Digital, I built reusable React component libraries used across 3 client projects, reducing development time by 40%. I implemented responsive dashboards with real-time data visualization and collaborated closely with UX teams to improve accessibility scores from 72 to 96. These experiences have sharpened both my technical skills and my ability to deliver user-centered solutions at scale.

My technical proficiency spans TypeScript, React, Node.js, Python, and cloud platforms including AWS and Supabase. I am particularly drawn to Google's commitment to building products that impact billions of users, and I believe my background in both business analysis and software engineering gives me a unique perspective on solving complex problems.

I would welcome the opportunity to discuss how my skills and experiences align with your team's goals.

Sincerely,
Antonio Rossi
Madrid, Spain | antonio.rossi@email.com | +34 612 345 678`;

const CoverLettersContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [companyName, setCompanyName] = useState("Google Inc.");
  const [jobDesc, setJobDesc] = useState("We are looking for a Software Engineer to join our team. You will work on large-scale distributed systems, collaborate with cross-functional teams, and build products used by billions of users worldwide.");
  const [tone, setTone] = useState("Professional");
  const [generatingState, setGeneratingState] = useState<"idle" | "generating" | "done">("idle");
  const [displayedLetter, setDisplayedLetter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const coverLetters = [
    { title: "Software Engineer at Apple", company: "Apple", role: "Software Engineer", date: "Mar 5, 2026" },
    { title: "Software Engineer at Apple", company: "Apple", role: "Software Engineer", date: "Feb 26, 2026" },
    { title: "Junior Analyst at Accenture", company: "Accenture", role: "Junior Analyst", date: "Feb 26, 2026" },
    { title: "Software Engineering at Apple", company: "apple", role: "software engineering", date: "Feb 25, 2026" },
    { title: "Backend Developer at Apple", company: "Apple", role: "Backend developer", date: "Feb 24, 2026" },
    { title: "Senior Data Analyst at Accenture", company: "Accenture", role: "Senior Data Analyst", date: "Feb 19, 2026" },
  ];

  const filteredLetters = coverLetters.filter(cl =>
    searchQuery === "" || cl.title.toLowerCase().includes(searchQuery.toLowerCase()) || cl.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startGeneration = () => {
    setGeneratingState("generating");
    setDisplayedLetter("");
    let i = 0;
    const interval = setInterval(() => {
      i += Math.floor(Math.random() * 3) + 1;
      if (i >= fakeCoverLetter.length) {
        setDisplayedLetter(fakeCoverLetter);
        setGeneratingState("done");
        clearInterval(interval);
      } else {
        setDisplayedLetter(fakeCoverLetter.slice(0, i));
      }
    }, 20);
  };

  const openModal = () => {
    setModalOpen(true);
    setGeneratingState("idle");
    setDisplayedLetter("");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-foreground italic">Cover Letter Maker</h3>
          <p className="text-[7px] text-muted-foreground">AI-powered professional cover letters</p>
        </div>
        <button onClick={openModal} className="text-[7px] bg-primary text-primary-foreground rounded px-2 py-1 font-medium hover:bg-primary/90 transition-colors">+ Create New Letter</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { IconComp: FileText, value: "6", label: "Total Cover Letters" },
          { IconComp: Sparkles, value: "6", label: "AI Generated" },
          { IconComp: Search, value: "0", label: "Drafts" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-lg px-3 py-2.5 flex items-center gap-2">
            <s.IconComp className="w-4 h-4" style={{ color: "hsl(228, 76%, 35%)" }} strokeWidth={1.8} />
            <div>
              <p className="text-sm font-bold text-foreground">{s.value}</p>
              <p className="text-[7px] text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 bg-secondary rounded-md px-2 py-1.5 text-[8px] flex items-center gap-1">
          <Search className="w-2.5 h-2.5 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cover letters..."
            className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground text-[8px]"
          />
        </div>
      </div>

      {/* Cover letter cards */}
      <div className="grid grid-cols-3 gap-2">
        {filteredLetters.map((cl, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-3 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[8px] font-semibold text-foreground">{cl.title}</p>
              <span className="text-[6px] bg-emerald-500/10 text-emerald-600 rounded-full px-1.5 py-0.5 font-medium">Generated</span>
            </div>
            <p className="text-[7px] text-muted-foreground mb-1">{cl.company} · {cl.role}</p>
            <p className="text-[6px] text-muted-foreground truncate mb-2">Antonio Larrucea Madrid, Comunidad de Madrid...</p>
            <p className="text-[6px] text-muted-foreground flex items-center gap-0.5"><CalendarDays className="w-2 h-2" /> Created {cl.date}</p>
            <div className="flex gap-1 mt-2">
              <button className="flex-1 text-[6px] border border-border rounded py-0.5 text-muted-foreground flex items-center justify-center gap-0.5 hover:border-primary/30 transition-colors"><Eye className="w-2 h-2" /> View</button>
              <button className="flex-1 text-[6px] border border-border rounded py-0.5 text-muted-foreground flex items-center justify-center gap-0.5 hover:border-primary/30 transition-colors"><Pencil className="w-2 h-2" /> Edit</button>
              <button className="text-[6px] text-rose-400 px-1 hover:text-rose-500 transition-colors"><Trash2 className="w-2.5 h-2.5" /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="absolute inset-0 bg-black/40 z-30 flex items-center justify-center p-6" onClick={() => setModalOpen(false)}>
          <div className="bg-card border border-border rounded-xl shadow-xl w-full max-w-[520px] max-h-[420px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground">Create Cover Letter</p>
                  <p className="text-[7px] text-muted-foreground">AI-powered professional cover letter generation</p>
                </div>
              </div>
              <button onClick={() => setModalOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 overflow-y-auto max-h-[340px]">
              {/* Tab pills */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[7px] bg-primary text-primary-foreground rounded-full px-2 py-0.5 font-semibold">Job Information</span>
                <span className="text-[7px] bg-emerald-600 text-white rounded-full px-2 py-0.5 font-semibold">Generated Cover Letter</span>
                <div className="ml-auto">
                  <button
                    onClick={startGeneration}
                    disabled={generatingState === "generating"}
                    className="text-[7px] bg-primary text-primary-foreground rounded px-2.5 py-1 font-medium flex items-center gap-1 hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    <Sparkles className="w-2.5 h-2.5" /> {generatingState === "generating" ? "Generating..." : "Generate"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Left: form */}
                <div className="space-y-2">
                  <div>
                    <p className="text-[7px] font-semibold text-foreground mb-0.5">Job Title *</p>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g., Software Engineer"
                      className="w-full bg-background border border-border rounded px-2 py-1 text-[7px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[7px] font-semibold text-foreground mb-0.5">Company Name *</p>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g., Google Inc."
                      className="w-full bg-background border border-border rounded px-2 py-1 text-[7px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[7px] font-semibold text-foreground mb-0.5">Job Description</p>
                    <textarea
                      value={jobDesc}
                      onChange={(e) => setJobDesc(e.target.value)}
                      placeholder="Paste the job description here to get a more tailored cover letter..."
                      rows={4}
                      className="w-full bg-background border border-border rounded px-2 py-1 text-[7px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <p className="text-[7px] font-semibold text-foreground mb-0.5">Tone</p>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full bg-background border border-border rounded px-2 py-1 text-[7px] text-foreground outline-none focus:border-primary transition-colors"
                    >
                      <option>Professional</option>
                      <option>Enthusiastic</option>
                      <option>Formal</option>
                      <option>Creative</option>
                    </select>
                  </div>
                </div>

                {/* Right: generated letter */}
                <div className="border border-border rounded-lg p-2.5 bg-background min-h-[200px] max-h-[260px] overflow-y-auto">
                  {generatingState === "idle" && (
                    <div className="flex flex-col items-center justify-center h-full text-center py-8">
                      <Sparkles className="w-5 h-5 text-muted-foreground mb-1.5" />
                      <p className="text-[8px] text-muted-foreground">Your generated cover letter will appear here</p>
                    </div>
                  )}
                  {(generatingState === "generating" || generatingState === "done") && (
                    <div className="text-[7px] text-foreground leading-relaxed whitespace-pre-wrap">
                      {displayedLetter}
                      {generatingState === "generating" && <span className="inline-block w-1 h-3 bg-primary animate-pulse ml-0.5" />}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-2 px-4 py-2.5 border-t border-border">
              <button onClick={() => setModalOpen(false)} className="text-[7px] border border-border rounded px-3 py-1 text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
              <button
                className={`text-[7px] rounded px-3 py-1 font-medium transition-colors ${generatingState === "done" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary/30 text-primary-foreground cursor-not-allowed opacity-50"}`}
                onClick={() => generatingState === "done" && setModalOpen(false)}
              >
                Save Cover Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ─── Job Board Tab ─── */
const allJobs = [
  { company: "Market Control", logo: "MC", color: "bg-rose-500", title: "Intern Customer Success & Marketing", location: "Barcelona, Spain", country: "Spain", tag: "IT Services and IT Consulting", posted: "2 days ago", level: "Internship" },
  { company: "American Express", logo: "AX", color: "bg-blue-600", title: "Campus - Internship Programme - Control Management", location: "Madrid, Spain", country: "Spain", tag: "Financial Services", posted: "2 days ago", level: "Internship" },
  { company: "Zynga", logo: "Z", color: "bg-orange-500", title: "Level Design Intern", location: "Barcelona, Spain", country: "Spain", tag: "Computer Games", posted: "3 days ago", level: "Internship" },
  { company: "Dermofarm", logo: "DF", color: "bg-teal-500", title: "Trainee Marketing Department", location: "Rubí, Spain", country: "Spain", tag: "Personal Care Product Manufacturing", posted: "3 days ago", level: "Internship" },
  { company: "1A Ingenieros", logo: "1A", color: "bg-amber-600", title: "Intern - Ingeniería Energética", location: "Valladolid, Spain", country: "Spain", tag: "Business Consulting", posted: "3 days ago", level: "Internship" },
  { company: "K-LAGAN", logo: "KL", color: "bg-gray-600", title: "Talent Acquisition Intern - Transporte & Supply Chain", location: "Barcelona, Spain", country: "Spain", tag: "IT Services and IT Consulting", posted: "3 days ago", level: "Internship" },
  { company: "Sweanty", logo: "SW", color: "bg-emerald-500", title: "Software Engineer Intern", location: "Mataró, Spain", country: "Spain", tag: "Technology, Information and Internet", posted: "3 days ago", level: "Internship" },
  { company: "Gameloft", logo: "GL", color: "bg-indigo-500", title: "Live Operations Intern", location: "Barcelona, Spain", country: "Spain", tag: "Computer Games", posted: "3 days ago", level: "Internship" },
  { company: "Google", logo: "G", color: "bg-blue-500", title: "Software Engineering Intern", location: "London, United Kingdom", country: "United Kingdom", tag: "Technology", posted: "1 day ago", level: "Internship" },
  { company: "McKinsey & Company", logo: "MK", color: "bg-sky-700", title: "Junior Associate - Strategy", location: "Berlin, Germany", country: "Germany", tag: "Management Consulting", posted: "4 days ago", level: "Entry level" },
  { company: "L'Oréal", logo: "LO", color: "bg-pink-600", title: "Marketing Trainee - Digital", location: "Paris, France", country: "France", tag: "Consumer Goods", posted: "5 days ago", level: "Internship" },
  { company: "Ferrari", logo: "FE", color: "bg-red-600", title: "Engineering Intern - Aerodynamics", location: "Maranello, Italy", country: "Italy", tag: "Automotive", posted: "1 day ago", level: "Internship" },
  { company: "UBS", logo: "UB", color: "bg-red-700", title: "Graduate Analyst - Wealth Management", location: "Zurich, Switzerland", country: "Switzerland", tag: "Financial Services", posted: "2 days ago", level: "Entry level" },
  { company: "DBS Bank", logo: "DB", color: "bg-red-500", title: "Technology Intern - Full Stack", location: "Singapore", country: "Singapore", tag: "Banking", posted: "4 days ago", level: "Internship" },
  { company: "Emirates Group", logo: "EG", color: "bg-red-800", title: "Graduate Programme - Operations", location: "Dubai, UAE", country: "United Arab Emirates", tag: "Aviation", posted: "6 days ago", level: "Entry level" },
  { company: "Shopify", logo: "SH", color: "bg-green-600", title: "Data Science Intern", location: "Toronto, Canada", country: "Canada", tag: "Technology", posted: "3 days ago", level: "Internship" },
  { company: "Revolut", logo: "RV", color: "bg-violet-600", title: "Junior Product Manager", location: "London, United Kingdom", country: "United Kingdom", tag: "FinTech", posted: "1 day ago", level: "Entry level" },
  { company: "Siemens", logo: "SI", color: "bg-cyan-600", title: "Electrical Engineering Intern", location: "Munich, Germany", country: "Germany", tag: "Manufacturing", posted: "5 days ago", level: "Internship" },
  { company: "LVMH", logo: "LV", color: "bg-amber-800", title: "Retail Management Trainee", location: "Paris, France", country: "France", tag: "Luxury Goods", posted: "2 days ago", level: "Entry level" },
  { company: "JPMorgan Chase", logo: "JP", color: "bg-blue-800", title: "Investment Banking Analyst", location: "New York, United States", country: "United States", tag: "Financial Services", posted: "1 day ago", level: "Entry level" },
  { company: "Tesla", logo: "TS", color: "bg-gray-800", title: "Supply Chain Intern", location: "Austin, United States", country: "United States", tag: "Automotive", posted: "4 days ago", level: "Internship" },
  { company: "Spotify", logo: "SP", color: "bg-green-500", title: "UX Research Intern", location: "Stockholm, Sweden", country: "Sweden", tag: "Technology", posted: "2 days ago", level: "Internship" },
  { company: "Nestlé", logo: "NE", color: "bg-sky-600", title: "Supply Chain Graduate Programme", location: "Vevey, Switzerland", country: "Switzerland", tag: "Consumer Goods", posted: "6 days ago", level: "Entry level" },
  { company: "Accenture", logo: "AC", color: "bg-purple-600", title: "Consulting Analyst Intern", location: "Milan, Italy", country: "Italy", tag: "Business Consulting", posted: "3 days ago", level: "Internship" },
  { company: "Meta", logo: "ME", color: "bg-blue-500", title: "Product Design Intern", location: "Menlo Park, United States", country: "United States", tag: "Technology", posted: "1 day ago", level: "Internship" },
  { company: "Bain & Company", logo: "BC", color: "bg-red-600", title: "Associate Consultant Intern", location: "London, United Kingdom", country: "United Kingdom", tag: "Management Consulting", posted: "2 days ago", level: "Internship" },
  { company: "Samsung", logo: "SM", color: "bg-blue-700", title: "Hardware Engineering Intern", location: "Seoul, South Korea", country: "South Korea", tag: "Electronics", posted: "5 days ago", level: "Internship" },
  { company: "Goldman Sachs", logo: "GS", color: "bg-sky-800", title: "Summer Analyst - Asset Management", location: "London, United Kingdom", country: "United Kingdom", tag: "Financial Services", posted: "1 day ago", level: "Internship" },
  { company: "BMW Group", logo: "BW", color: "bg-blue-900", title: "Autonomous Driving Intern", location: "Munich, Germany", country: "Germany", tag: "Automotive", posted: "3 days ago", level: "Internship" },
  { company: "Stripe", logo: "ST", color: "bg-indigo-600", title: "Backend Engineer Intern", location: "San Francisco, United States", country: "United States", tag: "FinTech", posted: "2 days ago", level: "Internship" },
  { company: "Unilever", logo: "UL", color: "bg-teal-600", title: "Brand Management Trainee", location: "Rotterdam, Netherlands", country: "Netherlands", tag: "Consumer Goods", posted: "4 days ago", level: "Entry level" },
  { company: "Airbus", logo: "AB", color: "bg-sky-500", title: "Aerospace Engineering Intern", location: "Toulouse, France", country: "France", tag: "Aviation", posted: "6 days ago", level: "Internship" },
  { company: "Booking.com", logo: "BK", color: "bg-blue-600", title: "Data Analyst Intern", location: "Amsterdam, Netherlands", country: "Netherlands", tag: "Technology", posted: "3 days ago", level: "Internship" },
  { company: "PwC", logo: "PW", color: "bg-orange-600", title: "Audit & Assurance Graduate", location: "Dublin, Ireland", country: "Ireland", tag: "Professional Services", posted: "2 days ago", level: "Entry level" },
  { company: "Adidas", logo: "AD", color: "bg-gray-900", title: "Digital Marketing Intern", location: "Herzogenaurach, Germany", country: "Germany", tag: "Sporting Goods", posted: "4 days ago", level: "Internship" },
  { company: "Salesforce", logo: "SF", color: "bg-sky-400", title: "Solutions Engineer Intern", location: "San Francisco, United States", country: "United States", tag: "Technology", posted: "1 day ago", level: "Internship" },
  { company: "Morgan Stanley", logo: "MS", color: "bg-blue-800", title: "Quantitative Finance Analyst", location: "New York, United States", country: "United States", tag: "Financial Services", posted: "3 days ago", level: "Entry level" },
  { company: "Roche", logo: "RO", color: "bg-blue-400", title: "Biotech Research Intern", location: "Basel, Switzerland", country: "Switzerland", tag: "Pharmaceuticals", posted: "5 days ago", level: "Internship" },
  { company: "Porsche", logo: "PO", color: "bg-red-700", title: "Business Strategy Intern", location: "Stuttgart, Germany", country: "Germany", tag: "Automotive", posted: "2 days ago", level: "Internship" },
  { company: "N26", logo: "N2", color: "bg-teal-500", title: "Mobile Engineer Intern", location: "Berlin, Germany", country: "Germany", tag: "FinTech", posted: "1 day ago", level: "Internship" },
  { company: "Deloitte", logo: "DL", color: "bg-green-700", title: "Risk Advisory Graduate", location: "Madrid, Spain", country: "Spain", tag: "Professional Services", posted: "4 days ago", level: "Entry level" },
  { company: "Netflix", logo: "NF", color: "bg-red-500", title: "Content Strategy Intern", location: "Los Angeles, United States", country: "United States", tag: "Entertainment", posted: "2 days ago", level: "Internship" },
  { company: "EY", logo: "EY", color: "bg-yellow-500", title: "Tax Consulting Intern", location: "Zurich, Switzerland", country: "Switzerland", tag: "Professional Services", posted: "5 days ago", level: "Internship" },
];

const locations = ["United States", "United Kingdom", "Germany", "France", "Spain", "Italy", "Switzerland", "Singapore", "United Arab Emirates", "Canada"];
const levels = ["Internship", "Entry level"];

const JobBoardContent = () => {
  const [search, setSearch] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>(["Spain"]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["Internship"]);
  const [sortBy, setSortBy] = useState<"recent" | "alpha">("recent");

  const toggleFilter = (list: string[], item: string, setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter(x => x !== item) : [...list, item]);
  };

  const filtered = allJobs.filter(job => {
    const matchesSearch = search === "" || job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase()) || job.tag.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.country);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(job.level);
    return matchesSearch && matchesLocation && matchesLevel;
  });

  const sorted = [...filtered].sort((a, b) => sortBy === "alpha" ? a.title.localeCompare(b.title) : 0);

  const resetFilters = () => { setSelectedLocations([]); setSelectedLevels([]); setSearch(""); };

  return (
    <div className="flex gap-3">
      {/* Filters sidebar */}
      <div className="w-28 shrink-0 max-h-[420px] overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-bold text-foreground">Filters</p>
          <button onClick={resetFilters} className="text-[6px] text-primary flex items-center gap-0.5"><RotateCcw className="w-2 h-2" /> Reset</button>
        </div>
        <div className="mb-3">
          <p className="text-[7px] font-semibold text-foreground mb-1">Location</p>
          {locations.map((l) => (
            <div key={l} className="flex items-center gap-1.5 mb-0.5 cursor-pointer" onClick={() => toggleFilter(selectedLocations, l, setSelectedLocations)}>
              <div className={`w-2.5 h-2.5 rounded border flex items-center justify-center shrink-0 transition-colors ${selectedLocations.includes(l) ? "bg-primary border-primary" : "border-muted-foreground/40 bg-transparent"}`}>
                {selectedLocations.includes(l) && <Check className="w-1.5 h-1.5 text-primary-foreground" />}
              </div>
              <span className="text-[7px] text-foreground">{l}</span>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <p className="text-[7px] font-semibold text-foreground mb-1">Experience Level</p>
          {levels.map((l) => (
            <div key={l} className="flex items-center gap-1.5 mb-0.5 cursor-pointer" onClick={() => toggleFilter(selectedLevels, l, setSelectedLevels)}>
              <div className={`w-2.5 h-2.5 rounded border flex items-center justify-center shrink-0 transition-colors ${selectedLevels.includes(l) ? "bg-primary border-primary" : "border-muted-foreground/40 bg-transparent"}`}>
                {selectedLevels.includes(l) && <Check className="w-1.5 h-1.5 text-primary-foreground" />}
              </div>
              <span className="text-[7px] text-foreground">{l}</span>
            </div>
          ))}
        </div>
        {(selectedLocations.length > 0 || selectedLevels.length > 0) && (
          <div>
            <p className="text-[7px] font-semibold text-foreground mb-1">Active Filters</p>
            <div className="flex flex-wrap gap-0.5">
              {[...selectedLocations, ...selectedLevels].map(f => (
                <span key={f} className="text-[5px] bg-primary/10 text-primary rounded-full px-1.5 py-0.5 flex items-center gap-0.5">
                  {f} <span className="cursor-pointer font-bold" onClick={() => {
                    if (locations.includes(f)) toggleFilter(selectedLocations, f, setSelectedLocations);
                    else toggleFilter(selectedLevels, f, setSelectedLevels);
                  }}>×</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Job listings */}
      <div className="flex-1">
        <h3 className="text-sm font-bold text-foreground italic mb-0.5">Job Board</h3>
        <p className="text-[7px] text-primary mb-2 flex items-center gap-0.5"><Briefcase className="w-2.5 h-2.5" /> {allJobs.length} total opportunities · {sorted.length} matching</p>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 bg-secondary rounded-md px-2 py-1.5 text-[8px] text-muted-foreground flex items-center gap-1">
            <Search className="w-2.5 h-2.5 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs by title, company, or industry..."
              className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground text-[8px]"
            />
          </div>
          <button className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-[8px] font-medium">Search</button>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[7px] text-muted-foreground">Showing {sorted.length} jobs</p>
          <button onClick={() => setSortBy(sortBy === "recent" ? "alpha" : "recent")} className="text-[7px] text-muted-foreground cursor-pointer hover:text-foreground">
            {sortBy === "recent" ? "Most recent ▾" : "A-Z ▾"}
          </button>
        </div>

        <div className="max-h-[320px] overflow-y-auto pr-1">
          {sorted.length === 0 ? (
            <div className="text-center py-8">
              <Search className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
              <p className="text-[9px] font-semibold text-foreground">No jobs found</p>
              <p className="text-[7px] text-muted-foreground">Try adjusting your filters or search query</p>
              <button onClick={resetFilters} className="text-[7px] text-primary font-medium mt-2">Reset all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-1.5">
              {sorted.map((job, idx) => (
                <div key={`${job.company}-${job.title}-${idx}`} className="bg-card border border-border rounded-lg p-2 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className={`w-5 h-5 rounded ${job.color} flex items-center justify-center text-[5px] font-bold text-white`}>{job.logo}</div>
                    <Bookmark className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-primary transition-colors" strokeWidth={1.8} />
                  </div>
                  <p className="text-[7px] font-semibold text-foreground leading-tight mb-0.5">{job.title}</p>
                  <p className="text-[6px] text-primary mb-0.5">{job.company}</p>
                  <p className="text-[6px] text-muted-foreground mb-1 flex items-center gap-0.5"><MapPin className="w-2 h-2" /> {job.location}</p>
                  <p className="text-[5px] text-muted-foreground leading-tight mb-1.5 line-clamp-2">Join our team and contribute to exciting projects in {job.tag.toLowerCase()}...</p>
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="text-[5px] bg-secondary text-muted-foreground rounded px-1 py-0.5">{job.tag}</span>
                    <span className="text-[5px] bg-primary/10 text-primary rounded px-1 py-0.5">{job.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[5px] text-emerald-500 flex items-center gap-0.5">● Posted {job.posted}</span>
                    <span className="text-[6px] text-primary font-medium cursor-pointer flex items-center gap-0.5">View <ExternalLink className="w-2 h-2" /></span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Events Tab ─── */
const allEvents = [
  { type: "In-Person", title: "NVIDIA GTC 2026", desc: "The premier global AI conference featuring keynotes, workshops, and demos", date: "Mon, Mar 16, 8 AM", time: "8:00 AM - 6:00 PM", location: "San Jose, CA", publisher: "NVIDIA", typeColor: "bg-rose-500" },
  { type: "In-Person", title: "Student & Community Voice AI Summit", desc: "K12 educators, students and communities exploring voice AI applications", date: "Thu, Mar 19, 5 PM", time: "5:00 PM - 12:00 PM", location: "Austin, TX", publisher: "web.cvent.com", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "HYBRID Workshop Vestibular Rehabilitation", desc: "Rehabilitation & Concussion Certification for healthcare professionals", date: "Sat, Mar 21", time: "12:00 PM - 4:00 PM", location: "Online", publisher: "Emedevents.com", typeColor: "bg-emerald-600" },
  { type: "Virtual", title: "31st International Conference on Nutrition", desc: "Scientific Conferences Global Events on nutrition and dietetics research", date: "Thu, Apr 2 - Fri, Apr 3", time: "9:00 AM - 5:00 PM", location: "Online", publisher: "Nutrition & Dietetics", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "HumanX 2026", desc: "Leading human-centered AI conference in San Francisco", date: "Mon, Apr 6, 8 AM", time: "8:00 AM - 6:00 PM", location: "San Francisco, CA", publisher: "HumanX", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "Women in Tech Global Summit", desc: "Empowering women in technology through talks, panels, and mentorship sessions", date: "Wed, Apr 9, 10 AM", time: "10:00 AM - 4:00 PM", location: "Online", publisher: "WomenTech Network", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "European Career Fair 2026", desc: "Connect with top European employers across finance, consulting, and tech", date: "Sat, Apr 12, 9 AM", time: "9:00 AM - 5:00 PM", location: "Paris, France", publisher: "EuroCareers", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "Data Science Bootcamp Weekend", desc: "Hands-on workshops in Python, machine learning, and data visualization", date: "Sat, Apr 19 - Sun, Apr 20", time: "10:00 AM - 6:00 PM", location: "Online", publisher: "DataCamp", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "TechCrunch Disrupt 2026", desc: "Startup showcase, pitch competitions, and networking with VCs and founders", date: "Mon, Apr 21, 9 AM", time: "9:00 AM - 7:00 PM", location: "San Francisco, CA", publisher: "TechCrunch", typeColor: "bg-rose-500" },
  { type: "In-Person", title: "MIT Career & Internship Fair", desc: "Hundreds of employers recruiting for internships and full-time roles", date: "Thu, Apr 24, 10 AM", time: "10:00 AM - 4:00 PM", location: "Cambridge, MA", publisher: "MIT CAPD", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "Resume & Interview Prep Workshop", desc: "Get expert feedback on your resume and practice common interview questions", date: "Tue, Apr 29, 2 PM", time: "2:00 PM - 4:30 PM", location: "Online", publisher: "ApplyLab", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "London FinTech Week", desc: "A week-long festival exploring innovation in financial technology", date: "Mon, May 5 - Fri, May 9", time: "9:00 AM - 6:00 PM", location: "London, UK", publisher: "FinTech Alliance", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "Product Management Masterclass", desc: "Learn PM frameworks, roadmapping, and stakeholder management from industry leaders", date: "Wed, May 7, 6 PM", time: "6:00 PM - 8:00 PM", location: "Online", publisher: "Product School", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "Berlin Startup Night", desc: "Pitch night and networking event connecting students with Berlin's startup ecosystem", date: "Fri, May 9, 7 PM", time: "7:00 PM - 11:00 PM", location: "Berlin, Germany", publisher: "Startup Nights", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "AI Ethics & Governance Symposium", desc: "Exploring responsible AI practices, bias mitigation, and regulatory frameworks", date: "Tue, May 13, 1 PM", time: "1:00 PM - 5:00 PM", location: "Online", publisher: "IEEE", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "Spring Graduate Recruitment Fair", desc: "Meet top graduate employers from consulting, banking, and tech sectors", date: "Wed, May 14, 10 AM", time: "10:00 AM - 4:00 PM", location: "Madrid, Spain", publisher: "IE University", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "UX Design Portfolio Review", desc: "Submit your portfolio for live feedback from senior UX designers at Google and Meta", date: "Sat, May 17, 3 PM", time: "3:00 PM - 5:00 PM", location: "Online", publisher: "UX Collective", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "Web Summit 2026 — Early Access", desc: "Early registration event for the world's largest technology conference", date: "Mon, May 19, 9 AM", time: "9:00 AM - 1:00 PM", location: "Lisbon, Portugal", publisher: "Web Summit", typeColor: "bg-rose-500" },
  { type: "Virtual", title: "Intro to Cloud Computing with AWS", desc: "Beginner-friendly workshop covering EC2, S3, Lambda, and cloud architecture basics", date: "Thu, May 22, 11 AM", time: "11:00 AM - 1:00 PM", location: "Online", publisher: "AWS Training", typeColor: "bg-emerald-600" },
  { type: "In-Person", title: "Barcelona Innovation Week", desc: "Tech talks, hackathons, and startup demos across Barcelona's innovation district", date: "Mon, Jun 2 - Fri, Jun 6", time: "9:00 AM - 8:00 PM", location: "Barcelona, Spain", publisher: "Barcelona Activa", typeColor: "bg-rose-500" },
];

const EventsContent = () => {
  const [searchEv, setSearchEv] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | "Virtual" | "In-Person">("All");

  const filtered = allEvents.filter(ev => {
    const matchesSearch = searchEv === "" || ev.title.toLowerCase().includes(searchEv.toLowerCase()) || ev.desc.toLowerCase().includes(searchEv.toLowerCase());
    const matchesType = typeFilter === "All" || ev.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <>
      <h3 className="text-sm font-bold text-foreground italic mb-0.5">Events</h3>
      <p className="text-[7px] text-muted-foreground mb-3">Discover workshops, career fairs, webinars, and networking opportunities</p>

      <div className="bg-secondary rounded-md px-2 py-1.5 text-[8px] mb-3 flex items-center gap-1">
        <Search className="w-2.5 h-2.5 text-muted-foreground shrink-0" />
        <input type="text" value={searchEv} onChange={(e) => setSearchEv(e.target.value)} placeholder="Search events by name or description..." className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground text-[8px]" />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-[7px] text-foreground">Event Type</span>
        {(["All", "Virtual", "In-Person"] as const).map((t) => (
          <button key={t} onClick={() => setTypeFilter(t)} className={`text-[7px] rounded-full px-2 py-0.5 transition-colors ${typeFilter === t ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>{t}</button>
        ))}
      </div>

      <p className="text-[7px] text-primary text-center mb-2">Showing {filtered.length} of {allEvents.length} events</p>

      <div className="max-h-[320px] overflow-y-auto pr-1">
        {filtered.length === 0 ? (
          <div className="text-center py-8">
            <CalendarDays className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
            <p className="text-[9px] font-semibold text-foreground">No events found</p>
            <p className="text-[7px] text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-1.5">
            {filtered.map((ev) => (
              <div key={ev.title} className="bg-card border border-border rounded-lg p-2 hover:border-primary/30 transition-colors">
                <span className={`text-[5px] text-white font-bold rounded px-1 py-0.5 ${ev.typeColor} inline-block mb-1.5`}>{ev.type} Event</span>
                <p className="text-[7px] font-semibold text-foreground leading-tight mb-0.5">{ev.title}</p>
                <p className="text-[6px] text-muted-foreground leading-tight mb-1.5 line-clamp-2">{ev.desc}</p>
                <p className="text-[6px] text-muted-foreground flex items-center gap-0.5"><CalendarDays className="w-2 h-2" /> {ev.date}</p>
                <p className="text-[6px] text-muted-foreground flex items-center gap-0.5"><Clock className="w-2 h-2" /> {ev.time}</p>
                <p className="text-[6px] text-muted-foreground mb-1.5 flex items-center gap-0.5"><MapPin className="w-2 h-2" /> {ev.location}</p>
                <p className="text-[5px] text-muted-foreground mb-1.5">Published by {ev.publisher}</p>
                <button className="w-full bg-primary text-primary-foreground rounded-md py-1 text-[7px] font-medium flex items-center justify-center gap-0.5">Register Now <ExternalLink className="w-2 h-2" /></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

/* ─── Meetings Tab ─── */
const advisors = [
  { name: "Rania", specialty: "Tech Industry, Graduate Studies", initials: "R", color: "bg-primary" },
  { name: "Yan Bernard", specialty: "Resume Review, Academic Advising", initials: "YB", color: "bg-emerald-600" },
  { name: "Dr. Sara Chen", specialty: "Data Science, Research Careers", initials: "SC", color: "bg-violet-600" },
];
const availableDays = [16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31];
const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"];

const MeetingsContent = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [booked, setBooked] = useState(false);

  const canBook = selectedAdvisor && selectedDay && selectedTime;

  const handleBook = () => {
    if (!canBook) return;
    setBooked(true);
  };

  const resetBooking = () => {
    setSelectedAdvisor(null);
    setSelectedDay(null);
    setSelectedTime(null);
    setNote("");
    setBooked(false);
  };

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 relative">
      <div>
        <h3 className="text-sm font-bold text-foreground italic mb-0.5">Book a Meeting</h3>
        <p className="text-[7px] text-muted-foreground mb-4">Schedule 1-on-1 with our advisors</p>

        {/* Step 1 - Choose Advisor */}
        <p className="text-[9px] font-bold text-primary mb-2">1. Choose an Advisor</p>
        <div className="space-y-1.5 mb-4">
          {advisors.map((adv) => (
            <div
              key={adv.name}
              onClick={() => setSelectedAdvisor(adv.name)}
              className={`border rounded-lg px-3 py-2.5 flex items-center gap-2.5 cursor-pointer transition-colors ${
                selectedAdvisor === adv.name ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
              }`}
            >
              <div className={`w-7 h-7 rounded-full ${adv.color} flex items-center justify-center text-[8px] font-bold text-white`}>{adv.initials}</div>
              <div>
                <p className="text-[9px] font-semibold text-foreground">{adv.name}</p>
                <p className="text-[7px] text-muted-foreground">{adv.specialty}</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-[7px] text-muted-foreground">
                <span className="flex items-center gap-0.5"><Clock className="w-2 h-2" /> 30 min</span>
                <span className="flex items-center gap-0.5"><Video className="w-2 h-2" /> Video call</span>
                <span className="text-emerald-500 font-semibold">Free</span>
              </div>
            </div>
          ))}
        </div>

        {/* Step 2 - Pick a Date */}
        <p className="text-[9px] font-bold text-primary mb-2">2. Pick a Date</p>
        <div className="border border-border rounded-lg p-3 mb-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <button className="text-primary text-[10px]">‹</button>
            <p className="text-[9px] font-semibold text-foreground">March 2026</p>
            <button className="text-primary text-[10px]">›</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d} className="text-[7px] text-muted-foreground font-medium">{d}</span>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const isAvailable = availableDays.includes(day);
              const isSelected = selectedDay === day;
              const offset = day === 1 ? "col-start-1" : "";
              return (
                <span
                  key={day}
                  onClick={() => isAvailable && setSelectedDay(day)}
                  className={`text-[7px] py-0.5 rounded transition-colors ${offset} ${
                    isSelected
                      ? "bg-primary text-primary-foreground font-bold"
                      : isAvailable
                        ? "text-primary font-bold cursor-pointer hover:bg-primary/10"
                        : "text-muted-foreground"
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>

        {/* Step 3 - Select Time */}
        <p className="text-[9px] font-bold text-primary mb-2">3. Select Time</p>
        <div className="grid grid-cols-5 gap-1 mb-4">
          {timeSlots.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`text-[7px] border rounded py-1 transition-colors ${
                selectedTime === t
                  ? "border-primary bg-primary text-primary-foreground font-semibold"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Step 4 - Note */}
        <p className="text-[9px] font-bold text-primary mb-2">4. Leave a Note (optional)</p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Tell the advisor what you'd like to discuss..."
          rows={2}
          className="w-full bg-background border border-border rounded-lg px-2.5 py-1.5 text-[7px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Booking Summary sidebar */}
      <div className="w-36">
        <div className="border border-border rounded-lg p-3 sticky top-0">
          <p className="text-[9px] font-bold text-foreground mb-2">Booking Summary</p>
          <div className="space-y-2">
            <div>
              <p className="text-[6px] text-primary font-medium">Advisor</p>
              <p className={`text-[7px] font-medium ${selectedAdvisor ? "text-foreground" : "text-muted-foreground"}`}>{selectedAdvisor || "Not selected"}</p>
            </div>
            <div>
              <p className="text-[6px] text-primary font-medium">Date</p>
              <p className={`text-[7px] font-medium ${selectedDay ? "text-foreground" : "text-muted-foreground"}`}>{selectedDay ? `March ${selectedDay}, 2026` : "Not selected"}</p>
            </div>
            <div>
              <p className="text-[6px] text-primary font-medium">Time</p>
              <p className={`text-[7px] font-medium ${selectedTime ? "text-foreground" : "text-muted-foreground"}`}>{selectedTime || "Not selected"}</p>
            </div>
            <div>
              <p className="text-[6px] text-primary font-medium">Meeting Type</p>
              <p className="text-[7px] text-foreground font-medium">30 min Video call</p>
            </div>
            {note && (
              <div>
                <p className="text-[6px] text-primary font-medium">Note</p>
                <p className="text-[7px] text-foreground font-medium line-clamp-3">{note}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleBook}
            disabled={!canBook}
            className={`w-full rounded-md py-1.5 text-[7px] font-medium mt-3 transition-colors ${
              canBook
                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                : "bg-primary/30 text-primary-foreground opacity-50 cursor-not-allowed"
            }`}
          >
            Confirm Booking →
          </button>
          {!canBook && <p className="text-[6px] text-muted-foreground text-center mt-1">Please complete all selections above.</p>}
        </div>
        <div className="mt-2 border border-border rounded-lg p-2">
          <span className="text-[7px] text-primary font-medium flex items-center gap-0.5"><User className="w-2.5 h-2.5" /> {advisors.length} advisors available</span>
        </div>
      </div>

      {/* Booked confirmation overlay */}
      {booked && (
        <div className="absolute inset-0 bg-black/40 z-30 flex items-center justify-center rounded-lg" onClick={resetBooking}>
          <div className="bg-card border border-border rounded-xl shadow-xl p-6 text-center max-w-[280px]" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="text-sm font-bold text-foreground mb-1">Meeting Booked!</p>
            <p className="text-[8px] text-muted-foreground mb-3">
              Your meeting with <span className="font-semibold text-foreground">{selectedAdvisor}</span> has been scheduled for <span className="font-semibold text-foreground">March {selectedDay}, 2026</span> at <span className="font-semibold text-foreground">{selectedTime}</span>.
            </p>
            {note && <p className="text-[7px] text-muted-foreground italic mb-3">"{note}"</p>}
            <p className="text-[7px] text-muted-foreground mb-3">A confirmation email has been sent to antonio.rossi@email.com</p>
            <div className="flex gap-2">
              <button onClick={resetBooking} className="flex-1 text-[7px] border border-border rounded-md py-1.5 text-muted-foreground hover:text-foreground transition-colors">Book Another</button>
              <button onClick={resetBooking} className="flex-1 text-[7px] bg-primary text-primary-foreground rounded-md py-1.5 font-medium hover:bg-primary/90 transition-colors">Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Main Component ─── */
const StudentDashboardMockup = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [resumeSubTab, setResumeSubTab] = useState<"grader" | "builder" | "coverLetters">("grader");
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <DashboardContent />;
      case 1: return <TrackerContent />;
      case 2: return <ResumeContent subTab={resumeSubTab} />;
      case 3: return <JobBoardContent />;
      case 4: return <EventsContent />;
      case 5: return <MeetingsContent />;
      default: return <DashboardContent />;
    }
  };

  return (
    <div
      className="rounded-xl overflow-hidden shadow-precision-lg border border-gray-200 relative"
      style={{
        "--background": "0 0% 100%",
        "--foreground": "222.2 84% 4.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "222.2 84% 4.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 84% 4.9%",
        "--primary": "228 76% 35%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--border": "214.3 31.8% 91.4%",
        backgroundColor: "hsl(0 0% 100%)",
        color: "hsl(222.2 84% 4.9%)",
        zoom: 1.12,
      } as React.CSSProperties}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-secondary px-4 py-2 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-background rounded-md px-3 py-1 text-[10px] text-muted-foreground text-center">
          app.applylab.software/student-portal
        </div>
      </div>

      {/* Top nav bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[8px] font-bold text-primary-foreground">a</div>
          <span className="text-[10px] font-semibold text-foreground">Student Portal</span>
        </div>
        <div className="flex items-center gap-1">
          {navIcons.map((nav, i) => {
            const IconComp = nav.icon;
            const isResume = !!nav.hasDropdown;
            return (
              <div key={nav.label} className="relative">
                <button
                  onClick={() => {
                    if (isResume) {
                      setResumeDropdownOpen(!resumeDropdownOpen);
                    } else {
                      setActiveTab(i);
                      setResumeDropdownOpen(false);
                    }
                  }}
                  className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                    activeTab === i
                      ? "border border-[hsl(228,76%,35%)] bg-[hsl(228,76%,35%,0.1)]"
                      : "hover:bg-[hsl(210,40%,96.1%)]"
                  }`}
                  style={{ color: activeTab === i ? "hsl(228, 76%, 35%)" : "hsl(215, 16%, 47%)" }}
                  title={nav.label}
                >
                  {isResume ? (
                    <span className="flex items-center gap-0">
                      <IconComp className="w-4 h-4" strokeWidth={1.8} />
                      <ChevronDown className="w-2.5 h-2.5" strokeWidth={2} />
                    </span>
                  ) : (
                    <IconComp className="w-4 h-4" strokeWidth={1.8} />
                  )}
                </button>
                {isResume && resumeDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-[hsl(0,0%,100%)] border border-[hsl(214.3,31.8%,91.4%)] rounded-md shadow-lg z-20 min-w-[140px]">
                    {([
                      ["grader", "Resume Grader"],
                      ["builder", "Resume Builder"],
                      ["coverLetters", "Cover Letter Maker"],
                    ] as const).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setResumeSubTab(key);
                          setActiveTab(2);
                          setResumeDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-1.5 text-[8px] transition-colors ${
                          activeTab === 2 && resumeSubTab === key
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {/* Extra icons like in the reference */}
          <div className="w-px h-4 bg-[hsl(214.3,31.8%,91.4%)] mx-1" />
          <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-[hsl(210,40%,96.1%)]" style={{ color: "hsl(215, 16%, 47%)" }}>
            <User className="w-4 h-4" strokeWidth={1.8} />
          </button>
          <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-[hsl(210,40%,96.1%)]" style={{ color: "hsl(215, 16%, 47%)" }}>
            <Settings className="w-4 h-4" strokeWidth={1.8} />
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] text-muted-foreground">🌐 English ▾</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 min-h-[600px] max-h-[600px] overflow-y-auto" onClick={() => setResumeDropdownOpen(false)}>
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboardMockup;
