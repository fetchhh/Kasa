// Utils
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const Banner = ({ title, filter, image }) => {
  return (
    <div
      className={
        filter == 60
          ? "banner home-banner"
          : filter == 30
            ? "banner about-banner"
            : "banner"
      }
    >
      <img src={image} />
      {title ? <p>{title}</p> : null}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.number,
  image: PropTypes.string,
};

export default Banner;
