"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-5 section-padding fix pt-0">
      {/* Navigation Buttons */}
      <div className="array-buttons">
        <button className="array-prev">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="array-next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <div className="testimonial-wrapper-5">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="testimonial-slider-5"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="testimonial-box-item-5">
              <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-5 col-sm-12">
                  <div className="testimonial-image">
                    <img src="/assets/img/team/01.jpg" alt="img" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-md-7 col-sm-12">
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                      et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                      amet sapien fringilla, mattis ligula
                    </p>
                    <hr />
                    <div className="client-info-item">
                      <div className="content">
                        <h5>Alexsia Jorgina</h5>
                        <span>From USA</span>
                      </div>
                      <div className="icon">
                        <img
                          src="/assets/img/testimonial/Frame.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-box-item-5">
              <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-5 col-sm-12">
                  <div className="testimonial-image">
                    <img src="/assets/img/team/02.jpg" alt="img" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-md-7 col-sm-12">
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                      et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                      amet sapien fringilla, mattis ligula
                    </p>
                    <hr />
                    <div className="client-info-item">
                      <div className="content">
                        <h5>Alexsia Jorgina</h5>
                        <span>From USA</span>
                      </div>
                      <div className="icon">
                        <img
                          src="/assets/img/testimonial/Frame.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="testimonial-box-item-5">
              <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-5 col-sm-12">
                  <div className="testimonial-image">
                    <img src="/assets/img/team/03.jpg" alt="img" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-md-7 col-sm-12">
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                      et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                      amet sapien fringilla, mattis ligula
                    </p>
                    <hr />
                    <div className="client-info-item">
                      <div className="content">
                        <h5>Alexsia Jorgina</h5>
                        <span>From USA</span>
                      </div>
                      <div className="icon">
                        <img
                          src="/assets/img/testimonial/Frame.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
