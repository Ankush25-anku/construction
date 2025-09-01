import React from "react";

const ProjectDetails = () => {
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
                      Project Name: Ace Ananta
                    </li>
                    <li>Category: Premium Residential Development</li>
                    <li>Start: 2022</li>
                    <li>
                      Commitment: Luxury Living & On-time Delivery
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
                <h2>Ace Ananta – Where Luxury Meets Lifestyle</h2>
                <p className="mb-5">
                  Ace Ananta by Sri Balaji Ecstatic is a thoughtfully designed
                  premium residential community that redefines modern living.
                  Nestled in a prime location, Ace Ananta combines contemporary
                  architecture, sustainable practices, and world-class amenities
                  to offer an unmatched lifestyle for urban families seeking
                  comfort and convenience.
                </p>
                <div className="details-image">
                  <img src="/assets/img/project/ace5.jpg" alt="Ace Ananta" />
                </div>

                <h2>Our Project Vision</h2>
                <p className="mb-4">
                  The vision behind Ace Ananta is to create homes that are more
                  than just living spaces — they are experiences. Every corner
                  is designed to balance elegance with functionality, offering
                  spacious layouts, natural light, and a serene environment
                  where families can thrive.
                </p>
                <p className="mb-5">
                  With a strong focus on sustainability, Ace Ananta integrates
                  eco-friendly designs, energy-efficient systems, and ample
                  green landscapes, ensuring a healthier and future-ready living
                  environment.
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="details-image">
                      <img
                        src="/assets/img/project/ace22.jpg"
                        alt="Ace Ananta"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="details-image">
                      <img
                        src="/assets/img/project/ace44.jpg"
                        alt="Ace Ananta"
                      />
                    </div>
                  </div>
                </div>

                <h2>Our Development Process</h2>
                <p>
                  At Ace Ananta, the development journey is guided by precision
                  and excellence. From planning and design to execution, our
                  process ensures uncompromised quality, safety, and timely
                  delivery. Backed by a skilled team and innovative technology,
                  every phase reflects our dedication to creating lasting value.
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
                      <h3>Smart Planning</h3>
                      <p>
                        Careful planning ensures well-designed homes, seamless
                        infrastructure, and maximum comfort for residents.
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
                      <h3>Quality Execution</h3>
                      <p>
                        Advanced techniques and skilled professionals ensure
                        precision construction and timely project completion.
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
                      <h3>Enduring Trust</h3>
                      <p>
                        Beyond handover, we continue to support our community,
                        building long-lasting trust and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Results & Lifestyle Impact</h2>
                <p>
                  Ace Ananta is more than just a project — it’s a lifestyle
                  upgrade. With landscaped gardens, recreational zones, and
                  wellness-focused amenities, the community encourages a
                  balanced lifestyle. This project reflects our vision of
                  delivering premium living while staying committed to
                  sustainability and quality.
                </p>

                <ul className="details-list">
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Luxury residences with world-class amenities.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Eco-friendly construction for a sustainable tomorrow.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Located in a prime area with excellent connectivity.
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

export default ProjectDetails;
