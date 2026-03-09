import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    text: "Working with Leanne (coach) I felt I was her sole focus and that she really wanted me to succeed and get me over the line.",
    name: "Joseph Crowe",
    course: "Certificate in Recruitment Resourcing",
    company: "Sanctuary Personnel Limited"
  },
  {
    text: "I couldn’t pass on my recommendation of Key Training enough, very helpful and excellent service throughout.",
    name: "Mark Roper",
    course: "Business Management Level 5",
    company: "Corbel Solutions"
  },
  {
    text: "Ruth worked around the clock to make sure I was ready and up to scratch too, to make sure I passed First time.",
    name: "Christopher Davison",
    course: "Recruitment Resourcing Level 2",
    company: "Baltic Recruitment"
  },
  {
    text: "I just wanted to say thank you very much for the support you have given me in getting my ILM level 3.",
    name: "Jacqueline Kenny",
    course: "Business Management Level 3",
    company: "Ormiston Families"
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < testimonials.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="testimonial-section">

      {/* Decorative shapes */}
      <div className="shape-container">
        <div className="pink-shape"></div>
        <div className="yellow-circle"></div>
      </div>

      <h2 className="testimonial-title">Working with Key Training</h2>

      <div className="slider-wrapper">

        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 340}px)` }}
        >
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">
                <em>{item.text}</em>
              </p>

              <div className="testimonial-info">
                <p className="name">{item.name}</p>
                <p>{item.course}</p>
                <p className="company">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="slider-buttons">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>

    </section>
  );
}