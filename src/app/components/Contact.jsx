"use client";

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Slide, toast } from "react-toastify";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    full_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        (res) => {
          if (res.status === 200) {
            toast.success("Message Sent Successfully!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
            });
            setData({
              full_name: "",
              user_email: "",
              message: "",
            });
            form.current.reset();
          }
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setError(true);
          toast.error("Something Went Wrong!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
          console.log(error);
        }
      );
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="full_name"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{loading ? "Sending.." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
};
