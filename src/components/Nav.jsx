import { FaDna } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  };

  return (
    <header className="navbar">
      <div className="sub-navbar">
      <div className="logo">
        <FaDna size="24px" />
        <span>BenedictusDev,</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
      </div>
      <div className="nav-links">
        <p onClick={() => scrollToSection("home-section")}>Home</p>
        <p onClick={() => scrollToSection("portfolio-section")}>Portfolio</p>
        <p onClick={() => scrollToSection("about-section")}>About me</p>
        <p onClick={() => scrollToSection("testimonial-section")}>Testimonials</p>
      </div>
      <button className="contact-btn" onClick={() => scrollToSection("contact-section")}>
        Contact Me
      </button>
    </header>
  );
};

export default Nav;
