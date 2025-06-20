
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SocialFloat from "./components/SocialFloat";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import News from "./pages/News";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Cookie Consent Banner */}
          <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-sm border border-fritzy-pink/30 rounded-2xl p-4 shadow-lg fritzy-card">
              <p className="text-sm text-gray-700 font-nunito mb-3">
                We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
              </p>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1 bg-fritzy-pink text-gray-800 rounded-full font-semibold hover:bg-fritzy-pink-dark transition-colors">
                  Accept
                </button>
                <button className="text-xs px-3 py-1 border border-fritzy-pink-dark text-fritzy-pink-dark rounded-full hover:bg-fritzy-pink/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
