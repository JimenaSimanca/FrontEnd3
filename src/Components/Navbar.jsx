import React from "react";
import { routes } from "../routes";
import { Link, useNavigate } from "react-router-dom";
import { ContextGlobal, useGlobalSates } from "./utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGlobalSates();

  return (
    <nav className={`navBar ${state.theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
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
          onClick={() => {
            dispatch({
              type: "dark",
            });
          }}
        >
          Change theme
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "light",
            });
          }}
        >
          Change theme 🌙
        </button>
      )}
    </nav>
  );
};

export default Navbar;
