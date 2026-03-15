import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Megaphone, Users, Zap, Gift, Star, CheckCircle2 } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const perks = [
  {
    icon: Megaphone,
    title: "Be the voice on campus",
    description: "Represent ApplyLab at your university. Host workshops, share the platform, and help students discover better career tools.",
  },
  {
    icon: Zap,
    title: "Early access to features",
    description: "Get exclusive beta access to new tools before anyone else. Your feedback shapes the product roadmap directly.",
  },
  {
    icon: Gift,
    title: "Ambassador rewards",
    description: "Earn referral bonuses, exclusive swag, and certificates. Top ambassadors receive stipends and conference invitations.",
  },
  {
    icon: Users,
    title: "Join a global network",
    description: "Connect with driven students across Europe. Share strategies, collaborate on events, and build lasting professional relationships.",
  },
  {
    icon: Star,
    title: "Boost your CV",
    description: "Leadership, marketing, community building — ambassador experience stands out to recruiters and graduate programmes alike.",
  },
];

const steps = [
  { step: "01", title: "Apply", desc: "Fill in a short application — takes under 2 minutes." },
  { step: "02", title: "Interview", desc: "A quick 15-minute call with our partnerships team." },
  { step: "03", title: "Onboard", desc: "Get your ambassador kit, training materials, and dashboard access." },
  { step: "04", title: "Launch", desc: "Start spreading the word and tracking your impact in real time." },
];

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3" />
              Ambassador Programme
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
              Champion careers<br />
              <span className="text-gradient italic">at your university.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              Join a select group of student leaders helping their peers access better career tools. Grow your network, sharpen your skills, and make a real impact on campus.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-7 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply now <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#how-it-works"
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

      {/* What ambassadors do — stats bar */}
      <section className="py-14 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "4", label: "Universities currently active" },
            { value: "50+", label: "Students reached per ambassador" },
            { value: "100%", label: "Say it boosted their CV" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{s.value}</p>
              <p className="text-sm text-gray-500 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Why join</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">More than a title.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Ideal candidate</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">What we look for.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Currently enrolled at a university in Europe",
              "Passionate about helping peers with their career journey",
              "Active in student clubs, societies, or campus life",
              "Strong communicator — online or in person",
              "Self-starter who can organise workshops or events",
              "Interested in startups, tech, or education",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 bg-white rounded-lg px-4 py-3.5 border border-gray-100"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Process</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">How to become an ambassador.</h2>
          </motion.div>

          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start relative py-6"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[11px] top-[48px] bottom-0 w-px bg-gray-200" />
                )}
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10">
                  <span className="text-[9px] text-primary font-bold">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-12 lg:p-16 shadow-precision-lg relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-4 relative">
              Ready to lead?
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto relative">
              Applications are open on a rolling basis. Join the next cohort and help shape how students launch their careers.
            </p>
            <motion.a
              href="/request-pilot"
              className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity relative"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Apply to be an ambassador <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambassador;
