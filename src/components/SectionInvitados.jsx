import React from "react";
import markZuckerberg from "../imagenes/mark-zuckerberg.jpg";
import philipRosedale from "../imagenes/philip-rosedale.jpg";
import timSweeney from "../imagenes/tim-sweeney.jpg";

export const SectionInvitados = () => {
  return (
    <section className="container p-5">
      <h3 className="justify-content-center pt-5">Invitados especiales</h3>
      <div className="container-fluid pt-3">
        <div className="row aling-items-center justify-content-center">
          <div className="card m-2 container-fluid border-card" style={{ width: "18rem" }}>
            <img src={markZuckerberg} className="card-img-top" alt="Mark Zuckerberg" />
            <div className="card-body">
              <h5 className="card-title">Mark Zuckerberg</h5>
              <p className="card-text">CEO de Facebook, ha declarado que el futuro de la empresa está en el metaverso y está invirtiendo fuertemente en el desarrollo de experiencias de realidad virtual y aumentada.</p>
            </div>
          </div>
          <div className="card m-2 container-fluid border-card" style={{ width: "18rem" }}>
            <img src={timSweeney} className="card-img-top" alt="Tim Sweeney" />
            <div className="card-body">
              <h5 className="card-title">Tim Sweeney</h5>
              <p className="card-text">CEO de Epic Games, creadores de Fortnite y otros juegos populares, está trabajando en el desarrollo de herramientas para la creación de experiencias de realidad virtual y aumentada.</p>
            </div>
          </div>
          <div className="card m-2 container-fluid border-card" style={{ width: "18rem" }}>
            <img src={philipRosedale} className="card-img-top" alt="Philip Rosedale" />
            <div className="card-body">
              <h5 className="card-title">Philip Rosedale</h5>
              <p className="card-text">Fundador de Second Life, una plataforma de realidad virtual social que ha estado en funcionamiento desde 2003, es considerado uno de los pioneros del metaverso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInvitados;
