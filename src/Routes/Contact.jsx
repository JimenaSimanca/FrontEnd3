import React from "react";
import Form from "../Components/Form";
import { useGlobalSates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state, dispatch } = useGlobalSates();

  return (
    <div className={`contact ${state.theme}`}>
      <h2>¿Quieres saber más?</h2>
      <p>Déjanos tus datos y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
