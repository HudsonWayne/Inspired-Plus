import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/1c8e7d523094f80430f9e85e4313312f_InspiredPlus_LogoWeb.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [individualsOpen, setIndividualsOpen] = useState(false);

  const navRef = useRef();

  const closeMenu = () => {
    setMenuOpen(false);
    setEmployersOpen(false);
    setIndividualsOpen(false);
  };

  /* Close menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close menu with ESC */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container" ref={navRef}>
        
        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
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

        {/* NAV LINKS */}
        <nav className={`navbar-nav ${menuOpen ? "active" : ""}`}>

          {/* EMPLOYERS */}
          <div
            className="dropdown"
            onMouseEnter={() => window.innerWidth > 900 && setEmployersOpen(true)}
            onMouseLeave={() => window.innerWidth > 900 && setEmployersOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() =>
                window.innerWidth <= 900 &&
                setEmployersOpen(!employersOpen)
              }
            >
              Employers
              <span className="arrow">{employersOpen ? "▲" : "▼"}</span>
            </button>

            <div className={`dropdown-menu ${employersOpen ? "show" : ""}`}>
              <Link to="/services" onClick={closeMenu}>
                <div className="menu-title">What we offer</div>
                <div className="menu-subtext">
                  Find out more about how we can help your business
                </div>
              </Link>

              <Link to="/services#upskill" onClick={closeMenu}>
                <div className="menu-title">Services</div>
              </Link>
            </div>
          </div>

          {/* INDIVIDUALS */}
          <div
            className="dropdown"
            onMouseEnter={() => window.innerWidth > 900 && setIndividualsOpen(true)}
            onMouseLeave={() => window.innerWidth > 900 && setIndividualsOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() =>
                window.innerWidth <= 900 &&
                setIndividualsOpen(!individualsOpen)
              }
            >
              Individuals
              <span className="arrow">{individualsOpen ? "▲" : "▼"}</span>
            </button>

            <div className={`dropdown-menu ${individualsOpen ? "show" : ""}`}>
              <Link to="/vacancies" onClick={closeMenu}>
                <div className="menu-title">Vacancies</div>
              </Link>
            </div>
          </div>

          <Link to="/courses" className="nav-link" onClick={closeMenu}>
            Courses
          </Link>

          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About Us
          </Link>

          {/* MOBILE CONTACT */}
          <div className="mobile-right">
            <a href="tel:+44741911375" className="call-link">
              Call us on <span>+(44)741 911 375</span>
            </a>

            <Link
              to="/contact/employer-get-in-touch"
              className="contact-button"
              onClick={closeMenu}
            >
              Get in touch
            </Link>
          </div>
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="navbar-right">
          <a href="tel:+44741911375" className="call-link">
            Call us on <span>+(44)741 911 375</span>
          </a>

          <Link
            to="/contact/employer-get-in-touch"
            className="contact-button"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </header>
  );
}