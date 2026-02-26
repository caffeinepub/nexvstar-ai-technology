import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Brain,
  MessageSquare,
  Target,
  Shield,
  CheckCircle,
  Play,
  Star,
} from "lucide-react";

const stats = [
  { label: "Leads Processed Daily", value: "500+", icon: Target },
  { label: "Revenue Generated", value: "₹10Cr+", icon: TrendingUp },
  { label: "Client Satisfaction", value: "98%", icon: Star },
  { label: "Enterprise Clients", value: "50+", icon: Users },
];

const features = [
  {
    icon: Target,
    title: "Lead Capture AI",
    description:
      "Automatically collect leads from websites, LinkedIn, email — categorized by industry, size, and intent.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Brain,
    title: "AI Lead Scoring",
    description:
      "Each lead gets a 0–100% conversion probability score, powered by engagement patterns and behavior analytics.",
    color: "from-purple-600 to-purple-400",
  },
  {
    icon: MessageSquare,
    title: "Follow-up Automation",
    description:
      "AI-crafted personalized email, WhatsApp, and call sequences based on lead history and behavior.",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    icon: BarChart3,
    title: "Revenue Forecasting",
    description:
      "Weekly/monthly revenue prediction based on your pipeline — with CEO-level KPI dashboards and charts.",
    color: "from-cyan-600 to-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Enterprise Insights",
    description:
      "AI analyzes workflow inefficiencies, predicts market trends, and provides optimization suggestions.",
    color: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Role-based access for CEO, Sales, and Operations. CRM integration with HubSpot and Zoho.",
    color: "from-orange-600 to-orange-400",
  },
];

const trustedCompanies = [
  "TechServe India", "GrowthWave", "NexGen Corp", "Summit Retail",
  "InfoPulse", "Horizon Group", "VelocityX", "DataBridge",
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1628]/75" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#1F3A93]/30 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#6C63FF]/25 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-float">
            <Zap className="w-4 h-4 text-[#6C63FF]" />
            <span className="text-white/90 text-sm font-medium">Powered by Advanced AI Revenue Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6 text-balance">
            Boost Your Revenue{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
                with AI Automation
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1F3A93]/20 to-[#6C63FF]/20 blur-xl rounded-lg" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            NexVstar AI Technology transforms how Indian businesses capture leads, score prospects,
            and forecast revenue — all on one intelligent platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0 shadow-lg shadow-purple-900/40 font-semibold px-8 py-6 text-base"
              >
                <Zap className="w-5 h-5 mr-2" />
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base backdrop-blur-sm bg-white/5"
              >
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <span className="hidden sm:block text-gray-600">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Setup in 48 hours</span>
            </div>
            <span className="hidden sm:block text-gray-600">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>ISO 27001 secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-white/70" />
                  <span className="text-3xl sm:text-4xl font-bold font-heading text-white">{value}</span>
                </div>
                <p className="text-white/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">
              Platform Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0A1628] mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] bg-clip-text text-transparent"> Scale Revenue</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From lead capture to enterprise insights — one AI-powered platform that drives measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl border border-gray-100 hover:border-[#6C63FF]/30 bg-white hover:bg-gradient-to-br hover:from-[#EEF2FF] hover:to-[#F5F0FF] transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/50 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-[#0A1628] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93] hover:text-white transition-all duration-300 font-semibold px-8"
              >
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Quick Preview */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1a2d50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              From Lead to Revenue in{" "}
              <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">5 Smart Steps</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our AI-powered pipeline handles the entire revenue cycle automatically.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1F3A93] via-[#6C63FF] to-[#1F3A93]" />
            {[
              { num: "01", title: "Capture", desc: "AI captures leads from all channels" },
              { num: "02", title: "Score", desc: "0-100% conversion probability assigned" },
              { num: "03", title: "Follow-up", desc: "Automated personalized outreach" },
              { num: "04", title: "Dashboard", desc: "Real-time KPIs & forecasting" },
              { num: "05", title: "Insights", desc: "AI optimization suggestions" },
            ].map((step) => (
              <div key={step.num} className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center text-white font-bold font-heading text-lg mb-4 shadow-lg shadow-purple-900/40 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold font-heading mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
            Trusted by India's Fastest Growing Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="px-5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 text-sm font-medium hover:border-[#6C63FF]/30 hover:bg-[#EEF2FF] hover:text-[#1F3A93] transition-all duration-200"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A1628] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose the plan that scales with your business. Start small, grow big.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                setup: "₹30,000",
                monthly: "₹50,000",
                users: "5 users",
                highlight: false,
              },
              {
                name: "Growth",
                setup: "₹50,000",
                monthly: "₹1,00,000",
                users: "15 users",
                highlight: true,
              },
              {
                name: "Enterprise",
                setup: "Custom",
                monthly: "₹3L–₹10L",
                users: "Unlimited",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl text-center transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] text-white shadow-2xl shadow-purple-200/50 scale-105"
                    : "bg-white border border-gray-200 hover:border-[#6C63FF]/30 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 border-0 font-semibold">
                    Most Popular
                  </Badge>
                )}
                <h3 className={`text-xl font-bold font-heading mb-2 ${plan.highlight ? "text-white" : "text-[#0A1628]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>
                  {plan.users}
                </p>
                <div className="mb-1">
                  <span className={`text-3xl font-bold font-heading ${plan.highlight ? "text-white" : "text-[#1F3A93]"}`}>
                    {plan.monthly}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>/month</span>
                </div>
                <p className={`text-xs mb-6 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>
                  + {plan.setup} one-time setup
                </p>
                <Link to="/pricing">
                  <Button
                    className={`w-full font-semibold ${
                      plan.highlight
                        ? "bg-white text-[#1F3A93] hover:bg-gray-100"
                        : "bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] text-white hover:from-[#2545a8] hover:to-[#7c73ff] border-0"
                    }`}
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1F3A93] via-[#4a3c99] to-[#6C63FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-white/70" />
            <span className="text-white/80 text-sm">Trusted by 50+ enterprise clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Ready to 10x Your Revenue?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Join India's most innovative companies using NexVstar AI to predict, capture, and convert more revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-white text-[#1F3A93] hover:bg-gray-100 font-semibold px-8 py-6 text-base shadow-lg"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
