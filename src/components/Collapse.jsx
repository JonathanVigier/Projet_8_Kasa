import React, { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({
  title,
  description,
  isEquipmentDescription,
  isDetailedDwellingChild,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        isDetailedDwellingChild
          ? "collapse-container detailed-dwelling"
          : "collapse-container"
      }
      onClick={(e) => {
        setIsOpen(!isOpen);
        e.currentTarget.classList.toggle("is-open");
      }}
    >
      <div
        className={
          isDetailedDwellingChild
            ? "collapse-content detailed-dwelling"
            : "collapse-content"
        }
      >
        <h3 className="collapse-title">{title}</h3>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      <div className="collapse-description-container-hidden">
        {isEquipmentDescription ? (
          <ul className="collapse-hidden-text">{description}</ul>
        ) : (
          <p className="collapse-hidden-text">{description}</p>
        )}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  isEquipmentDescription: PropTypes.bool.isRequired,
  isDetailedDwellingChild: PropTypes.bool.isRequired,
};

export default Collapse;
