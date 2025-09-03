import React from "react";
// import ExploreBreadcrumb4 from "../../../components/Material/ExploreBreadcrumb";
// import Header4 from "../../../components/Material/exploreHeader";
import ProjectDetails4 from "../../../components/Material/ProjectDetails";
import RelatedProjects4 from "../../../components/Material/RelatedProjects";
import HeaderHome1 from "../../../components/Projectexplore/exploreHeader";
import Footer from "../../../components/Projectexplore/projectFooter";
// import Footer4 from "../../../components/Material/projectFooter";

const page = () => {
  return (
    <div>
      {/* <Header4 /> */}
      <HeaderHome1 />
      <ProjectDetails4 />
      <RelatedProjects4 />
      <Footer />
      {/* <Footer4 /> */}
    </div>
  );
};

export default page;
