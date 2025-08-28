import React from "react";

const FAQSection = () => {
  return (
    <section className="faq-section section-bg2 fix section-padding">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            {/* Left Image */}
            <div className="col-lg-6">
              <div className="faq-image-thumb">
                <img src="/assets/img/faq-thumb.png" alt="img" className="w-100" />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="faq-content">
                {/* Section Title */}
                <div className="section-title style-4 mb-4">
                  <h6
                    className="mt-3 text-primary d-flex justify-content-start align-items-center gap-2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <img src="/assets/img/section-badge4.png" alt="img" />
                    Subscribe & Stay Informed
                  </h6>
                  <h2
                    className="wow fadeInUp text-black mb-2"
                    data-wow-delay=".5s"
                  >
                    Frequently Asked Questions
                  </h2>
                  <p className="fs-16 cmn-pra">
                    Have questions about our services, appointments, or care process?
                    Explore our FAQs for quick answers and helpful information.
                  </p>
                </div>

                {/* FAQ Accordion */}
                <div className="faq-items-4">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      {/* FAQ Item 1 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            Consultation booking system
                          </button>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Rhoncus duis urna lobortis at fusce cum accumsan tempor
                            ads orci etiam litora dignissim ipsum lacinia hendrerit
                            convallis vitae Consequat enim phasellus purus
                          </div>
                        </div>
                      </div>

                      {/* FAQ Item 2 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            Personalized dashboard
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Rhoncus duis urna lobortis at fusce cum accumsan tempor
                            ads orci etiam litora dignissim ipsum lacinia hendrerit
                            convallis vitae Consequat enim phasellus purus
                          </div>
                        </div>
                      </div>

                      {/* FAQ Item 3 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            AI insights and analytics
                          </button>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Rhoncus duis urna lobortis at fusce cum accumsan tempor
                            ads orci etiam litora dignissim ipsum lacinia hendrerit
                            convallis vitae Consequat enim phasellus purus
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
