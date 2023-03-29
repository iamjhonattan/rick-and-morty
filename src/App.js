import "./styles/App.css";
import Logo from "./components/Logo.jsx";
import Imotion from "./components/Imotion.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";
import LoginButton from "./components/LoginButton.jsx";
import Footer from "./components/Footer";

function App() {
  function onSearch(characterID) {
    window.alert(characterID);
  }

  function handleLogin() {
    // Lógica de inicio de sesión
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={onSearch} />
        <LoginButton onClick={handleLogin} />
      </header>

      {/* Body - Cuerpo de pagina */}
      <Logo />
      <Imotion />
      <Cards characters={characters} />

      {/* Footer - Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
