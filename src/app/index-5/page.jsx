import React from "react";
// import Header from "../../../components/Home5/Header";
import Home5Hero from "../../../components/Home5/Home5Hero";
import Home5WhyChooseUs from "../../../components/Home5/Home5WhyChooseUs";
import Home5FeatureAI from "../../../components/Home5/Home5FeatureAI";
import VideoBgSection from "../../../components/Home5/VideoBgSection";
import ProjectSection5 from "../../../components/Home5/ProjectSection5";
import AchievementSection from "../../../components/Home5/AchievementSection";
import TeamSection from "../../../components/Home5/TeamSection";
import TestimonialSection from "../../../components/Home5/TestimonialSection";
import NewsSection from "../../../components/Home5/NewsSection";
// import FooterHome5 from "../../../components/Home5/FooterHome5";

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <Home5Hero />
      <Home5WhyChooseUs />
      <Home5FeatureAI />
      <VideoBgSection />
      <ProjectSection5 />
      <AchievementSection />
      <TeamSection />
      <TestimonialSection />
      <NewsSection />
      {/* <FooterHome5 /> */}
    </div>
  );
};

export default page;
