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
                 <li>
                      Company: Sri Balaji Ecstatic
                    </li>

                    <li>
                      Category:Construction & Infrastructure
                    </li>
                    <li>
                      Start: 2007
                    </li>
                    <li>
                      Commitment: <span>On-time Delivery</span>
                    </li>
                    <li>
                      Feedback: <span>Trusted Clients</span>
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
                  <a href="contact.html" className="theme-btn">
                    contact us{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-8">
              <div className="project-details-content">
                <h2>We are the Leader in Construction Industry</h2>
                <p className="mb-5">
                  Welcome to Sri Balaji Ecstatic Infra LLP, where innovation
                  meets craftsmanship and excellence is our standard. Founded in
                  2007, we have established ourselves as a leading name in the
                  construction industry, serving clients with integrity and
                  dedication. Our mission is not only to build structures but to
                  foster trust, long-term relationships, and sustainable
                  solutions for communities.
                </p>
                <div className="details-image">
                  <img src="/assets/img/project/ace5.jpg" alt="project" />
                </div>

                <h2>Our Project Strategy</h2>
                <p className="mb-4">
                  Every project begins with perfect planning, supported by our
                  highly skilled team of engineers and architects. From
                  conceptualization to execution, our strategy ensures quality
                  materials, safety standards, and innovative designs are at the
                  core of everything we deliver.
                </p>
                <p className="mb-5">
                  We focus on sustainability and environmental responsibility,
                  ensuring that every project is future-ready. Our proven
                  processes and reliable workforce guarantee on-time delivery
                  with superior quality.
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/project/ace22.jpg" alt="project" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/project/ace44.jpg" alt="project" />
                    </div>
                  </div>
                </div>

                <h2>Our Working Process</h2>
                <p>
                  At SBC Infra, we believe that construction is more than just
                  creating buildings — it’s about delivering value, trust, and
                  long-lasting impact. Our step-by-step process ensures seamless
                  execution from planning, design, and material sourcing to
                  final handover.
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
                        We create detailed plans to ensure smooth workflow and
                        timely completion of projects.
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
                        Our skilled workforce and advanced tools guarantee
                        flawless delivery and uncompromised quality.
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
                        Even after completion, we stay connected, offering
                        reliable support and long-term partnership.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Results & Impact</h2>
                <p>
                  Over the years, SBC Infra has completed landmark projects,
                  from residential communities to commercial spaces and
                  infrastructure developments. Our projects stand as a testament
                  to our values — safety, quality, and customer satisfaction.
                  Each structure reflects our promise to build a better and more
                  sustainable future.
                </p>

                <ul className="details-list">
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Commitment to safety and quality at every stage.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    On-time delivery with professional workforce support.
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Sustainable practices ensuring environmental responsibility.
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
