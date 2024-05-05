import "../style/contact.css";
import gmail from "../Picture/Gmail_Logo.svg";
import linkedin from "../Picture/Linkedin_logo_color.png";
const Contact = () => {
  return (
    <div className="contact-main">
      <h1>Any Query, the answer is here</h1>
      <div className="img-container">
        <a href="mailto:rmstar458@gmail.com">
          <img src={gmail}></img>
        </a>
        <a href="https://www.linkedin.com/in/ramesh-sharma458" target="_blank">
          <img src={linkedin}></img>
        </a>
      </div>
    </div>
  );
};
export default Contact;
