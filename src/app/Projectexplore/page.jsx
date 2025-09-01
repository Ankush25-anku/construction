import React from "react";
// import HeaderHome1 from "../../../components/Aboutexplore/Header";
import ExploreBreadcrumb from "../../../components/Projectexplore/ExploreBreadcrumb";
import ProjectDetails from "../../../components/Projectexplore/ProjectDetails";
import RelatedProjects from "../../../components/Projectexplore/RelatedProjects";
// import Footer from "../../../components/Projectexplore/projectFooter";
import ParallaxSection1 from "../../../components/Projectexplore/ParallaxSection1";


const page = () => {
  return (
    <div>
      {/* <HeaderHome1 /> */}
      <ExploreBreadcrumb />
      <ProjectDetails />
      <ParallaxSection1 />
      <RelatedProjects />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
