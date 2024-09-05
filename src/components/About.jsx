import AboutSubA from "./AboutSubA"
import AboutSubB from "./AboutSubB"
import "./about.css"

const About = () => {
  return (
    <div className="about-container" id="about-section">
        <div className="img-content">
            <AboutSubA/>
        </div>
        <div className="text-contentb">
            <AboutSubB/>
        </div>
    </div>
  )
}

export default About