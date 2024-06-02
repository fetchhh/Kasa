// Utils
import { useState } from "react";
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const Carousel = ({ pictures }) => {
  const images = pictures;

  const [CarouselIndex, setCarouselIndex] = useState(0);
  const nextIndex = () => {
    setCarouselIndex((count) => (count >= images.length - 1 ? 0 : count + 1));
  };
  const previousIndex = () => {
    setCarouselIndex((count) => (count <= 0 ? images.length - 1 : count - 1));
  };
  return (
    <div className="carousel">
      <img className="slide" src={images[CarouselIndex]} />
      <div className="sliders">
        <svg
          className="slider-arrow"
          onClick={() => nextIndex()}
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
        <svg
          className="slider-arrow"
          onClick={() => nextIndex()}
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
        <p>{`${CarouselIndex + 1} / ${images.length}`}</p>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array,
};

export default Carousel;