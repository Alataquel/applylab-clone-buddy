import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import GridBackground from "@/components/landing/GridBackground";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Gift, LayoutDashboard, FileBadge, Users, CheckCircle2, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const benefits = [
  {
    icon: Gift,
    title: "Earn per sign-up",
    description: "Get paid for every user who signs up with your personal referral code. Transparent, real-time tracking.",
  },
  {
    icon: LayoutDashboard,
    title: "Your own dashboard",
    description: "Track referrals, earnings, and performance in a dashboard built just for ambassadors.",
  },
  {
    icon: FileBadge,
    title: "CV + experience booster",
    description: "Real responsibility, real results. Add ApplyLab Ambassador to your CV with confidence.",
  },
  {
    icon: Users,
    title: "Perks & community",
    description: "Exclusive swag, events, networking with founders, and a private community of top student ambassadors.",
  },
];

const timeline = [
  {
    when: "Now",
    title: "Onboarding",
    desc: "Apply, get accepted, and complete a short onboarding so you're ready to launch.",
  },
  {
    when: "Mid-Aug → early Sept",
    title: "Code + dashboard live",
    desc: "Receive your personal referral code and ambassador dashboard access.",
  },
  {
    when: "From launch",
    title: "Bring users & grow",
    desc: "Start sharing, earning, and climbing the ambassador leaderboard.",
  },
];

const Ambassador = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Application received",
        description: "Thanks for applying! We'll be in touch within a few days.",
      });
    }, 600);
  };

  return (
    <GridBackground>
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3" />
              Ambassador Programme
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
              Become an <span className="text-gradient italic">ApplyLab Ambassador.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              Earn money, boost your CV, and help peers land their next role. Join the first cohort of student ambassadors shaping how careers get launched.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="#apply"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-7 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply now <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#benefits"
                className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-7 py-3.5 rounded-full text-sm hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn more
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">What you get</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">More than a title.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card rounded-xl p-6 shadow-precision border border-border/30 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Roadmap</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">How it rolls out.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border/30 rounded-xl p-6 relative"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mb-4">
                  {i + 1}
                </div>
                <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2">{t.when}</p>
                <h3 className="text-base font-semibold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program stats */}
      <section className="py-14 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "100%", label: "Put it on their CV" },
            { value: "3×", label: "More likely to land an internship" },
            { value: "12+", label: "Events hosted per ambassador" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Apply</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
              Join the next cohort.
            </h2>
            <p className="text-base text-muted-foreground">
              Takes 2 minutes. We review applications on a rolling basis.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/30 rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-foreground mb-2">Full name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-2">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jane@university.edu"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-2">University</label>
              <input
                required
                name="university"
                type="text"
                placeholder="Bocconi University"
                className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-2">Socials (LinkedIn, Instagram, TikTok…)</label>
              <input
                name="socials"
                type="text"
                placeholder="linkedin.com/in/yourname, @yourhandle"
                className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-2">Why do you want to join?</label>
              <textarea
                required
                name="why"
                rows={4}
                placeholder="Tell us a bit about you and why you'd be a great ambassador…"
                className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 w-full bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit application"}
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>

            <p className="text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-primary" />
              We'll reply within a few business days.
            </p>
          </motion.form>
        </div>
      </section>

      <Footer />
    </GridBackground>
  );
};

export default Ambassador;
