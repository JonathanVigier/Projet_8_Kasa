import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const DwellingCard = ({ home }) => {
  return (
    <div className="card-container">
      <NavLink to={`/dwelling/${home.id}`} className="card-link">
        <img src={home.cover} alt="" className="card-img" />
        <p className="card-text">{home.title}</p>
      </NavLink>
    </div>
  );
};

DwellingCard.propTypes = {
  home: PropTypes.object.isRequired,
};

export default DwellingCard;
