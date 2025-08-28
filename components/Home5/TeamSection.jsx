"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const teamData = [
  {
    img: "/assets/img/team/01.jpg",
    name: "Phillip Michael",
    role: "Chief Executive",
  },
  {
    img: "/assets/img/team/02.jpg",
    name: "Heath Martin",
    role: "Senior Architect",
  },
  {
    img: "/assets/img/team/03.jpg",
    name: "Richad Shatle",
    role: "Chief Executive",
  },
  {
    img: "/assets/img/team/04.jpg",
    name: "Andrew Schitz",
    role: "Chief Executive",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section-5 section-padding fix">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-area">
          <div className="section-title style-5">
            <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
              team member
            </h6>
            <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
              expert interior designers
            </h2>
          </div>
          <div className="array-buttons wow fadeInUp" data-wow-delay=".5s">
            <button className="array-prev">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          className="team-slider"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-card-item-5">
                <div className="team-image">
                  <img src={member.img} alt={member.name} />
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="fa-solid fa-share-nodes"></i>
                    </span>
                  </div>
                </div>
                <div className="team-content">
                  <h5>
                    <a href="team.html">{member.name}</a>
                  </h5>
                  <p>{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
