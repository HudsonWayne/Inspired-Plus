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

      {/* COURSE DETAILS SECTION */}
      <section className="course-details-section">
        <div className="container course-details-container">

          <div className="course-card">
            <h2 className="content-teaser-heading-two">Course Overview</h2>
            <p className="paragraph">
              This qualification is designed for professionals working in residential childcare who want to progress into leadership and management roles. It replaces previous NVQ and QCF qualifications and is fully aligned with RQF standards.
            </p>
          </div>

          <div className="course-card">
            <h3 className="content-teaser-heading-two">What the Course Covers</h3>
            <ul className="paragraph">
              <li>Safeguarding and child protection</li>
              <li>Equality, diversity, and inclusion</li>
              <li>Managing residential childcare teams</li>
              <li>Health, safety, and risk management</li>
              <li>Quality improvement</li>
              <li>Supporting children who have experienced harm or abuse</li>
              <li>Communication and information management</li>
              <li>Child and young people’s development</li>
              <li>Partnership working</li>
            </ul>
          </div>

          <div className="course-card">
            <h3 className="content-teaser-heading-two">Delivery Method</h3>
            <ul className="paragraph">
              <li>100 percent online learning</li>
              <li>Access to an ePortfolio platform</li>
              <li>Dedicated assessor support</li>
              <li>Email support</li>
              <li>Workplace observation via online system</li>
              <li>Flexible completion within 7–15 months</li>
            </ul>
          </div>

          <div className="course-card">
            <h3 className="content-teaser-heading-two">Assessment Methods</h3>
            <ul className="paragraph">
              <li>Portfolio of evidence</li>
              <li>Written assignments</li>
              <li>Practical demonstrations</li>
              <li>Workplace observations</li>
              <li>Professional discussions</li>
            </ul>
          </div>

          <div className="course-card">
            <h3 className="content-teaser-heading-two">Entry Requirements</h3>
            <ul className="paragraph">
              <li>Minimum age of 19</li>
              <li>Currently working in a relevant residential childcare role</li>
              <li>Access to a laptop or computer</li>
              <li>Level 3 qualification in a related area preferred</li>
            </ul>
          </div>

          <div className="course-card">
            <h3 className="content-teaser-heading-two">Course Fee</h3>
            <p className="paragraph">
              £1,850 per year. The fee includes full access to learning materials, assessor support, career guidance, and additional support services.
            </p>
          </div>

        </div>
      </section>

      {/* UPSKILL SECTION 1 */}
      <section className="upskill-section">
        <div className="container upskill-grid">

          <div className="upskill-text">
            <h2 className="content-teaser-heading-two">
              Upskill existing employees with Adult Apprenticeships
            </h2>

            <p className="paragraph">
              At Key Training, we help you unlock government funding to grow your business,
              improve productivity and boost employee morale.
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
              Develop leadership skills within your workforce
            </h2>

            <p className="paragraph">
              Our leadership programs are designed to empower your managers
              with practical tools and strategies to guide teams effectively.
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
              Build future talent with apprenticeships
            </h2>

            <p className="paragraph">
              Apprenticeships allow businesses to develop skilled employees
              while benefiting from structured training and government support.
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
              Speak with our team to tailor a program for your business.
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