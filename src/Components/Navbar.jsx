import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useGlobalSates } from "./utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGlobalSates();

  return (
    <nav className={`nav ${state.theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

      <div id="imgNavbar">
        <img src="/images/DH.png" style={{ width: "250px" }} alt="imagenDH" />
      </div>
      <div className="links">
        <Link to={routes.home}>
          <h3>Home</h3>
        </Link>
        <Link to={routes.contact}>
          <h3>Contact</h3>
        </Link>
        <Link to={routes.favs}>
          <h3>Favs</h3>
        </Link>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        {state.theme === "light" ? (
          <button
            className="btnNavBar"
            onClick={() => {
              dispatch({
                type: "dark",
              });
            }}
          >
            🌙
          </button>
        ) : (
          <button
            className="btnNavBar"
            onClick={() => {
              dispatch({
                type: "light",
              });
            }}
          >
            🌞
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
