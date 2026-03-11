import React from "react";
import "../Our-Services/Services.css";
import { Link } from "react-router-dom";

export default function Services() {
return ( <div className="about-page">

```
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

  {/* CONSULTATION PANEL (WEBFLOW STYLE) */}
  <section className="consultation-section">
    <div className="contact-box container">

      <div className="div-block">

        <img
          src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/62e94e4fff1174ba77609a4e_Group%2032%20(1).png"
          alt=""
          className="image-2"
        />

        <h3 className="contact-panel-h3">
          Book a consultation
        </h3>

        <p className="contact-panel-large-paragraph">
          We're ready to answer your questions about upskilling your workforce,
          boosting your junior talent or putting together bespoke training plans.
        </p>

        <div className="form-block">

          <form className="form">

            <input
              className="text-field w-input"
              placeholder="Your name"
              type="text"
              name="name"
            />

            <input
              className="text-field w-input"
              placeholder="Email address"
              type="email"
              name="email"
            />

            <input
              className="text-field w-input"
              placeholder="Phone number"
              type="tel"
              name="phone"
            />

            <input
              className="text-field w-input"
              placeholder="Postcode"
              type="text"
              name="postcode"
            />

            <button
              type="submit"
              className="button white w-button"
            >
              Submit
            </button>

          </form>

        </div>

      </div>

    </div>
  </section>

</div>
```

);
}
