import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

const QUICK_REPLIES = [
  "What packages do you offer?",
  "How does AI scoring work?",
  "Book a demo",
  "What's the pricing?",
  "How does lead capture work?",
];

const BOT_RESPONSES: Record<string, string> = {
  packages: `We offer 3 packages:\n\n**Starter** - ₹30k setup + ₹50k/month\nIdeal for small businesses with up to 5 users\n\n**Growth** - ₹50k setup + ₹1L/month\nFor mid-size companies with CRM integration\n\n**Enterprise** - Custom ₹3L–₹10L/month\nFull AI suite with dedicated manager\n\nWould you like more details on any package?`,
  scoring: `Our AI Lead Scoring engine analyzes:\n\n• Engagement patterns & website behavior\n• Industry trends & company size\n• Past interaction history\n• Communication responsiveness\n\nEach lead gets a 0-100% conversion probability score, updated in real-time. Sales teams can prioritize leads with >70% scores for fastest conversion.\n\nWant to see a live demo?`,
  demo: `Great choice! You can book a free demo in 3 ways:\n\n1. **Fill our form** → nexvstar.ai/demo\n2. **Call us** → +91 98765 43210\n3. **Email** → hello@nexvstar.ai\n\nOur team typically responds within 2 business hours. Demos run 30-45 minutes and include a live walkthrough of your potential ROI.`,
  pricing: `Our pricing is structured as:\n\n**Starter:** ₹30k (setup) + ₹50k/month\n**Growth:** ₹50k (setup) + ₹1L/month\n**Enterprise:** Custom ₹3L-₹10L/month\n\n**Add-ons:**\n• Extra dashboards: ₹10k-₹50k\n• AI optimization: ₹20k/month\n• Retainer support: ₹10k-₹20k/month\n\nAnnual plans get 20% discount! Shall I connect you with our sales team?`,
  lead: `Our AI Lead Capture system:\n\n✅ Collects leads from website forms automatically\n✅ Pulls prospects from LinkedIn Sales Navigator\n✅ Processes email inbox leads via AI parsing\n✅ Categorizes by company size, industry & intent\n✅ Scores and assigns to sales reps instantly\n\nAll leads appear on your dashboard in real-time with full context. Want to schedule a personalized walkthrough?`,
  default: `Hi! I'm NexVstar's AI assistant 🤖\n\nI can help you with:\n• Package & pricing information\n• How AI scoring works\n• Booking a demo\n• Lead capture & automation\n• Revenue forecasting insights\n\nWhat would you like to know?`,
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("package") || lower.includes("plan") || lower.includes("tier")) {
    return BOT_RESPONSES.packages;
  }
  if (lower.includes("scor") || lower.includes("ai lead")) {
    return BOT_RESPONSES.scoring;
  }
  if (lower.includes("demo") || lower.includes("book") || lower.includes("schedule")) {
    return BOT_RESPONSES.demo;
  }
  if (lower.includes("pric") || lower.includes("cost") || lower.includes("fee") || lower.includes("₹")) {
    return BOT_RESPONSES.pricing;
  }
  if (lower.includes("lead") || lower.includes("capture") || lower.includes("collect")) {
    return BOT_RESPONSES.lead;
  }
  return BOT_RESPONSES.default;
}

let nextId = 1;

const initialMessages: Message[] = [
  {
    id: nextId++,
    role: "bot",
    content: "👋 Hi! I'm NexVstar's AI assistant. How can I help you boost your revenue today?",
    timestamp: new Date(),
  },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: nextId++,
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));

    const botMsg: Message = {
      id: nextId++,
      role: "bot",
      content: getBotResponse(text),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) sendMessage(input);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[340px] sm:w-[380px] z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">NexVstar AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/70 text-xs">Online</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 bg-[#0d1a2f] px-3 py-4 space-y-3 overflow-y-auto max-h-[380px] scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] text-white rounded-br-sm"
                      : "bg-white/8 text-gray-200 rounded-bl-sm border border-white/5"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white/8 border border-white/5 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="bg-[#0d1a2f] px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
            {QUICK_REPLIES.map((reply) => (
              <Badge
                key={reply}
                onClick={() => sendMessage(reply)}
                className="cursor-pointer whitespace-nowrap bg-white/5 hover:bg-white/10 text-gray-300 border-white/10 hover:border-[#6C63FF]/40 transition-colors text-xs px-2.5 py-1 shrink-0"
              >
                {reply}
              </Badge>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="bg-[#0A1628] px-3 py-3 flex gap-2 border-t border-white/5">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#6C63FF] text-sm flex-1"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0 shrink-0"
              disabled={!input.trim() || isTyping}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] shadow-lg shadow-purple-900/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse" />
        )}
      </button>
    </>
  );
}
