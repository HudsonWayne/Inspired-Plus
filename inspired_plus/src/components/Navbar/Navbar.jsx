import { useState } from "react";
import logo from "../../assets/1c8e7d523094f80430f9e85e4313312f_InspiredPlus_LogoWeb.png";
import "../../components/Navbar/Navbar.css"; // Import the plain CSS file

export default function Navbar() {
  const [employersOpen, setEmployersOpen] = useState(false);
  const [individualsOpen, setIndividualsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Navigation */}
        <nav className="navbar-nav">
          {/* Employers Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setEmployersOpen(true)}
            onMouseLeave={() => setEmployersOpen(false)}
          >
            <button className="dropdown-toggle">Employers ▾</button>
            {employersOpen && (
              <div className="dropdown-menu employers-menu">
                <a href="#">
                  <p className="menu-title">What we offer →</p>
                  <p className="menu-subtext">Find out more about how we can help your business</p>
                </a>
                <a href="#">
                  <p className="menu-title">Upskill your employees →</p>
                  <p className="menu-subtext">Train your existing workforce</p>
                </a>
                <a href="#">
                  <p className="menu-title">Hire an apprentice →</p>
                  <p className="menu-subtext">Build junior talent</p>
                </a>
                <a href="#">
                  <p className="menu-title">Training courses →</p>
                  <p className="menu-subtext">See our wide range of courses</p>
                </a>
              </div>
            )}
          </div>

          {/* Individuals Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setIndividualsOpen(true)}
            onMouseLeave={() => setIndividualsOpen(false)}
          >
            <button className="dropdown-toggle">Individuals ▾</button>
            {individualsOpen && (
              <div className="dropdown-menu individuals-menu">
                <a href="#">
                  <p className="menu-title">Apprenticeships →</p>
                  <p className="menu-subtext">Kickstart your career</p>
                </a>
                <a href="#">
                  <p className="menu-title">Vacancies →</p>
                  <p className="menu-subtext">See the latest apprenticeship vacancies</p>
                </a>
              
              </div>
            )}
          </div>

          <a href="/courses" className="nav-link">Courses</a>
          <a href="/about" className="nav-link">About Us</a>
        </nav>

        {/* Right Section */}
        <div className="navbar-right">
          <a href="tel:03700800800" className="call-link">
            Call us on <span>+(44)741 911 375</span>
          </a>
          <button className="contact-button">Get in touch</button>
        </div>
      </div>
    </div>
  );
}