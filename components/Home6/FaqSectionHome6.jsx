import React from "react";

const FaqSectionHome6 = () => {
  return (
    <section className="faq-section section-padding fix header-bg-6">
      <div className="container">
        <div className="faq-wrapper-6">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title style-6 mb-0">
                  <h6 className="wow fadeInUp">Need Help?</h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Frequently Asked Questions About AI in Education
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  Explore common questions about AI in education, its benefits, safety, and how it enhances learning for students, supports teachers, and transforms classrooms effectively.
                </p>
                <a
                  href="contact.html"
                  className="theme-btn style-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  CONTACT US <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-items-6">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
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
                          What are examples of AI tools in education?
                        </button>
                      </h5>
                      <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                        </div>
                      </div>
                    </div>

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
                          How does AI help students learn better?
                        </button>
                      </h5>
                      <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                        </div>
                      </div>
                    </div>

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
                          Can AI be used for online and hybrid learning?
                        </button>
                      </h5>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".6s">
                      <h5 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          What are the benefits of AI for teachers?
                        </button>
                      </h5>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                        </div>
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

export default FaqSectionHome6;
