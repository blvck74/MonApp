import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Works from "./pages/Works";
import Accidents from "./pages/Accidents";
import ShiftHandover from "./pages/ShiftHandover";
import GeoDepartment from "./pages/GeoDepartment";
import Storage from "./pages/Storage";
import OperationalCommunication from "./pages/OperationalCommunication";
import Notes from "./pages/Notes";
import Parameters from "./pages/Parameters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/works" element={<Works />} />
              <Route path="/accidents" element={<Accidents />} />
              <Route path="/shift-handover" element={<ShiftHandover />} />
              <Route path="/geo-department" element={<GeoDepartment />} />
              <Route path="/storage" element={<Storage />} />
              <Route
                path="/operational-communication"
                element={<OperationalCommunication />}
              />
              <Route path="/notes" element={<Notes />} />
              <Route path="/parameters" element={<Parameters />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
