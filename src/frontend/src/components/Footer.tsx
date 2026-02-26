import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

const pageLinks = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Dashboard Preview", path: "/dashboard-preview" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Book Demo", path: "/demo" },
];

const legalLinks = [
  { label: "Terms & Conditions", path: "/legal/terms" },
  { label: "Privacy Policy", path: "/legal/privacy" },
  { label: "Cookie Policy", path: "/legal/cookies" },
  { label: "Disclaimer", path: "/legal/disclaimer" },
];

const services = [
  "Lead Capture AI",
  "AI Lead Scoring",
  "Follow-up Automation",
  "Revenue Forecasting",
  "Enterprise Insights",
  "Team Management",
];

export default function Footer() {
  const { actor } = useActor();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      if (!actor) throw new Error("Not connected");
      await actor.subscribe(email.trim());
      toast.success("Subscribed successfully! Welcome to NexVstar insights.");
      setEmail("");
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <img
                src="/assets/generated/nexvstar-logo-transparent.dim_300x80.png"
                alt="NexVstar AI Technology"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              NexVstar AI Technology Pvt. Ltd. empowers businesses with
              intelligent revenue automation, AI-driven lead scoring, and
              real-time decision intelligence.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6C63FF] shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6C63FF] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6C63FF] shrink-0" />
                <span>hello@nexvstar.ai</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 mt-8">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get AI revenue insights, case studies, and platform updates
              delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 text-sm"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0 text-sm font-medium"
              >
                {loading ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Twitter, label: "Twitter/X" },
                  { Icon: Youtube, label: "YouTube" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href={`https://nexvstar.ai/${label.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6C63FF]/30 border border-white/10 hover:border-[#6C63FF]/40 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>© 2026 NexVstar AI Technology Pvt. Ltd. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-[#6C63FF] fill-[#6C63FF]" /> using{" "}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6C63FF] hover:text-[#8B7FFF] transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
