import React, { useReducer, useEffect } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalSates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useGlobalSates();
  console.log(state);

  return (
    <main className="">
      <h1 className={` ${state.theme}`}>Home</h1>
      <div className={`card-grid ${state.theme}`}>
        {state.odontologos.map((odontologo) => (
          <Card
            id={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            key={odontologo.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
