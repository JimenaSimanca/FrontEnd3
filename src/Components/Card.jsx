import React from "react";
import { Link } from "react-router-dom";
import { useGlobalSates } from "./utils/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useGlobalSates();

  const addFav = () => {
    const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
    const odontologo = { id, name, username };
    const encontrar = favoritos.find((doc) => doc.id === odontologo.id);
    if (!encontrar) {
      favoritos.push(odontologo);
    }

    localStorage.setItem("favs", JSON.stringify(favoritos));
  };

  const removeFav = () => {
    const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
    const nuevosFavoritos = favoritos.filter((doc) => doc.id !== id);
    localStorage.setItem("favs", JSON.stringify(nuevosFavoritos));
  };

  const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
  const estaEnFavoritos = favoritos.some((doc) => doc.id === id);

  return (
    <div className={`card ${state.theme}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link key={id} to={"/dentista/" + id}>
        <img src="./images/doctor.jpg" width={200} />

        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{username}</h3>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
      {estaEnFavoritos ? (
        <button onClick={removeFav} className="favButton">
          🗑️
        </button>
      ) : null}
    </div>
  );
};

export default Card;
