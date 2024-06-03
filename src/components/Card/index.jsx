// Utils
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="card-preview" onClick={handleClick}>
      <img src={cover} />
      <h2>{title}</h2>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
