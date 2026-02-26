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

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: January 1, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm">
            NexVstar AI Technology Pvt. Ltd. is committed to protecting your privacy. This policy explains how we collect, use, store, and protect your personal data in compliance with the Indian IT Act 2000 and the EU General Data Protection Regulation (GDPR) for international clients.
          </p>
        </div>

        <Section title="1. Data Controller">
          <p>
            <strong>NexVstar AI Technology Pvt. Ltd.</strong> is the data controller responsible for your personal information. Our Data Protection Officer can be reached at privacy@nexvstar.ai.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong>2.1 Information you provide directly:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name, email address, phone number</li>
            <li>Company name, designation, industry</li>
            <li>Payment and billing information</li>
            <li>Lead data imported from your CRM or uploaded directly</li>
            <li>Communication history and preferences</li>
          </ul>
          <p className="mt-3"><strong>2.2 Information collected automatically:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Browser type, IP address, device information</li>
            <li>Pages visited, time spent, click patterns</li>
            <li>Platform usage and feature interaction data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          <p className="mt-3"><strong>2.3 Third-party data:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>CRM data from connected integrations (HubSpot, Zoho)</li>
            <li>LinkedIn profile data (where permitted by LinkedIn's policies)</li>
            <li>Email metadata (subject lines, open rates, click rates)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>We use collected data for the following purposes:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Providing and improving our AI platform services</li>
            <li>Personalizing AI recommendations and insights</li>
            <li>Processing payments and managing subscriptions</li>
            <li>Sending service notifications and updates</li>
            <li>Training our AI models (using anonymized, aggregated data only)</li>
            <li>Fraud prevention and security monitoring</li>
            <li>Compliance with legal obligations</li>
          </ul>
          <p className="mt-2"><strong>We do not sell your personal data to third parties.</strong></p>
        </Section>

        <Section title="4. Legal Basis for Processing (GDPR)">
          <p>For clients subject to GDPR, we process data on the following legal bases:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Contract performance:</strong> Processing necessary to provide our services</li>
            <li><strong>Legitimate interests:</strong> Platform improvements, fraud prevention</li>
            <li><strong>Consent:</strong> Marketing communications, optional analytics</li>
            <li><strong>Legal obligation:</strong> Tax records, regulatory compliance</li>
          </ul>
        </Section>

        <Section title="5. Data Storage and Security">
          <p>
            All data is stored on secure cloud servers with ISO 27001 certification. We implement:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>AES-256 encryption at rest and in transit</li>
            <li>Multi-factor authentication for all access</li>
            <li>Regular security audits and penetration testing</li>
            <li>Role-based access controls with minimum privilege principles</li>
            <li>24/7 security monitoring and incident response</li>
          </ul>
          <p className="mt-2">
            Primary data centers are located in India (Mumbai region). We may use additional servers in Singapore and Germany for redundancy.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your data for as long as your account is active or as needed to provide services. Post-termination:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Account data: Deleted within 60 days of account closure</li>
            <li>Financial records: Retained for 7 years (Indian tax compliance)</li>
            <li>Anonymized analytics: May be retained indefinitely for research</li>
            <li>Backups: Purged within 90 days of account closure</li>
          </ul>
        </Section>

        <Section title="7. Your Rights">
          <p>Under Indian IT Act and GDPR (for EU residents), you have the right to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
            <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
            <li><strong>Restriction:</strong> Limit how we process your data</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
          </ul>
          <p className="mt-2">To exercise these rights, email us at privacy@nexvstar.ai. We will respond within 30 days.</p>
        </Section>

        <Section title="8. Third-Party Sharing">
          <p>We may share your data with trusted service providers who assist us in operating our platform, subject to strict data processing agreements:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
            <li>Payment processors (as required for billing)</li>
            <li>Analytics and monitoring tools</li>
            <li>Email delivery services</li>
          </ul>
          <p className="mt-2">We require all processors to maintain equivalent privacy protections.</p>
        </Section>

        <Section title="9. Indian IT Act Compliance">
          <p>
            We comply with the Information Technology Act, 2000, Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and all applicable amendments thereto.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>For privacy-related inquiries or to exercise your rights:</p>
          <address className="not-italic mt-2 text-sm bg-gray-50 rounded-lg p-4">
            <strong>Data Protection Officer</strong><br />
            NexVstar AI Technology Pvt. Ltd.<br />
            Mumbai, Maharashtra, India<br />
            Email: privacy@nexvstar.ai
          </address>
        </Section>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link to="/legal/terms" className="text-[#6C63FF] hover:underline">Terms & Conditions</Link>
            <Link to="/legal/cookies" className="text-[#6C63FF] hover:underline">Cookie Policy</Link>
            <Link to="/legal/disclaimer" className="text-[#6C63FF] hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
