import React from "react";
import logoWhite from "../iconos/logo-virbela-white.png";
import instagramLogo from "../iconos/instagram.png";
import twitterLogo from "../iconos/twitter.png";
import facebookLogo from "../iconos/facebook.png";

export const Footer = () => {
  return (
    <footer className="row mt-5">
      <div className="container align-items-center text-center">
        <div className="row">
          <div className="col-md-3" style={{ paddingBottom: "10px" }}>
            <a href="index.html">
              <img id="logo-footer" src={logoWhite} loading="lazy" alt="Virbela" className="logo-white" />
            </a>
          </div>
          <div className="col-md-4 div-mapa">
            <iframe id="map-sede" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55057592.91616326!2d175.36376953124977!3d32.62087018318111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94d73b0f3ffff%3A0xd360fcaa3c39c5a8!2sVirbela%2C%20Llc!5e0!3m2!1ses!2sar!4v1683845266781!5m2!1ses!2sar" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-md-3">
            <h4 className="pt-3">Contacto</h4>
            <p>
              Lisandro Medina 1997
              <br />
              Caseros, Buenos Aires
              <br />
              CP: 1678
            </p>
            <p>Teléfono: 11-4158-2011</p>
          </div>
          <div className="col-md-2">
            <h4 className="pt-3">Redes Sociales</h4>
            <ul className="lista-redes">
              <li>
                <a href="https://www.facebook.com/Virbela/" target="_blank">
                  <img className="icon-red-social" src={facebookLogo} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/VirbelaHQ" target="_blank">
                  <img className="icon-red-social" src={twitterLogo} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/virbelahq/" target="_blank">
                  <img className="icon-red-social" src={instagramLogo} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
