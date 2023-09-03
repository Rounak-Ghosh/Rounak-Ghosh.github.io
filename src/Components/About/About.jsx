import React from "react";
import "./About.css";
import AboutImg from "../../assets/clement-helardot-95YRwf6CNw8-unsplash.jpg";
const About = () => {
  return (
    <div className="About">
      <div className="about-container">
        <div className="container">
          <img src={AboutImg} alt="" />
          <div className="about-me">
            <h1>About Me</h1>
            <p>
              Hi👋 I am Rounak Ghosh, a 22 year old Software Engineer living
              in Kolkata, India. An Electrical Engineering graduate who lost
              the interest of getting shocked⚡Currently working with arodek as
              an Associate Consultant responsible for development in SAP ABAP & Fiori.
              <br/><br/>
              Always excited in exploring things and learning new things. Skilled 
              with expertise in Html, CSS, VanilaJS, React, Node and MongoDB. I am 
              dedicated to creating seamless, visually appealing, and user-friendly
              websites and applications. Enough of boasting, connect on LinkedIn 😅
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
