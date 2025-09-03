import React from "react";
import ContactHeader from "../../../components/contact/ContactHeader.jsx";
import ContactInfo from "../../../components/contact/ContactInfo.jsx";
import HeaderHome1 from "../../../components/Projectexplore/exploreHeader.jsx";
import Footer from "../../../components/Projectexplore/projectFooter.jsx";
// import ContactFooter from "../../../components/contact/ContactFooter.jsx";

const page = () => {
  return (
    <div>
      {/* <ContactHeader /> */}
      <HeaderHome1 />
      <ContactInfo />
      <Footer />
      {/* <ContactFooter /> */}
    </div>
  );
};

export default page;
