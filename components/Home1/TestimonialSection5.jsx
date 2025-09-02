"use client"; // ✅ Required for interactivity in Next.js App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection5 = () => {
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
            prevEl: ".array-prev",
            nextEl: ".array-next",
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          className="testimonial-slider-5"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="testimonial-box-item-5">
              <div className="testimonial-image">
                <img src="/assets/img/home-5/team/01.jpg" alt="Client" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula
                </p>
                <div className="client-info-item">
                  <div className="content">
                    <h5>Alexsia Jorgina</h5>
                    <span>From USA</span>
                  </div>
                  <div className="icon">
                    <img
                      src="/assets/img/home-5/testimonial/Frame.svg"
                      alt="Quote"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-box-item-5">
              <div className="testimonial-image">
                <img src="/assets/img/home-5/team/02.jpg" alt="Client" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula
                </p>
                <div className="client-info-item">
                  <div className="content">
                    <h5>Alexsia Jorgina</h5>
                    <span>From USA</span>
                  </div>
                  <div className="icon">
                    <img
                      src="/assets/img/home-5/testimonial/Frame.svg"
                      alt="Quote"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="testimonial-box-item-5">
              <div className="testimonial-image">
                <img src="/assets/img/home-5/team/03.jpg" alt="Client" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula
                </p>
                <div className="client-info-item">
                  <div className="content">
                    <h5>Alexsia Jorgina</h5>
                    <span>From USA</span>
                  </div>
                  <div className="icon">
                    <img
                      src="/assets/img/home-5/testimonial/Frame.svg"
                      alt="Quote"
                    />
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

export default TestimonialSection5;
