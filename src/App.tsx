import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import SocialFloat from "./components/SocialFloat";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import Timeline from "./pages/Timeline";
import NotFound from "./pages/NotFound";
import AutoScrollNavigation from "./components/AutoScrollNavigation";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleButtonClick = (e: MouseEvent) => {
      // Only trigger if at the bottom of the page
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (scrollBottom) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    // Attach to all buttons
    const buttons = document.querySelectorAll("button[data-scrolltop]");
    buttons.forEach(btn => btn.addEventListener("click", handleButtonClick));
    // Clean up
    return () => {
      buttons.forEach(btn => btn.removeEventListener("click", handleButtonClick));
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen w-full">
            <Navigation />
            <SocialFloat />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/timeline" element={<Timeline />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AutoScrollNavigation />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
