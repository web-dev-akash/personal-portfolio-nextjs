"use client";
import React, { useEffect } from "react";

export const Navbar = () => {
  useEffect(() => {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
          }
        }
      });
    }
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link active" data-nav-link>
            About
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Skills
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Projects
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};
