import Image from "next/image";
// import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import ServiceSection from "../../components/ServiceSection";
import ProjectSection from "../../components/ProjectSection";
import FAQSection from "../../components/FAQSection";
import PricingSection from "../../components/─ PricingSection";
import TestimonialSection from "../../components/Home2/TestimonialSection";

import ContactInfo from "../../components/ContactSection";
// import Footer from "../../components/Footer";

// import OffcanvasSidebar from "../../components/OffcanvasSidebar";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <OffcanvasSidebar /> */}
      <HeroSection />
      <AboutSection />
      <FAQSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactInfo />
      {/* <Footer /> */}
    </div>
  );
}
