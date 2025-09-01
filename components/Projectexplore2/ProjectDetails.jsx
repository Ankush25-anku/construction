import React from "react";

const ProjectDetails2 = () => {
  return (
    <section className="portfolio-details-section section-padding fix section-bg">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="row g-4">
            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="project-sidebar">
                <div className="project-details-info">
                  <h3>
                    <img src="/assets/img/star-3.png" alt="star" /> Project Info
                  </h3>
                  <ul>
                    <li>Company: Sri Balaji Ecstatic</li>
                    <li>
                      Project Name: <span>Aakruthi Arcadia</span>
                    </li>
                    <li>Category: Construction & Infrastructure</li>
                    <li>Start: 2007</li>
                    <li>
                      Commitment: <span>On-time Delivery</span>
                    </li>
                  </ul>
                </div>
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="fa-regular fa-phone-volume"></i>
                  </div>
                  <h2>
                    Have any project <span>contact</span> us
                  </h2>
                  <a href="/contact" className="theme-btn">
                    contact us{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-8">
              <div className="project-details-content">
                <h2>Aakruthi Arcadia – Redefining Modern Living</h2>
                <p className="mb-5">
                  Aakruthi Arcadia by Sri Balaji Ecstatic Infra LLP is more than
                  just a residential community — it is a thoughtfully designed
                  living space where comfort meets elegance. Nestled amidst
                  greenery, Arcadia offers residents a blend of modern
                  architecture, open spaces, and sustainable practices. With
                  years of trust since 2007, our vision with Arcadia is to build
                  homes that inspire, nurture, and last for generations.
                </p>
                <div className="details-image">
                  <img src="/assets/img/project/aak1.jpg" alt="project" />
                </div>

                <h2>Our Project Vision</h2>
                <p className="mb-4">
                  Arcadia is planned as a self-sustained residential enclave,
                  combining luxury with functionality. Every apartment and villa
                  is designed to maximize natural light, ventilation, and usable
                  space. The project incorporates world-class amenities, modern
                  infrastructure, and community-driven spaces that encourage
                  connection and well-being.
                </p>
                <p className="mb-5">
                  Sustainability lies at the heart of Arcadia — from
                  eco-friendly construction materials to water harvesting and
                  green zones, every aspect is designed with the future in mind.
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/project/aak4.jpg" alt="project" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/project/aak5.jpg" alt="project" />
                    </div>
                  </div>
                </div>

                <h2>Our Working Process</h2>
                <p>
                  At Aakruthi Arcadia, precision planning and execution ensure
                  that every milestone is achieved with perfection. From
                  ideation, layout planning, and material sourcing to the final
                  handover, our process guarantees transparency, safety, and
                  excellence. Residents can rely on us not just during
                  construction, but even after — we stand by our projects with
                  trusted support.
                </p>

                <div className="how-to-work-wrapper">
                  <div className="how-too-work-items text-center">
                    <div className="icon">
                      <img src="/assets/img/icon/24.svg" alt="icon" />
                      <div className="bar-shape">
                        <img
                          src="/assets/img/work-bar-shape.png"
                          alt="bar shape"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Perfect Planning</h3>
                      <p>
                        From site selection to master layout, every detail of
                        Arcadia is meticulously planned for maximum value.
                      </p>
                    </div>
                  </div>

                  <div className="how-too-work-items text-center">
                    <div className="icon">
                      <img src="/assets/img/icon/25.svg" alt="icon" />
                      <div className="bar-shape">
                        <img
                          src="/assets/img/work-bar-shape.png"
                          alt="bar shape"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Professional Execution</h3>
                      <p>
                        Using high-quality materials and a skilled workforce,
                        Arcadia is constructed with an uncompromising commitment
                        to excellence.
                      </p>
                    </div>
                  </div>

                  <div className="how-too-work-items text-center">
                    <div className="icon">
                      <img src="/assets/img/icon/26.svg" alt="icon" />
                      <div className="bar-shape">
                        <img
                          src="/assets/img/work-bar-shape.png"
                          alt="bar shape"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h3>Trusted Support</h3>
                      <p>
                        Even after handover, our dedicated support ensures
                        residents enjoy a hassle-free living experience.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Results & Impact</h2>
                <p>
                  Aakruthi Arcadia is envisioned as a landmark development that
                  enhances lifestyles while respecting nature. With modern
                  amenities like landscaped gardens, recreational zones, and
                  state-of-the-art security, it offers a safe and fulfilling
                  environment. The project stands as proof of our promise —
                  blending innovation, sustainability, and timeless value.
                </p>

                <ul className="details-list">
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Luxurious homes designed for comfort and elegance.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    On-time delivery with uncompromised quality standards.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Sustainable and eco-conscious community living.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2;
