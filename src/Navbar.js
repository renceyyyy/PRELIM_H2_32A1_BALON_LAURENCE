import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Administrator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home page
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                List
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#education">
                    Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#projects">
                    Projects
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                Contacts
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="py-5 text-center"
      style={{ width: "100%", backgroundColor: "#e0f7fa" }} // Light blue background
    >
      <div className="container">
        <h1>Welcome to my Portfolio</h1>
        <p>
          Hi, I'm Laurence James S. Balon, BSIT course at the Lyceum of Alabang.
          20 years old. I chose the BSIT course because I want to learn how to
          create functional and usable systems and to improve my skills in web
          development. Nowadays, technology is at the core of everything we do.
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="aboutme"
      className="py-5"
      style={{ backgroundColor: "#e0f7fa" }} // Light cyan background
    >
      <div className="container">
        <h3>Education</h3>
        <p>
          <ul>
            <li>Current School: Lyceum of Alabang</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="py-5"
      style={{ backgroundColor: "#e0f7fa" }} // Light cyan background
    >
      <div className="container">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat,
          tortor id faucibus tincidunt, ligula libero egestas ligula, eget
          viverra mi ante sit amet lorem.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#e0f7fa" }} // Light orange background
    >
      <div className="container">
        <h3>Skills</h3>
        <p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>VB .NET</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#e0f7fa" }} // Light green background
    >
      <div className="container">
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
          dui a vestibulum volutpat. Curabitur eget sapien vel ipsum cursus
          lacinia.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#e0f7fa" }} // Light yellow background
    >
      <div className="container">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur velit magna, id porttitor nulla gravida et.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
