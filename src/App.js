import "./styles/App.css";
import Logo from "./components/Logo.jsx";
import Imotion from "./components/Imotion.jsx";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://rickandmortyapi.com/api";
    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          //setCharacters([...characters, data])
        } else alert("Algo salio mal");
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {/* Header - Cabecera de pagina */}
      <header className="App-header">
        <Nav onSearch={onSearch} />
      </header>

      {/* Body - Cuerpo de pagina */}
      <Logo />
      <Imotion />
      <Cards characters={characters} onClose={onClose} />

      {/* Footer - Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
