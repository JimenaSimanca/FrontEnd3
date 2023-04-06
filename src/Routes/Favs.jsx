import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalSates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);
  const { state, dispatch } = useGlobalSates();

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favoritos);
  }, []);

  return (
    <>
      <h1 className={state.theme}>Dentists Favs</h1>
      <div className={`card-grid ${state.theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}

        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((odontologo) => (
          <Card
            id={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            key={odontologo.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
