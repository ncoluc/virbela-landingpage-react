import React from "react";
import logo from '../iconos/logo-virbela.png';
import instagramLogo from '../iconos/instagram.png';
import twitterLogo from '../iconos/twitter.png';
import facebookLogo from '../iconos/facebook.png';

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Virbela" width="167" height="57" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item pe-2 pt-2">
                <a href="https://www.facebook.com/Virbela/" target="_blank">
                  <img className="icono-nav" src={facebookLogo} />
                </a>
              </li>
              <li className="nav-item pe-2 pt-2">
                <a href="https://twitter.com/VirbelaHQ" target="_blank">
                  <img className="icono-nav" src={twitterLogo} />
                </a>
              </li>
              <li className="nav-item pe-5 pt-2">
                <a href="https://www.instagram.com/virbelahq/" target="_blank">
                  <img className="icono-nav" src={instagramLogo} />
                </a>
              </li>
              <li className="nav-item pe-5 pt-2">
                <a type="button" className="btn btn-primary btn-lg btn-register-nav" href="#register">
                  REGISTRATE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
