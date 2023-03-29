import "./styles-components/SearchBar.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-box">
      <input type="search" placeholder="Agrega una tarteta..." />
      <button type="submit" onClick={() => onSearch("not found id")}>
        <i class="fas fa-search"></i>Añadir +
      </button>
    </div>
  );
}
