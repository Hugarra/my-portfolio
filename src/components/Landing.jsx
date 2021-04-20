import React from 'react';

import About from "./About.jsx"
import Proyectos from "./Proyectos.jsx"

import LandingImage from "../materials/kisspng-digital-marketing-business-marketing-strategy-soci-marketing-illustration-5a94c78e5101a9.9483170215196998543318.png"

function Landing(props) {
    return (
        <div>
            <div className="container-fluid landing">
                <div data-aos="fade-up">
                    <img src={LandingImage} alt="landing" className="landing-image mb-3"></img>
                    <h1 className="h1 text-center">Hugo Solian, Web designer!</h1>
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
            </div>
        </div>
    );
}

export default Landing;