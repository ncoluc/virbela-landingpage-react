import React from "react";
import arizonaStateUniversity from "../logos-partners-light/Arizona State University.png";
import concentrix from "../logos-partners-light/Concentrix.png";
import dxcTec from "../logos-partners-light/DXC-Tec.png";
import economistImpact from "../logos-partners-light/Economist Impact.png";
import expRealty from "../logos-partners-light/Exp Realty.png";
import johmsonJohmson from "../logos-partners-light/Johmson y Johmson.png";
import komodal from "../logos-partners-light/Komodal.png";
import lavalVirtual from "../logos-partners-light/Laval Virtual.png";
import muRata from "../logos-partners-light/mu Rata.png";
import pwc from "../logos-partners-light/Pwc.png";
import ucSanDiego from "../logos-partners-light/UcSanDiego.png";
import vmWare from "../logos-partners-light/VMWare.png";

export const SectionPartners = () => {
  return (
    <section>
      <h3>Nuestros Partners</h3>
      <div className="container container-fluid">
        <div id="div-partners" className="row container-fluid d-flex align-items-center justify-content-center">
          <div className="col m-4 d-flex justify-content-center">
            <img src={arizonaStateUniversity} className="icono-partner" loading="lazy" alt="Arizona State University" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={concentrix} className="icono-partner" loading="lazy" alt="Concentrix" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={dxcTec} className="icono-partner" loading="lazy" alt="DXC" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={economistImpact} className="icono-partner" loading="lazy" alt="Economist Impact" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={expRealty} className="icono-partner" loading="lazy" alt="Exp-Realty" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={johmsonJohmson} className="icono-partner" loading="lazy" alt="Johmson y Johmson" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={komodal} className="icono-partner" loading="lazy" alt="Komodal" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={lavalVirtual} className="icono-partner" loading="lazy" alt="Laval Virtual" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={muRata} className="icono-partner" loading="lazy" alt="mu Rata" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={pwc} className="icono-partner" loading="lazy" alt="Pwc" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={ucSanDiego} className="icono-partner" loading="lazy" alt="Uc San Diego" />
          </div>
          <div className="col m-4 d-flex justify-content-center">
            <img src={vmWare} className="icono-partner" loading="lazy" alt="VMWare" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
