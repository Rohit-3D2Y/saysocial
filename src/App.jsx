import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

// Your components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import StatsSection from "./components/StatsSection";
import BenefitsCarousel from "./components/WhyUs";
import PartnerLogos from "./components/PartnerLogos";
import ServicesSection from "./components/ServiceSection";
import Demo from "./components/Demo";
import Testimonial from "./components/Testimonial";
import InstaPostCarousel from "./components/InstaPostCaraousel";
import Footer from "./components/Footer";
import ServiceDetail from "./components/utils/ServiceDetail"; // NEW FILE you'll create

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const HomePage = () => (
  <>
    <Navbar />
    <Landing />
    <StatsSection />
    <BenefitsCarousel />
    <PartnerLogos />
    <ServicesSection />
    <Testimonial />
    <Demo />
    <InstaPostCarousel />
    <Footer />
  </>
);

const App = () => {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/:id"
            element={
              <PageWrapper>
                <Navbar />
                <ServiceDetail />
                <Footer/>
              </PageWrapper>
            }
          />
        </Routes>
      </Router>
    </ReactLenis>
  );
};

export default App;
