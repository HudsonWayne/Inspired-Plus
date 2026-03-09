import "../../components/Home/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            Be the business you want to be. We can develop your people for a
            better future.
          </h1>
        </div>

        {/* RIGHT SVG GRAPHIC */}
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

export default Hero;