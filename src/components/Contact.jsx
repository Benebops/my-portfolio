import { useState } from "react";
// import { useForm, ValidationError } from "@formspree/react";
import "./contact.css"; // Import CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    acceptTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xnnarzak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        acceptTerms: false,
      });
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div>
      {" "}
      {isSubmitted ? (
        <p>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form
          id="contact-section"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <h3 className="form-heading">Get In Touch</h3>
          <h1 className="form-title">Contact me</h1>
          <p className="form-description">You can contact me here.</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group ">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group yip">
            <label className="checkbox">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              I accept the terms
            </label>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
