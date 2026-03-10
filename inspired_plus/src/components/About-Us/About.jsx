import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="hero-section2">
        <div className="container hero-container">

          <div className="hero-left">
            <h1 className="hero-title">About Key Training</h1>
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
            Key Training, part of Teaching 4 Business, has grown to be one of the
            largest and most successful training providers of its kind in the UK,
            offering a broad range of training solutions to help businesses and
            individuals grow.
            <br /><br />
            The success is down to the range of training solutions, bolstered with
            dedicated tutors & coaches and a host of staff who are experienced in
            helping businesses and individuals grow.
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-we-are-section">
        <div className="container content-container">

          <h2 className="section-title">Who We Are</h2>
          <p className="section-text">
            We are a professional training provider specialising in leadership and
            management qualifications within the residential childcare sector.
          </p>

          <h2 className="section-title">Our Focus</h2>
          <p className="section-text">
            Our focus is to develop competent, confident leaders who can manage
            residential childcare services safely, effectively, and in full
            compliance with regulatory standards.
          </p>

          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            To support childcare professionals in gaining recognised qualifications
            that enhance career progression and improve outcomes for children and
            young people.
          </p>

          <h2 className="section-title">What Makes Us Different</h2>

          <ul className="difference-list">

            <li><span className="bullet">✓</span> Experienced assessors</li>
            <li><span className="bullet">✓</span> One-to-one learner support</li>
            <li><span className="bullet">✓</span> Structured online ePortfolio system</li>
            <li><span className="bullet">✓</span> Flexible learning approach</li>
            <li><span className="bullet">✓</span> Career and interview preparation support</li>
            <li><span className="bullet">✓</span> Guidance through Ofsted processes</li>

          </ul>

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
              We're ready to answer your questions about upskilling your workforce,
              boosting your junior talent or putting together bespoke training plans.
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