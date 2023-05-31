import React from "react";
import videoMetaverso from "../videos/video-metaverso.mp4";

export const SectionVideo = () => {
  return (
    <section className="row section-video-metaverso">
      <div className="container">
        <div className="row">
          <div className="col-6 pt-5 fondo-video-metaverso" style={{ borderRadius: "0 0 0 40%" }}>
            <div>
              <h2>
                Evento Virbela en <strong>Argentina</strong>
              </h2>
              <p className="p-2">
                El <em>evento del año</em> en el metaverso
              </p>
              <a type="button" className="btn btn-primary btn-lg" href="#register" style={{ backgroundColor: "#ce4848" }}>
                REGISTRATE
              </a>
            </div>
          </div>
          <div className="col-6 fondo-video-metaverso d-none d-sm-block" style={{ borderRadius: "0 0 0 0" }}>
            <div>
              <video className="video-metaverso" autoPlay muted playsInline loop>
                <source src={videoMetaverso} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;
