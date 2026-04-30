import PropTypes from "prop-types";

const ItemImage = ({ src, alt }) => {
  return (
    <img
      src={src || "/placeholder.png"}
      alt={alt || "Imagen no disponible"}
      className="item-detail-image"
    />
  );
};

ItemImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default ItemImage;