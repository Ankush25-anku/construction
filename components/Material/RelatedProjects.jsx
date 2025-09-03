"use client";

import React from "react";
import Link from "next/link";

const RelatedProjects4 = () => {
  return (
    <section
      className="service-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('/assets/img/service/service-bg.png')" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <h6>
            <img src="assets/img/star.png" alt="img" /> our projects
          </h6>
          <h2>
            Related{" "}
            <span>
              <b>projects</b>
            </span>
          </h2>
        </div>

        {/* Portfolio Items */}
        <div className="row">
          {/* Project 1 */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="portfolio-card-items">
              <div className="portfolio-image">
                <img src="assets/img/project/material8.jpg" alt="img" />
                <Link href="/Material" className="lets-circle" scroll={true}>
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  <br />
                  Project details
                </Link>
              </div>
              <div className="portfolio-content">
                <h6>
                  <span>//</span> Shuttering Plates
                </h6>
                <Link href="/Material">Centering Material</Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="portfolio-card-items">
              <div className="portfolio-image">
                <img src="assets/img/project/material5.jpg" alt="img" />
                <Link href="/Material" className="lets-circle" scroll={true}>
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  <br />
                  Project details
                </Link>
              </div>
              <div className="portfolio-content">
                <h6>
                  <span>//</span> Scaffolding Pipes
                </h6>
                <Link href="/Material">Centering Material</Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="portfolio-card-items">
              <div className="portfolio-image">
                <img src="assets/img/project/material3.jpg" alt="img" />
                <Link href="/Material" className="lets-circle" scroll={true}>
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  <br />
                  Project details
                </Link>
              </div>
              <div className="portfolio-content">
                <h6>
                  <span>//</span> Adjustable Props
                </h6>
                <Link href="/Material">Centering Material</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects4;
