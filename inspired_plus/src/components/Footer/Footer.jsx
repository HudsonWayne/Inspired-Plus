import React from "react";
import "../../components/Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-column">
            <h3>Get in Touch</h3>

            <p>
              Email us on{" "}
              <a href="mailto:info@inspiredplus.co.uk">
                info@inspiredplus.co.uk
              </a>
            </p>

            <p>
              Call us on{" "}
              <a href="tel:+44741911375">
                +(44)741 911 375
              </a>
            </p>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            Inspired Plus © 2026 All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;