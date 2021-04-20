import React from 'react';

function Proyectos(props) {
    return (
        <div className="text-center pt-4 pb-4">
            <h3>Projects</h3>
            <div className="d-flex gap-5 justify-content-center pt-4">
                <div className="card" style={{width: 304}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                    </div>
                </div>
                <div className="card" style={{width: 304}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="card-link">Card link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;