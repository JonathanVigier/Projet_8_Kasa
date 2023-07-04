import React from "react";
import PropTypes from "prop-types";
import DwellingCard from "./DwellingCard";

const Dwellings = ({ dwellings }) => {
  if (!dwellings) {
    console.log(dwellings);
    return (
      <div className="dwellings-container">
        <div className="error-content">
          <h3 className="error-text">
            Il semblerait que le site rencontre des difficultés
          </h3>
          <p className="error-text">
            Nous nous excusons pour le désagrément engendré
          </p>
        </div>
      </div>
    );
  } else if (dwellings && dwellings.length === 0) {
    return (
      <div className="dwellings-container">
        <div className="error-content">
          <h3 className="error-text">
            Il semblerait qu&apos;il n&apos;y ait aucunes données
          </h3>
          <p className="error-text">
            Nous nous excusons pour le désagrément engendré
          </p>
          <img src="./assets/images/no-data.png" alt="Empty Image" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="dwellings-container">
        <div className="dwellings-wrapper">
          {dwellings.map((home) => (
            <DwellingCard key={home.id} home={home} />
          ))}
        </div>
      </div>
    );
  }
};

Dwellings.propTypes = {
  dwellings: PropTypes.array,
};

export default Dwellings;
