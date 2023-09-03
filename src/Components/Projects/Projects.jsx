import React from "react";
import "./Projects.css";
import Bloom from "../../assets/bloom-1.jpg";
import Navic from "../../assets/navic-1.jpg";
import WeatherImage from "../../assets/WeatherForecast.png";
import Sort from "../../assets/sort-1.jpg";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects">
          <div className="container">
            <img src={Bloom} alt="bloom website pic" />
            <div className="details">
              <h2>BLOOM</h2>
              <p>
              A MERN based social media app. Tech used - HTML, CSS, JavaScript, 
              ReactJs, Redux, React-DOM, Material UI, MongoDB, Mongoose, ExpressJS, 
              NodeJS, JWT, bcrypt, Axios, Multer, CORS. Many more lines of code yet to be written 🥲
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Rounak-Ghosh/Bloom"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://github.com/Rounak-Ghosh/Bloom/"
                  target="_blank"
                >
                  Preview not available
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <h2>NAVIC</h2>
              <p>
                Built this application because your electric vehicles are the present and the future. 
                Range anxiety is the number one reason, after price, why drivers don’t switch to EVs. 
                So, that's why this website came into existence. Features include - routing from source 
                to destination with charging stations in between and searching for the nearest ev charging 
                station based on user location.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Rounak-Ghosh/Navic"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a href="https://rounak-ghosh.github.io/Navic/" target="_blank">
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <img src={Navic} alt="navic website pic" />
          </div>
          <div className="container">
            <img src={Sort} alt="sorting visualizer website pic" />
            <div className="details">
              <h2>Sorting Visualizer</h2>
              <p>
                Completed the project on the Sorting Visualizer, simple, includes 
                3 basic sorting algos of selection sort, insertion sort and bubble sort. 
                Used VanilaJs for all the algos. Future improvements may add onto more sorting algos. 
                Feel free to create pull request and add other algos.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Rounak-Ghosh/SortVisualizer"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://rounak-ghosh.github.io/SortVisualizer/"
                  target="_blank"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <h2>Weather Forecast</h2>
              <p>
                The Weather Forecast is a web application that provides users
                with real-time weather information for a given location. The app
                utilizes the OpenWeatherMap API to retrieve weather data and
                displays it in a user-friendly way. this app shows temperature,
                humidity, wind speed, and weather condition using your current
                location.The app also provides a five-day weather forecast for
                the selected location.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Rounak-Ghosh/weather-app"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://rounak-ghosh.github.io/weather-app/"
                  target="_blank"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <img src={WeatherImage} alt="weather forecast website pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
