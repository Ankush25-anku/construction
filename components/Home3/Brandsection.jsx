import React from "react";

const BrandSection = () => {
  const brands = [
    "/assets/img/brand/01.png",
    "/assets/img/brand/02.png",
    "/assets/img/brand/03.png",
    "/assets/img/brand/04.png",
    "/assets/img/brand/05.png",
  ];

  return (
    <div
      className="brand-section section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('/assets/img/brand/brand-bg.png')" }}
    >
      <div className="container">
        <h3 className="brand-title-2 style-2 text-center wow fadeInUp">
          Trusted by the great company
        </h3>
        <div className="swiper brand-slider">
          <div className="swiper-wrapper">
            {brands.map((src, index) => (
              <div className="swiper-slide" key={index}>
                <div className="brand-image text-center">
                  <img src={src} alt={`Brand ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
