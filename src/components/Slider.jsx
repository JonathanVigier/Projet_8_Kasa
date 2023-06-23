import React, { useState } from "react";
import PropTypes from "prop-types";

const Slider = ({ pictures }) => {
  const slides = pictures;
  const [currentSlide, setCurrentSlide] = useState(0);

  if (slides.length === 1) {
    return (
      <div className="slider">
        <div className="slide-container">
          <img
            src={slides[currentSlide]}
            alt={`Image ${currentSlide}`}
            className="slide"
          />
        </div>
      </div>
    );
  }

  const handleSide = (direction) => {
    if (direction === "left") {
      const updatedSlide =
        currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      setCurrentSlide(updatedSlide);
    } else if (direction === "right") {
      const updatedSlide =
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(updatedSlide);
    }
  };

  return (
    <div className="slider">
      <i
        className="fa-solid fa-chevron-left chevron-left"
        onClick={() => handleSide("left")}
      ></i>
      <div className="slide-container">
        <img
          className="slide"
          src={slides[currentSlide]}
          alt={`Image ${currentSlide}`}
        />
      </div>
      <i
        className="fa-solid fa-chevron-right chevron-right"
        onClick={() => handleSide("right")}
      ></i>
      <div className="numbering-container">
        <span className="numbering">{`${currentSlide + 1} / ${
          slides.length
        }`}</span>
      </div>
    </div>
  );
};

Slider.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Slider;
