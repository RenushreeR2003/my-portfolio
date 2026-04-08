import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h2>Renushree R</h2>
          <p>
            Aspiring Software Engineer passionate about building web applications 
            and continuously learning new technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: renushreeramesh@gmail.com</p>
          {/* <p>Phone: +91 XXXXX XXXXX</p> */}

          <div className="social-icons">
            <div className="lo"><a href="https://github.com/RenushreeR2003" target="_blank" rel="noreferrer">
             {/* <FaGithub size={30} className="icon" /> */}
             <i class="fab fa-github"></i>
             
            </a></div>

            <div className="lo">
            <a
              href="https://www.linkedin.com/in/renushree-r-63249227b/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            </div>

            <div className="lo"><a href="mailto:renushreeramesh2003@gmail.com">
              {/* <FaEnvelope size={30} className="icon" /> */}
              <i class="fa-solid fa-envelope"></i>
            </a></div>
            <div className="lo"><a href="https://www.hackerrank.com/profile/rachanaramesh202">
              <i class="fa-brands fa-hackerrank"></i>
            </a></div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2026 Renushree R. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;