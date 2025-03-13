
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CourseDetails from "./pages/CourseDetails";
import PersonalJourney from "./pages/PersonalJourney";
import Aspirations from "./pages/Aspirations";
import NotFound from "./pages/NotFound";
import AnimatedTransition from "./components/AnimatedTransition";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <AnimatedTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/personal-journey" element={<PersonalJourney />} />
            <Route path="/aspirations" element={<Aspirations />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatedTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
