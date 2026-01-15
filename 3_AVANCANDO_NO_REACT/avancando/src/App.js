import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Laranja", newCar: true, km: 1 },
    { id: 2, brand: "KIA", color: "Vermelho", newCar: false, km: 2 },
    { id: 3, brand: "Renault", color: "Branco", newCar: false, km: 3 },
  ];

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
    </div>
  );
}

export default App;
