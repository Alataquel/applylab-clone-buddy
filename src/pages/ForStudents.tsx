import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Zap, FileText, BarChart3, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Job Discovery",
    desc: "Roles ranked by genuine fit — not keyword overlap. Our matching model reads your full profile and surfaces only the positions where you'd genuinely stand out.",
    detail: "Powered by contextual AI that understands skills, experience, and career trajectory.",
  },
  {
    icon: FileText,
    title: "Resume Lab",
    desc: "Line-by-line AI feedback on your CV. Improve your ATS score, strengthen impact statements, and close keyword gaps — in seconds, not hours.",
    detail: "94% average ATS pass rate across all student CVs.",
  },
  {
    icon: BarChart3,
    title: "Application Tracker",
    desc: "A visual pipeline that keeps every application organised. Track status, set reminders, and never lose track of a process again.",
    detail: "Automatic status updates and follow-up prompts built in.",
  },
  {
    icon: Zap,
    title: "One-click Apply",
    desc: "Pre-fill applications with your optimised profile. Reduce time-per-application from 30 minutes to under 5.",
    detail: "Works with major job boards and company career pages.",
  },
];

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Students</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Your career toolkit, <span className="text-gradient italic">built to perform.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Stop guessing which roles fit. Stop sending generic CVs. ApplyLab gives you the tools to apply with precision and land with confidence.
            </p>
            <a
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Request early access <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center bg-card rounded-xl p-8 shadow-precision hover:-translate-y-0.5 transition-transform"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">
              Access through your university.
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              ApplyLab is available through partner institutions. If your university isn't listed yet, request early access and we'll get in touch.
            </p>
            <a
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Apply for early access <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForStudents;
