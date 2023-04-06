import { createContext, useEffect, useReducer, useContext } from "react";

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const initialState = { theme: "light", odontologos: [] };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "llenarOdontologos":
        return { ...state, odontologos: action.nuevoEstado };
      case "dark":
        return { ...state, theme: "dark" };
      case "light":
        return { ...state, theme: "light" };
      default:
        return { state };
    }
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "llenarOdontologos", nuevoEstado: data });
      });
  }, []);

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalSates = () => useContext(ContextGlobal);
