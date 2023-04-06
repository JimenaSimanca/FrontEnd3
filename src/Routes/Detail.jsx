import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [odontologo, setOdontolgo] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setOdontolgo(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Detail Dentist {id} </h1>

      <p>name={odontologo.name}</p>
      <p>email={odontologo.email}</p>
      <p>phone={odontologo.phone}</p>
      <p>webSitw={odontologo.website}</p>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
