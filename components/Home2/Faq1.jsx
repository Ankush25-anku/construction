import React from "react";

const Faq1 = () => {
  return (
    <section className="faq-section fix section-padding-2">
      <div className="container">
        <div className="faq-wrapper style-2">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="faq-image-2">
                <img src="/assets/img/faq/faq.png" alt="img" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title style-2">
                  <h6 className="wow fadeInUp">
                    <img src="/assets/img/circle-title.png" alt="img" />
                    Customer query
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Frequently asked customers <span>question</span> & answer
                  </h2>
                </div>

                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    
                    {/* Item 1 */}
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
                          How does the chatbot improve over time?
                        </button>
                      </h5>
                      <div
                        id="faq2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          I love how easy it is to use this chatbot. Whether I’m looking
                          for product recommendations or just need help with a task,
                          it’s always there with the perfect response. A true
                          game-changer
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
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
                          Is my data safe when using the chatbot?
                        </button>
                      </h5>
                      <div
                        id="faq1"
                        className="accordion-collapse show"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          I love how easy it is to use this chatbot. Whether I’m looking
                          for product recommendations or just need help with a task,
                          it’s always there with the perfect response. A true
                          game-changer
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
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
                          What languages does the chatbot support?
                        </button>
                      </h5>
                      <div
                        id="faq3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          I love how easy it is to use this chatbot. Whether I’m looking
                          for product recommendations or just need help with a task,
                          it’s always there with the perfect response. A true
                          game-changer
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                      <h5 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          How accurate are the chatbot’s answers?
                        </button>
                      </h5>
                      <div
                        id="faq4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          I love how easy it is to use this chatbot. Whether I’m looking
                          for product recommendations or just need help with a task,
                          it’s always there with the perfect response. A true
                          game-changer
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

export default Faq1;
