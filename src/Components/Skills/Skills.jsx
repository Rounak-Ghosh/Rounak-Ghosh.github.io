import React from "react";
import "./Skills.css";
import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import javascript from "../../assets/logo-javascript.svg";
import material from "../../assets/material-ui-1.svg";
import reactNative from "../../assets/react-native-1.svg";
import reactLogo from "../../assets/react-2.svg";
import mongodb from "../../assets/mongodb-1.svg";
import nodejs from "../../assets/nodejs-1.svg";
import postman from "../../assets/postman-1.svg";
import sapabap from "../../assets/sap-1.svg";
import sapfiori from "../../assets/fiori-1.svg";
import cpp from "../../assets/cpp-1.svg";
import githubIcon from "../../assets/github-icon-1.svg";
import { BsGithub } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skills-container">
        <h1>My Skills.</h1>
        <div className="skills">
          <div className="containers">
            <li>
              <img src={html} alt="html logo" /> Html
            </li>
            <li>
              <img src={css} alt="css logo" />
              CSS
            </li>
            <li>
              <img src={javascript} alt="javascript logo" /> Javascript
            </li>
            <li>
              <img src={reactLogo} alt="react logo" />
              ReactJS
            </li>
            <li>
              <img src={material} alt="material logo" />
              Material UI
            </li>
          </div>
          <div className="containers">
            <li>
            <img src={nodejs} alt="node logo" />
              Node.js
            </li>
            <li>
            <img src={javascript} alt="express logo" />
              Express
            </li>
            <li>
            <img src={mongodb} alt="mongodb logo" />
              MongoDB
            </li>
            <li>
            <img src={postman} alt="postman logo" />
              Postman
            </li>
            <li>
              <BsGithub className="github" />
              Git/Github
            </li>
          </div>
          <div className="containers">
          <li>
            <img src={cpp} alt="cpp logo" />
              C++
            </li>
            <li>
            <img src={sapabap} alt="sap logo" />
              SAP ABAP
            </li>
            <li>
            <img src={sapfiori} alt="sap ui5 logo" />
              SAP Fiori
            </li>
            <li>
              Learning More :)
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
