import React from "react";
import ServiceDetailsHeader from "../../../components/servicedetails/ServiceDetailsHeader";
import ServiceSection from "../../../components/ServiceSection";
import CtaSection from "../../../components/servicedetails/CtaSection";
import BenefitSection from "../../../components/servicedetails/BenefitSection";
import ParallaxSection from "../../../components/servicedetails/ParallaxSection";
import NewsSection from "../../../components/servicedetails/NewsSection";
import Footer from "../../../components/servicedetails/Footer";
const page = () => {
  return (
    <div>
      <ServiceDetailsHeader />
      <ServiceSection />
      <CtaSection />
      <BenefitSection />
      <ParallaxSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default page;
