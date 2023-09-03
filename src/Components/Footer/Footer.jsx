import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="form-container">
        <div className="icons">
          <a href="https://www.linkedin.com/in/rounakghosh189/">
            <FaLinkedin size={25} />
          </a>

          <a href="https://twitter.com/Rounak_SDE">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.instagram.com/stars.gazerr/">
            <FaInstagram size={25} />
          </a>
          <a href="mailto:rounakghosh189@gmail.com">
            <FaEnvelope size={25} />
          </a>
        </div>

        <p>
          Made with <span>💖 </span> by Rounak
        </p>
        <div className="gotohome">
          <Link to="home" smooth={true} duration={500}>
            <FiArrowUp size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
