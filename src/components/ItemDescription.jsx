import PropTypes from "prop-types";

const ItemDescription = ({ description }) => {
  return <p>{description}</p>;
};

ItemDescription.propTypes = {
  description: PropTypes.string
};

export default ItemDescription;