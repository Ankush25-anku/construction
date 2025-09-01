import React from "react";
// import Header from "../../../components/Home3/Header";
import Home3Hero from "../../../components/Home3/Home3Hero";
import BrandSection from "../../../components/Home3/Brandsection";
import AboutSectionHome3 from "../../../components/Home3/AboutSectionHome3";
import MarqueeSectionHome3 from "../../../components/Home3/MarqueeSectionHome3";
import ProjectSectionHome3 from "../../../components/Home3/ProjectSectionHome3";
import WorkProcessSectionHome3 from "../../../components/Home3/WorkProcessSectionHome3";
import ShowcaseSection from "../../../components/Home3/ShowcaseSection";
import TestimonialSectionHome3 from "../../../components/Home3/TestimonialSectionHome3";
import ParalaxSection2 from "../../../components/Home3/ParalaxSection2";
import NewsSectionHome3 from "../../../components/Home3/NewsSectionHome3";
// import FooterHome3 from "../../../components/Home3/FooterHome3";

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <Home3Hero />
      <BrandSection />
      <AboutSectionHome3 />
      <MarqueeSectionHome3 />
      <ProjectSectionHome3 />
      <WorkProcessSectionHome3 />
      <ShowcaseSection />
      <TestimonialSectionHome3 />
      <ParalaxSection2 />
      <NewsSectionHome3 />
      {/* <FooterHome3 /> */}
    </div>
  );
};

export default page;
