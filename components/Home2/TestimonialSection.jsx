import React from "react";

const TestimonialSection = () => {
  return (
    <section
      className="testimonial-section fix section-padding-2"
      style={{ backgroundImage: "url('/assets/img/service/servicebg1.png')" }}
    >
      <div className="container">
        {/* Client floating images */}
        <div className="client-1">
          <img src="/assets/img/testimonial/client-1.png" alt="img" />
        </div>
        <div className="client-2">
          <img src="/assets/img/testimonial/client-2.png" alt="img" />
        </div>
        <div className="client-3">
          <img src="/assets/img/testimonial/client-3.png" alt="img" />
        </div>
        <div className="client-4">
          <img src="/assets/img/testimonial/client-4.png" alt="img" />
        </div>
        <div className="client-5">
          <img src="/assets/img/testimonial/client-5.png" alt="img" />
        </div>
        <div className="client-6">
          <img src="/assets/img/testimonial/client-6.png" alt="img" />
        </div>

        {/* Testimonial Wrapper */}
        <div className="testimonial-wrapper">
          <div className="section-title style-2 text-center">
            <img
              src="/assets/img/circle-title.png"
              alt="img"
              className="wow fadeInUp"
            />
            <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">
              What Clients Say!!!
            </h6>
            <h2
              className="wow fadeInUp fw-bold fs-1 fs-md-2 fs-lg-1 text-white"
              data-wow-delay=".5s"
            >
              Clients <span className="text-primary">Feedback</span>
            </h2>
          </div>

          {/* Swiper Slider */}
          <div className="swiper testimonail-slider mt-3 mt-md-0">
            <div className="swiper-wrapper">
              {/* Niranjan */}
              <div className="swiper-slide">
                <div className="testimonail-content text-center">
                  <div className="icon mb-3">
                    <img src="/assets/img/testimonial/quote.png" alt="img" />
                  </div>
                  <p className="fw-bold fs-5 lh-lg">
                    Choosing Sri Balaji Ecstatic Infra LLP was the best decision
                    I made for my project. Their team's professionalism,
                    attention to detail, and timely completion made the entire
                    experience hassle-free. I couldn't be happier with the
                    results!
                  </p>
                  <div className="client-info mt-3">
                    <h3 className="fw-bold fs-4 text-primary">Niranjan</h3>
                  </div>
                </div>
              </div>

              {/* Prathik */}
              <div className="swiper-slide">
                <div className="testimonail-content text-center">
                  <div className="icon mb-3">
                    <img src="/assets/img/testimonial/quote.png" alt="img" />
                  </div>
                  <p className="fw-bold fs-5 lh-lg">
                    Sri Balaji Ecstatic Infra LLP exceeded my expectations with
                    their quality craftsmanship and attention to detail. From
                    start to finish, they were professional and transparent,
                    making the entire process smooth and stress-free. Highly
                    recommend them for any construction project!
                  </p>
                  <div className="client-info mt-3">
                    <h3 className="fw-bold fs-4 text-primary">Prathik</h3>
                  </div>
                </div>
              </div>

              {/* Ajay */}
              <div className="swiper-slide">
                <div className="testimonail-content text-center">
                  <div className="icon mb-3">
                    <img src="/assets/img/testimonial/quote.png" alt="img" />
                  </div>
                  <p className="fw-bold fs-5 lh-lg">
                    Impressed by the innovative designs and timely delivery from
                    Sri Balaji Ecstatic Infra LLP. Their customer-centric
                    approach ensured that my needs were met every step of the
                    way. A trustworthy choice for anyone looking for a reliable
                    construction partner.
                  </p>
                  <div className="client-info mt-3">
                    <h3 className="fw-bold fs-4 text-primary">Ajay</h3>
                  </div>
                </div>
              </div>

              {/* Harish */}
              <div className="swiper-slide">
                <div className="testimonail-content text-center">
                  <div className="icon mb-3">
                    <img src="/assets/img/testimonial/quote.png" alt="img" />
                  </div>
                  <p className="fw-bold fs-5 lh-lg">
                    Sri Balaji Ecstatic Infra LLP stands out for their
                    exceptional workmanship and commitment to sustainability.
                    They delivered a beautiful, eco-friendly space that exceeded
                    my expectations. A top-notch construction company that I
                    would gladly recommend.
                  </p>
                  <div className="client-info mt-3">
                    <h3 className="fw-bold fs-4 text-primary">Harish</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Swiper */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
