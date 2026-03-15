import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Legal</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-8">Terms of Service</h1>
          <p className="text-xs text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using ApplyLab ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Platform. These terms apply to all users, including students, university staff, and institutional administrators.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>ApplyLab provides career outcomes infrastructure for universities, including AI-powered job matching, resume analysis, application tracking, and institutional analytics. Access is granted through partner university agreements or approved early-access programmes.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p className="mb-2">You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.</p>
              <p>You must not share your account with others or allow unauthorised access. You are responsible for all activity that occurs under your account.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">4. Acceptable Use</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Use the Platform for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the Platform</li>
                <li>Upload false, misleading, or fraudulent information</li>
                <li>Interfere with or disrupt the Platform's infrastructure</li>
                <li>Scrape, crawl, or use automated tools to extract data from the Platform</li>
                <li>Resell, redistribute, or sublicense access to the Platform</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p>All content, features, and functionality of the Platform — including text, graphics, logos, algorithms, and software — are owned by ApplyLab or its licensors. You may not copy, modify, or distribute any part of the Platform without prior written consent.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">6. User Content</h2>
              <p>You retain ownership of content you upload (e.g., CVs, profile information). By uploading content, you grant ApplyLab a limited licence to process, store, and analyse it solely to provide the service. We will not share your content with third parties without your consent, except as required by law.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">7. AI-Generated Output</h2>
              <p>The Platform uses artificial intelligence to provide suggestions, scores, and recommendations. These outputs are informational only and should not be considered professional career advice. ApplyLab does not guarantee employment outcomes based on AI analysis.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">8. Institutional Access</h2>
              <p>Universities and institutions access aggregated, anonymised data through the analytics dashboard. Individual student data is never shared with institutional users without explicit student consent. Institutional terms are governed by separate partnership agreements.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, ApplyLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform, including but not limited to loss of employment opportunities, data loss, or service interruptions.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">10. Termination</h2>
              <p>We reserve the right to suspend or terminate your access to the Platform at any time, with or without cause or notice. Upon termination, your right to use the Platform ceases immediately. You may request deletion of your data by contacting our support team.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">11. Changes to Terms</h2>
              <p>We may update these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the Platform after changes constitutes acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">12. Governing Law</h2>
              <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction in which ApplyLab is incorporated. Any disputes shall be resolved in the competent courts of that jurisdiction.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">13. Contact</h2>
              <p>If you have questions about these Terms, please contact us at <a href="mailto:legal@applylab.software" className="text-primary hover:underline">legal@applylab.software</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
