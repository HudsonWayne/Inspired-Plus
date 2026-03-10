import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/1c8e7d523094f80430f9e85e4313312f_InspiredPlus_LogoWeb.png";
import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [individualsOpen, setIndividualsOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </Link>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAVIGATION */}
        <nav className={`navbar-nav ${menuOpen ? "active" : ""}`}>

          {/* EMPLOYERS */}
          <div className="dropdown">

            <button
              className="dropdown-toggle"
              onClick={() => setEmployersOpen(!employersOpen)}
            >
              Employers
            </button>

            <div className={`dropdown-menu ${employersOpen ? "show" : ""}`}>

              <a href="#">
                <div className="menu-title">What we offer</div>
                <div className="menu-subtext">
                  Find out more about how we can help your business
                </div>
              </a>

              <a href="#">
                <div className="menu-title">Upskill your employees</div>
                <div className="menu-subtext">
                  Train your existing workforce
                </div>
              </a>

              <a href="#">
                <div className="menu-title">Hire an apprentice</div>
                <div className="menu-subtext">
                  Build junior talent
                </div>
              </a>

              <a href="#">
                <div className="menu-title">Training courses</div>
                <div className="menu-subtext">
                  See our wide range of courses
                </div>
              </a>

            </div>

          </div>

          {/* INDIVIDUALS */}
          <div className="dropdown">

            <button
              className="dropdown-toggle"
              onClick={() => setIndividualsOpen(!individualsOpen)}
            >
              Individuals
            </button>

            <div className={`dropdown-menu ${individualsOpen ? "show" : ""}`}>

              <a href="#">
                <div className="menu-title">Apprenticeships</div>
                <div className="menu-subtext">
                  Kickstart your career
                </div>
              </a>

              <a href="#">
                <div className="menu-title">Vacancies</div>
                <div className="menu-subtext">
                  See the latest apprenticeship vacancies
                </div>
              </a>

            </div>

          </div>

          <Link to="/courses" className="nav-link">
            Courses
          </Link>

          <Link to="/about" className="nav-link">
            About Us
          </Link>

          {/* MOBILE CONTACT */}
          <div className="mobile-right">

            <a href="tel:+44741911375" className="call-link">
              Call us on <span>+(44)741 911 375</span>
            </a>

            <button className="contact-button">
              Get in touch
            </button>

          </div>

        </nav>

        {/* DESKTOP RIGHT */}
        <div className="navbar-right">

          <a href="tel:+44741911375" className="call-link">
            Call us on <span>+(44)741 911 375</span>
          </a>

          <button className="contact-button">
            Get in touch
          </button>

        </div>

      </div>

    </header>
  );
}