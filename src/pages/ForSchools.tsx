import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  DatabaseZap,
  FileText,
  GraduationCap,
  LockKeyhole,
  MapPinned,
  Rows3,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import GridBackground from "@/components/landing/GridBackground";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const fitScores = [
  { label: "Analytical", value: "91%", width: "w-[91%]", accent: "bg-primary" },
  { label: "Communication", value: "84%", width: "w-[84%]", accent: "bg-success" },
  { label: "Creative", value: "76%", width: "w-[76%]", accent: "bg-insight" },
  { label: "Technical", value: "69%", width: "w-[69%]", accent: "bg-warning" },
];

const programMatches = [
  { name: "Business Analytics", school: "IE University", band: "Target", meta: "€24k · Spain · strong internship outcomes" },
  { name: "International Management", school: "SLU Madrid", band: "Likely", meta: "Aid available · US/EU pathway" },
  { name: "Data Science", school: "German UDS", band: "Reach", meta: "Technical profile boost recommended" },
];

const pillars = [
  {
    icon: GraduationCap,
    eyebrow: "For students",
    title: "Guided discovery",
    copy: "A short, friendly assessment builds a fit profile and turns uncertainty into a ranked university plan.",
    accent: "text-primary",
    bg: "bg-primary/10",
    bullets: [
      "Analytical, Communication, Creative and Technical sub-scores",
      "Ranked matches with a clear ‘why this fits’ explanation",
      "University Board with 585+ undergraduate programs across 10 countries",
      "Admissions band, costs, aid, visa/work rights and graduate outcomes",
    ],
  },
  {
    icon: UserRoundCheck,
    eyebrow: "For counselors",
    title: "Lightweight CRM",
    copy: "Replace spreadsheet tracking with a counselor view built around follow-ups, notes and outcomes.",
    accent: "text-success",
    bg: "bg-success/10",
    bullets: [
      "Student roster with assessment status and follow-up flags",
      "Counselor-only profiles, notes and recommendation-letter talking points",
      "Letter-draft assist for recommendation workflows",
      "Cohort outcomes, predicted fit vs. actual enrollment and year-over-year trends",
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: "For IT & admin",
    title: "Enterprise-ready",
    copy: "A school-ready deployment that respects data, roles and reporting from day one.",
    accent: "text-warning",
    bg: "bg-warning/10",
    bullets: [
      "EU data hosting with configurable retention",
      "CSV import and export for simple operations",
      "SIS, SSO and Common App-style integrations",
      "Role-based access for Counselor, Admin and IT Owner",
    ],
  },
];

const boardHighlights = [
  { icon: MapPinned, title: "Program intelligence", copy: "585+ programs, 10 countries, admissions bands and side-by-side comparisons." },
  { icon: CalendarDays, title: "Deadline calendar", copy: "Every deadline in one view, with color-coded urgency before anything slips." },
  { icon: ClipboardList, title: "Application tracker", copy: "Personal checklists, missing requirements and contextual tips for each program." },
  { icon: FileText, title: "Detail drawers", copy: "Costs, aid, visa rules, work rights and ‘where graduates end up’ outcomes." },
];

const ForSchools = () => {
  return (
    <GridBackground>
      <Navbar />

      <section className="pt-44 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
              ApplyLab for Schools
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.08] mb-6 text-balance">
              Fit-based guidance that follows each student into university.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-2xl">
              One profile, built at school, carried forward. ApplyLab helps high school students find the degrees where they fit, gives counselors a lightweight CRM, and keeps the profile alive when students move into internships.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <a href="/request-pilot">
                  Request a pilot <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-secondary">
                <a href="#school-platform">See the platform</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-5 lg:p-6 shadow-precision-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1">Student fit profile</p>
                <h2 className="text-lg font-semibold text-foreground">Maya · Year 12</h2>
              </div>
              <span className="rounded-full border border-success/30 bg-success/10 text-success text-[10px] font-semibold px-3 py-1">
                Ready to compare
              </span>
            </div>

            <div className="space-y-4 mb-6">
              {fitScores.map((score) => (
                <div key={score.label}>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-muted-foreground">{score.label}</span>
                    <span className="font-semibold text-foreground">{score.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className={`h-full rounded-full ${score.width} ${score.accent}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {programMatches.map((program) => (
                <div key={program.name} className="rounded-xl border border-border/70 bg-background/50 p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{program.name}</p>
                      <p className="text-xs text-muted-foreground">{program.school}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 text-primary text-[10px] font-semibold px-2.5 py-1">
                      {program.band}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{program.meta}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="school-platform" className="bg-light py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-14"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Three connected layers</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-light-foreground tracking-tight leading-[1.1] mb-5">
              Built for students, counselors and the teams who support them.
            </h2>
            <p className="text-base text-light-muted leading-relaxed">
              ApplyLab gives every student a practical university path while giving schools the visibility to guide the whole cohort.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-2xl bg-blue-card border border-primary/20 p-7 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl ${pillar.bg} flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-5 h-5 ${pillar.accent}`} />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-2">{pillar.eyebrow}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pillar.copy}</p>
                <ul className="space-y-3 mt-auto">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 ${pillar.accent} mt-0.5 flex-shrink-0`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">University Board</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-light-foreground tracking-tight leading-[1.12] mb-5">
              The planning board families and counselors can actually keep updated.
            </h2>
            <p className="text-base text-light-muted leading-relaxed mb-8">
              Every match becomes an action plan: compare programs, track requirements, see deadline urgency and understand what each application still needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {boardHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-xl bg-light border border-soft-border p-5"
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-sm font-semibold text-light-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-light-muted leading-relaxed">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-card border border-border p-6 shadow-precision-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1">Deadline calendar</p>
                <h3 className="text-lg font-bold text-foreground">January applications</h3>
              </div>
              <Rows3 className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              {[
                { date: "Jan 12", title: "IE University · Business Analytics", status: "Likely", urgency: "Missing aid form", tone: "warning" },
                { date: "Jan 18", title: "SLU Madrid · International Management", status: "Target", urgency: "Ready to submit", tone: "success" },
                { date: "Jan 26", title: "German UDS · Data Science", status: "Reach", urgency: "Essay draft needed", tone: "primary" },
              ].map((item) => (
                <div key={item.title} className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-xl bg-background/60 border border-border/70 p-4">
                  <div className="rounded-lg bg-secondary text-center py-3">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Due</p>
                    <p className="text-sm font-bold text-foreground mt-1">{item.date}</p>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <span className="rounded-full bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5">{item.status}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.urgency}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 text-primary px-4 py-2 text-xs font-semibold mb-6">
              <DatabaseZap className="w-4 h-4" />
              Continuity from school to career
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Your profile doesn’t reset — <span className="text-gradient italic">it grows with you.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-9">
              The same fit profile that helps students choose a degree becomes the foundation for undergraduate career matching, internship applications and interview prep.
            </p>
            <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              <a href="/request-pilot">
                Request a pilot <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </GridBackground>
  );
};

export default ForSchools;