import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Users, Target, Globe, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcomes over activity",
    desc: "We measure what matters — not how many applications were sent, but how many careers were launched.",
  },
  {
    icon: Users,
    title: "Built with institutions",
    desc: "Every feature is co-designed with career services teams who understand the complexity of student employability.",
  },
  {
    icon: Globe,
    title: "European-first, globally relevant",
    desc: "We started with European universities because the employability challenge is acute — and scaling from there.",
  },
  {
    icon: Lightbulb,
    title: "AI as infrastructure",
    desc: "We don't sprinkle AI on top. We use it to rebuild the entire career outcomes pipeline from the ground up.",
  },
];

const team = [
  { initials: "AK", name: "Alex Kim", role: "Co-founder & CEO" },
  { initials: "ML", name: "Maria Laurent", role: "Co-founder & CTO" },
  { initials: "JR", name: "James Rivera", role: "Head of Partnerships" },
  { initials: "SN", name: "Sophie Nguyen", role: "Head of Product" },
];

const About = () => {
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
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">About</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Career services deserve <span className="text-gradient italic">real infrastructure.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Universities invest heavily in education — but the bridge between graduation and employment is still built on spreadsheets, manual surveys, and guesswork. ApplyLab is changing that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Mission</p>
            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">
              Make career outcomes visible, measurable, and improvable.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We believe that every university should have real-time visibility into how their students navigate the job market — not six months after graduation, but while it's happening.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ApplyLab gives students the tools to apply smarter, and gives institutions the data to support them better. It's career outcomes infrastructure — purpose-built for higher education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Principles</p>
            <h2 className="text-2xl font-bold text-foreground tracking-tight">What drives us.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-precision hover:-translate-y-0.5 transition-transform"
              >
                <v.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Team</p>
            <h2 className="text-2xl font-bold text-foreground tracking-tight">The people behind ApplyLab.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-precision text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground mx-auto mb-4">
                  {t.initials}
                </div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
