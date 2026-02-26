import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const COOKIE_KEY = "nexvstar_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const rejectNonEssential = () => {
    localStorage.setItem(COOKIE_KEY, "essential-only");
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(COOKIE_KEY, "dismissed");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-fade-up">
      <div className="bg-[#0d1a2f]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/40">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4 text-white" />
            </div>
            <p className="text-white font-semibold text-sm">Cookie Preferences</p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="text-gray-500 hover:text-gray-300 transition-colors p-0.5"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed mb-4">
          We use cookies to enhance your experience, analyze site traffic, and deliver personalized content. See our{" "}
          <Link to="/legal/cookies" className="text-[#6C63FF] hover:underline">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={acceptAll}
            className="flex-1 bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0 text-xs font-medium"
          >
            Accept All
          </Button>
          <Button
            size="sm"
            onClick={rejectNonEssential}
            variant="outline"
            className="flex-1 border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-xs"
          >
            Essential Only
          </Button>
        </div>
      </div>
    </div>
  );
}
