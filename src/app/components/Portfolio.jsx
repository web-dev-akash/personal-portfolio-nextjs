import Image from "next/image";
import React from "react";

export const Portfolio = () => {
  return (
    <article className="portfolio" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          <li className="project-item active" data-filter-item>
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <h2>Individual Project | Duration : 1 Month</h2>
                  <p>
                    A Full Stack application designed to efficiently manage
                    student information and activities. Built using Vitejs, it
                    features a responsive user interface, dynamic data
                    rendering, and real-time updates.
                  </p>
                  <p>
                    Tech Stack : Vite.js, MUI, Chakra-UI, CSS, Redux, Firebase,
                    Web Push Notifications, PWA, Razorpay, Node.js, Express.js,
                    Zoho CRM
                  </p>
                  <div className="btns">
                    <a
                      href="https://github.com/web-dev-akash/new-student-dashboard"
                      target="_blank"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href="https://students.wisechamps.com" target="_blank">
                      <ion-icon name="eye-outline"></ion-icon>
                    </a>
                  </div>
                </div>

                <Image
                  width={1}
                  height={1}
                  src="/images/project-1.png"
                  alt="finance"
                  priority
                  unoptimized
                />
              </figure>

              <h3 className="project-title">Students Dashboard</h3>
            </div>
          </li>

          <li className="project-item active" data-filter-item>
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <h2>Individual Project | Duration : 2 Weeks</h2>
                  <p>
                    Wisechamps is an innovative online platform dedicated to
                    transforming the way children from grades 1 to 8 prepare for
                    competitive exams and enhance their IQ skills. Featuring
                    live quizzing sessions led by expert educators
                  </p>
                  <p>
                    Tech Stack : HTML, CSS, JavaScript, Wordpress, RESTful API,
                    SEO
                  </p>
                  <div className="btns">
                    {/* <a
                      href="https://github.com/web-dev-akash/new-student-dashboard"
                      target="_blank"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a> */}
                    <a href="https://wisechamps.com" target="_blank">
                      <ion-icon name="eye-outline"></ion-icon>
                    </a>
                  </div>
                </div>

                <Image
                  width={1}
                  height={1}
                  src="/images/project-2.png"
                  alt="finance"
                  priority
                  unoptimized
                />
              </figure>

              <h3 className="project-title">Wisechamps.com (Wordpress)</h3>
            </div>
          </li>

          <li className="project-item active" data-filter-item>
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <h2>Individual Project | Duration : 1 Week</h2>
                  <p>
                    Wisechamps Landing Page features a modern, responsive design
                    with fast loading times and intuitive navigation. It
                    delivers an exceptional user experience through cutting-edge
                    technologies, elegant animations, and adaptable forms
                  </p>
                  <p>
                    Tech Stack : Vite.js, Chakra-UI, CSS, Node.js, Express.js,
                    Zoho CRM, GSAP, Animate.css
                  </p>
                  <div className="btns">
                    <a
                      href="https://github.com/web-dev-akash/Wisechamps-Landing-Page"
                      target="_blank"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href="https://wisechamps.netlify.app/" target="_blank">
                      <ion-icon name="eye-outline"></ion-icon>
                    </a>
                  </div>
                </div>

                <Image
                  width={1}
                  height={1}
                  src="/images/project-3.png"
                  alt="finance"
                  priority
                  unoptimized
                />
              </figure>

              <h3 className="project-title">Wisechamps Landing Page</h3>
            </div>
          </li>

          <li className="project-item active" data-filter-item>
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <h2>Team Project | Duration : 1 Week</h2>
                  <p>
                    Overstock.com Inc. is an online retailer and technology
                    company. The Company is an e-commerce retailer offering
                    customers a range of brands for the home at low prices.
                  </p>
                  <p>
                    Tech Stack : React, Redux, Chakra-UI, CSS, Node.js,
                    Express.js, Mongo DB
                  </p>
                  <div className="btns">
                    <a
                      href="https://github.com/web-dev-akash/Overstock_FullStack"
                      target="_blank"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a
                      href="https://overstock-mern.netlify.app/"
                      target="_blank"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </a>
                  </div>
                </div>

                <Image
                  width={1}
                  height={1}
                  src="/images/project-4.png"
                  alt="finance"
                  priority
                  unoptimized
                />
              </figure>

              <h3 className="project-title">OverStock.com (Clone)</h3>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};
