import React from "react";
import "../About-Us/About.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="hero-section2">
        <div className="container hero-container">

          <div className="hero-left">
            <h1 className="hero-title">
              Level 5 Diploma in Leadership & Management for Residential Childcare.
            </h1>

            <Link
              to="/contact/employer-get-in-touch"
              className="navigation-white-button w-button"
              style={{ marginTop: "20px", display: "inline-block" }}
            >
              Get in touch
            </Link>
          </div>

          <div className="hero-right">
            <img
              src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/62ebc9dde0329f7397590768_Graphic.svg"
              alt="Hero Graphic"
              className="hero-graphic"
            />
          </div>

        </div>
      </section>

      {/* CENTRAL PARAGRAPH */}
      <section className="central-paragraph-section">
        <div className="container paragraph-container">
          <p className="central-paragraph-large">
            Key Training provides a range of leadership, management, and apprenticeship solutions
            designed to help your business grow, upskill your workforce, and nurture junior talent.
            <br /><br />
            Our tailored programs meet industry standards and help your team excel.
          </p>
        </div>
      </section>

      {/* UPSKILL EMPLOYEES SECTION */}
      <section className="upskill-section">
        <div className="container upskill-grid">

          <div className="upskill-text">
            <h2 className="content-teaser-heading-two">
              Upskill existing employees with Adult Apprenticeships
            </h2>

            <p className="paragraph">
              At Key Training, we help you unlock government funding to grow your business,
              improve productivity and boost employee morale. We take the time to get to know
              your people, your business and how to get the most from the apprenticeship levy,
              to train your existing employees.
            </p>

            <Link
              to="/employer/train-your-employees"
              className="black-button w-button"
            >
              Find out more
            </Link>
          </div>

          <div className="upskill-image-wrapper">
            <img
              src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/63088fbb3f689a4b58eedd1d_Person%20working.png"
              alt="Employee Training"
              className="upskill-image"
            />
          </div>

        </div>
      </section>

      {/* CONSULTATION CARD */}
      <section className="consultation-section">
        <div className="consultation-wrapper">
          <div className="consultation-card">

            <img
              src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/62e94e4fff1174ba77609a4e_Group%2032%20(1).png"
              alt="Consultation"
              className="consultation-image"
            />

            <h3 className="consultation-title">
              Book a consultation
            </h3>

            <p className="consultation-text">
              Speak with our team to tailor a program for your business, upskill your staff,
              or build junior talent through apprenticeships.
            </p>

            <form className="consultation-form">
              <input type="text" placeholder="Your name" className="text-field" />
              <input type="email" placeholder="Email address" className="text-field" />
              <input type="tel" placeholder="Phone number" className="text-field" />
              <input type="text" placeholder="Postcode" className="text-field" />

              <button className="consultation-button">
                Submit
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}