import { FaDna } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./footer.css"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="name-logo">
        <FaDna size="24px" />
        <span>BenedictusDev,</span>
      </div>
      <div className="footer-list">
        <p onClick={() => scrollToSection("home-section")}>Home</p>
        <p onClick={() => scrollToSection("portfolio-section")}>Portfolio</p>
        <p onClick={() => scrollToSection("about-section")}>About me</p>
        <p onClick={() => scrollToSection("contact-section")}>Contact</p>
        <p onClick={() => scrollToSection("testimonial-section")}>Testimonials</p>
        <p onClick={() => scrollToSection("expertise-section")}>Expertise</p>
      </div>
      <div className="footer-icons">
        <FaFacebookF/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
      </div>
    </footer>
  );
};

export default Footer;
