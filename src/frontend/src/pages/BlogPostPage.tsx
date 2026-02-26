import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "@tanstack/react-router";
import { useActor } from "../hooks/useActor";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import type { BlogPost } from "../backend.d";

function formatDate(ts: bigint): string {
  return new Date(Number(ts)).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const fallbackPost: BlogPost = {
  id: BigInt(1),
  title: "How AI Lead Scoring is Revolutionizing B2B Sales in India",
  summary: "Discover how Indian businesses are using AI-powered lead scoring to prioritize prospects and increase conversion rates by 3x.",
  content: `## The Rise of AI in Indian B2B Sales

The Indian B2B sales landscape has been undergoing a significant transformation over the past few years. Traditional methods of lead qualification — manual spreadsheets, intuition-based prioritization, and generalized follow-up sequences — are rapidly giving way to AI-powered systems that can analyze hundreds of data points in milliseconds.

## What is AI Lead Scoring?

AI Lead Scoring is the process of using machine learning algorithms to assign a numerical score (typically 0-100%) to each prospect based on their likelihood to convert into a paying customer. Unlike traditional rule-based scoring, AI scoring continuously learns from new data, improving its accuracy over time.

### Key Factors Analyzed

- **Digital Engagement**: Website visits, content downloads, email opens
- **Firmographic Data**: Company size, industry, revenue range
- **Behavioral Signals**: Demo requests, pricing page visits, competitor comparisons
- **Communication Patterns**: Response rate, meeting attendance, question quality

## Why Indian Businesses Are Adopting It Fast

India's B2B market has unique characteristics that make AI lead scoring particularly valuable:

1. **High Lead Volume**: Indian companies often generate thousands of inbound leads monthly
2. **Diverse Industries**: From IT to manufacturing, each sector has different conversion patterns
3. **Time Zone Optimization**: AI can calculate the best time to contact prospects across different regions
4. **Language Intelligence**: Modern AI systems can analyze communications in Hindi, regional languages, and English

## Real Results from Indian Companies

Companies using NexVstar's AI Lead Scoring have reported:
- 3x improvement in conversion rates within 90 days
- 60% reduction in time spent on manual lead qualification
- 45% increase in sales team productivity
- ₹50L+ additional revenue in the first year

## Getting Started

Implementation is surprisingly straightforward. The NexVstar platform integrates with your existing CRM and email systems within 48 hours, requiring no technical expertise from your team.

**Ready to see how AI scoring could transform your sales pipeline?** Book a free demo to see your potential ROI.`,
  author: "Rahul Gupta",
  category: "AI Automation",
  imageUrl: "",
  date: BigInt(Date.now() - 86400000 * 2),
  tags: ["AI", "Lead Scoring", "B2B Sales", "India"],
};

export default function BlogPostPage() {
  const { id } = useParams({ from: "/blog/$id" });
  const { actor, isFetching } = useActor();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", id],
    queryFn: async (): Promise<BlogPost | null> => {
      if (!actor) return fallbackPost;
      const result = await actor.getBlogPost(BigInt(id));
      return result ?? fallbackPost;
    },
    enabled: !!actor && !isFetching,
  });

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Skeleton className="h-6 w-32 mb-6" />
          <Skeleton className="h-10 w-full mb-3" />
          <Skeleton className="h-10 w-3/4 mb-6" />
          <Skeleton className="h-4 w-40 mb-8" />
          <div className="space-y-4">
            {["p1","p2","p3","p4","p5"].map((k) => <Skeleton key={k} className="h-4 w-full" />)}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-gray-500 mb-4">Article not found.</p>
          <Link to="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Render markdown-like content (basic)
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      const key = `line-${index}`;
      if (line.startsWith("## ")) {
        return <h2 key={key} className="text-2xl font-bold font-heading text-[#0A1628] mt-8 mb-4">{line.slice(3)}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={key} className="text-lg font-semibold text-[#0A1628] mt-6 mb-3">{line.slice(4)}</h3>;
      }
      if (line.startsWith("- **")) {
        const boldMatch = line.match(/^- \*\*([^*]+)\*\*: (.+)$/);
        if (boldMatch) {
          return (
            <li key={key} className="text-gray-600 mb-2 ml-4">
              <strong>{boldMatch[1]}</strong>: {boldMatch[2]}
            </li>
          );
        }
        return <li key={key} className="text-gray-600 mb-2 ml-4">{line.slice(2)}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={key} className="text-gray-600 mb-2 ml-4">{line.replace(/^\d+\. /, "")}</li>;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={key} className="font-semibold text-[#0A1628] my-3">{line.slice(2, -2)}</p>;
      }
      if (line === "") {
        return <br key={key} />;
      }
      return <p key={key} className="text-gray-600 leading-relaxed mb-3">{line}</p>;
    });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Badge className="bg-white/10 text-white border-white/20 mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gray-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary */}
          <div className="bg-gradient-to-br from-[#EEF2FF] to-[#F5F0FF] border border-[#6C63FF]/20 rounded-2xl p-6 mb-8">
            <p className="text-[#1F3A93] text-lg leading-relaxed font-medium">{post.summary}</p>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Article Body */}
          <article className="prose max-w-none">
            <div className="text-gray-700">
              {renderContent(post.content)}
            </div>
          </article>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Ready to Try NexVstar AI?
            </h3>
            <p className="text-white/70 mb-5 text-sm">
              Book a free demo and see your revenue potential in 45 minutes.
            </p>
            <Link to="/demo">
              <Button className="bg-white text-[#1F3A93] hover:bg-gray-100 font-semibold">
                Book Free Demo
              </Button>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-200">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
