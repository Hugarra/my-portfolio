import React from 'react';
import lightIcon from '../materials/outline_light_mode_black_24dp.png';
import darkIcon from '../materials/baseline_dark_mode_white_24dp.png';


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Hugo Solian's Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Work</a>
                        <a className="nav-link" href="/">About</a>
                        <a className="nav-link" href="/">Contact</a>
                    </div>
                </div>
                {
                    props.theme ?
                        <span className="dark-light-mode">
                            <img src={darkIcon}
                            alt="lightMode"
                            onClick={() => {
                                props.themeSwitch(false);
                            }}
                            ></img>
                        </span>
                        :
                        <span className="dark-light-mode">
                            <img src={lightIcon}
                            alt="lightMode"
                            onClick={() => {
                                props.themeSwitch(true);
                            }}
                            ></img>
                        </span>
                }
            </div>
        </nav>
    );
}

export default Navbar;