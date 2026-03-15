import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Eye, TrendingUp, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Real-time visibility",
    desc: "See exactly where your students are in their job search — not through end-of-year surveys, but live. Track application volumes, interview rates, and offer conversions as they happen.",
  },
  {
    icon: TrendingUp,
    title: "Proactive intervention",
    desc: "Identify at-risk students before they disengage. Our engagement signals help career counsellors prioritise outreach and allocate resources where they matter most.",
  },
  {
    icon: BarChart3,
    title: "Outcomes reporting",
    desc: "Generate placement reports with real data — not estimates. Break down outcomes by programme, cohort, industry, and more. Built for accreditation bodies and internal stakeholders.",
  },
  {
    icon: Shield,
    title: "Student data sovereignty",
    desc: "Students own their data. Universities see only aggregated, anonymised analytics. No personal application details are shared without explicit student consent.",
  },
];

const ForUniversities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">For Universities</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Career outcomes you can <span className="text-gradient italic">actually measure.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              ApplyLab gives your career services team the infrastructure to track, support, and improve student employability — from first application to first job.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
              >
                Contact our team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "94%", label: "CV optimisation rate" },
            { value: "3x", label: "More visibility into career activity" },
            { value: "< 2 weeks", label: "Average onboarding time" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Why ApplyLab</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">Infrastructure, not another tool.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-precision hover:-translate-y-0.5 transition-transform"
              >
                <b.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-sm font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Process</p>
            <h2 className="text-2xl font-bold text-foreground tracking-tight">How the pilot works.</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Request a pilot", desc: "Fill in the form and our partnerships team will reach out within 48 hours." },
              { step: "02", title: "Onboarding call", desc: "We configure ApplyLab for your institution — programmes, branding, integrations." },
              { step: "03", title: "Student rollout", desc: "Students receive access through your institution. We provide launch support and materials." },
              { step: "04", title: "Outcomes dashboard", desc: "Career teams get access to live analytics within the first week of student activity." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-6 items-start"
              >
                <span className="text-xs text-primary font-mono mt-1">{s.step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForUniversities;
