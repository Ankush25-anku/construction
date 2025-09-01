import React from "react";

const ProjectDetails3 = () => {
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
                      Project Name: Affinity Brundhavana
                    </li>
                    <li>Category: Residential Township</li>
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
                <h2>Affinity Brundhavana – Redefining Modern Living</h2>
                <p className="mb-5">
                  Affinity Brundhavana is a premier residential project
                  developed by Sri Balaji Ecstatic, designed to combine modern
                  architecture with serene living. Situated in a prime location,
                  this township offers thoughtfully planned apartments, green
                  surroundings, and amenities that cater to the evolving
                  lifestyle of urban families. Since its inception in 2007, the
                  project has stood as a symbol of trust, quality, and community
                  living.
                </p>
                <div className="details-image">
                  <img src="/assets/img/project/aff2.jpg" alt="project" />
                </div>

                <h2>Our Project Strategy</h2>
                <p className="mb-4">
                  Affinity Brundhavana was envisioned to create a balance
                  between comfort and sustainability. From the layout to the
                  smallest detail, our team focused on optimizing space,
                  ensuring natural light, and building homes that enhance
                  quality of life. Every block reflects superior craftsmanship
                  and meticulous planning.
                </p>
                <p className="mb-5">
                  By adopting eco-friendly construction methods and premium
                  materials, we ensure that the community is both sustainable
                  and future-ready. The project emphasizes long-term value,
                  safety, and timeless design aesthetics.
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/project/acs1.jpg" alt="project" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/project/acs4.jpg" alt="project" />
                    </div>
                  </div>
                </div>

                <h2>Our Working Process</h2>
                <p>
                  At Affinity Brundhavana, we believe homes should inspire
                  comfort and belonging. Our construction process ensures
                  transparency at every stage — from initial design approvals to
                  the final handover. Each phase of work is supervised by
                  experienced engineers and quality experts to maintain
                  world-class standards.
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
                      <h3>Thoughtful Planning</h3>
                      <p>
                        Designed with a vision for spacious living, landscaped
                        greenery, and modern amenities for families.
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
                        Built with premium materials and advanced techniques,
                        ensuring durability, safety, and long-term value.
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
                      <h3>Community Support</h3>
                      <p>
                        Beyond construction, we foster vibrant communities with
                        dedicated maintenance and long-term service support.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Results & Impact</h2>
                <p>
                  Affinity Brundhavana has become a landmark residential
                  project, offering more than just homes — it delivers a
                  lifestyle. With lush landscapes, modern amenities, and strong
                  infrastructure, it continues to attract families seeking
                  comfort, security, and community. The project reflects our
                  promise of delivering excellence while shaping better living
                  spaces for generations.
                </p>

                <ul className="details-list">
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Spacious apartments with modern layouts and natural
                    lighting.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    On-time delivery with premium quality construction.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Eco-friendly practices ensuring sustainable community
                    living.
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

export default ProjectDetails3;
