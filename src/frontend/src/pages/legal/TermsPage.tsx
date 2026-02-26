import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold font-heading text-[#0A1628] mb-3 border-b border-gray-200 pb-2">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold text-[#1F3A93] mb-2">{title}</h3>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">Terms & Conditions</h1>
          <p className="text-gray-300">Last updated: January 1, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-800 text-sm">
            Please read these Terms & Conditions carefully before using the NexVstar AI Technology platform. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </div>

        <Section title="1. Company Information">
          <p>
            These Terms & Conditions govern your use of the platform and services provided by <strong>NexVstar AI Technology Pvt. Ltd.</strong>, a company incorporated under the Companies Act, 2013, with its registered office in Mumbai, Maharashtra, India (hereinafter referred to as "NexVstar", "we", "us", or "our").
          </p>
        </Section>

        <Section title="2. Acceptance of Terms">
          <p>
            By accessing, registering, or using the NexVstar AI platform, mobile applications, APIs, or any other services offered by NexVstar AI Technology Pvt. Ltd. ("Services"), you ("User", "Client", or "you") agree to comply with and be bound by these Terms & Conditions.
          </p>
          <p>
            If you are entering into these terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.
          </p>
        </Section>

        <Section title="3. Services Provided">
          <p>NexVstar provides an AI-powered Revenue Intelligence and Sales Automation platform, including but not limited to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>AI-driven lead capture and scoring</li>
            <li>Automated follow-up sequences (email, WhatsApp, calls)</li>
            <li>Revenue forecasting dashboards</li>
            <li>Enterprise insights and recommendations</li>
            <li>CRM integration services</li>
            <li>Team management and role-based access controls</li>
          </ul>
        </Section>

        <Section title="4. Payment Terms">
          <SubSection title="4.1 Setup Fee">
            <p>A one-time setup fee is due prior to platform deployment. This fee covers configuration, integration, and onboarding and is non-refundable once services have been initiated.</p>
          </SubSection>
          <SubSection title="4.2 Monthly Subscription">
            <p>Subscription fees are billed monthly in advance. Payment is due within 15 days of invoice date. Late payment attracts interest at 18% per annum.</p>
          </SubSection>
          <SubSection title="4.3 Annual Plans">
            <p>Annual subscription fees are due upfront. Clients on annual plans receive a 20% discount on the monthly rate. No pro-rata refunds on annual plans after the first 30 days.</p>
          </SubSection>
          <SubSection title="4.4 GST">
            <p>All prices are exclusive of GST (Goods and Services Tax) as applicable under Indian law. GST-compliant invoices will be issued for all transactions.</p>
          </SubSection>
        </Section>

        <Section title="5. Cancellation and Refund Policy">
          <SubSection title="5.1 Cancellation">
            <p>Monthly subscribers may cancel with 30 days' written notice. Annual subscribers may cancel with 60 days' written notice.</p>
          </SubSection>
          <SubSection title="5.2 Refunds">
            <p>Setup fees are non-refundable. Monthly subscription fees are non-refundable after the 15th day of the billing period. Annual fees are refundable on a pro-rata basis within the first 30 days.</p>
          </SubSection>
          <SubSection title="5.3 Data on Cancellation">
            <p>Upon cancellation, you will receive a complete export of your data within 30 days. Data is permanently deleted after 60 days post-cancellation.</p>
          </SubSection>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            NexVstar AI Technology Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the services. Our total aggregate liability shall not exceed the total fees paid by you in the 12 months preceding the claim.
          </p>
          <p>
            The AI predictions, forecasts, and recommendations provided by the platform are advisory in nature. Business decisions made based on AI outputs remain solely the responsibility of the client.
          </p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>
            All content, technology, software, algorithms, and materials on the NexVstar platform are the exclusive property of NexVstar AI Technology Pvt. Ltd. and are protected by applicable intellectual property laws. Clients retain ownership of their own data submitted to the platform.
          </p>
        </Section>

        <Section title="8. Confidentiality">
          <p>
            Both parties agree to maintain the confidentiality of proprietary information shared during the course of the business relationship. This obligation survives termination of the agreement for a period of 3 years.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of India, specifically the Indian IT Act 2000, Information Technology (Amendment) Act 2008, and the Companies Act 2013. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
          </p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>
            NexVstar AI Technology Pvt. Ltd. reserves the right to modify these terms at any time. Changes will be communicated via email 30 days prior to taking effect. Continued use of the platform after the effective date constitutes acceptance of the updated terms.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            For questions regarding these Terms & Conditions, please contact us at:
          </p>
          <address className="not-italic mt-2 text-sm bg-gray-50 rounded-lg p-4">
            <strong>NexVstar AI Technology Pvt. Ltd.</strong><br />
            Mumbai, Maharashtra, India<br />
            Email: legal@nexvstar.ai<br />
            Phone: +91 98765 43210
          </address>
        </Section>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link to="/legal/privacy" className="text-[#6C63FF] hover:underline">Privacy Policy</Link>
            <Link to="/legal/cookies" className="text-[#6C63FF] hover:underline">Cookie Policy</Link>
            <Link to="/legal/disclaimer" className="text-[#6C63FF] hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
