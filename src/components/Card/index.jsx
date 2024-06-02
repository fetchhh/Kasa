// Utils
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/place/${id}`);
  };

  return (
    <div className="card-preview" onClick={handleClick}>
      <img src={cover} />
      <h3>{title}</h3>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
