import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

const Loader = ({ isHomeLoader }) => {
  if (isHomeLoader) {
    return (
      <div className="home-loader">
        <Logo className={"logo-header-container"} />
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="skeleton-loader">
      <div className="header-loader">
        <div className="logo-loader animate"></div>
        <div className="nav-loader">
          <div className="nav-item-loader animate"></div>
          <div className="nav-item-loader animate"></div>
        </div>
      </div>
      <div className="carousel-loader animate"></div>
      <div className="detailed-dwelling-loader">
        <div className="dwelling-infos-loader">
          <div className="dwelling-title-loader animate"></div>
          <div className="dwelling-location-loader animate"></div>
        </div>
        <div className="host-infos-loader">
          <div className="host-name animate"></div>
          <div className="host-picture animate"></div>
        </div>
        <div className="tags-loader">
          <div className="tag-loader animate"></div>
          <div className="tag-loader animate"></div>
        </div>
        <div className="stars-loader">
          <div className="star-loader animate"></div>
          <div className="star-loader animate"></div>
          <div className="star-loader animate"></div>
          <div className="star-loader animate"></div>
          <div className="star-loader animate"></div>
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  isHomeLoader: PropTypes.bool.isRequired,
};

export default Loader;
