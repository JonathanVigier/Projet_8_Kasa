import React from "react";
import PropTypes from "prop-types";

const Logo = ({ className }) => {
  return <div className={className}></div>;
};

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
