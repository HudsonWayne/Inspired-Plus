import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">About Key Training</h1>
          </div>
          <div className="hero-right">
            <img
              alt="Hero Graphic"
              className="hero-graphic"
              src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/62ebc9dde0329f7397590768_Graphic.svg"
            />
          </div>
        </div>
      </section>

      {/* Central Paragraph Section */}
      <div className="central-paragraph-container" style={{ marginTop: "10px" }}>
        <div className="central-paragraph w-container">
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
      </div>

      {/* Who We Are Section */}
      <section className="who-we-are-section" style={{ marginTop: "40px" }}>
        <div className="content-container">
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
            <li>Experienced assessors</li>
            <li>One-to-one learner support</li>
            <li>Structured online ePortfolio system</li>
            <li>Flexible learning approach</li>
            <li>Career and interview preparation support</li>
            <li>Guidance through Ofsted processes</li>
          </ul>
        </div>
      </section>
    </div>
  );
}