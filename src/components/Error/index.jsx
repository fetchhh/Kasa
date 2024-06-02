// Utils
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const Error = ({ type, message }) => {
  return (
    <div className="error-wrapper">
      <div className="error-top">
        <h1>{type}</h1>
        <p>{message}</p>
      </div>
      <div className="error-back">
        <Link to="/" className="error-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

Error.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default Error;
