import React from 'react';
import lightIcon from '../materials/outline_light_mode_white_24dp.png';
import darkIcon from '../materials/outline_dark_mode_black_24dp.png';


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Hugo Solian's Portfolio</a>
                {
                    props.theme ?
                        <span className="dark-light-mode">
                            <img src={lightIcon}
                            alt="lightMode"
                            onClick={() => {
                                props.themeSwitch(false);
                            }}
                            ></img>
                        </span>
                        :
                        <span className="dark-light-mode">
                            <img src={darkIcon}
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