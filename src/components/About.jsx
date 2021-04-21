import React from 'react';

function About(props) {
    return (
        <div className="text-center pt-4 pb-4">
            <h3>About me</h3>
            <div className="row pt-3 pb-3">
                <div className="col-md-4 col-12 text-center">
                    <svg className="bd-placeholder-img rounded-circle img-place-holder" width="150" height="150"></svg>
                </div>
                <div className="col-md-8 col-12">
                    <div className="about-text text-start">
                        <h5>Hugo Solian</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea fugit commodi quae beatae dolorum quam cumque nesciunt autem odit aliquid, deserunt possimus debitis aliquam, impedit expedita? Quos, neque sunt?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;