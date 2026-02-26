import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
  Link,
  useParams,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import CookieBanner from "./components/CookieBanner";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import DashboardPreviewPage from "./pages/DashboardPreviewPage";
import PricingPage from "./pages/PricingPage";
import DemoPage from "./pages/DemoPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TermsPage from "./pages/legal/TermsPage";
import PrivacyPage from "./pages/legal/PrivacyPage";
import CookiesPage from "./pages/legal/CookiesPage";
import DisclaimerPage from "./pages/legal/DisclaimerPage";

// Export Link and useParams for use in components
export { Link, useParams };

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatbotWidget />
      <CookieBanner />
      <Toaster position="top-right" />
    </div>
  ),
});

// Page routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const howItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/how-it-works",
  component: HowItWorksPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/case-studies",
  component: CaseStudiesPage,
});

const dashboardPreviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard-preview",
  component: DashboardPreviewPage,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});

const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/demo",
  component: DemoPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$id",
  component: BlogPostPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal/terms",
  component: TermsPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal/privacy",
  component: PrivacyPage,
});

const cookiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal/cookies",
  component: CookiesPage,
});

const disclaimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal/disclaimer",
  component: DisclaimerPage,
});

// Build the route tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  howItWorksRoute,
  servicesRoute,
  caseStudiesRoute,
  dashboardPreviewRoute,
  pricingRoute,
  demoRoute,
  blogRoute,
  blogPostRoute,
  termsRoute,
  privacyRoute,
  cookiesRoute,
  disclaimerRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
