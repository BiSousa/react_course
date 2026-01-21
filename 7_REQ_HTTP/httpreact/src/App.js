import "./App.css";

import { useState, useEffect, use } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1 - resgatando dados
  //useEffect(() => {
  //  async function fetchData() {
  //    const res = await fetch(url);
  //    const data = await res.json();
  //    setProducts(data);
  //  }
  //
  //  fetchData();
  //}, []);

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    console.log(product);

    //const res = await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify(product),
    //});

    // 3 - carregamento dinâmico
    //const addedProduct = await res.json();

    //setProducts((prevProducts) => [...prevProducts, product]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Remover item
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <button type="submit">Criar</button>}
        </form>
      </div>
    </div>
  );
}

export default App;
