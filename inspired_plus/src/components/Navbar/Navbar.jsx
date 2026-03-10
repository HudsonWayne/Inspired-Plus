import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/1c8e7d523094f80430f9e85e4313312f_InspiredPlus_LogoWeb.png";
import "../../components/Navbar/Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [individualsOpen, setIndividualsOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`navbar-nav ${menuOpen ? "active" : ""}`}>

          {/* Employers */}
          <div className="dropdown">

            <button
              className="dropdown-toggle"
              onClick={() => setEmployersOpen(!employersOpen)}
            >
              Employers ▾
            </button>

            <div className={`dropdown-menu ${employersOpen ? "show" : ""} employers-menu`}>

              <a href="#">
                <p className="menu-title">What we offer →</p>
                <p className="menu-subtext">
                  Find out more about how we can help your business
                </p>
              </a>

              <a href="#">
                <p className="menu-title">Upskill your employees →</p>
                <p className="menu-subtext">
                  Train your existing workforce
                </p>
              </a>

              <a href="#">
                <p className="menu-title">Hire an apprentice →</p>
                <p className="menu-subtext">
                  Build junior talent
                </p>
              </a>

              <a href="#">
                <p className="menu-title">Training courses →</p>
                <p className="menu-subtext">
                  See our wide range of courses
                </p>
              </a>

            </div>
          </div>

          {/* Individuals */}
          <div className="dropdown">

            <button
              className="dropdown-toggle"
              onClick={() => setIndividualsOpen(!individualsOpen)}
            >
              Individuals ▾
            </button>

            <div className={`dropdown-menu ${individualsOpen ? "show" : ""} individuals-menu`}>

              <a href="#">
                <p className="menu-title">Apprenticeships →</p>
                <p className="menu-subtext">
                  Kickstart your career
                </p>
              </a>

              <a href="#">
                <p className="menu-title">Vacancies →</p>
                <p className="menu-subtext">
                  See the latest apprenticeship vacancies
                </p>
              </a>

            </div>
          </div>

          <Link to="/courses" className="nav-link">
            Courses
          </Link>

          <Link to="/about" className="nav-link">
            About Us
          </Link>

          {/* Mobile Right Section */}
          <div className="mobile-right">

            <a href="tel:+44741911375" className="call-link">
              Call us on <span>+(44)741 911 375</span>
            </a>

            <button className="contact-button">
              Get in touch
            </button>

          </div>

        </nav>

        {/* Desktop Right */}
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