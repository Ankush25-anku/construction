import React from "react";

const ExploreBreadcrumb3 = () => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
    >
      <div className="container">
        <div className="page-heading">
          <h6
            className="wow fadeInUp flex items-center gap-2 font-semibold text-lg md:text-xl text-white"
          >
            <img
              src="/assets/img/star.png"
              alt="star"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <span>Construction Projects</span>
          </h6>
          <h1 className="wow fadeInUp" data-wow-delay=".3s">
            Building with <span>Strength & Precision</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ExploreBreadcrumb3;
