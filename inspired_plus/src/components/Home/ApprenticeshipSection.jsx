import "../../components/Home/ApprenticeshipSection.css";

export default function ApprenticeshipSection() {
  return (
    <section className="apprenticeship-section">
      <div className="card">

        <div className="circle"></div>

        <div className="content">
          <div className="text">
            <p className="tag">YOUNG ADULTS</p>

            <h1>
              Kickstart your career with an apprenticeship
            </h1>

            <p className="link">See our latest vacancies →</p>

            <button className="btn">Find out more</button>
          </div>

          <div className="image">
            <img
              src="/girl.png"
              alt="student"
            />
          </div>
        </div>

      </div>
    </section>
  );
}