import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favoritos);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
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
