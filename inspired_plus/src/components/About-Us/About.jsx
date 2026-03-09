import "../../components/Home/Hero.css";

function AboutUs() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-left">
          <h1 className="hero-title">
            About Key Training
          </h1>
        </div>

        {/* Right Graphic */}
        <div className="hero-right">
          <img
            src="https://cdn.prod.website-files.com/62e93021656e9a160943c0d2/62ebc9dde0329f7397590768_Graphic.svg"
            alt="Hero Graphic"
            className="hero-graphic"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;