// Vacancies.jsx
import React from "react";
import "./Vacancies.css";

export default function Vacancies() {
  const jobs = [
    {
      title: "Care Assistant",
      location: "London",
      company: "BrightCare Services",
      closingDate: "30 April 2026",
      description:
        "BrightCare Services is looking for compassionate Care Assistants to support residents in a residential care home.",
      requirements: [
        "Previous care experience is an advantage",
        "Good communication skills",
        "Ability to work flexible shifts",
      ],
      apply: "Send your CV to: jobs@brightcare.co.uk",
    },
    {
      title: "Warehouse Operative",
      location: "Manchester",
      company: "North Logistics Ltd",
      closingDate: "28 April 2026",
      description:
        "We are seeking reliable warehouse operatives to assist with packing, loading, and stock management.",
      requirements: [
        "Physically fit",
        "Ability to work in a team",
        "Basic warehouse experience preferred",
      ],
      apply: "Email your CV to: careers@northlogistics.co.uk",
    },
    {
      title: "Receptionist",
      location: "Birmingham",
      company: "Premier Business Solutions",
      closingDate: "5 May 2026",
      description:
        "We are looking for a friendly and professional receptionist to manage front desk operations.",
      requirements: [
        "Good communication and organisational skills",
        "Basic computer knowledge",
        "Customer service experience preferred",
      ],
      apply: "Send your CV to: recruitment@premierbusiness.co.uk",
    },
    {
      title: "Support Worker",
      location: "Leeds",
      company: "Helping Hands Care",
      closingDate: "3 May 2026",
      description:
        "Support workers will assist individuals with daily activities and provide emotional support.",
      requirements: [
        "Passion for helping others",
        "NVQ Level 2 or equivalent in Health and Social Care (preferred)",
        "Good teamwork skills",
      ],
      apply: "Email your CV to: apply@helpinghandscare.co.uk",
    },
  ];

  return (
    <div className="vacancies-page">
      {/* HEADER */}
      <section className="vacancies-header">
        <div className="container">
          <h1 className="vacancies-title">Latest Job Vacancies</h1>
          <p className="vacancies-intro">
            Welcome to our Vacancy Page, where we post the latest job
            opportunities available across the United Kingdom. We aim to help
            job seekers stay informed about new job openings and find employment
            opportunities that match their skills and experience.
          </p>
          <p className="vacancies-intro">
            Check this page regularly for new vacancies.
          </p>
        </div>
      </section>

      {/* JOB CARDS */}
      <section className="vacancies-list">
        <div className="container">
          {jobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="job-location">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="job-closing">
                <strong>Closing Date:</strong> {job.closingDate}
              </p>
              <p className="job-description">{job.description}</p>
              <ul className="job-requirements">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p className="job-apply">{job.apply}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY USE THIS PAGE */}
      <section className="vacancies-benefits">
        <div className="container">
          <h2 className="benefits-title">Why Use Our Vacancy Page</h2>
          <ul className="benefits-list">
            <li>✔ Regularly updated job listings</li>
            <li>✔ Opportunities across the UK</li>
            <li>✔ Easy application process</li>
            <li>✔ Jobs in different industries</li>
          </ul>
        </div>
      </section>

      {/* STAY UPDATED */}
      <section className="vacancies-footer">
        <div className="container">
          <p>
            Follow our vacancy page to receive updates on new job opportunities
            posted weekly across the UK.
          </p>
        </div>
      </section>
    </div>
  );
}