"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export const Sidebar = () => {
  const el = useRef(null);
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
    document.querySelector("[data-sidebar]").classList.toggle("active");
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Developer", "Software Developer", "Full Stack Developer"],
      typeSpeed: 50,
      showCursor: false,
      loop: true,
      backSpeed: 30,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/my-avatar.png"
            alt="Akash Kumar"
            width="80"
            height={"80"}
            priority
            unoptimized
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Akash Kumar">
            Akash Kumar
          </h1>

          <p className="title">
            ‎<span ref={el}>Full Stack Developer</span>
          </p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          {show ? (
            <ion-icon name="chevron-up"></ion-icon>
          ) : (
            <ion-icon name="chevron-down"></ion-icon>
          )}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:akumar415129.ak@gmail.com"
                className="contact-link"
              >
                akumar415129.ak@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+917018178377" className="contact-link">
                +91 7018178377
              </a>
            </div>
          </li>

          {/* <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2001-04-04">April 04, 2001</time>
            </div>
          </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Nalagarh, Himachal Pradesh, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/web-dev-akash/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/web-dev-akash/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://wa.me/917018178377"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
