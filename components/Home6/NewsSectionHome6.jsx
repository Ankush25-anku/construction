import React from "react";

const NewsSectionHome6 = () => {
  return (
    <section className="news-section-6 section-padding fix header-bg-6">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title style-6">
            <h6 className="wow fadeInUp">Insights & Ideas</h6>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              The Future Learner Blog
            </h2>
          </div>
          <a
            href="news.html"
            className="theme-btn style-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            VIEW ALL BLOG <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
          </a>
        </div>

        <div className="row">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-card-items-6">
              <div className="news-image">
                <img src="/assets/img/news/0111.jpg" alt="img" />
              </div>
              <div className="news-content">
                <ul className="news-meta">
                  <li>
                    <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    From Chalkboards to Chatbots: The Evolution of Smart Classrooms
                  </a>
                </h3>
                <a href="news.html" className="link-btn-6">
                  Read More <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="news-card-items-6">
              <div className="news-image">
                <img src="/assets/img/news/0112.jpg" alt="img" />
              </div>
              <div className="news-content">
                <ul className="news-meta">
                  <li>
                    <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    From Chalkboards to Chatbots: The Evolution of Smart Classrooms
                  </a>
                </h3>
                <a href="news.html" className="link-btn-6">
                  Read More <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionHome6;
