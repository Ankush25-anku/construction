import React from "react";

const CtaSection = () => {
  return (
    <div className="cta-section-4 fix">
      <div className="container">
        <div
          className="cta-wrapper mt-0 bg-cover"
          style={{ backgroundImage: "url('/assets/img/cta-bg.jpg')" }}
        >
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Experience the future of <br />
            <span></span> creation
          </h2>
          <a
            href="contact.html"
            className="theme-btn style-2 wow fadeInUp"
            data-wow-delay=".5s"
          >
            free generate{" "}
            <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
