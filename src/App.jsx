import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import { About, Works, Education, Contact } from "./components/sections";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="intro">
          <h1 className="name">Anosh Abraham</h1><br/>
          <p className="intro-desc">
            Seeking curiosity in every facet of life to
            explore and challenge conventional norms. Committed to pushing
            boundaries and expanding knowledge.
          </p><br/>
          <p className="intro-desc">
            I am a developer with unique approach to problems especially under
            Frontend and Full-Stack development. With a keen eye for detail 
            and dedication to succeed, I am committed to making a positive impact 
            to those around me.
          </p>
        </div>
        <main className="main-content">
          <About />
          <Works />
          <Education />
          <Contact />
        </main>
      </Router>
    </>
  );
}

export default App;
