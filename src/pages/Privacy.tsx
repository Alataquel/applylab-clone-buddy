import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Legal</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>ApplyLab ("we", "our", "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, store, and share your personal data when you use our platform and services.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">2. Data We Collect</h2>
              <p className="mb-2">We collect the following categories of personal data:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-foreground">Account information:</strong> Name, email address, university affiliation, and role</li>
                <li><strong className="text-foreground">Profile data:</strong> CV content, skills, work experience, and education history</li>
                <li><strong className="text-foreground">Usage data:</strong> Feature interactions, application tracking activity, and session information</li>
                <li><strong className="text-foreground">Technical data:</strong> Browser type, device information, IP address, and cookies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">3. How We Use Your Data</h2>
              <p className="mb-2">We use your personal data to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Provide and improve the ApplyLab platform and its features</li>
                <li>Generate AI-powered job matches, resume feedback, and career insights</li>
                <li>Provide aggregated, anonymised analytics to partner universities</li>
                <li>Communicate with you about your account and platform updates</li>
                <li>Ensure the security and integrity of the platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">4. AI Processing</h2>
              <p>We use artificial intelligence to analyse your profile, CV, and career preferences to provide personalised job matching and resume optimisation. AI processing is performed on our secure infrastructure. Your data is not used to train general-purpose AI models without your explicit consent.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">5. Data Sharing</h2>
              <p className="mb-2">We do not sell your personal data. We share data only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-foreground">University partners:</strong> Aggregated, anonymised analytics only. Individual student data is never shared without explicit consent.</li>
                <li><strong className="text-foreground">Service providers:</strong> Trusted third parties who assist in operating the platform (e.g., hosting, analytics), bound by data processing agreements.</li>
                <li><strong className="text-foreground">Legal requirements:</strong> When required by law, court order, or regulatory authority.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">6. Data Retention</h2>
              <p>We retain your personal data for as long as your account is active or as needed to provide our services. You may request deletion of your data at any time. Upon account deletion, your personal data will be permanently removed within 30 days, except where retention is required by law.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">7. Data Security</h2>
              <p>We implement industry-standard technical and organisational measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the internet is completely secure.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">8. Your Rights</h2>
              <p className="mb-2">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Access your personal data and request a copy</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability — receive your data in a structured, machine-readable format</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p className="mt-2">To exercise these rights, contact us at <a href="mailto:privacy@applylab.software" className="text-primary hover:underline">privacy@applylab.software</a>.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">9. Cookies</h2>
              <p>We use essential cookies to ensure the platform functions correctly and analytics cookies to understand how the platform is used. You can manage cookie preferences through your browser settings. We do not use third-party advertising cookies.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">10. International Transfers</h2>
              <p>Your data may be processed in countries outside your country of residence. Where data is transferred internationally, we ensure appropriate safeguards are in place, including standard contractual clauses or equivalent mechanisms.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">11. Children's Privacy</h2>
              <p>ApplyLab is designed for university students and professionals. We do not knowingly collect personal data from individuals under the age of 16. If we become aware of such data, we will take steps to delete it promptly.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or a notice on the platform. Continued use after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">13. Contact Us</h2>
              <p>For privacy-related enquiries, contact our Data Protection team at <a href="mailto:privacy@applylab.software" className="text-primary hover:underline">privacy@applylab.software</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
