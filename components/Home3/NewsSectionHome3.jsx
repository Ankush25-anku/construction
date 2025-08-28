import React from "react";

const NewsSectionHome3 = () => {
  return (
    <section
      className="news-section fix section-padding-2"
      style={{
        backgroundImage: "url('/assets/img/about/work-process-bg.jpg')",
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <img src="/assets/img/title-icon.png" alt="img" className="mb-3" />
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
            Recent <b>article</b>
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".3s">
            Our professional grade visuals content created effortlessly
          </p>
        </div>

        {/* News Items */}
        <div className="row">
          {/* Single News Item */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="news-box-items-2">
              <div className="news-image">
                <img src="/assets/img/news/04.jpg" alt="img" />
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fa-regular fa-calendar-days"></i>
                    20 jul. 2024
                  </li>
                  <li>
                    <i className="fa-regular fa-folder-open"></i>
                    digital art
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Name fames pellen tesque tincidunt an vivamu duis tortor
                    distract from the velie
                  </a>
                </h3>
                <a href="news-details.html" className="icon">
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Single News Item */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="news-box-items-2">
              <div className="news-image">
                <img src="/assets/img/news/05.jpg" alt="img" />
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fa-regular fa-calendar-days"></i>
                    20 jul. 2024
                  </li>
                  <li>
                    <i className="fa-regular fa-folder-open"></i>
                    digital art
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Suspen duine feugiat dolor behicula over interdum there wasd
                    over page break
                  </a>
                </h3>
                <a href="news-details.html" className="icon">
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Single News Item */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="news-box-items-2">
              <div className="news-image">
                <img src="/assets/img/news/05.jpg" alt="img" />
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fa-regular fa-calendar-days"></i>
                    20 jul. 2024
                  </li>
                  <li>
                    <i className="fa-regular fa-folder-open"></i>
                    digital art
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Penatibus ipsum urna matis porttitor consequat risus
                    elementum produse sodales
                  </a>
                </h3>
                <a href="news-details.html" className="icon">
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionHome3;
