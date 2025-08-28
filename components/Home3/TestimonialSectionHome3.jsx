import React from "react";

const TestimonialSectionHome3 = () => {
  return (
    <section
      className="testimonial-section style-2 fix section-padding-2 pt-0"
      style={{
        backgroundImage: "url('/assets/img/about/work-process-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation buttons */}
      <div className="array-button">
        <button className="array-prev">
          <i className="fa-regular fa-arrow-left"></i>
        </button>
        <button className="array-next">
          <i className="fa-regular fa-arrow-right"></i>
        </button>
      </div>

      {/* Decorative shapes */}
      <div className="circle-shape">
        <img src="/assets/img/testimonial/circle.png" alt="img" />
      </div>
      <div className="radius-shape">
        <img src="/assets/img/testimonial/radius-circle.png" alt="img" />
      </div>
      <div className="circle-shape-2">
        <img src="/assets/img/testimonial/circle-2.png" alt="img" />
      </div>
      <div className="circle-shape-3">
        <img src="/assets/img/testimonial/circle-3.png" alt="img" />
      </div>
      <div className="vector-shape">
        <img src="/assets/img/testimonial/vector.png" alt="img" />
      </div>

      {/* Section content */}
      <div className="container">
        <div className="section-title text-center">
          <img src="/assets/img/title-icon.png" alt="img" className="mb-3" />
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
            Clients <b>feedback</b>
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Our professional grade visuals content created effortlessly
          </p>
        </div>

        <div className="testimonial-wrapper-2">
          {/* Client Images */}
          <div className="client-image-items">
            <div className="client-img">
              <img src="/assets/img/testimonial/client-7.png" alt="img" />
            </div>
            <div className="client-img text-center">
              <img src="/assets/img/testimonial/client-8.png" alt="img" />
              <div className="star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="client-img">
              <img src="/assets/img/testimonial/client-9.png" alt="img" />
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="swiper testimonial-slider-2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-content">
                  <p>
                    Potenti might turpis dictumst Ridiculus pellentesque
                    molestie consequat at egestas eleifend nisle montes duis.
                    Hack leo pellentesque malesuada, orcide pretium blandit
                    class sociosqu habitant duis convallis sed seme. Suscipit
                    one senectus nonum rhoncus orci torquent ultricies congue
                    facilisi nonummy sapien ipsum suspendisse feugiat at never
                    dictumst massa.
                  </p>
                  <div className="client-info">
                    <h3>Maryad C. Garcia</h3>
                    <span>Ceo of nural</span>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-content">
                  <p>
                    Potenti might turpis dictumst Ridiculus pellentesque
                    molestie consequat at egestas eleifend nisle montes duis.
                    Hack leo pellentesque malesuada, orcide pretium blandit
                    class sociosqu habitant duis convallis sed seme. Suscipit
                    one senectus nonum rhoncus orci torquent ultricies congue
                    facilisi nonummy sapien ipsum suspendisse feugiat at never
                    dictumst massa.
                  </p>
                  <div className="client-info">
                    <h3>Maryad C. Garcia</h3>
                    <span>Ceo of nural</span>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-content">
                  <p>
                    Potenti might turpis dictumst Ridiculus pellentesque
                    molestie consequat at egestas eleifend nisle montes duis.
                    Hack leo pellentesque malesuada, orcide pretium blandit
                    class sociosqu habitant duis convallis sed seme. Suscipit
                    one senectus nonum rhoncus orci torquent ultricies congue
                    facilisi nonummy sapien ipsum suspendisse feugiat at never
                    dictumst massa.
                  </p>
                  <div className="client-info">
                    <h3>Maryad C. Garcia</h3>
                    <span>Ceo of nural</span>
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

export default TestimonialSectionHome3;
