import "./testimonials.css";
import { testimonials } from "../utils/testimonials";

const Testimonials = () => {
  return (
    <div className="testimonials-container" id="testimonial-section">
      <h5 className="mb-4">Clients Feedback</h5>
      <h2 className="mb-5">Customer Testimonials</h2>
      <div className="testimonial-content">
        {testimonials.map(({ image, name, title, testimony, id }) => (
          <div className="testimonial-card" key={id}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">
                  &#9733;
                </span>
              ))}
            </div>
            <p className="testimonial-text">{testimony}</p>
            <div className="profile">
              <img src={image} alt="Dianne Russell" className="profile-img" />
              <div className="profile-info">
                <p className="name">{name}</p>
                <p className="company">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
