import GridBackground from "@/components/landing/GridBackground";
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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

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
    <GridBackground>
      <Navbar />

      {/* Hero */}
      <section className="px-6 lg:px-12 pt-40 pb-28 lg:pt-48 lg:pb-36 min-h-[calc(100svh-4.5rem)] flex items-center">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Founded 2024 · Remote-first team
            </motion.div>
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">About ApplyLab</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Built by people who <span className="text-gradient italic">know the struggle.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
              We started ApplyLab after watching smart students lose out on great jobs because of broken tools, opaque processes, and zero visibility. We're fixing that — for students and the universities that support them.
            </motion.p>
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 text-muted-foreground font-medium px-6 py-3 rounded-full text-sm border border-muted hover:text-foreground transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
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
      <section className="py-40 px-6 lg:px-12 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">The team</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl overflow-hidden shadow-precision group cursor-default"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={t.photo}
                    alt={t.name}
                    className={`w-full h-full object-cover ${t.name === "Antonio Larrucea" ? "object-[center_30%]" : ""}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute bottom-3 left-3"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  >
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-primary/80 text-primary-foreground px-3 py-1 rounded-full backdrop-blur-sm">
                      {t.role}
                    </span>
                  </motion.div>
                </div>
                <div className="p-5">
                  <motion.p
                    className="text-base font-semibold text-foreground mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                  >
                    {t.name}
                  </motion.p>
                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  >
                    {t.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-12 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our values</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              What we <span className="text-gradient italic">stand for.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-xl p-6 transition-shadow border border-gray-100 hover:shadow-md"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <v.icon className="w-5 h-5 text-primary mb-4" />
                </motion.div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our story</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-6">
              Why we built this.
            </h2>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              {[
                "ApplyLab started with a simple observation: talented students were losing out on great opportunities not because of lack of ability, but because of broken tools and invisible processes. Spreadsheets for tracking applications. Generic resume templates. Career centres with no visibility into what students were actually doing until it was too late.",
                "We set out to build the platform we wished we'd had. One that understands your skills, surfaces the right opportunities, and gives your university the real-time data it needs to actually help — not just at graduation, but throughout your entire journey.",
                "Today, ApplyLab is running with universities in Spain and Germany — Saint Louis University, German UDS, XU Exponential University, and IE University. We're building carefully, and we're just getting started.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="rounded-xl overflow-hidden shadow-precision-md max-w-xs bg-white p-6">
              <img src={applylabLogo} alt="ApplyLab" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get involved</motion.p>
            <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Be part of the <span className="text-gradient italic">mission.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
              Whether you're a university looking to give your students a real edge, or a partner who wants to help — we'd love to hear from you.
            </motion.p>
            <motion.div variants={itemVariants} className="flex justify-center gap-3">
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a pilot <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/request-pilot"
                className="inline-flex items-center gap-2 text-gray-500 font-medium px-6 py-3 rounded-full text-sm border border-gray-200 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </GridBackground>
  );
};

export default About;
