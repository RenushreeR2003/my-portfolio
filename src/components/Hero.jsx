import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div id="home">

        <div id="left">
          <div className="left">
            <h5 id="hello">Hi!...</h5>
            <h1> I'm<br /> RENUSHREE.R </h1>
            <p>Java Full Stack Developer</p>
            <p id="par">Building innovative web applications with React, Java, SpringBoot, MySQL and modern web technologies.</p>

            <div id="button">
              {/* <a href="D:\MY_Project\myPortfolio\protfolio\src\components\Projects" ><h2 id="view">View my work </h2></a> */}
              {/* <Link to="projects" smooth={true}><h2 id="view">View my work </h2></Link> */}
              <a href="https://drive.google.com/file/d/14SCHUS8sdn4QLU-KR2HlSFz3jhNnej1u/view?usp=drive_link"><h2 id="re">Resume</h2></a>
            </div>

          </div>

          <div id="link">
            <div><a href="https://github.com/RenushreeR2003" target="_blank" rel="noreferrer">
             {/* <FaGithub size={30} className="icon" /> */}
             <i class="fab fa-github"></i>
             
            </a></div>

            <a
              href="https://www.linkedin.com/in/renushree-r-63249227b/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaLinkedin size={30} className="icon" /> */}
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <div><a href="mailto:renushreeramesh2003@gmail.com">
              {/* <FaEnvelope size={30} className="icon" /> */}
              <i class="fa-solid fa-envelope"></i>
            </a></div>

          </div>
        </div>


      </div>
    </section>
  );
}

export default Hero;