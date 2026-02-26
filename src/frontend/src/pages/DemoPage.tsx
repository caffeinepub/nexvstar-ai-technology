import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import {
  Calendar,
  CheckCircle,
  Zap,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
} from "lucide-react";

const demoFeatures = [
  "Live AI lead scoring demonstration",
  "Revenue forecasting dashboard walkthrough",
  "Follow-up automation sequence preview",
  "Custom ROI calculation for your business",
  "Q&A with our AI experts",
];

export default function DemoPage() {
  // Demo form state
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    message: "",
  });
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const { actor } = useActor();

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoLoading(true);
    try {
      if (!actor) throw new Error("Not connected");
      const ts = demoForm.preferredDate
        ? BigInt(new Date(demoForm.preferredDate).getTime())
        : BigInt(Date.now());
      await actor.submitDemoRequest(
        demoForm.name,
        demoForm.email,
        demoForm.company,
        demoForm.phone,
        ts,
        demoForm.message,
      );
      setDemoSuccess(true);
      toast.success("Demo request submitted! We'll contact you within 2 hours.");
    } catch {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setDemoLoading(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    try {
      if (!actor) throw new Error("Not connected");
      await actor.addLead(
        contactForm.name,
        contactForm.email,
        contactForm.company,
        contactForm.phone,
        contactForm.message,
        "contact-form",
      );
      setContactSuccess(true);
      toast.success("Message sent! Our team will respond within 24 hours.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1F3A93] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">Book a Demo</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            See NexVstar AI in{" "}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#a855f7] bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Book a personalized 45-minute demo and discover how NexVstar can transform your revenue pipeline.
          </p>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Info */}
            <div className="lg:col-span-2">
              <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">What to Expect</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A1628] mb-4">
                Your Personalized Demo Includes
              </h2>
              <div className="space-y-3 mb-8">
                {demoFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3 bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email us</p>
                    <p className="text-sm font-semibold text-[#0A1628]">nexvstaraitechnology@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Response time</p>
                    <p className="text-sm font-semibold text-[#0A1628]">Within 2 business hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1F3A93] to-[#6C63FF] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Office</p>
                    <p className="text-sm font-semibold text-[#0A1628]">Dibrugarh, ASSAM, INDIA</p>
                  </div>
                </div>
              </div>

              {/* Calendly Button */}
              <div className="mt-6">
                <a
                  href="https://calendly.com/nexvstar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A1628] text-white rounded-xl py-3 px-4 text-sm font-semibold hover:bg-[#1F3A93] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book via Calendly
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </div>

            {/* Demo Form */}
            <div className="lg:col-span-3">
              {demoSuccess ? (
                <div className="text-center py-16 bg-gradient-to-br from-[#EEF2FF] to-[#F5F0FF] rounded-2xl border border-[#6C63FF]/20">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A1628] mb-2">Demo Request Received!</h3>
                  <p className="text-gray-600 max-w-sm mx-auto text-sm">
                    Our team will reach out within 2 business hours to confirm your demo time. Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                  <h3 className="text-xl font-bold font-heading text-[#0A1628] mb-6">Request Your Free Demo</h3>
                  <form onSubmit={handleDemoSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name *</Label>
                        <Input
                          required
                          placeholder="Rajesh Sharma"
                          value={demoForm.name}
                          onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Work Email *</Label>
                        <Input
                          type="email"
                          required
                          placeholder="rajesh@company.com"
                          value={demoForm.email}
                          onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Company Name *</Label>
                        <Input
                          required
                          placeholder="TechServe India Pvt. Ltd."
                          value={demoForm.company}
                          onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone Number *</Label>
                        <Input
                          required
                          placeholder="+91 98765 43210"
                          value={demoForm.phone}
                          onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Preferred Demo Date</Label>
                      <Input
                        type="date"
                        value={demoForm.preferredDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDemoForm({ ...demoForm, preferredDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Tell us about your goals</Label>
                      <Textarea
                        placeholder="What are your main revenue challenges? How many leads do you get monthly? What CRM are you using?"
                        value={demoForm.message}
                        onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={demoLoading}
                      className="w-full bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0 font-semibold py-5"
                    >
                      {demoLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Book My Free Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      No credit card required. Free 45-minute demo with our AI experts.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-[#EEF2FF] text-[#1F3A93] border-[#1F3A93]/20 mb-4">General Enquiry</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A1628] mb-3">
              Have a Question?
            </h2>
            <p className="text-gray-500">
              Send us a message and our team will get back to you within 24 hours.
            </p>
          </div>

          {contactSuccess ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0A1628] mb-2">Message Sent!</h3>
              <p className="text-gray-600 text-sm">We'll respond to your enquiry within 24 hours.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Name *</Label>
                    <Input
                      required
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Email *</Label>
                    <Input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Company</Label>
                    <Input
                      placeholder="Company name"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone</Label>
                    <Input
                      placeholder="+91 00000 00000"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Message *</Label>
                  <Textarea
                    required
                    placeholder="How can we help you?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={contactLoading}
                  className="w-full bg-gradient-to-r from-[#1F3A93] to-[#6C63FF] hover:from-[#2545a8] hover:to-[#7c73ff] text-white border-0 font-semibold"
                >
                  {contactLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
