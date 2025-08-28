import React from "react";

const BrandSection2 = () => {
  return (
    <div className="brand-section section-padding-2 pt-0">
      <div className="container">
        <h3 className="brand-title-2 text-center wow fadeInUp">
          Trusted by the great company
        </h3>
        <div className="swiper brand-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="brand-image text-center">
                <img src="/assets/img/brand/06.png" alt="img" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-image text-center">
                <img src="/assets/img/brand/07.png" alt="img" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-image text-center">
                <img src="/assets/img/brand/08.png" alt="img" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-image text-center">
                <img src="/assets/img/brand/09.png" alt="img" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-image text-center">
                <img src="/assets/img/brand/10.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection2;
