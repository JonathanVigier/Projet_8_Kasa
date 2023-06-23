import React from "react";
import PropTypes from "prop-types";

const Tag = ({ text }) => {
  return (
    <div className="tag-container">
      <p className="tag-text">{text}</p>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
