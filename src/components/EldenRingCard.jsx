import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "./EldenRingCard.css";

const EldenRingCard = ({ item }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(item.id);

  return (
    <div className="card-container">
      <div className="card-content">
        
        <div className="card-header">
          <h3 className="card-title">{item.name}</h3>
          <button
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={() => toggleFavorite(item)}
          >
            {isFavorite ? "🌟" : "⭐"}
          </button>

          <div className="card-image-container">
            <img
              src={item.image}
              alt={item.name}
              className="card-image"
            />
          </div>
        </div>

        <div className="card-details">
          <p>{item.description}</p>

          <Link
            to={`/items/${item.type}/${item.id}`} 
            className="card-link"
          >
            Ver detalle
          </Link>
        </div>

      </div>
    </div>
  );
};

EldenRingCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string.isRequired 
  }).isRequired
};

export default EldenRingCard;
