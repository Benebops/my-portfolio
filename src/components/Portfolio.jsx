import "./portfolio.css";
import { portfolio } from "../utils/portfolio";
import { MdArrowOutward } from "react-icons/md";

const Portfolio = () => {
  return (
    <div className="project-content" id="portfolio-section">
      <div className="project-head">
        <div className="project-intro">
          <h5>Recent Projects</h5>
          <h2>My Portfolio</h2>
        </div>
        <button className="github-btn">
          <a href="https://github.com/Benebops">Visit My GitHub</a>
        </button>
      </div>
      <div className="cards">
        {portfolio.map(({id, title, url, image, text}) => (
          <div key={id} className="card-content">
            <img src={image} alt="project-image" />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="d-flex gap-2">
            <a href={url}>View website</a>
            <MdArrowOutward/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
