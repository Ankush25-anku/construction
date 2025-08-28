import React from "react";

const NewsSection4 = () => {
  return (
    <section className="news-section pt-120 fix">
      <div className="container">
        {/* Section Header */}
        <div className="row g-3 align-items-end">
          <div className="col-md-8">
            <div className="section-title style-4 mb-0">
              <h6
                className="d-flex text-primary align-items-center gap-2 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="/assets/img/section-badge4.png" alt="img" />
                Our Health Blog
              </h6>
              <h2
                className="text-black wow fadeInUp"
                data-wow-delay=".5s"
              >
                Health &amp; Wellness Articles
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-md-end">
              <a
                href="about.html"
                className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3"
              >
                VIEW ALL BLOG
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="row g-4 align-items-end">
          {/* Left Large Blog */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="news-box-items rounded-4 overflow-hidden"
              style={{ backgroundColor: "#F2F7FE" }}
            >
              <div className="news-image">
                <img src="/assets/img/news/blog4-1.png" alt="img" />
              </div>
              <div className="news-content py-4 px-xxl-4 px-3 mt-0">
                <ul className="post-cat d-flex align-items-center gap-xxl-4 gap-3">
                  <li className="fw-normal text-capitalize">
                    <i className="fa-solid fa-calendar-days text-black"></i>
                    October 19, 2022
                  </li>
                  <li className="fw-normal text-capitalize">
                    <i className="fa-solid fa-user text-black"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html" className="fw-semibold">
                    Hydration &amp; Health: How Much Water Do You Really Need?
                  </a>
                </h3>
                <a href="news-details.html" className="link-btn text-primary">
                  Read More
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Blogs */}
          <div className="col-xl-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
            <div className="d-flex flex-column gap-4">
              {/* Blog Item 1 */}
              <div
                className="news-box-items mt-0 d-flex justify-content-center justify-content-sm-start text-sm-start text-center flex-sm-nowrap p-sm-0 p-3 flex-wrap align-items-center gap-xl-4 gap-3 rounded-4"
                style={{ backgroundColor: "#F2F7FE" }}
              >
                <div className="news-image" style={{ height: "245px" }}>
                  <img src="/assets/img/news/blog4-2.png" alt="img" />
                </div>
                <div className="news-content mt-0">
                  <ul className="post-cat justify-content-center justify-content-sm-start d-flex align-items-center gap-xxl-4 gap-3">
                    <li className="fw-normal text-capitalize">
                      <i className="fa-solid fa-calendar-days text-black"></i>
                      October 19, 2022
                    </li>
                    <li className="fw-normal text-capitalize">
                      <i className="fa-solid fa-user text-black"></i>
                      By admin
                    </li>
                  </ul>
                  <h4 className="mb-2">
                    <a href="news-details.html" className="fw-semibold text-black">
                      Managing Stress for Better <br /> Overall Health
                    </a>
                  </h4>
                  <p className="text-secondary fs-16 mb-3">
                    Techniques to balance mental well-being
                  </p>
                  <a href="news-details.html" className="link-btn text-primary">
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>

              {/* Blog Item 2 */}
              <div
                className="news-box-items mt-0 d-flex justify-content-center justify-content-sm-start text-sm-start text-center flex-sm-nowrap p-sm-0 p-3 flex-wrap align-items-center gap-xl-4 gap-3 rounded-4"
                style={{ backgroundColor: "#F2F7FE" }}
              >
                <div className="news-image" style={{ height: "245px" }}>
                  <img src="/assets/img/news/blog4-3.png" alt="img" />
                </div>
                <div className="news-content mt-0">
                  <ul className="post-cat justify-content-center justify-content-sm-start d-flex align-items-center gap-xxl-4 gap-3">
                    <li className="fw-normal text-capitalize">
                      <i className="fa-solid fa-calendar-days text-black"></i>
                      October 19, 2022
                    </li>
                    <li className="fw-normal text-capitalize">
                      <i className="fa-solid fa-user text-black"></i>
                      By admin
                    </li>
                  </ul>
                  <h4 className="mb-2">
                    <a href="news-details.html" className="fw-semibold text-black">
                      How Telehealth Is Changing <br /> Modern Medicine
                    </a>
                  </h4>
                  <p className="text-secondary fs-16 mb-3">
                    How Telehealth Is Changing Modern Medicine
                  </p>
                  <a href="news-details.html" className="link-btn text-primary">
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection4;
