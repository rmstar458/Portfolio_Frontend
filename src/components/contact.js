import "../style/contact.css";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = document.querySelector("#form-button");
    btn.style.backgroundColor = "rgb(198, 194, 192)";
    btn.innerHTML = "Sending";
    try {
      const response = await fetch(
        "https://portfolioserver-bflq.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        btn.style.backgroundColor = "rgb(25, 235, 18)";
        btn.innerHTML = "Sent";

        setFormData({ name: "", email: "", number: "", message: "" });
        window.history.pushState({}, "", window.location.pathname);

        setTimeout(() => {
          btn.style.backgroundColor = "white";
          btn.innerHTML = "Send";
        }, 2500);
      } else {
        alert("Failed to send email");
        // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error (e.g., display an error message)
    }
  };
  return (
    <div id="contact" className="contact-main">
      <h1>Any Query the answer is here</h1>
      <div className="contact">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="details">
            <label>Name : </label>
            <input
              placeholder="Enter your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="details">
            <label>Email : </label>
            <input
              placeholder="Enter your E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="details">
            <label>Contact : </label>
            <input
              placeholder="Enter your Contact No."
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-message">
            <label>Message </label>
            <textarea
              placeholder="Type your Message..."
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="button-div">
            <button type="submit" id="form-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
