import React from 'react';

function Proyectos(props) {
    return (
        <div className="text-center pt-4 pb-4">
            <h3>Github projects</h3>
            <div className="d-flex justify-content-center pt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="card m-auto mt-3" style={{width: 304}}>
                            <div className="card-body">
                                <h4 className="card-title">form-w-d-mode</h4>
                                <hr></hr>
                                <h6 className="card-subtitle mb-2 text-muted">Basic formular with dark-mode</h6>
                                <p className="card-text">In this project, I lerned how to set a Dark and Light mode in React JS</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Hugarra/form-w-d-mode" className="card-link">Project Github here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card m-auto mt-3" style={{width: 304}}>
                            <div className="card-body">
                                <h4 className="card-title">my-portfolio</h4>
                                <hr></hr>
                                <h6 className="card-subtitle mb-2 text-muted">Basic personal portfolio</h6>
                                <p className="card-text">Here is the project of this website.</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Hugarra/my-portfolio" className="card-link">Project Github here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card m-auto mt-3" style={{width: 304}}>
                            <div className="card-body">
                                <h4 className="card-title">web-practice-videoplayer</h4>
                                <hr></hr>
                                <h6 className="card-subtitle mb-2 text-muted">Basic Videoplayer web</h6>
                                <p className="card-text">I lerned how to reproduce a video in a React JS web app.</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Hugarra/web-practice-videoplayer" className="card-link">Project Github here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;