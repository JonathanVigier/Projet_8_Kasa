import React from "react";
import PropTypes from "prop-types";
import DwellingCard from "./DwellingCard";

const Dwellings = ({ dwellings }) => {
  return (
    <div className="dwellings-container">
      <div className="dwellings-wrapper">
        {dwellings.map((home) => (
          <DwellingCard key={home.id} home={home} />
        ))}
      </div>
    </div>
  );
};

Dwellings.propTypes = {
  dwellings: PropTypes.array,
};

export default Dwellings;
