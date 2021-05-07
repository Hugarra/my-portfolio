import React from 'react';

function About(props) {
    return (
        <div className="text-center pt-4 pb-4">
            <h3>About me</h3>
            <div className="row pt-3 pb-3">
                <div className="col-md-4 col-12 text-center">
                    <svg className="bd-placeholder-img rounded-circle img-perfil" width="150" height="150"></svg>
                </div>
                <div className="col-md-8 col-12">
                    <div className="about-text text-start">
                        <h5>Hugo Solian</h5>
                        <p>I am a self-taught web developer with one year of experience in layout and design, frontend and backend development. Some technologies I use are: HTML, CSS, JavaScript, Bootstrap, ReactJS, MySQL, NodeJS, Python(Flask, SqlAlchemy)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;