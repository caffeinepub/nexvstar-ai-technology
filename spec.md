# NexVstar AI Technology Pvt. Ltd.

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Full marketing website for NexVstar AI Technology Pvt. Ltd.
- Multi-page SPA with React Router: Home, How It Works, Services/Packages, Case Studies, Dashboard Preview, Pricing, Demo/Contact, Blog, Legal pages (T&C, Privacy, Cookie, Disclaimer)
- AI Revenue Intelligence platform showcase with interactive demo dashboard
- Lead capture form with backend storage
- Newsletter subscription with backend storage
- Role-based AI dashboard demo (CEO / Sales / Operations views)
- Testimonials / case study slider
- Pricing section with INR pricing tiers (Small, Mid, Enterprise)
- Blog/Insights section with mock articles
- Legal pages (Terms & Conditions, Privacy Policy, Cookie Policy, Disclaimer)
- AI Chatbot widget (UI-only, simulated responses)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend:
   - Store leads/contacts from Demo/Contact form (name, email, company, phone, message)
   - Store newsletter subscribers (email)
   - Store blog posts (title, summary, date, category)
   - Pre-populate with sample blog posts and testimonials

2. Frontend pages:
   - **Home/Hero**: "Boost Your Revenue with AI Automation" headline, CTA "Book Demo", animated stats, feature highlights
   - **How It Works**: 5-step process (Lead Capture → AI Score → Follow-up → Dashboard → Insights)
   - **Services/Packages**: Small (₹30k setup + ₹50k/mo), Mid (₹50k setup + ₹1L/mo), Enterprise (custom ₹3–10L/mo)
   - **Case Studies**: Testimonials slider, ROI statistics, client logos
   - **Dashboard Preview**: Interactive mock AI dashboard with charts (leads, revenue forecast, KPIs, lead scoring)
   - **Pricing**: Detailed pricing table with add-ons and retainer options
   - **Demo/Contact**: Lead capture form with backend submit
   - **Blog/Insights**: Grid of articles with categories
   - **Legal**: T&C, Privacy Policy, Cookie Policy, Disclaimer pages

3. Design system:
   - Colors: Deep Blue (#1F3A93) primary, Purple accent (#6C63FF), White background
   - Fonts: Poppins headings, Open Sans / Lato body (via Google Fonts via Tailwind)
   - Dark gradient hero sections, clean card layouts, modern SaaS aesthetic
   - Fully responsive (mobile-first)

4. AI Chatbot widget: floating button, slide-up panel, simulated responses about packages and demos

## UX Notes
- Company name "NexVstar AI Technology Pvt. Ltd." appears in nav, footer, and legal pages
- Hero CTA "Book Demo" scrolls to / routes to Demo/Contact page
- Dashboard Preview shows realistic-looking mock charts (no real data needed)
- Pricing in INR (₹) with clear tier differentiation
- Trust signals: client logos, stats (leads processed, revenue generated), certifications
- Legal pages are linked from footer
- Newsletter subscription in footer
- Mobile navigation with hamburger menu
