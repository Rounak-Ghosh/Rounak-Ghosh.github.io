import React from "react";
import "./Homescreen.css";
import profileImg from "../../assets/MyImage.jpg";
import { Link } from "react-scroll";
import Resume from "../../assets/Rounak_Ghosh_SDE.pdf";
const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="homescreen-container">
        <div className="heading">
          <p>👋 Hi, I am Rounak Ghosh.</p>
          <h1>Software Engineer</h1>
          <p>
            A self-learnt aspiring mern stack web developer from Kolkata, India. 
            Fresh out of college, currently learning SAP ABAP & FIORI. 
            Pursuing small side projects like a social media webapp, weather app, and many more.
            Do check them out in projects section.
          </p>
          <div className="contact-links">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="contactbtn"
            >
              Contact Me
            </Link>
            <a href={Resume} target="_blank" download className="resumeBtn">
              Resume
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
