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

const Privacy = () => {
  const sections = [
    { title: "1. Introduction", content: <p>ApplyLab ("we", "our", "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, store, and share your personal data when you use our platform and services.</p> },
    { title: "2. Data We Collect", content: <><p className="mb-2">We collect the following categories of personal data:</p><ul className="list-disc list-inside space-y-1 ml-2"><li><strong className="text-foreground">Account information:</strong> Name, email address, university affiliation, and role</li><li><strong className="text-foreground">Profile data:</strong> CV content, skills, work experience, and education history</li><li><strong className="text-foreground">Usage data:</strong> Feature interactions, application tracking activity, and session information</li><li><strong className="text-foreground">Technical data:</strong> Browser type, device information, IP address, and cookies</li></ul></> },
    { title: "3. How We Use Your Data", content: <><p className="mb-2">We use your personal data to:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>Provide and improve the ApplyLab platform and its features</li><li>Generate AI-powered job matches, resume feedback, and career insights</li><li>Provide aggregated, anonymised analytics to partner universities</li><li>Communicate with you about your account and platform updates</li><li>Ensure the security and integrity of the platform</li><li>Comply with legal obligations</li></ul></> },
    { title: "4. AI Processing", content: <p>We use artificial intelligence to analyse your profile, CV, and career preferences to provide personalised job matching and resume optimisation. AI processing is performed on our secure infrastructure. Your data is not used to train general-purpose AI models without your explicit consent.</p> },
    { title: "5. Data Sharing", content: <><p className="mb-2">We do not sell your personal data. We share data only in the following circumstances:</p><ul className="list-disc list-inside space-y-1 ml-2"><li><strong className="text-foreground">University partners:</strong> Aggregated, anonymised analytics only.</li><li><strong className="text-foreground">Service providers:</strong> Trusted third parties bound by data processing agreements.</li><li><strong className="text-foreground">Legal requirements:</strong> When required by law, court order, or regulatory authority.</li></ul></> },
    { title: "6. Data Retention", content: <p>We retain your personal data for as long as your account is active or as needed to provide our services. You may request deletion of your data at any time. Upon account deletion, your personal data will be permanently removed within 30 days, except where retention is required by law.</p> },
    { title: "7. Data Security", content: <p>We implement industry-standard technical and organisational measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits.</p> },
    { title: "8. Your Rights", content: <><p className="mb-2">Depending on your jurisdiction, you may have the following rights:</p><ul className="list-disc list-inside space-y-1 ml-2"><li>Access your personal data and request a copy</li><li>Correct inaccurate or incomplete data</li><li>Request deletion of your personal data</li><li>Object to or restrict certain processing activities</li><li>Data portability</li><li>Withdraw consent at any time</li></ul><p className="mt-2">To exercise these rights, contact us at <a href="mailto:privacy@applylab.software" className="text-primary hover:underline">privacy@applylab.software</a>.</p></> },
    { title: "9. Cookies", content: <p>We use essential cookies to ensure the platform functions correctly and analytics cookies to understand how the platform is used. We do not use third-party advertising cookies.</p> },
    { title: "10. International Transfers", content: <p>Your data may be processed in countries outside your country of residence. Where data is transferred internationally, we ensure appropriate safeguards are in place.</p> },
    { title: "11. Children's Privacy", content: <p>ApplyLab is designed for university students and professionals. We do not knowingly collect personal data from individuals under the age of 16.</p> },
    { title: "12. Changes to This Policy", content: <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or a notice on the platform.</p> },
    { title: "13. Contact Us", content: <p>For privacy-related enquiries, contact our Data Protection team at <a href="mailto:privacy@applylab.software" className="text-primary hover:underline">privacy@applylab.software</a>.</p> },
  ];

  return (
    <GridBackground>
      <Navbar />
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Legal</motion.p>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-8">Privacy Policy</motion.h1>
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

export default Privacy;
