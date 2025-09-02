import Image from "next/image";
// import Header from "../../components/Header";
import HeroSection from "../../components/Home1/HeroSection";
import AboutSection from "../../components/Home1/AboutSection";
import ServiceSection from "../../components/Home1/ServiceSection";
import ProjectSection from "../../components/Home1/ProjectSection";
import FAQSection from "../../components/Home1/FAQSection";
import TestimonialSection from "../../components/Home1/TestimonialSection";

import ContactInfo from "../../components/Home1/ContactSection";
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
