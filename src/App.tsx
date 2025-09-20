import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import StartBuilding from "./pages/StartBuilding";
import PillarDetail from "./pages/PillarDetail";

// Add smooth scroll behavior
const SmoothScrollBehavior = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return null;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Ensure new pages start at top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmoothScrollBehavior />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 relative md:flex md:flex-col md:justify-center md:items-center">
          {/* Subtle background pattern */}
          <div 
            className="fixed inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)',
              backgroundSize: '40px 40px',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }} 
          />
          <div 
            className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50/80 via-white/80 to-teal-50/80 pointer-events-none"
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          />
          {/* Main content wrapper */}
          <div className="relative z-10 w-full max-w-[100vw] overflow-x-hidden min-h-[calc(100vh-80px)]">
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-building" element={<StartBuilding />} />
          <Route path="/pillars/:slug" element={<PillarDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
