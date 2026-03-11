import React from "react";
import "../Our-Services/Services.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Services() {

  const courses = [
    {
      title: "Course Overview",
      content:
        "This qualification is designed for professionals working in residential childcare who want to progress into leadership and management roles. It replaces previous NVQ and QCF qualifications and is fully aligned with RQF standards.",
    },
    {
      title: "What the Course Covers",
      list: [
        "Safeguarding and child protection",
        "Equality, diversity, and inclusion",
        "Managing residential childcare teams",
        "Health, safety, and risk management",
        "Quality improvement",
        "Supporting children who have experienced harm or abuse",
        "Communication and information management",
        "Child and young people’s development",
        "Partnership working",
      ],
    },
    {
      title: "Delivery Method",
      list: [
        "100 percent online learning",
        "Access to an ePortfolio platform",
        "Dedicated assessor support",
        "Email support",
        "Workplace observation via online system",
        "Flexible completion within 7–15 months",
      ],
    },
    {
      title: "Assessment Methods",
      list: [
        "Portfolio of evidence",
        "Written assignments",
        "Practical demonstrations",
        "Workplace observations",
        "Professional discussions",
      ],
    },
    {
      title: "Entry Requirements",
      list: [
        "Minimum age of 19",
        "Currently working in a relevant residential childcare role",
        "Access to a laptop or computer",
        "Level 3 qualification in a related area preferred",
      ],
    },
    {
      title: "Course Fee",
      content:
        "£1,850 per year. The fee includes full access to learning materials, assessor support, career guidance, and additional support services.",
    },
  ];

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="hero-section2">
        <div className="container hero-container">

          <div className="hero-left">
            <h1 className="hero-title">
              Level 5 Diploma in Leadership & Management for Residential Childcare.
            </h1>

            <Link
              to="/contact/employer-get-in-touch"
              className="navigation-white-button"
            >
              Get in touch
            </Link>
          </div>

          <div className="hero-right">
            <img
              src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/62ebc9dde0329f7397590768_Graphic.svg"
              alt="Hero"
              className="hero-graphic"
            />
          </div>

        </div>
      </section>


      {/* CAROUSEL */}
      <section className="course-details-section">
        <div className="container">

          <div className="carousel-wrapper">

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >

              {courses.map((course, index) => (
                <SwiperSlide key={index}>

                  <div className="course-card">

                    <h3 className="content-teaser-heading-two">
                      {course.title}
                    </h3>

                    {course.content && (
                      <p className="paragraph">{course.content}</p>
                    )}

                    {course.list && (
                      <ul className="paragraph">
                        {course.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

            {/* NAVIGATION ARROWS */}
            <div className="swiper-button-prev custom-arrow"></div>
            <div className="swiper-button-next custom-arrow"></div>

          </div>

        </div>
      </section>

    </div>
  );
}