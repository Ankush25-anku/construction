import React from "react";

const ShowcaseSection = () => {
  return (
    <section className="showcase-section fix section-padding-2 section-bg">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore best creation <br />
              listed <b>showcase</b>
            </h2>
          </div>
          <p className="text-width wow fadeInUp" data-wow-delay=".5s">
            Duise sagittis accumsan magna adipiscing laoreet ultrices magna
            consectetuer eiaculis rutrum morbie habitasse libero
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="swiper showcase-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="showcase-items">
                <img src="/assets/img/project/06.jpg" alt="img" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="showcase-items">
                <img src="/assets/img/project/07.jpg" alt="img" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="showcase-items">
                <img src="/assets/img/project/08.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
