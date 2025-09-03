import React from "react";

// import Header2 from "../../../components/Projectexplore2/exploreHeader";
import ExploreBreadcrumb2 from "../../../components/Projectexplore2/ExploreBreadcrumb";
import ProjectDetails2 from "../../../components/Projectexplore2/ProjectDetails";
import RelatedProjects2 from "../../../components/Projectexplore2/RelatedProjects";
// import Footer2 from "../../../components/Projectexplore2/projectFooter";
import ParallaxSection2 from "../../../components/Projectexplore2/ParallaxSection2";
import HeaderHome1 from "../../../components/Projectexplore/exploreHeader";
import Footer from "../../../components/Projectexplore/projectFooter";

const page = () => {
  return (
    <div>
      {/* <Header2 /> */}
      <HeaderHome1 />
      <ExploreBreadcrumb2 />
      <ProjectDetails2 />
      <ParallaxSection2 />
      <RelatedProjects2 />
      <Footer />
      {/* <Footer2 /> */}
    </div>
  );
};

export default page;
