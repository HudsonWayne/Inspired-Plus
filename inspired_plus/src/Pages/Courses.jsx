import React from "react";
import "./Courses.css";

export default function Courses() {
  return (
    <div className="courses-page">
      {/* HERO / HEADER */}
      <section className="courses-header">
        <div className="container">
          <h1 className="courses-title">
            Level 5 Diploma in Leadership & Management for Residential Childcare
          </h1>
          <p className="courses-subtitle">
            A nationally recognised qualification for current and aspiring Residential Childcare Managers.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="courses-intro">
        <div className="container">
          <p>
            At Inspired Plus, we are committed to supporting professionals who are passionate about improving the lives of young people in residential childcare. 
            The RQF Level 5 Diploma in Leadership and Management for Residential Childcare is designed to equip learners with the knowledge, leadership skills, and practical experience required to effectively manage residential childcare settings.
          </p>
          <p>
            This nationally recognised qualification prepares current and aspiring managers to operate in line with the requirements of The Children’s Homes (England) Regulations 2015. 
            Through this programme, learners develop the essential safeguarding, leadership, and operational skills needed to deliver safe, compliant, and high-quality care services for children and young people.
          </p>
        </div>
      </section>

      {/* OPTIONAL CTA BUTTON */}
      <section className="courses-cta">
        <div className="container">
          <a href="/contact/employer-get-in-touch" className="cta-button">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}