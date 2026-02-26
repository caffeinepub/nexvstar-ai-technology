import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Brain,
  MessageSquare,
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Target,
    title: "Lead Capture",
    subtitle: "AI-Powered Multi-Channel Collection",
    description:
      "NexVstar's AI engine automatically captures leads from every touchpoint — website forms, LinkedIn Sales Navigator, email inboxes, and CRM imports. Each lead is enriched with company data, industry classification, and engagement signals in real-time.",
    details: [
      "Automated website form integration",
      "LinkedIn prospect extraction",
      "Email inbox AI parsing",
      "CRM data sync (HubSpot, Zoho)",
      "Company size & industry categorization",
      "Real-time dashboard notification",
    ],
    color: "from-blue-600 to-blue-400",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    num: "02",
    icon: Brain,
    title: "AI Lead Scoring",
    subtitle: "0–100% Conversion Probability",
    description:
      "Every lead receives a dynamic AI score from 0 to 100%, updated continuously as new signals come in. Our proprietary model analyzes engagement depth, industry conversion rates, past behavior patterns, and market trends to predict likelihood of conversion.",
    details: [
      "Real-time probability scoring",
      "Engagement & behavior analysis",
      "Industry conversion benchmarks",
      "Historical pattern learning",
      "Hot/Warm/Cold auto-classification",
      "Score transparency & explainability",
    ],
    color: "from-purple-600 to-purple-400",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Automated Follow-Up",
    subtitle: "Personalized Multi-Channel Outreach",
    description:
      "AI crafts hyper-personalized follow-up sequences based on each lead's profile, behavior, and stage in the funnel. Outreach spans email, WhatsApp messages, and call reminders — timed perfectly for maximum response rates.",
    details: [
      "AI-written personalized emails",
      "WhatsApp automation",
      "Call schedule & reminders",
      "Response rate tracking",
      "Automatic next-step triggers",
      "Drip sequence management",
    ],
    color: "from-indigo-600 to-indigo-400",
    bgColor: "from-indigo-50 to-cyan-50",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Real-Time Dashboard",
    subtitle: "KPIs, Charts & Revenue Forecasting",
    description:
      "Your unified command center shows live pipeline value, conversion funnels, revenue forecasts, and team performance — all in one place. CEO-level insights are presented with clear visualizations and exportable PDF reports.",
    details: [
      "Live KPI monitoring",
      "Revenue forecast graphs",
      "Pipeline value tracking",
      "Team performance metrics",
      "Exportable PDF reports",
      "Mobile-responsive access",
    ],
    color: "from-cyan-600 to-teal-400",
    bgColor: "from-cyan-50 to-teal-50",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Enterprise Insights",
    subtitle: "AI Optimization & Decision Support",
    description:
      "NexVstar's insight engine continuously monitors your entire sales and marketing workflow, identifying inefficiencies, predicting market trends, and generating actionable recommendations to boost conversion rates and operational efficiency.",
    details: [
      "Workflow inefficiency detection",
      "Market trend prediction",
      "Sales strategy optimization",
      "Marketing ROI analysis",
      "Board-ready reports",
      "Competitive intelligence signals",
    ],
    color: "from-emerald-600 to-green-400",
    bgColor: "from-emerald-50 to-green-50",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-bg.dim_1600x900.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">How It Works</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            5 Steps from Lead to{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Revenue
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            NexVstar's AI pipeline automates the entire revenue cycle — from capturing the first lead to delivering board-ready insights.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              return (
                <div
                  key={step.num}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold font-heading text-gray-100">{step.num}</span>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A1628] mb-1">
                      {step.title}
                    </h2>
                    <p className="text-[#6C63FF] font-medium text-sm mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#6C63FF] shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <div className={`rounded-2xl bg-gradient-to-br ${step.bgColor} p-8 border border-gray-100 relative overflow-hidden min-h-[280px] flex items-center justify-center`}>
                      <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-2xl`} />
                      <div className="text-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-[#0A1628] mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm max-w-xs">{step.subtitle}</p>
                        <div className="mt-4 flex justify-center">
                          <Badge className={`bg-gradient-to-r ${step.color} text-white border-0 text-xs`}>
                            Step {step.num}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            Ready to Automate Your Revenue?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get started with NexVstar and see results in your first 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-white text-[#1F3A93] hover:bg-gray-100 font-semibold px-8"
              >
                <Zap className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
