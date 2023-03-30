import { useState } from "react";
import "./styles-components/SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Agrega una tarteta..."
        onChange={handleChange}
      />
      <button type="submit" onClick={() => onSearch(id)}>
        <i class="fas fa-search"></i>Añadir +
      </button>
    </div>
  );
}
