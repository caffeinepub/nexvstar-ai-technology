import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, Star, Settings, BarChart3 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "For Small Businesses",
    setup: "₹30,000",
    monthly: "₹50,000",
    users: "Up to 5 users",
    color: "border-gray-200",
    badge: null,
    features: [
      "Lead capture from website & email",
      "Basic AI lead scoring (0-100%)",
      "Email automation sequences",
      "Dashboard access with KPIs",
      "Monthly revenue report",
      "5 team user seats",
      "Email support (24-48h response)",
      "Basic CRM data export",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "For Mid-Size Companies",
    setup: "₹50,000",
    monthly: "₹1,00,000",
    users: "Up to 15 users",
    color: "border-[#6C63FF]",
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "LinkedIn lead capture integration",
      "WhatsApp & call automation",
      "Advanced AI revenue forecasting",
      "HubSpot & Zoho CRM integration",
      "15 team user seats",
      "Priority support (4-8h response)",
      "Weekly executive reports",
      "Custom dashboard widgets",
      "Multi-channel analytics",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "For Large Organizations",
    setup: "Custom",
    monthly: "₹3L–₹10L",
    users: "Unlimited users",
    color: "border-gray-200",
    badge: null,
    features: [
      "Everything in Growth, plus:",
      "Custom AI model training",
      "Full enterprise insights suite",
      "Board-ready PDF reports",
      "Dedicated account manager",
      "Unlimited user seats",
      "24/7 priority support",
      "Custom API integrations",
      "On-premise deployment option",
      "Custom SLA agreements",
      "Quarterly strategy reviews",
    ],
    highlight: false,
  },
];

const addons = [
  {
    icon: BarChart3,
    name: "Extra Dashboard",
    description: "Additional custom dashboards for specific departments or KPIs",
    price: "₹10,000 – ₹50,000",
    period: "one-time",
  },
  {
    icon: Zap,
    name: "AI Optimization Pack",
    description: "Advanced AI recommendations for sales, marketing, and ops optimization",
    price: "₹20,000",
    period: "/month",
  },
  {
    icon: Star,
    name: "Lead Campaigns",
    description: "AI-driven outbound lead generation campaigns for specific target segments",
    price: "₹15,000 – ₹50,000",
    period: "per campaign",
  },
  {
    icon: Settings,
    name: "Retainer Support",
    description: "Ongoing maintenance, updates, and dedicated technical support",
    price: "₹10,000 – ₹20,000",
    period: "/month",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Services & Packages</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            Choose Your AI Revenue{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Package
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Flexible plans designed for every stage of business growth — from startups to enterprise organizations.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 ${plan.color} p-8 ${
                  plan.highlight
                    ? "shadow-2xl shadow-purple-200/50"
                    : "shadow-sm hover:shadow-lg"
                } transition-all duration-300 flex flex-col`}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] text-white border-0 font-semibold px-4">
                    {plan.badge}
                  </Badge>
                )}
                {plan.highlight && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F0FF] -z-10" />
                )}

                <div className="mb-6">
                  <h2 className="text-2xl font-bold font-heading text-[#0A1628] mb-1">{plan.name}</h2>
                  <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold font-heading text-[#1F3A93]">{plan.monthly}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <p className="text-sm text-gray-400">+ {plan.setup} one-time setup fee</p>
                  <p className="text-sm text-gray-500 mt-1">{plan.users}</p>
                </div>

                <div className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <CheckCircle
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.highlight ? "text-[#6C63FF]" : "text-[#1F3A93]"
                        }`}
                      />
                      <span className={`text-sm ${feature.endsWith(":") ? "font-semibold text-[#0A1628]" : "text-gray-600"}`}>
                        {feature}
                      </span>
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
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">Add-ons</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A1628] mb-4">
              Power Up with Add-ons
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Extend your plan with specialized modules to meet specific business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon) => {
              const Icon = addon.icon;
              return (
                <div
                  key={addon.name}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#6C63FF]/30 hover:shadow-lg transition-all duration-300 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold font-heading text-[#0A1628]">{addon.name}</h3>
                      <div className="text-right shrink-0">
                        <p className="text-[#1F3A93] font-bold font-heading text-sm">{addon.price}</p>
                        <p className="text-gray-400 text-xs">{addon.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{addon.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Not Sure Which Plan to Choose?
          </h2>
          <p className="text-white/70 mb-6">
            Our experts will analyze your business and recommend the perfect package.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-white text-[#1F3A93] hover:bg-gray-100 font-semibold px-8">
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
