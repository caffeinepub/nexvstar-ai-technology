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

export default function CookiesPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">Cookie Policy</h1>
          <p className="text-gray-300">Last updated: January 1, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <p className="text-green-800 text-sm">
            This Cookie Policy explains how NexVstar AI Technology Pvt. Ltd. uses cookies and similar tracking technologies on our website and platform. You can manage your preferences at any time.
          </p>
        </div>

        <Section title="1. What Are Cookies?">
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help us recognize your browser, remember your preferences, and improve your experience on our platform.
          </p>
        </Section>

        <Section title="2. Types of Cookies We Use">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm mt-2">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#0A1628]">Cookie Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#0A1628]">Purpose</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#0A1628]">Duration</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#0A1628]">Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-[#1F3A93]">Essential</td>
                  <td className="border border-gray-200 px-4 py-2">Authentication, security, session management</td>
                  <td className="border border-gray-200 px-4 py-2">Session / 30 days</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600 font-medium">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium text-[#1F3A93]">Functional</td>
                  <td className="border border-gray-200 px-4 py-2">Language, region, and display preferences</td>
                  <td className="border border-gray-200 px-4 py-2">1 year</td>
                  <td className="border border-gray-200 px-4 py-2 text-orange-600 font-medium">Optional</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-[#1F3A93]">Analytics</td>
                  <td className="border border-gray-200 px-4 py-2">Usage tracking, feature adoption, error monitoring</td>
                  <td className="border border-gray-200 px-4 py-2">2 years</td>
                  <td className="border border-gray-200 px-4 py-2 text-orange-600 font-medium">Optional</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium text-[#1F3A93]">Marketing</td>
                  <td className="border border-gray-200 px-4 py-2">Personalized ads, retargeting, campaign tracking</td>
                  <td className="border border-gray-200 px-4 py-2">90 days</td>
                  <td className="border border-gray-200 px-4 py-2 text-orange-600 font-medium">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="3. Specific Cookies in Use">
          <div className="space-y-3">
            {[
              { name: "nexvstar_session", purpose: "Authentication session management", type: "Essential" },
              { name: "nexvstar_cookie_consent", purpose: "Stores your cookie preference choice", type: "Essential" },
              { name: "nexvstar_theme", purpose: "Remembers your dashboard theme preference", type: "Functional" },
              { name: "_ga, _gid", purpose: "Google Analytics — tracks page views and sessions", type: "Analytics" },
              { name: "_fbp", purpose: "Facebook Pixel — ad performance tracking", type: "Marketing" },
              { name: "_li_*", purpose: "LinkedIn Insight Tag — B2B campaign measurement", type: "Marketing" },
            ].map((cookie) => (
              <div key={cookie.name} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <code className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded font-mono shrink-0 mt-0.5">{cookie.name}</code>
                <div>
                  <p className="text-sm text-gray-700">{cookie.purpose}</p>
                  <span className={`text-xs font-medium ${cookie.type === "Essential" ? "text-green-600" : "text-orange-600"}`}>
                    {cookie.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="4. Third-Party Cookies">
          <p>
            Some cookies are placed by third-party services that appear on our pages. These include:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Google Analytics</strong> — Website usage analytics</li>
            <li><strong>LinkedIn Insight Tag</strong> — B2B audience measurement</li>
            <li><strong>Intercom / Crisp</strong> — Customer support chat</li>
            <li><strong>Hotjar</strong> — UX heatmaps and session recording (with anonymization)</li>
          </ul>
          <p className="mt-2">
            Each third party has their own privacy policy and cookie practices. We encourage you to review their policies directly.
          </p>
        </Section>

        <Section title="5. Managing Cookies">
          <p>You can control cookies through the following methods:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Cookie Banner:</strong> Use our consent banner on first visit to accept/reject non-essential cookies</li>
            <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies in settings</li>
            <li><strong>Opt-out Tools:</strong> Google Analytics Opt-out (tools.google.com/dlpage/gaoptout), Network Advertising Initiative (optout.networkadvertising.org)</li>
          </ul>
          <p className="mt-2">Note: Disabling essential cookies may prevent the platform from functioning properly.</p>
        </Section>

        <Section title="6. Do Not Track">
          <p>
            We respect Do Not Track (DNT) signals from browsers. When DNT is enabled, we disable analytics and marketing cookies while maintaining essential functionality.
          </p>
        </Section>

        <Section title="7. Contact">
          <p>For cookie-related questions, contact us at privacy@nexvstar.ai</p>
        </Section>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link to="/legal/terms" className="text-[#6C63FF] hover:underline">Terms & Conditions</Link>
            <Link to="/legal/privacy" className="text-[#6C63FF] hover:underline">Privacy Policy</Link>
            <Link to="/legal/disclaimer" className="text-[#6C63FF] hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
