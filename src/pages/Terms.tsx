import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import GridBackground from "@/components/landing/GridBackground";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Terms = () => {
  const sections = [
    { title: "1. Acceptance of Terms", content: <p>By accessing or using ApplyLab ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Platform.</p> },
    { title: "2. Description of Service", content: <p>ApplyLab provides career outcomes infrastructure for universities, including AI-powered job matching, resume analysis, application tracking, and institutional analytics.</p> },
    { title: "3. User Accounts", content: <><p className="mb-2">You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information.</p><p>You must not share your account with others or allow unauthorised access.</p></> },
    { title: "4. Acceptable Use", content: <><p className="mb-2">You agree not to:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>Use the Platform for any unlawful purpose</li><li>Attempt to gain unauthorised access to any part of the Platform</li><li>Upload false, misleading, or fraudulent information</li><li>Interfere with or disrupt the Platform's infrastructure</li><li>Scrape, crawl, or use automated tools to extract data</li><li>Resell, redistribute, or sublicense access</li></ul></> },
    { title: "5. Intellectual Property", content: <p>All content, features, and functionality of the Platform are owned by ApplyLab or its licensors. You may not copy, modify, or distribute any part without prior written consent.</p> },
    { title: "6. User Content", content: <p>You retain ownership of content you upload. By uploading content, you grant ApplyLab a limited licence to process, store, and analyse it solely to provide the service.</p> },
    { title: "7. AI-Generated Output", content: <p>The Platform uses AI to provide suggestions, scores, and recommendations. These are informational only and should not be considered professional career advice.</p> },
    { title: "8. Institutional Access", content: <p>Universities access aggregated, anonymised data through the analytics dashboard. Individual student data is never shared without explicit consent.</p> },
    { title: "9. Limitation of Liability", content: <p>To the fullest extent permitted by law, ApplyLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.</p> },
    { title: "10. Termination", content: <p>We reserve the right to suspend or terminate your access at any time. Upon termination, your right to use the Platform ceases immediately.</p> },
    { title: "11. Changes to Terms", content: <p>We may update these Terms from time to time. Continued use after changes constitutes acceptance of the revised terms.</p> },
    { title: "12. Governing Law", content: <p>These Terms are governed by the laws of the jurisdiction in which ApplyLab is incorporated.</p> },
    { title: "13. Contact", content: <p>If you have questions, contact us at <a href="mailto:legal@applylab.software" className="text-primary hover:underline">legal@applylab.software</a>.</p> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Legal</motion.p>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-8">Terms of Service</motion.h1>
            <motion.p variants={itemVariants} className="text-xs text-muted-foreground mb-10">Last updated: March 2026</motion.p>
          </motion.div>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <h2 className="text-base font-semibold text-foreground mb-3">{s.title}</h2>
                {s.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
