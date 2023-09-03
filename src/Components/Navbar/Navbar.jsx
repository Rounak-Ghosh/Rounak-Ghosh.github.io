import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import {
  BsGithub,
  BsLinkedin,
  BsMoonFill,
  BsSun,
  BsSunFill,
  BsX,
  BsXLg,
} from "react-icons/bs";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import toggleSound from "../../assets/Switch.mp3";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const switchSound = new Audio(toggleSound);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const theme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
    switchSound.play();
  };
  const closeMenu = () => {
    setIsVisible(false);
  };
  const lightMode = () => {
    setIsDarkMode(false);
    document.body.setAttribute("data-theme", "light");
    switchSound.play();
  };
  const darkMode = () => {
    setIsDarkMode(true);
    document.body.setAttribute("data-theme", "dark");
    switchSound.play();
  };

  return (
    <div className="Navbar">
      <div className="bg-gradient"></div>
      <div className="navbar-container">
        <div className={isVisible ? "active navbar" : "navbar"}>
          <div className="logo">RG.</div>
          <div className="menu">
            {isVisible ? (
              <HiXMark
                style={{
                  color: "var(--accent-color)",
                  fontWeight: "bold",
                }}
                size={30}
                onClick={closeMenu}
              />
            ) : (
              <HiBars3
                style={{
                  color: "var(--accent-color)",
                  // fontWeight: "bold",
                  // border: "2px solid gray",
                  // borderRadius: "5px",
                  // padding: 5,
                }}
                size={30}
                onClick={() => {
                  setIsVisible(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <div className="navbar-links">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="a"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="a"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="a"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="a"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </div>
            <div className="social-link">
              <div className="profiles">
                <a href="https://github.com/Rounak-Ghosh/" target="_blank">
                  <BsGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rounakghosh189/"
                  target="_blank"
                >
                  <BsLinkedin size={24} />
                </a>
                <a
                  onClick={toggleTheme}
                  style={{ cursor: "pointer" }}
                  className="desktopIcon"
                >
                  {isDarkMode ? (
                    <HiSun size={24} />
                  ) : (
                    <div>
                      {" "}
                      <HiMoon size={24} />
                    </div>
                  )}
                </a>
              </div>
              <div
                className={isDarkMode ? "active mobile-icon" : "mobile-icon"}
              >
                <div className="lightMode modes" onClick={lightMode}>
                  <HiSun size={24} /> <p>Light </p>
                </div>
                <div className="darkMode modes" onClick={darkMode}>
                  <HiMoon size={24} /> <p>Dark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
