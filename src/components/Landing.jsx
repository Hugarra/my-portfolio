import React from 'react';

import LandingImage from "../materials/kisspng-digital-marketing-business-marketing-strategy-soci-marketing-illustration-5a94c78e5101a9.9483170215196998543318.png"

function Landing(props) {
    return (
        <div className="container landing">
            <img src={LandingImage} alt="landing" className="landing-image"></img>
        </div>
    );
}

export default Landing;