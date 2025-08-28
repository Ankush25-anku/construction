import React from "react";

const ExploreBreadcrumb = () => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
    >
      <div className="container">
        <div className="page-heading">
          <h6 className="wow fadeInUp">
            <img src="/assets/img/star.png" alt="star" /> portfolio details
          </h6>
          <h1 className="wow fadeInUp" data-wow-delay=".3s">
            Bold & <span>vibrant</span> design
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ExploreBreadcrumb;
