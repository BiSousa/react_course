import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Guilherme",
          email: "guilherme@gmail.com",
          bio: "Sou um escritor",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
