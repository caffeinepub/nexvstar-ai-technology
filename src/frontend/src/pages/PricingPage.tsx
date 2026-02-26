import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Small Business",
    monthly: { setup: "₹30,000", price: "₹50,000" },
    annual: { setup: "₹25,000", price: "₹40,000" },
    users: "5 users",
    highlight: false,
    features: [
      { category: "Lead Management", items: ["Website form lead capture", "Email lead parsing", "Basic lead categorization", "Lead profile enrichment"] },
      { category: "AI Features", items: ["AI lead scoring (0-100%)", "Basic behavior analysis", "Email automation (5 templates)"] },
      { category: "Dashboard", items: ["Real-time KPI dashboard", "Monthly revenue report", "Lead pipeline view", "Basic export (CSV)"] },
      { category: "Team & Support", items: ["5 user seats", "Email support", "Onboarding training (1 session)", "Help documentation"] },
    ],
  },
  {
    name: "Growth",
    subtitle: "Mid-Size Company",
    monthly: { setup: "₹50,000", price: "₹1,00,000" },
    annual: { setup: "₹40,000", price: "₹80,000" },
    users: "15 users",
    highlight: true,
    features: [
      { category: "Lead Management", items: ["Everything in Starter", "LinkedIn lead extraction", "Multi-source lead capture", "Advanced categorization", "Lead scoring history"] },
      { category: "AI & Automation", items: ["Advanced AI scoring", "WhatsApp automation", "Call schedule & reminders", "Drip sequence automation", "A/B testing for messages"] },
      { category: "Analytics & CRM", items: ["Revenue forecasting", "HubSpot & Zoho CRM sync", "Advanced analytics", "Weekly executive reports", "Custom dashboard widgets"] },
      { category: "Team & Support", items: ["15 user seats", "Priority support (4-8h)", "2 onboarding sessions", "Quarterly review call"] },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Large Organizations",
    monthly: { setup: "Custom", price: "₹3L–₹10L" },
    annual: { setup: "Custom", price: "₹3L–₹10L" },
    users: "Unlimited users",
    highlight: false,
    features: [
      { category: "Full Suite", items: ["Everything in Growth", "Custom AI model training", "On-premise deployment option", "Custom API integrations", "Unlimited workflows"] },
      { category: "Enterprise AI", items: ["Predictive market intelligence", "Competitive analysis signals", "AI strategy recommendations", "Board-ready PDF reports", "Custom insights dashboard"] },
      { category: "Security & Compliance", items: ["SSO/SAML authentication", "Advanced data encryption", "GDPR & IT Act compliance", "Custom data retention", "Audit logs"] },
      { category: "Dedicated Support", items: ["Unlimited user seats", "24/7 priority support", "Dedicated account manager", "Monthly strategy reviews", "Custom SLA agreement"] },
    ],
  },
];

const faqs = [
  {
    q: "Can I change my plan at any time?",
    a: "Yes, you can upgrade your plan at any time and the new features will be activated immediately. Downgrading is also possible with 30 days' notice at the end of your billing cycle.",
  },
  {
    q: "What is included in the setup fee?",
    a: "The one-time setup fee covers platform configuration, CRM integration, data migration from your existing systems, team onboarding training, and custom dashboard setup tailored to your business.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual billing gives you 20% off the monthly price. You pay for 12 months upfront, and the setup fee is also reduced. Annual subscribers also get priority support and additional onboarding sessions.",
  },
  {
    q: "Is there a free trial available?",
    a: "We offer a 14-day free pilot for qualified businesses. This includes a live demo, sandbox environment access, and a dedicated consultant to help you see ROI potential before committing.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You own your data. Upon cancellation, you'll receive a complete export of all leads, reports, and data within 30 days. We retain data for 60 days post-cancellation for safety, then permanently delete it.",
  },
  {
    q: "Do you support Indian payment methods?",
    a: "Yes, we accept all major Indian payment methods including NEFT/RTGS, UPI, credit/debit cards, and can issue GST-compliant invoices for Indian businesses.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            Transparent, Scalable{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprise charges. Choose the plan that grows with you.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Label htmlFor="billing-toggle" className="text-white text-sm cursor-pointer">Monthly</Label>
            <Switch
              id="billing-toggle"
              checked={annual}
              onCheckedChange={setAnnual}
              className="data-[state=checked]:bg-[#6C63FF]"
            />
            <Label htmlFor="billing-toggle" className="text-white text-sm cursor-pointer">
              Annual
              <Badge className="ml-2 bg-yellow-400 text-yellow-900 border-0 text-xs">Save 20%</Badge>
            </Label>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const pricing = annual ? plan.annual : plan.monthly;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border-2 p-8 flex flex-col transition-all duration-300 ${
                    plan.highlight
                      ? "border-[#6C63FF] shadow-2xl shadow-purple-200/50 bg-gradient-to-br from-[#EEF2FF] to-[#F5F0FF]"
                      : "border-gray-200 hover:border-[#6C63FF]/30 hover:shadow-lg"
                  }`}
                >
                  {plan.highlight && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] text-white border-0 font-semibold px-4">
                      Most Popular
                    </Badge>
                  )}

                  <div className="mb-6">
                    <h2 className="text-2xl font-bold font-heading text-[#0A1628] mb-0.5">{plan.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{plan.subtitle} • {plan.users}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold font-heading text-[#1F3A93]">{pricing.price}</span>
                      {pricing.price !== "₹3L–₹10L" && (
                        <span className="text-gray-400 text-sm">/month</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">
                      + {pricing.setup} one-time setup
                      {annual && pricing.setup !== "Custom" && (
                        <span className="ml-2 text-green-600 font-medium text-xs">(20% off)</span>
                      )}
                    </p>
                  </div>

                  {/* Feature Categories */}
                  <div className="space-y-5 flex-1 mb-8">
                    {plan.features.map((category) => (
                      <div key={category.category}>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          {category.category}
                        </p>
                        <div className="space-y-1.5">
                          {category.items.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <CheckCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.highlight ? "text-[#6C63FF]" : "text-[#1F3A93]"}`} />
                              <span className={`text-xs ${item === "Everything in Starter" || item === "Everything in Growth" || item === "Everything in Starter, plus:" ? "font-semibold text-[#1F3A93]" : "text-gray-600"}`}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/demo">
                    <Button
                      className={`w-full font-semibold ${
                        plan.highlight
                          ? "bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0"
                          : "border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93] hover:text-white"
                      }`}
                      variant={plan.highlight ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A1628] mb-4">
              Pricing Questions Answered
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="bg-white rounded-xl border border-gray-200 px-5 shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-[#0A1628] hover:text-[#6C63FF] py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-white/70 mb-6">
            Our experts will analyze your business size, goals, and budget to recommend the perfect package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-white text-[#1F3A93] hover:bg-gray-100 font-semibold px-8">
                <Zap className="w-5 h-5 mr-2" />
                Talk to a Consultant
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8">
                See Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
