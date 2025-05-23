
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Coffee from "./pages/products/Coffee";
import Tea from "./pages/products/Tea";
import Vanilla from "./pages/products/Vanilla";
import CornFlour from "./pages/products/CornFlour";
import Products from "./pages/products";
import AboutUs from "./pages/AboutUs";
import Producers from "./pages/Producers";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Movies from "./pages/Movies";
import ImportProcess from "./pages/ImportProcess";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/coffee" element={<Coffee />} />
          <Route path="/products/tea" element={<Tea />} />
          <Route path="/products/vanilla" element={<Vanilla />} />
          <Route path="/products/corn-flour" element={<CornFlour />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/import-process" element={<ImportProcess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
