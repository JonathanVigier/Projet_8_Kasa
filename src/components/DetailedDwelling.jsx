import React from "react";
import Collapse from "./Collapse";
import PropTypes from "prop-types";
import Tag from "./Tag";
import Stars from "./Stars";

const DetailedDwelling = ({ dwelling }) => {
  const equipments = dwelling.equipments.map((equipment, index) => (
    <li className="equipment" key={index}>
      {equipment}
    </li>
  ));
  return (
    <div className="detailed-dwelling-container">
      <div className="heading-container">
        <div className="title-location-container">
          <h3 className="title">{dwelling.title}</h3>
          <p className="location">{dwelling.location}</p>
        </div>
        <div className="host-infos-container">
          <h3 className="host-name">{dwelling.host.name}</h3>
          <img
            className="host-img"
            src={dwelling.host.picture}
            alt={`pp de : ${dwelling.host.name}`}
          />
        </div>
        <div className="tags-container">
          {dwelling.tags.map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </div>
        <Stars rating={Number(dwelling.rating)} />
      </div>
      <div className="dwelling-collapse-container">
        <Collapse
          title={"Description"}
          description={dwelling.description}
          isEquipmentDescription={false}
          isDetailedDwellingChild={true}
        />
        <Collapse
          title={"Équipements"}
          description={equipments}
          isEquipmentDescription={true}
          isDetailedDwellingChild={true}
        />
      </div>
    </div>
  );
};

DetailedDwelling.propTypes = {
  dwelling: PropTypes.object,
};

export default DetailedDwelling;
