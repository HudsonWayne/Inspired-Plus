import React from "react";
import "../Our-Services/Services.css";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// ✅ Correct import for Vite Swiper 10+
import { Navigation } from "swiper/modules";

// Import Swiper styles
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

      {/* COURSE DETAILS CAROUSEL */}
      <section className="course-details-section">
        <div className="container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="course-card">
                  <h3 className="content-teaser-heading-two">{course.title}</h3>
                  {course.content && <p className="paragraph">{course.content}</p>}
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