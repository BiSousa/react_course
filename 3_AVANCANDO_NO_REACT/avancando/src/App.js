import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
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
      <ShowUserName name="Bia" />
      <CarDetails brand="VW" km={100000} color="Vermelho" />
    </div>
  );
}

export default App;
