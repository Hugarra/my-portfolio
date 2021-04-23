import React from 'react';

import About from "./About.jsx"
import Proyectos from "./Proyectos.jsx"
import Contact from "./Contact.jsx"

import LandingImage from "../materials/kisspng-jamal-mohamed-college-student-shri-ram-college-of-5ae0ce56451bf5.9906879715246823262831.png"

function Landing(props) {
    return (
        <div className="landing-page-container">
            <div className="container-fluid landing pb-3">
                <div className="d-flex gap-2 justify-content-center">
                    <div className="d-block landing-text">
                        <h1 className="h1">Hugo Solian</h1>
                        <h1 className="h1">Web developer!</h1>
                        <h4>Junior self-taught web application developer</h4>
                        <div className="d-flex gap-3 mt-3">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hug-solian/">
                                <i className="fab fa-linkedin" ></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hugos848">
                                <i className="fab fa-instagram" ></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Hugarra">
                                <i className="fab fa-github" ></i>
                            </a>
                        </div>
                    </div>
                    <img src={LandingImage} alt="landing" className="landing-image d-none d-lg-block mb-3 pt-3"></img>
                </div>
                <br></br>
            </div>
            <div className="container">
                <hr></hr>
                <div data-aos="fade-up">
                    <About></About>
                </div>
                <hr></hr>
                <div data-aos="fade-up">
                    <Proyectos></Proyectos>
                </div>
                <hr></hr>
                <div data-aos="fade-up">
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
}

export default Landing;