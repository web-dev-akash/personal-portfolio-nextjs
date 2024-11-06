import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&apos;m a dynamic Full Stack Developer from Himachal Pradesh with
          expertise in MERN stack, known for strong problem-solving skills and
          quick adaptability to new technologies. Proficient in designing
          seamless APIs with Node.js and Express.js and crafting intuitive
          interfaces using React.js & Next.js. Specializes in leveraging
          Generative AI to enhance development efficiency.
        </p>

        <p>
          I specialize in building websites that are not only functional and
          user-friendly but also visually engaging and aligned with your brand
          identity. My goal is to craft a digital experience that is both
          captivating and intuitive, ensuring your message is delivered
          effectively and creatively.
        </p>
      </section>

      {/* ---- service ---- */}

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/icon-design.svg"
                alt="design icon"
                width="80"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Front End Development</h4>

              <p className="service-item-text">
                Modern, high-quality UI with React and Next.js, focusing on a
                professional, responsive, and user-friendly designs
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/icon-dev.svg"
                alt="Web development icon"
                width="80"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Back End Development</h4>

              <p className="service-item-text">
                Robust, high-performance backend with Node.js and Express,
                ensuring efficient, secure, and scalable server-side
                functionality.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/icon-app.svg"
                alt="mobile app icon"
                width="80"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Apps (PWA)</h4>

              <p className="service-item-text">
                Responsive, high-quality PWA for iOS and Android, offering a
                seamless, app-like experience with offline support and push
                notifications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/icon-photo.svg"
                alt="wordpress icon"
                width="80"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Wordpress</h4>

              <p className="service-item-text">
                Modern, high-performance WordPress sites with a professional
                layout, optimized for speed, SEO, and mobile responsiveness.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* ---- clients ---- */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://wisechamps.com/" target="_blank">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/logo-3-color.png"
                alt="client logo"
                width={1}
                style={{ maxWidth: "300px" }}
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.biglittlehood.com/" target="_blank">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/logo-1-color.png"
                alt="client logo"
                width={1}
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://virgolam.com/" target="_blank">
              <Image
                height={1}
                unoptimized
                unselectable="on"
                src="/images/logo-2-color.png"
                alt="client logo"
                width={1}
                style={{ maxWidth: "300px" }}
              />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};
