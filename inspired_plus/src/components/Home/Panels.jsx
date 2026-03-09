import "../../components/Home/Panels.css";

function Panels() {
  return (
    <section className="panels">

      {/* PANEL 1 */}
      <div className="panel panel-left">
        <div className="panel-content">
          <p className="panel-sub">EMPLOYERS</p>
          <h2 className="panel-title">Upskill your employees</h2>

          <a href="/employer/train-your-employees" className="panel-btn">
            Find out more
          </a>
        </div>

        <div className="panel-shape yellow"></div>

        <img
          src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e"
          alt="employee"
          className="panel-image"
        />
      </div>

      {/* PANEL 2 */}
      <div className="panel panel-right">
        <div className="panel-content">
          <p className="panel-sub">EMPLOYERS</p>
          <h2 className="panel-title">Hire an apprentice</h2>

          <a href="/employer/hire-apprentice" className="panel-btn">
            Find out more
          </a>
        </div>

        <div className="panel-shape pink"></div>

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="apprentice"
          className="panel-image"
        />
      </div>

    </section>
  );
}

export default Panels;