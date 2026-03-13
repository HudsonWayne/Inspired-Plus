import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              About Inspired Plus
            </h1>
            <p className="hero-subtitle">
              We provide professional training and qualifications for leadership and management
              in residential childcare, helping individuals and organisations grow effectively.
            </p>
          </div>
        </div>
      </section>

      {/* CENTRAL PARAGRAPH */}
      <section className="central-paragraph">
        <div className="container">
          <p>
            Key Training, part of Teaching 4 Business, has grown to be one of the
            largest and most successful training providers in the UK, offering a broad range of
            training solutions to help businesses and individuals grow.
            <br /><br />
            Our success comes from dedicated tutors, coaches, and staff experienced in
            supporting professional growth.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-we-are">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            We are a professional training provider specialising in leadership and
            management qualifications within the residential childcare sector.
          </p>

          <h2>Our Focus</h2>
          <p>
            Our focus is to develop competent, confident leaders who can manage
            residential childcare services safely, effectively, and in full
            compliance with regulatory standards.
          </p>

          <h2>Our Mission</h2>
          <p>
            To support childcare professionals in gaining recognised qualifications
            that enhance career progression and improve outcomes for children and
            young people.
          </p>

          <h2>What Makes Us Different</h2>
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

      {/* CONSULTATION FORM */}
      <section className="consultation-section">
        <div className="consultation-container">
          <div className="consultation-card">
            <div className="avatar-group">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Avatar" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Avatar" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Avatar" />
            </div>
            <h1>Book a Consultation</h1>
            <p className="subtitle">
              We're ready to answer your questions about upskilling your workforce,
              boosting your junior talent or putting together bespoke training plans.
            </p>
            <form className="consultation-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
              <input type="tel" placeholder="Phone number" />
              <input type="text" placeholder="Postcode" />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Decorative circles */}
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </section>

    </div>
  );
}