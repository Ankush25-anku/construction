import Image from "next/image";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import ServiceSection from "../../components/ServiceSection";
import ProjectSection from "../../components/ProjectSection";
import FAQSection from "../../components/FAQSection";
import PricingSection from "../../components/─ PricingSection";
import MessageSection from "../../components/MessageSection";
import Footer from "../../components/Footer";

import OffcanvasSidebar from "../../components/OffcanvasSidebar";
import TestimonialSection from "../../components/Home2/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Header />
      <OffcanvasSidebar />
      <HeroSection />
      <AboutSection />
      <FAQSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <MessageSection />
      <Footer />
    </div>
  );
}
