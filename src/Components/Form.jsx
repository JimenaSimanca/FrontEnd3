import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: " ",
    email: " ",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (user.name.length > 5 && emailRegex.test(user.email)) {
      setMessage(
        "Gracias " + user.name + " nos contactaremos cuanto antes vía email "
      );
    } else {
      setMessage("por favor ingresa una información valida");
    }
    console.log(user);
  };
  return (
    <>
      <form className="formContact" onSubmit={handleSubmit}>
        <label htmlFor="name">Ingresa tu nombre</label> 
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Full name"
            id="name"
          ></input>
        <label htmlFor="email">Ingresa tu e-mail</label>
          <input
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            id="email"
          />
        <button>Send</button>
      </form>
      <h2>{message}</h2>
    </>
  );
};

export default Form;
