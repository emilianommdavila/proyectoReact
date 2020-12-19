import React from "react";
import "./page-home.css";
import Logo from "./logo.svg";
function PageHome(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img id="logo" src={Logo} className="logo-barra" alt="" />
            <form
              className="form-inline"
              onSubmit={handleSubmit}
              name="meLlamoFormulario"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  value={props.busqueda}
                  placeholder="Busca tu Música"
                  onChange={props.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng">Search Similar Artist</button>
                <button className="btng">EscuelaDevRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default PageHome;
