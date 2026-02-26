import { useQuery } from "@tanstack/react-query";
import { useActor } from "../hooks/useActor";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, ArrowRight, Clock, DollarSign, Zap } from "lucide-react";
import type { Testimonial } from "../backend.d";

const fallbackTestimonials: Testimonial[] = [
  {
    id: BigInt(1),
    clientName: "Rajesh Mehta",
    role: "CEO",
    company: "TechServe India",
    quote: "NexVstar transformed how we handle leads. Our conversion rate jumped from 12% to 38% in just 90 days. The AI scoring alone saved us 40 hours per week in manual qualification.",
    avatarUrl: "",
    rating: BigInt(5),
  },
  {
    id: BigInt(2),
    clientName: "Priya Sharma",
    role: "Head of Sales",
    company: "GrowthWave Solutions",
    quote: "The revenue forecasting dashboard is incredibly accurate. We now plan our quarterly budgets with 94% confidence. Best investment we've made for our sales team.",
    avatarUrl: "",
    rating: BigInt(5),
  },
  {
    id: BigInt(3),
    clientName: "Amit Verma",
    role: "Operations Director",
    company: "Summit Manufacturing",
    quote: "We were skeptical about AI automation, but NexVstar proved us wrong. ₹2 crore in additional revenue in 6 months. The enterprise insights alone paid for the platform 10x over.",
    avatarUrl: "",
    rating: BigInt(5),
  },
  {
    id: BigInt(4),
    clientName: "Kavitha Nair",
    role: "VP Marketing",
    company: "InfoPulse Technologies",
    quote: "Our sales cycle dropped from 45 days to 18 days after implementing NexVstar's follow-up automation. The AI knows exactly when and how to engage each prospect.",
    avatarUrl: "",
    rating: BigInt(4),
  },
  {
    id: BigInt(5),
    clientName: "Suresh Kumar",
    role: "Founder",
    company: "DataBridge Analytics",
    quote: "Finally, a platform that understands the Indian market. NexVstar's AI is trained on Indian business patterns, making the lead scoring remarkably accurate for our B2B sales.",
    avatarUrl: "",
    rating: BigInt(5),
  },
  {
    id: BigInt(6),
    clientName: "Anita Desai",
    role: "CFO",
    company: "Horizon Group",
    quote: "The board-ready PDF reports from NexVstar are professional and comprehensive. Our investors are impressed with the data-driven approach. Highly recommended for enterprise teams.",
    avatarUrl: "",
    rating: BigInt(5),
  },
];

const caseStudies = [
  {
    company: "E-Commerce Platform",
    industry: "E-Commerce",
    duration: "90 days",
    icon: TrendingUp,
    color: "from-blue-600 to-blue-400",
    challenge:
      "Manual lead qualification was taking 3 hours per rep daily. Low conversion rates from website traffic.",
    solution:
      "Implemented NexVstar's AI lead scoring and automated follow-up sequences for cart abandonment and inquiry leads.",
    results: [
      { label: "Lead Conversion", before: "11%", after: "34%", change: "+209%" },
      { label: "Sales Cycle", before: "28 days", after: "9 days", change: "-67%" },
      { label: "Monthly Revenue", before: "₹42L", after: "₹1.26Cr", change: "+200%" },
    ],
  },
  {
    company: "Manufacturing Firm",
    industry: "Manufacturing",
    duration: "6 months",
    icon: DollarSign,
    color: "from-purple-600 to-purple-400",
    challenge:
      "Missing high-value B2B opportunities due to slow follow-up. Enterprise deals were falling through cracks.",
    solution:
      "Deployed Enterprise plan with custom AI insights, CRM integration, and dedicated account management.",
    results: [
      { label: "Additional Revenue", before: "₹0", after: "₹2Cr", change: "+₹2Cr" },
      { label: "Pipeline Value", before: "₹3.5Cr", after: "₹9.8Cr", change: "+180%" },
      { label: "Deal Close Rate", before: "18%", after: "44%", change: "+144%" },
    ],
  },
  {
    company: "IT Services Company",
    industry: "IT Services",
    duration: "120 days",
    icon: Clock,
    color: "from-emerald-600 to-emerald-400",
    challenge:
      "Long sales cycles with inconsistent follow-up. Sales team spending 60% time on admin, not selling.",
    solution:
      "Growth plan with WhatsApp automation, lead scoring, and weekly executive dashboards for management.",
    results: [
      { label: "Sales Cycle Time", before: "45 days", after: "18 days", change: "-60%" },
      { label: "Admin Time", before: "60%", after: "15%", change: "-75%" },
      { label: "Revenue Growth", before: "—", after: "+65%", change: "YoY" },
    ],
  },
];

const roiStats = [
  { value: "3.2x", label: "Average ROI in Year 1" },
  { value: "67%", label: "Reduction in Sales Cycle" },
  { value: "₹50Cr+", label: "Total Revenue Unlocked" },
  { value: "98%", label: "Client Retention Rate" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function CaseStudiesPage() {
  const { actor, isFetching } = useActor();

  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return fallbackTestimonials;
      const result = await actor.getTestimonials();
      return result.length > 0 ? result : fallbackTestimonials;
    },
    enabled: !!actor && !isFetching,
    placeholderData: fallbackTestimonials,
  });

  const displayTestimonials = testimonials ?? fallbackTestimonials;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Case Studies & Testimonials</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover how India's leading companies are transforming their revenue with NexVstar AI.
          </p>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {roiStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold font-heading text-white mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">Case Studies</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A1628] mb-4">
              Before & After: AI Transformation
            </h2>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div
                  key={study.company}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${study.color} p-6 flex items-center gap-4`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white">{study.company}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <Badge className="bg-white/20 text-white border-0 text-xs">{study.industry}</Badge>
                        <span className="text-white/70 text-sm">Results in {study.duration}</span>
                      </div>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <Badge className="bg-white/20 text-white border-white/30 text-sm">Case Study #{index + 1}</Badge>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-2 text-sm uppercase tracking-wide">The Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-2 text-sm uppercase tracking-wide">The Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-[#0A1628] mb-4 text-sm uppercase tracking-wide">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {study.results.map((result) => (
                          <div key={result.label} className="bg-gray-50 rounded-xl p-4 text-center">
                            <p className="text-xs text-gray-500 mb-3 font-medium">{result.label}</p>
                            <div className="flex items-center justify-center gap-3">
                              <div>
                                <p className="text-xs text-gray-400">Before</p>
                                <p className="font-semibold text-gray-600">{result.before}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                              <div>
                                <p className="text-xs text-gray-400">After</p>
                                <p className="font-bold text-[#1F3A93]">{result.after}</p>
                              </div>
                            </div>
                            <Badge className="mt-2 bg-green-50 text-green-700 border-green-200 text-xs">
                              {result.change}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A1628] mb-4">
              What Our Clients Say
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["s1","s2","s3","s4","s5","s6"].map((key) => (
                <div key={key} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTestimonials.map((t) => (
                <div
                  key={String(t.id)}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#6C63FF]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <StarRating rating={Number(t.rating)} />
                  <blockquote className="mt-3 mb-5 text-gray-600 text-sm leading-relaxed flex-1">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] text-white text-sm font-semibold">
                        {t.clientName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">{t.clientName}</p>
                      <p className="text-gray-400 text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-white/70 mb-6">
            Join 50+ companies that have transformed their revenue with NexVstar AI.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-white text-[#1F3A93] hover:bg-gray-100 font-semibold px-8">
              <Zap className="w-5 h-5 mr-2" />
              Book Your Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
