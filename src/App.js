import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
// import { animateScroll as scroll } from "react-scroll";
import { Element } from "react-scroll";
import Footer from "./Components/Footer/Footer";
import "./App.css";
function App() {
  // const homeScreenRef = useRef(null);
  // const skillsRef = useRef(null);
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scroll.scrollTo(ref.current.offsetTop, {
      duration: 500,
      smooth: true,
    });
  };
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <HomeScreen />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
