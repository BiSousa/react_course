import "./App.css";
import React, { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}

export default App;
