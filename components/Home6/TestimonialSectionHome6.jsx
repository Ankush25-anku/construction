import React from "react";

const TestimonialSectionHome6 = () => {
  return (
    <section className="testimonial-section-6 section-padding fix bg-color-6 pb-0">
      <div className="client-1">
        <img src="/assets/img/testimonial/0107.jpg" alt="img" />
      </div>
      <div className="client-2">
        <img src="/assets/img/home-6/testimonial/client-2.png" alt="img" />
      </div>
      <div className="client-3">
        <img src="/assets/img/home-6/testimonial/client-3.png" alt="img" />
      </div>
      <div className="client-4">
        <img src="/assets/img/home-6/testimonial/client-4.png" alt="img" />
      </div>
      <div className="client-5">
        <img src="/assets/img/home-6/testimonial/client-5.png" alt="img" />
      </div>

      <div className="container">
        <div className="section-title-area">
          <div className="section-title style-6">
            <h6 className="wow fadeInUp">What Our Users Say</h6>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Student & Educator Feedback
            </h2>
          </div>
          <div className="array-buttons mt-0 wow fadeInUp" data-wow-delay=".5s">
            <button className="array-prev">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="testimonial-wrapper-6">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div className="swiper swiper-image">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-image">
                      <img src="/assets/img/testimonial/122.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-image">
                      <img src="/assets/img/testimonial/122.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-image">
                      <img
                        src="/assets/img/home-6/testimonial/03.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="testimonial-card-item-6">
                <div className="swiper testimonial-slider-6">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-content">
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <p>
                          Luctus dignissim ornare suscipt penatibus suspendisse
                          faciliy placera eleifend duise quam enimes egeter
                          platea consectetuer malesuada an hack blandit proin
                          suscipit porta vitae enter an ultricies tempor
                          ultrices duisentis a auctor tempor neque cubilia psum
                          risus commodo pulvina aliquam donec arcu augue massa
                          sagittis.
                        </p>
                        <h3>Herbert Martinez</h3>
                        <span>HR Manager</span>
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

export default TestimonialSectionHome6;
