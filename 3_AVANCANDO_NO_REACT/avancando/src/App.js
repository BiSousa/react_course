import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import MessageState from "./components/MessageState";
import ChangeMessageState from "./components/ChangeMessageState";
import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Laranja", newCar: true, km: 1 },
    { id: 2, brand: "KIA", color: "Vermelho", newCar: false, km: 2 },
    { id: 3, brand: "Renault", color: "Branco", newCar: false, km: 3 },
  ];

  const pessoas = [
    { id: 1, nome: "Bia", idade: 20, profissao: "Trainee" },
    { id: 2, nome: "Carlos", idade: 17, profissao: "Desenvolvedor" },
    { id: 3, nome: "Ana", idade: 23, profissao: "Designer" },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em public */}
        <img src="./img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* Imagem em asset */}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Props */}
      <ShowUserName name="Bia" />

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Vermelho" newCar={false} />

      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Azul" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Preto" km={4500} newCar={false} />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* fragment */}
      <Fragment propFragment="teste" />

      {/* children prop */}
      <Container>
        <p>Eu sou do componente superior</p>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <UserDetails dados={pessoas} />
    </div>
  );
}

export default App;
