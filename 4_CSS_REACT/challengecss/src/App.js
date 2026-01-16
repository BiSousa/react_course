import "./App.css";
import Data from "./components/Data";

function App() {
  const carros = [
    { id: 1, nome: "Polo", marca: "Volkswagen", ano: 2020 },
    { id: 2, nome: "Corolla", marca: "Toyota", ano: 2021 },
    { id: 3, nome: "Civic", marca: "Honda", ano: 2019 },
    { id: 4, nome: "Fit", marca: "Honda", ano: 2018 },
  ];

  return (
    <div className="App">
      <h1>Projeto Carros</h1>
      <Data myData={carros} />
    </div>
  );
}

export default App;
