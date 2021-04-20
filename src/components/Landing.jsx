import React from 'react';

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
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo minus quis consequatur, adipisci architecto delectus cumque, maxime quos at non velit laudantium, dicta nulla? Eum aperiam veritatis natus assumenda?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias quo perspiciatis, dignissimos dolore eligendi odio autem distinctio quod rem excepturi, in dolores deserunt necessitatibus dolorem fugit rerum ducimus quasi!</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;