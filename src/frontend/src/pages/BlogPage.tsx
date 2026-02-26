import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useActor } from "../hooks/useActor";
import { Link, useNavigate } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import type { BlogPost } from "../backend.d";

const categories = ["All", "AI Automation", "Lead Generation", "Revenue Intelligence", "Case Studies"];

const gradients = [
  "from-blue-600 to-indigo-600",
  "from-purple-600 to-pink-600",
  "from-emerald-600 to-teal-600",
  "from-orange-500 to-red-500",
  "from-cyan-600 to-blue-600",
  "from-violet-600 to-purple-600",
];

const fallbackPosts: BlogPost[] = [
  {
    id: BigInt(1),
    title: "How AI Lead Scoring is Revolutionizing B2B Sales in India",
    summary: "Discover how Indian businesses are using AI-powered lead scoring to prioritize prospects and increase conversion rates by 3x.",
    content: "Full content here...",
    author: "Rahul Gupta",
    category: "AI Automation",
    imageUrl: "",
    date: BigInt(Date.now() - 86400000 * 2),
    tags: ["AI", "Lead Scoring", "B2B Sales"],
  },
  {
    id: BigInt(2),
    title: "Revenue Forecasting: From Gut Feel to AI Precision",
    summary: "Learn how CFOs at India's fastest-growing companies are replacing spreadsheet guesswork with AI-driven revenue forecasting.",
    content: "Full content here...",
    author: "Priya Nair",
    category: "Revenue Intelligence",
    imageUrl: "",
    date: BigInt(Date.now() - 86400000 * 5),
    tags: ["Revenue", "Forecasting", "CFO"],
  },
  {
    id: BigInt(3),
    title: "WhatsApp Automation for Sales: A Complete Guide",
    summary: "WhatsApp has a 98% open rate in India. Here's how to leverage it for sales follow-ups without being spammy.",
    content: "Full content here...",
    author: "Amit Sharma",
    category: "AI Automation",
    imageUrl: "",
    date: BigInt(Date.now() - 86400000 * 7),
    tags: ["WhatsApp", "Automation", "Sales"],
  },
  {
    id: BigInt(4),
    title: "Case Study: How Manufacturing Co. Added ₹2Cr Revenue with AI",
    summary: "A Pune-based manufacturing firm's journey from manual CRM to AI-driven revenue intelligence — and the numbers that followed.",
    content: "Full content here...",
    author: "Neha Joshi",
    category: "Case Studies",
    imageUrl: "",
    date: BigInt(Date.now() - 86400000 * 10),
    tags: ["Case Study", "Manufacturing", "ROI"],
  },
  {
    id: BigInt(5),
    title: "The Ultimate Lead Generation Playbook for Indian SaaS Companies",
    summary: "A tactical guide to building a reliable lead generation machine using multi-channel AI automation.",
    content: "Full content here...",
    author: "Karan Mehta",
    category: "Lead Generation",
    imageUrl: "",
    date: BigInt(Date.now() - 86400000 * 14),
    tags: ["Lead Gen", "SaaS", "India"],
  },
  {
    id: BigInt(6),
    title: "AI vs Traditional CRM: What Indian SMBs Need to Know",
    summary: "Why 78% of Indian SMBs are switching from traditional CRMs to AI-powered platforms — the complete comparison.",
    content: "Full content here...",
    author: "Sunita Verma",
    category: "Revenue Intelligence",
    imageUrl: "",
    date: BigInt(Date.now() - 86400000 * 18),
    tags: ["CRM", "AI", "SMB"],
  },
];

function formatDate(ts: bigint): string {
  return new Date(Number(ts)).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });
}

export default function BlogPage() {
  const { actor, isFetching } = useActor();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      if (!actor) return fallbackPosts;
      const result = await actor.getBlogPosts();
      return result.length > 0 ? result : fallbackPosts;
    },
    enabled: !!actor && !isFetching,
    placeholderData: fallbackPosts,
  });

  const displayPosts = posts ?? fallbackPosts;

  const filtered = displayPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Blog & Insights</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            AI Revenue{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Intelligence Hub
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Expert insights on AI automation, lead generation, revenue forecasting, and more.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] text-white"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["b1","b2","b3","b4","b5","b6"].map((key) => (
                <div key={key} className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">No articles found</p>
              <p className="text-gray-400 text-sm">Try a different category or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, index) => (
                <button
                  type="button"
                  key={String(post.id)}
                  onClick={() => navigate({ to: "/blog/$id", params: { id: String(post.id) } })}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#6C63FF]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-left cursor-pointer"
                >
                  {/* Image / Gradient */}
                  <div className={`h-44 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
                    {post.imageUrl ? (
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-24 h-24 rounded-full border-4 border-white/30" />
                        <div className="absolute w-16 h-16 rounded-full border-2 border-white/20" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-[#1F3A93] border-0 text-xs font-semibold">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold font-heading text-[#0A1628] mb-2 group-hover:text-[#1F3A93] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <span className="text-[#6C63FF] text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                 </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
