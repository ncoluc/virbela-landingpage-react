import React from "react";

export const SectionForm = () => {
  return (
    <section id="register" className="section-registro pb-5">
      <div className="container pt-5">
        <div className="container div-rojo">
          <div className="row">
            <h3>Registrate</h3>
          </div>
          <div className="row m-2">
            <div className="col-12 col-md-6 col-regristro">
              <p>
                <strong>Que esperas?</strong>
                <br />
                Registrate y se parte del mayor evento del año en <strong>Metaverso</strong>
              </p>
              <p>Te invitamos a escuchar a los mayores referentes de esta maravillosa tecnologia.</p>
              <p className="p-final-registro">
                <strong>No esperes más y registrate.</strong>
              </p>
            </div>
            <div className="col-12 col-md-6 offset-md-0 formulario">
              <form id="formulario-evento" className="row" action="mailto:gabriel.molina@unahur.edu.ar" method="post" encType="text/plain">
                <h4>Completa el formulario para enviarnos un mail con tu asistencia</h4>
                <div className="col-12 col-md-6">
                  <label htmlFor="validationServer01" className="form-label"></label>
                  <input id="nombre" type="text" className="form-control" placeholder="Nombre" required />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="validationServer02" className="form-label"></label>
                  <input id="apellido" type="text" className="form-control" placeholder="Apellido" required />
                </div>
                <div className="col-12 col-md-12">
                  <label htmlFor="validationServer03" className="form-label"></label>
                  <input id="mail" type="email" className="form-control" placeholder="Mail" required />
                </div>
                <div className="col-12 pt-3">
                  <div className="form-check">
                    <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                    <label className="form-check-label" htmlFor="invalidCheck3">
                      <a className="formulario" href="https://www.virbela.com/terms-of-service" target="_blank">
                        Terminos y condiciones del evento.
                      </a>
                    </label>
                    <div id="invalidCheck3Feedback" className="invalid-feedback formulario">
                      Debe estar de acuerdo antes de enviar.
                    </div>
                  </div>
                </div>
                <div className="col-12 p-3">
                  <button className="btn btn-primary" type="submit">
                    Enviar formulario
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
