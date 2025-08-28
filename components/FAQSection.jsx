import React from "react";

const FAQSection = () => {
  return (
    <section
      className="faq-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('assets/img/faq/line-shape.png')" }}
    >
      {/* Background Color Layer */}
      <div className="color-bg">
        <img src="assets/img/faq/color-bg.png" alt="img" />
      </div>

      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            {/* Left Column - Image */}
            {/* Left Column - Image */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="faq-image-items w-100">
                <div className="faq-image wow fadeInUp" data-wow-delay=".5s">
                  <img
                    src="assets/img/faq/director.jpg"
                    alt="Director"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <h6>
                    <img src="assets/img/star.png" alt="icon" /> Message from
                    the Director
                  </h6>
                  <h2>
                    Welcome to{" "}
                    <span>
                      <b>Sri Balaji Ecstatic Infra LLP</b>
                    </span>
                  </h2>
                </div>

                {/* Director's Message */}
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="accordion-body text-white">
                        <p>
                          I am <b>Y. Venkateswarlu Reddy</b>, and it is with
                          great pride and excitement that I extend a warm
                          greeting to you on behalf of our entire team.
                        </p>
                        <p>
                          At <b>Sri Balaji Ecstatic Infra LLP</b>, we are
                          committed to excellence in the construction and
                          infrastructure sector, driven by a passion for
                          creating spaces that elevate the quality of life for
                          our clients and communities.
                        </p>
                        <p>
                          We understand that construction is not just about
                          building structures, but about building relationships
                          and trust. Our team of experienced professionals works
                          collaboratively to ensure that every project is
                          delivered on time, within budget, and to the highest
                          standards of craftsmanship.
                        </p>
                        <p>
                          <b>Warm regards,</b>
                          <br />
                          Y. Venkateswarlu Reddy
                          <br />
                          Managing Director
                          <br />
                          Sri Balaji Ecstatic Infra LLP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Director's Message */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
