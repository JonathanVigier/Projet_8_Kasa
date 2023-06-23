import React from "react";
import PropTypes from "prop-types";

const Banner = ({ title, text }) => {
  return (
    <div className="banner-container">
      <img className="banner" src={`./assets/images/${title}.png`} />
      <h1 className={`${title}-text`}>{text}</h1>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
