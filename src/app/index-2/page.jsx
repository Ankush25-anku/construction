import React from "react";
// import Header2 from "../../../components/Home2/Header2";
import HeroSectionHome2 from "../../../components/Home2/HeroSectionHome2";
import Home2ServiceSection from "../../../components/Home2/Home2servicesection";
import AboutSectionHome2 from "../../../components/AboutSectionHome2";
import PopularServices from "../../../components/Home2/PopularServices";
import MobileApp from "../../../components/Home2/MobileApp";
import TestimonialSection from "../../../components/Home2/TestimonialSection";
import PlatformSection from "../../../components/Home2/platformsection";
import Faq1 from "../../../components/Home2/Faq1";
import BrandSection2 from "../../../components/Home2/BrandSection2";
import HowToWork from "../../../components/Home2/HowToWork";
import NewsSection from "../../../components/Home2/NewsSection";
// import Footer1 from "../../../components/Home2/Footer1";

const page = () => {
  return (
    <div>
      {/* <Header2 /> */}
      <HeroSectionHome2 />
      <Home2ServiceSection />
      <AboutSectionHome2 />
      <PopularServices />
      <MobileApp />
      <TestimonialSection />
      <PlatformSection />
      <Faq1 />
      <BrandSection2 />
      <HowToWork />
      <NewsSection />
      {/* <Footer1 /> */}
    </div>
  );
};

export default page;
