import "./styles-components/Card.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <img src={image} alt="Rick and Morty" />

      <div className="card-desciption">
        <h4>
          <strong>Status:</strong> <span>{status}</span>
        </h4>
        <h4>
          <strong>Species:</strong> <span>{species}</span>
        </h4>
        <h4>
          <strocg>Gender:</strocg> <span>{gender}</span>
        </h4>
        <h4>
          <strong>Origin:</strong> <span>{origin}</span>
        </h4>
      </div>

      <button className="btn" onClick={() => onClose(id)}>
        x
      </button>
    </div>
  );
}
