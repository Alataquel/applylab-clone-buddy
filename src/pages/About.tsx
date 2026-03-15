import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Heart, Zap, Shield, Globe } from "lucide-react";
import teamPhoto from "@/assets/team.jpeg";
import antonioPhoto from "@/assets/antonio.jpeg";
import yanPhoto from "@/assets/yan.jpeg";
import andreaPhoto from "@/assets/andrea.jpeg";
import temirPhoto from "@/assets/temir.jpeg";
import applylabLogo from "@/assets/applylab_logo.jpeg";

const team = [
  {
    photo: antonioPhoto,
    name: "Antonio Larrucea",
    role: "CEO",
    desc: "Previously led career development initiatives across European universities. Passionate about closing the gap between education and employment.",
  },
  {
    photo: yanPhoto,
    name: "Yan Bernard",
    role: "CTO",
    desc: "Full-stack engineer with deep expertise in AI systems and scalable architecture. Leads the core platform and data infrastructure at ApplyLab.",
  },
  {
    photo: andreaPhoto,
    name: "Andrea Hijazi",
    role: "COO",
    desc: "Operations strategist with a background in EdTech and international expansion. Keeps the team moving fast without breaking things.",
  },
  {
    photo: temirPhoto,
    name: "Temir Nyrov",
    role: "CLO",
    desc: "Brings hands-on experience helping startups navigate the legal landscape in Spain. Leads legal strategy and compliance at ApplyLab, ensuring the platform operates with integrity across European jurisdictions.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Student-first",
    desc: "Every product decision starts with one question: does this genuinely help a student land a better job?",
  },
  {
    icon: Zap,
    title: "Speed to impact",
    desc: "We move fast, iterate in public, and deploy improvements weekly. Students can't wait a year for better tools.",
  },
  {
    icon: Shield,
    title: "Privacy by design",
    desc: "Student data is sensitive. We're GDPR-compliant, minimal in what we collect, and transparent about how we use it.",
  },
  {
    icon: Globe,
    title: "Global reach, local knowledge",
    desc: "From Madrid to Berlin — we partner deeply with institutions to understand their specific labour markets.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Founded 2023 · Remote-first team
            </div>
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">About ApplyLab</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Built by people who <span className="text-gradient italic">know the struggle.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
              We started ApplyLab after watching smart students lose out on great jobs because of broken tools, opaque processes, and zero visibility. We're fixing that — for students and the universities that support them.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/request-pilot"
                className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-precision-lg">
              <img src={teamPhoto} alt="The ApplyLab Team" className="w-full h-auto object-cover" />
              <div className="bg-card px-4 py-3">
                <p className="text-sm text-muted-foreground">The ApplyLab Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The team</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Small team. <span className="text-gradient italic">Big mission.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-xl overflow-hidden shadow-precision group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.photo} alt={t.name} className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${t.name === "Antonio Larrucea" ? "object-[center_30%]" : ""}`} />
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary font-medium mb-1">{t.role}</p>
                  <p className="text-base font-semibold text-foreground mb-2">{t.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our values</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              What we <span className="text-gradient italic">stand for.</span>
            </h2>
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

      {/* Our story */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our story</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-6">
              Why we built this.
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                ApplyLab started with a simple observation: talented students were losing out on great opportunities not because of lack of ability, but because of broken tools and invisible processes. Spreadsheets for tracking applications. Generic resume templates. Career centres with no visibility into what students were actually doing until it was too late.
              </p>
              <p>
                We set out to build the platform we wished we'd had. One that understands your skills, surfaces the right opportunities, and gives your university the real-time data it needs to actually help — not just at graduation, but throughout your entire journey.
              </p>
              <p>
                Today, ApplyLab is running as an active pilot with universities in Spain and Germany — Saint Louis University, German UDS, XU Exponential University, and IE University. We're building carefully, and we're just getting started.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="rounded-xl overflow-hidden shadow-precision-md max-w-xs bg-white p-6">
              <img src={applylabLogo} alt="ApplyLab" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get involved</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-4">
              Be part of the <span className="text-gradient italic">mission.</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Whether you're a university looking to give your students a real edge, or a partner who wants to help — we'd love to hear from you.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/request-pilot"
                className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
