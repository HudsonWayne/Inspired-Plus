import React from "react";
import "../Our-Services/Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="hero-section2">
        <div className="container hero-container">

          <div className="hero-left">
            <h1 className="hero-title">
              Level 5 Diploma in Leadership & Management for Residential Childcare
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
            This Level 5 Diploma is designed for professionals working in residential childcare
            who want to progress into leadership and management roles. The qualification replaces
            previous NVQ and QCF qualifications and is fully aligned with RQF standards, ensuring
            learners gain the modern knowledge and leadership capabilities required within the
            residential childcare sector.
          </p>
        </div>
      </section>

      {/* UPSKILL SECTION 1 */}
      <section className="upskill-section">
        <div className="container upskill-grid">

          <div className="upskill-text">
            <h2 className="content-teaser-heading-two">
              Course Overview
            </h2>

            <p className="paragraph">
              This qualification prepares professionals to lead residential childcare teams,
              manage operational responsibilities, and ensure children receive safe,
              supportive and structured care environments. The program equips learners with
              advanced leadership skills, safeguarding knowledge and management practices
              necessary for modern residential childcare settings.
            </p>

            <Link to="/employer/train-your-employees" className="black-button w-button">
              Find out more
            </Link>
          </div>

          <div className="upskill-image-wrapper">
            <img
              src="/person-working.png"
              alt="Employee Training"
              className="upskill-image"
            />
          </div>

        </div>
      </section>

      {/* UPSKILL SECTION 2 */}
      <section className="upskill-section-two">
        <div className="container upskill-grid-two">

          <div className="upskill-image-wrapper-two">
            <img
              src="/person-working.png"
              alt="Leadership Training"
              className="upskill-image"
            />
          </div>

          <div className="upskill-text-two">
            <h2 className="content-teaser-heading-two">
              What the Course Covers
            </h2>

            <p className="paragraph">
              The course covers key leadership and operational areas including safeguarding
              and child protection, equality, diversity and inclusion, managing residential
              childcare teams, health and safety management, and quality improvement.
              Learners will also study communication and information management, child
              development, partnership working, and strategies for supporting children
              who have experienced harm or abuse.
            </p>

            <Link to="/employer/train-your-employees" className="black-button w-button">
              Find out more
            </Link>
          </div>
        </div>
      </section>

      {/* UPSKILL SECTION 3 */}
      <section className="upskill-section-three">
        <div className="container upskill-grid-three">

          <div className="upskill-text-three">
            <h2 className="content-teaser-heading-two">
              Delivery & Assessment
            </h2>

            <p className="paragraph">
              The course is delivered through 100 percent online learning with access to
              an ePortfolio platform and dedicated assessor support. Learners receive
              email support and complete workplace observation through an online system.
              The qualification can typically be completed within 7–15 months.
              Assessment includes a portfolio of evidence, written assignments,
              practical demonstrations, workplace observations and professional discussions.
            </p>

            <Link to="/employer/train-your-employees" className="black-button w-button">
              Find out more
            </Link>
          </div>

          <div className="upskill-image-wrapper-three">
            <img
              src="/person-working.png"
              alt="Apprenticeship Training"
              className="upskill-image"
            />
          </div>

        </div>
      </section>

      {/* UPSKILL SECTION 4 */}
      <section className="upskill-section-four">
        <div className="container upskill-grid-four">

          <div className="upskill-image-wrapper-four">
            <img
              src="/person-working.png"
              alt="Entry Requirements"
              className="upskill-image"
            />
          </div>

          <div className="upskill-text-four">
            <h2 className="content-teaser-heading-two">
              Entry Requirements & Course Fee
            </h2>

            <p className="paragraph">
              Learners must be at least 19 years old and currently working in a relevant
              residential childcare role. Access to a laptop or computer is required
              for online learning. A Level 3 qualification in a related area is preferred
              but not always mandatory depending on experience.
              <br /><br />
              The course fee is £1,850 per year and includes full access to learning
              materials, assessor support, career guidance and additional support services.
            </p>

            <Link to="/employer/train-your-employees" className="black-button w-button">
              Find out more
            </Link>
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
              Speak with our team to discuss enrollment, course details,
              or how this qualification can support your career progression.
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