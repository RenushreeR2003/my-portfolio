import { Link } from "react-scroll";
import "./Nav.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Renushree Logo" id="logo" />

      <div id="content">
        <Link to="hero" smooth={true}>Home</Link>
        <Link to="about" smooth={true}>Education</Link>
        <Link to="projects" smooth={true}>Projects</Link>
        <Link to="skills" smooth={true}>Skills</Link>
        <Link to="contact" smooth={true}>Contact</Link>
        {/* <Link to="https://github.com/RenushreeR2003" smooth={true} id="git"></Link> */}
        <a href="https://github.com/RenushreeR2003" target="_blank" rel="noreferrer">
             {/* <FaGithub size={30} className="icon" /> */}
             <i class="fab fa-github"></i>
             
            </a>
      </div>
    </nav>
  );
}

export default Navbar;