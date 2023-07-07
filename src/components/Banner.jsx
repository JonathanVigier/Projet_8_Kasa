import React from "react";
import PropTypes from "prop-types";

const Banner = ({ image, title, text }) => {
  return (
    <div className="banner-container">
      <img className="banner" src={`./assets/images/${image}`} />
      <h1 className={`${title}-text`}>{text}</h1>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
