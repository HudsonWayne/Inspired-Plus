import "../../components/Home/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">
          <h2 className="about-heading">
            We've helped businesses for over 55 years with market leading
            learning and development solutions.
          </h2>

          <p className="about-text">
            Employers can upskill their workforce, recruit an apprentice or opt
            for tailored fully flexible online solutions to meet your
            organisation's needs.
          </p>

          <p className="about-text">
            Individuals can access a wide range of flexible online courses.
            Apply for vacancies to progress onto employment with a suitable
            apprenticeship learning pathway.
          </p>

          <p className="about-text">
            Our specialists will identify areas to reskill employees and guide
            you on utilising your levy fund.
          </p>

          <a href="/contact" className="about-button">
            Get in touch
          </a>
        </div>

        {/* RIGHT TIMELINE / STATS */}
        <div className="about-right">

          <div className="stat-card">
            <h3 className="stat-number">91%</h3>
            <p className="stat-text">learner satisfaction</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-number">Grade 2</h3>
            <p className="stat-text">Ofsted provider</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-number">168</h3>
            <p className="stat-text">courses to choose from</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;