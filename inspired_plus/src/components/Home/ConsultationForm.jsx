import React from "react";
import "../../components/Home/ConsultationForm.css";

function ConsultationForm() {
  return (
    <div className="consultation-container">

      <div className="consultation-card">

        <div className="avatar-group">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
        </div>

        <h1>Book a consultation</h1>

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

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

    </div>
  );
}

export default ConsultationForm;