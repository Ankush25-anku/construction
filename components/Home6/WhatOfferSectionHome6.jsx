import React from "react";

const WhatOfferSectionHome6 = () => {
  return (
    <section className="what-offer-section section-padding fix header-bg-6">
      <div className="container">
        <div className="offer-wrapper-6">
          <div className="row g-4">
            <div className="col-xl-4">
              <div className="offer-content">
                <div className="section-title style-6 mb-0">
                  <h6 className="wow fadeInUp">What We Offer</h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Smart Education Services
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  Our AI-driven education services deliver personalized learning,
                  real-time insights, and adaptive tools that support students,
                </p>
                <div className="array-buttons wow fadeInUp" data-wow-delay=".3s">
                  <button className="array-prev">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button className="array-next">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="swiper offer-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="offer-box-item-6">
                      <div className="icon">
                        <img src="/assets/img/home-6/icon/01.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h4>
                          Personalized Learning <br /> Paths
                        </h4>
                        <p>AI tailors course content and pace to each student's</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="offer-box-item-6 style-6">
                      <div className="icon">
                        <img src="/assets/img/home-6/icon/02.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h4>
                          Intelligent Tutoring <br /> Systems
                        </h4>
                        <p>Virtual tutors that provide instant feedback</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="offer-box-item-6 style-6">
                      <div className="icon">
                        <img src="/assets/img/home-6/icon/03.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h4>
                          AI-Powered Content <br /> Creation
                        </h4>
                        <p>Generate custom quizzes, study materials, and lesson.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOfferSectionHome6;
