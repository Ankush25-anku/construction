import React from "react";

const NewsletterSection4 = () => {
  return (
    <section
      className="newsletter-section4 section-padding fix bg-cover"
      style={{ backgroundImage: "url('/assets/img/newsletter-bg4.png')" }}
    >
      <div className="container">
        <div className="section-title style-4 text-center">
          <h6
            className="mt-3 text-primary d-flex justify-content-center align-items-center gap-2 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <img src="/assets/img/section-badge4.png" alt="img" />
            Subscribe &amp; Stay Informed
          </h6>
          <h2
            className="wow fadeInUp text-white mb-2"
            data-wow-delay=".5s"
          >
            Health News &amp; Updates
          </h2>
          <p className="fs-16 mb-xxl-5 mb-4 text-white opacity-75">
            Stay informed with the latest health tips, clinic updates, and expert advice—straight from our team to your inbox. 
            Sign up for smarter, healthier living.
          </p>
          <div
            className="form-newletter4 bg-white rounded-pill pe-1 py-1"
            style={{ maxWidth: "534px", margin: "0 auto" }}
          >
            <input
              type="email"
              id="email"
              className="form-control bg-transparent py-3 px-4 border-0 w-100"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="theme-btn text-nowrap d-inline-block fw-medium py-3 px-4 theme-btn-3 w-190"
            >
              SUBMIT NOW
              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection4;
