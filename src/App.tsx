
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Labs from "./pages/Labs";
import AIEnablementLab from "./pages/AIEnablementLab";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import ResourceArticle from "./pages/ResourceArticle";
import AdminPortal from "./pages/AdminPortal";
import NotFound from "./pages/NotFound";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
          <Route path="/labs" element={<Layout><Labs /></Layout>} />
          <Route path="/labs/ai-enablement" element={<Layout><AIEnablementLab /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/resources/:id" element={<Layout><ResourceArticle /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/admin-portal" element={<Layout><AdminPortal /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
          {/* ... other routes ... */}
        <Route path="/resources" element={<Resources />} />
        {/* dynamic route for a single resource */}
        <Route path="/resources/:resourceId" element={<ResourceArticle />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
