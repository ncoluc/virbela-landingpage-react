import React from "react";

export const SectionDetallesEvento = () => {
  return (
    <section>
      <div className="container pt-5 pb-5">
        <div className="container div-rojo">
          <div className="row">
            <h3>Detalles Evento</h3>
          </div>
          <div className="row m-2">
            <div className="col-12 col-md-6">
              <p>
                <strong>
                  Que esperar:
                  <br />
                </strong>
                Únase a nosotros para una discusión activa sobre Metaverso y su impacto en el futuro del trabajo con un estimado panel de expertos.
              </p>
              <p>Los temas incluyen:</p>
              <ul role="list">
                <li>¿Qué es el Metaverso y qué papel jugará en el futuro del trabajo?</li>
                <li>¿Por qué el Metaverso y los mundos virtuales se han convertido en uno de los temas más relevante hoy en día?</li>
                <li>¿Cuáles son los avances tecnológicos que aún se necesitan para fomentar la adopción masiva?</li>
              </ul>
              <p>Después del panel de discusión, quédese para una sesión de networking y la oportunidad de hablar con los panelistas y otros asistentes al evento.</p>
            </div>
            <div className="col-12 col-md-6 offset-md-0">
              <p>
                <strong>Cuando y Donde: </strong>Viernes 13 de mayo, 15:00pm (UTC -3) en Alvear Palace Hotel (Buenos Aires, Recoleta)
              </p>
              <iframe id="map-evento" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6556319270667!2d-58.391421423444065!3d-34.587579156647486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa37c9450ad%3A0x9cdf7e292ed4c101!2sAlvear%20Palace%20Hotel!5e0!3m2!1ses!2sar!4v1683852518080!5m2!1ses!2sar" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDetallesEvento;
