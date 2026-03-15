import { useState } from "react";
import { LayoutGrid, ClipboardList, FileText, ChevronDown, Briefcase, CalendarDays, Video, User, Settings } from "lucide-react";

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
        { icon: "👤", title: "Complete Your Profile", desc: "Update your information to improve your opportunities" },
        { icon: "💼", title: "Start Looking for Jobs", desc: "Find opportunities that match your profile" },
        { icon: "📧", title: "Email Status Tracking", desc: "Automatically track your applications", badge: "New" },
      ].map((a) => (
        <div key={a.title} className="bg-card border border-border rounded-lg px-3 py-3 relative">
          {a.badge && (
            <span className="absolute top-2 right-2 text-[6px] bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 font-bold">{a.badge}</span>
          )}
          <span className="text-sm mb-1 block">{a.icon}</span>
          <p className="text-[9px] font-semibold text-foreground leading-tight">{a.title}</p>
          <p className="text-[7px] text-muted-foreground mt-0.5 leading-tight">{a.desc}</p>
        </div>
      ))}
    </div>

    {/* Recent Applications */}
    <div>
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

const ResumeGraderContent = () => (
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
        <div className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-[8px] font-medium inline-block mb-1">Upload your Resume (PDF)</div>
        <p className="text-[7px] text-primary">or drop it here</p>
        <button className="w-full bg-primary text-primary-foreground rounded-md py-1.5 text-[8px] font-medium mt-3">Review my resume</button>
      </div>
      <div className="border border-border rounded-lg p-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-1">↑</p>
          <p className="text-[8px] text-muted-foreground">Upload a PDF to preview.</p>
        </div>
      </div>
    </div>

    {/* What we check */}
    <div className="border border-border rounded-lg p-3">
      <p className="text-[9px] font-semibold text-foreground mb-2">📋 What we check</p>
      <div className="grid grid-cols-2 gap-1.5">
        {["Contact", "Experiences", "Education", "Skills", "Summary", "Format"].map((c) => (
          <div key={c} className="flex items-center gap-1.5">
            <span className="text-[8px] text-muted-foreground">•</span>
            <span className="text-[8px] text-foreground">{c}</span>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 border border-primary/20 rounded-md px-2 py-1.5 mt-2">
        <p className="text-[7px] text-muted-foreground">💡 Keep descriptions concise and quantifiable. Adding measurable results is a great way to make your experiences more impactful.</p>
      </div>
    </div>
  </>
);

const ResumeBuilderContent = () => (
  <div className="grid grid-cols-[0.8fr_1.4fr_0.8fr] gap-0">
    {/* Left sidebar - Form */}
    <div className="bg-[hsl(228,50%,20%)] rounded-l-lg p-2.5 text-white space-y-2">
      <button className="text-[6px] text-blue-300 bg-blue-400/10 rounded px-1.5 py-0.5 border border-blue-400/20">Autofill from profile</button>
      <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Basics</p>
      {["Headline", "Full name", "Summary", "Email", "Phone", "Website", "Location", "LinkedIn", "GitHub"].map((f) => (
        <div key={f}>
          <p className="text-[6px] text-white/50 mb-0.5">{f}</p>
          <div className="bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/60">{f === "Headline" ? "Your Professional Title" : f === "Full name" ? "Your Name" : `your.${f.toLowerCase()}...`}</div>
        </div>
      ))}
      <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider mt-2">Experience</p>
      <button className="text-[7px] text-blue-300 border border-blue-400/30 rounded px-2 py-0.5">+ Add Experience</button>
    </div>

    {/* Center - Resume Preview (white outlined page on blue bg) */}
    <div className="bg-[hsl(228,40%,25%)] p-4 flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-3">
        <button className="text-[7px] text-blue-300">← Back to My CVs</button>
        <button className="text-[7px] text-blue-300 border border-blue-400/30 rounded px-2 py-0.5">⬇ Save as PDF</button>
      </div>
      {/* The resume "page" */}
      <div className="bg-white rounded shadow-lg p-4 w-full border border-white/20">
        <div className="border-b border-primary pb-2 mb-3">
          <h4 className="text-xs font-bold text-gray-900">Your Name</h4>
          <p className="text-[7px] text-gray-500">Your Professional Title</p>
          <p className="text-[6px] text-gray-400 text-right">your.email@example.com</p>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-[7px] font-bold text-primary uppercase tracking-wider mb-1">Professional Summary</p>
            <p className="text-[6px] text-gray-500">Brief professional summary...</p>
          </div>
          <div>
            <p className="text-[7px] font-bold text-primary uppercase tracking-wider mb-1">Professional Experience</p>
            <div className="flex justify-between">
              <div>
                <p className="text-[7px] font-semibold text-gray-800">Your Job Title</p>
                <p className="text-[6px] text-primary">Company Name</p>
              </div>
              <div className="text-right">
                <p className="text-[6px] text-gray-500">2023-01 - Present</p>
                <p className="text-[6px] text-gray-400">City, Country</p>
              </div>
            </div>
            <ul className="text-[6px] text-gray-500 ml-2 mt-0.5 space-y-0.5">
              <li>• Achievement 1</li>
              <li>• Achievement 2</li>
              <li>• Achievement 3</li>
            </ul>
          </div>
          <div>
            <p className="text-[7px] font-bold text-primary uppercase tracking-wider mb-1">Education</p>
            <div className="flex justify-between">
              <div>
                <p className="text-[7px] font-semibold text-gray-800">Bachelor's in Your Field</p>
                <p className="text-[6px] text-primary">University Name</p>
              </div>
              <p className="text-[6px] text-gray-500">2019-09 - 2023-06</p>
            </div>
            <ul className="text-[6px] text-gray-500 ml-2 mt-0.5 space-y-0.5">
              <li>• Relevant coursework</li>
              <li>• Academic achievement</li>
              <li>• Project work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Right sidebar - Settings */}
    <div className="bg-[hsl(228,50%,20%)] rounded-r-lg p-2.5 space-y-2.5 text-white">
      <div>
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Preview</p>
        <label className="flex items-center gap-1.5 mt-1">
          <input type="checkbox" className="w-2.5 h-2.5 rounded" />
          <span className="text-[7px] text-white/60">Enforce one page</span>
        </label>
        <div className="text-[6px] text-white/40 mt-1 space-y-0.5">
          <p>• Changes are saved automatically</p>
          <p>• Preview updates in real-time</p>
          <p>• Use Ctrl+P to print</p>
        </div>
      </div>
      <div>
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Template</p>
        <div className="bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/70 mt-0.5">Modern</div>
      </div>
      <div>
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Colors</p>
        <p className="text-[6px] text-white/50">Primary Color</p>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="w-4 h-4 rounded bg-blue-500" />
          <span className="text-[7px] text-white/70">#1f6feb</span>
        </div>
        <p className="text-[6px] text-white/50 mt-1">Quick Colors</p>
        <div className="flex gap-1 mt-0.5">
          {["bg-blue-500", "bg-rose-500", "bg-emerald-500", "bg-teal-500", "bg-amber-500", "bg-orange-500", "bg-pink-500", "bg-purple-500", "bg-cyan-500"].map((c, i) => (
            <div key={i} className={`w-3 h-3 rounded ${c} ${i === 0 ? "ring-1 ring-blue-300 ring-offset-1 ring-offset-[hsl(228,50%,20%)]" : ""}`} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Typography</p>
        <p className="text-[6px] text-white/50">Font Family</p>
        <div className="bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/70 mt-0.5">Inter</div>
        <div className="grid grid-cols-2 gap-1 mt-1">
          <div>
            <p className="text-[6px] text-white/50">Font Size (px)</p>
            <div className="bg-white/10 rounded px-1.5 py-0.5 text-[7px] text-white/70">12</div>
          </div>
          <div>
            <p className="text-[6px] text-white/50">Line Height</p>
            <div className="bg-white/10 rounded px-1.5 py-0.5 text-[7px] text-white/70">1.35</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[7px] font-bold text-white/80 uppercase tracking-wider">Page Layout</p>
        <p className="text-[6px] text-white/50">Page Size</p>
        <div className="bg-white/10 rounded px-1.5 py-1 text-[7px] text-white/70 mt-0.5">A4 (210 × 297 mm)</div>
        <p className="text-[6px] text-white/50 mt-1">Margins</p>
        <div className="bg-white/10 rounded px-1.5 py-0.5 text-[7px] text-white/70">36</div>
        <div className="flex gap-1 mt-1">
          {["Small", "Medium", "Large"].map((s) => (
            <button key={s} className={`text-[6px] border rounded px-1.5 py-0.5 ${s === "Medium" ? "bg-blue-500 text-white border-blue-500" : "border-white/20 text-white/60"}`}>{s}</button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CoverLettersContent = () => (
  <>
    <div className="flex items-center justify-between mb-3">
      <div>
        <h3 className="text-sm font-bold text-foreground italic">Cover Letter Maker</h3>
        <p className="text-[7px] text-muted-foreground">AI-powered professional cover letters</p>
      </div>
      <button className="text-[7px] bg-primary text-primary-foreground rounded px-2 py-1 font-medium">+ Create New Letter</button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { icon: "📄", value: "6", label: "Total Cover Letters" },
        { icon: "✨", value: "6", label: "AI Generated" },
        { icon: "🔍", value: "0", label: "Drafts" },
      ].map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-lg px-3 py-2.5 flex items-center gap-2">
          <span className="text-sm">{s.icon}</span>
          <div>
            <p className="text-sm font-bold text-foreground">{s.value}</p>
            <p className="text-[7px] text-muted-foreground">{s.label}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Cover letter cards */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { title: "Software Engineer at Apple", company: "Apple", role: "Software Engineer", date: "Mar 5, 2026" },
        { title: "Software Engineer at Apple", company: "Apple", role: "Software Engineer", date: "Feb 26, 2026" },
        { title: "Junior Analyst at Accenture", company: "Accenture", role: "Junior Analyst", date: "Feb 26, 2026" },
        { title: "Software Engineering at Apple", company: "apple", role: "software engineering", date: "Feb 25, 2026" },
        { title: "Backend Developer at Apple", company: "Apple", role: "Backend developer", date: "Feb 24, 2026" },
        { title: "Senior Data Analyst at Accenture", company: "Accenture", role: "Senior Data Analyst", date: "Feb 19, 2026" },
      ].map((cl, i) => (
        <div key={i} className="bg-card border border-border rounded-lg p-3">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[8px] font-semibold text-foreground">{cl.title}</p>
            <span className="text-[6px] bg-emerald-500/10 text-emerald-600 rounded-full px-1.5 py-0.5 font-medium">Generated</span>
          </div>
          <p className="text-[7px] text-muted-foreground mb-1">{cl.company} · {cl.role}</p>
          <p className="text-[6px] text-muted-foreground truncate mb-2">Antonio Larrucea Madrid, Comunidad de Madrid...</p>
          <p className="text-[6px] text-muted-foreground">📅 Created {cl.date}</p>
          <div className="flex gap-1 mt-2">
            <button className="flex-1 text-[6px] border border-border rounded py-0.5 text-muted-foreground">👁 View</button>
            <button className="flex-1 text-[6px] border border-border rounded py-0.5 text-muted-foreground">✏️ Edit</button>
            <button className="text-[6px] text-rose-400 px-1">🗑</button>
          </div>
        </div>
      ))}
    </div>
  </>
);

/* ─── Job Board Tab ─── */
const JobBoardContent = () => (
  <div className="flex gap-3">
    {/* Filters sidebar */}
    <div className="w-28 shrink-0">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[9px] font-bold text-foreground">Filters</p>
        <button className="text-[6px] text-primary">↻ Reset</button>
      </div>
      <div className="mb-3">
        <p className="text-[7px] font-semibold text-foreground mb-1">Location</p>
        {["United States", "United Kingdom", "Germany", "France", "Spain", "Italy", "Switzerland", "Singapore", "United Arab Emirates", "Canada"].map((l) => (
          <label key={l} className="flex items-center gap-1.5 mb-0.5">
            <input type="checkbox" checked={l === "Spain"} readOnly className="w-2 h-2 rounded accent-primary" />
            <span className="text-[7px] text-foreground">{l}</span>
          </label>
        ))}
      </div>
      <div>
        <p className="text-[7px] font-semibold text-foreground mb-1">Experience Level</p>
        {["Internship", "Entry level"].map((l) => (
          <label key={l} className="flex items-center gap-1.5 mb-0.5">
            <input type="checkbox" checked={l === "Internship"} readOnly className="w-2 h-2 rounded accent-primary" />
            <span className="text-[7px] text-foreground">{l}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Job listings */}
    <div className="flex-1">
      <h3 className="text-sm font-bold text-foreground italic mb-0.5">Job Board</h3>
      <p className="text-[7px] text-primary mb-2">💼 303 total opportunities</p>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 bg-secondary rounded-md px-2 py-1.5 text-[8px] text-muted-foreground">🔍 Search jobs...</div>
        <button className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-[8px] font-medium">Search</button>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[7px] text-muted-foreground">Showing 9 jobs</p>
        <span className="text-[7px] text-muted-foreground">Most recent ▾</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {[
          { company: "Market Control", logo: "MC", color: "bg-rose-500", title: "Intern Customer Success & Marketing", location: "Barcelona, Spain", tag: "IT Services and IT Consulting", posted: "2 days ago" },
          { company: "American Express", logo: "AX", color: "bg-blue-600", title: "Campus - Internship Programme - Control Management", location: "Madrid, Spain", tag: "Financial Services", posted: "2 days ago" },
          { company: "Zynga", logo: "Z", color: "bg-orange-500", title: "Level Design Intern", location: "Barcelona, Spain", tag: "Computer Games", posted: "3 days ago" },
          { company: "Dermofarm", logo: "DF", color: "bg-teal-500", title: "Trainee Marketing Department", location: "Rubí, Spain", tag: "Personal Care Product Manufacturing", posted: "3 days ago" },
          { company: "1A Ingenieros", logo: "1A", color: "bg-amber-600", title: "Intern - Ingeniería Energética", location: "Valladolid, Spain", tag: "Business Consulting", posted: "3 days ago" },
          { company: "K-LAGAN", logo: "KL", color: "bg-gray-600", title: "Talent Acquisition Intern - Transporte & Supply Chain", location: "Barcelona, Spain", tag: "IT Services and IT Consulting", posted: "3 days ago" },
          { company: "Sweanty", logo: "SW", color: "bg-emerald-500", title: "Software Engineer Intern", location: "Mataró, Spain", tag: "Technology, Information and Internet", posted: "3 days ago" },
          { company: "Gameloft", logo: "GL", color: "bg-indigo-500", title: "Live Operations Intern", location: "Barcelona, Spain", tag: "Computer Games", posted: "3 days ago" },
        ].map((job) => (
          <div key={job.title} className="bg-card border border-border rounded-lg p-2">
            <div className="flex items-center justify-between mb-1.5">
              <div className={`w-5 h-5 rounded ${job.color} flex items-center justify-center text-[5px] font-bold text-white`}>{job.logo}</div>
              <span className="text-[7px] text-muted-foreground cursor-pointer">🔖</span>
            </div>
            <p className="text-[7px] font-semibold text-foreground leading-tight mb-0.5">{job.title}</p>
            <p className="text-[6px] text-primary mb-0.5">{job.company}</p>
            <p className="text-[6px] text-muted-foreground mb-1">📍 {job.location}</p>
            <p className="text-[5px] text-muted-foreground leading-tight mb-1.5 line-clamp-2">Join our team and contribute to exciting projects in {job.tag.toLowerCase()}...</p>
            <span className="text-[5px] bg-secondary text-muted-foreground rounded px-1 py-0.5 inline-block mb-1.5">{job.tag}</span>
            <div className="flex items-center justify-between">
              <span className="text-[5px] text-muted-foreground">🟢 Posted {job.posted}</span>
              <span className="text-[6px] text-primary font-medium cursor-pointer">View ↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Events Tab ─── */
const EventsContent = () => (
  <>
    <h3 className="text-sm font-bold text-foreground italic mb-0.5">Events</h3>
    <p className="text-[7px] text-muted-foreground mb-3">Discover workshops, career fairs, webinars, and networking opportunities</p>

    <div className="bg-secondary rounded-md px-2 py-1.5 text-[8px] text-muted-foreground mb-3">🔍 Search events by name or description...</div>

    <div className="flex items-center gap-2 mb-3">
      <span className="text-[7px]">Event Type</span>
      {["All", "Virtual", "In-Person"].map((t, i) => (
        <button key={t} className={`text-[7px] rounded-full px-2 py-0.5 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{t}</button>
      ))}
    </div>

    <p className="text-[7px] text-primary text-center mb-2">Showing 1-12 of 36 events</p>

    <div className="grid grid-cols-5 gap-1.5">
      {[
        { type: "In-Person", title: "NVIDIA GTC 2026", desc: "The premier global AI conference", date: "Mon, Mar 16, 8 AM", time: "8:00 AM - 6:00 PM", location: "In-Person", publisher: "Hammerspace", typeColor: "bg-rose-500" },
        { type: "In-Person", title: "Student & Community Voice AI Summit", desc: "K12 educators, students and communities", date: "Thu, Mar 19, 5 PM", time: "5:00 PM - 12:00 PM", location: "In-Person", publisher: "web.cvent.com", typeColor: "bg-rose-500" },
        { type: "Virtual", title: "HYBRID Workshop Vestibular Rehabilitation", desc: "Rehabilitation & Concussion Certification", date: "Sat, Mar 21", time: "12:00 PM", location: "Virtual", publisher: "Emedevents.com", typeColor: "bg-emerald-600" },
        { type: "Virtual", title: "31st International Conference on Nutrition", desc: "Scientific Conferences Global Events", date: "Thu, Apr 2 - Fri, Apr 3", time: "12:00 PM - 12:00 PM", location: "Virtual", publisher: "Nutrition & Dietetics", typeColor: "bg-emerald-600" },
        { type: "In-Person", title: "HumanX 2026 (HumanX)", desc: "Organized by HumanX, San Francisco", date: "Mon, Apr 6, 8 AM", time: "8:00 AM - 6:00 PM", location: "In-Person", publisher: "Conferencealerts.co.in", typeColor: "bg-rose-500" },
      ].map((ev) => (
        <div key={ev.title} className="bg-card border border-border rounded-lg p-2">
          <span className={`text-[5px] text-white font-bold rounded px-1 py-0.5 ${ev.typeColor} inline-block mb-1.5`}>{ev.type} Event</span>
          <p className="text-[7px] font-semibold text-foreground leading-tight mb-0.5">{ev.title}</p>
          <p className="text-[6px] text-muted-foreground leading-tight mb-1.5 line-clamp-2">{ev.desc}</p>
          <p className="text-[6px] text-muted-foreground">📅 {ev.date}</p>
          <p className="text-[6px] text-muted-foreground">⏰ {ev.time}</p>
          <p className="text-[6px] text-muted-foreground mb-1.5">📍 {ev.location}</p>
          <p className="text-[5px] text-muted-foreground mb-1.5">Published by {ev.publisher}</p>
          <button className="w-full bg-primary text-primary-foreground rounded-md py-1 text-[7px] font-medium">Register Now ↗</button>
        </div>
      ))}
    </div>
  </>
);

/* ─── Meetings Tab ─── */
const MeetingsContent = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div>
        <h3 className="text-sm font-bold text-foreground italic mb-0.5">Book a Meeting</h3>
        <p className="text-[7px] text-muted-foreground mb-4">Schedule 1-on-1 with our advisors</p>

        {/* Step 1 - Choose Advisor */}
        <p className="text-[9px] font-bold text-primary mb-2">1. Choose an Advisor</p>
        <div className="space-y-1.5 mb-4">
          {[
            { name: "Rania", specialty: "Tech Industry, Graduate Studies", initials: "R", color: "bg-primary" },
            { name: "Yan Bernard", specialty: "Resume Review, Academic Advising", initials: "YB", color: "bg-emerald-600" },
          ].map((adv) => (
            <div
              key={adv.name}
              onClick={() => setSelectedAdvisor(adv.name)}
              className={`border rounded-lg px-3 py-2.5 flex items-center gap-2.5 cursor-pointer transition-colors ${
                selectedAdvisor === adv.name ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className={`w-7 h-7 rounded-full ${adv.color} flex items-center justify-center text-[8px] font-bold text-white`}>{adv.initials}</div>
              <div>
                <p className="text-[9px] font-semibold text-foreground">{adv.name}</p>
                <p className="text-[7px] text-muted-foreground">{adv.specialty}</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-[7px] text-muted-foreground">
                <span>⏱ 30 min</span>
                <span>📹 Video call</span>
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
            {/* Calendar days */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const isAvailable = [16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31].includes(day);
              const offset = day === 1 ? "col-start-1" : "";
              return (
                <span
                  key={day}
                  className={`text-[7px] py-0.5 rounded ${offset} ${
                    isAvailable ? "text-primary font-bold cursor-pointer hover:bg-primary/10" : "text-muted-foreground"
                  } ${day === 15 ? "text-primary underline" : ""}`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>

        {/* Step 3 - Select Time */}
        <p className="text-[9px] font-bold text-primary mb-2">3. Select Time</p>
        <div className="grid grid-cols-4 gap-1">
          {["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM"].map((t) => (
            <button key={t} className="text-[7px] border border-border rounded py-1 text-muted-foreground hover:border-primary hover:text-primary transition-colors">{t}</button>
          ))}
        </div>
      </div>

      {/* Booking Summary sidebar */}
      <div className="w-36">
        <div className="border border-border rounded-lg p-3 sticky top-0">
          <p className="text-[9px] font-bold text-foreground mb-2">Booking Summary</p>
          <div className="space-y-2">
            {[
              { icon: "👤", label: "Advisor", value: selectedAdvisor || "Not selected" },
              { icon: "📅", label: "Date", value: "Not selected" },
              { icon: "⏰", label: "Time", value: "Not selected" },
              { icon: "📹", label: "Meeting Type", value: "30 min Video call" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[6px] text-primary font-medium">{item.label}</p>
                <p className="text-[7px] text-foreground font-medium">{item.value}</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary/30 text-primary-foreground rounded-md py-1.5 text-[7px] font-medium mt-3 opacity-50 cursor-not-allowed">Confirm Booking →</button>
          <p className="text-[6px] text-muted-foreground text-center mt-1">Please complete all selections above.</p>
        </div>
        <div className="mt-2 border border-border rounded-lg p-2">
          <span className="text-[7px] text-primary font-medium">👤 2 advisors available</span>
        </div>
      </div>
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
      <div className="p-4 min-h-[400px] max-h-[500px] overflow-y-auto" onClick={() => setResumeDropdownOpen(false)}>
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboardMockup;
