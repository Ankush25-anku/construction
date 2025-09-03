import React from "react";
// import Header3 from "../../../components/Relatedproject/exploreHeader3";
import ExploreBreadcrumb3 from "../../../components/Relatedproject/ExploreBreadcrumb3";
import ProjectDetails3 from "../../../components/Relatedproject/ProjectDetails3";
import RelatedProjects3 from "../../../components/Relatedproject/RelatedProjects3";
// import Footer3 from "../../../components/Relatedproject/projectFooter3";
import ParallaxSection3 from "../../../components/Relatedproject/ParallaxSection3";
import HeaderHome1 from "../../../components/Projectexplore/exploreHeader";
import Footer from "../../../components/Projectexplore/projectFooter";

const page = () => {
  return (
    <div>
      {/* <Header3 /> */}
      <HeaderHome1 />
      <ExploreBreadcrumb3 />
      <ProjectDetails3 />
      <ParallaxSection3 />
      <RelatedProjects3 />
      <Footer />
      {/* <Footer3 /> */}
    </div>
  );
};

export default page;
