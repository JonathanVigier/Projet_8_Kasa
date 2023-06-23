import React from "react";
import PropTypes from "prop-types";

const Stars = ({ rating }) => {
  const stars = [
    <i key={1} className="fa-solid fa-star"></i>,
    <i key={2} className="fa-solid fa-star"></i>,
    <i key={3} className="fa-solid fa-star"></i>,
    <i key={4} className="fa-solid fa-star"></i>,
    <i key={5} className="fa-solid fa-star"></i>,
  ];

  const displayStar = (rating) => {
    const shiningStars = stars.map((star, index) => (
      <div key={index} className={index < rating ? "red-star" : "grey-star"}>
        {star}
      </div>
    ));

    return shiningStars;
  };

  return <div className="stars-container">{displayStar(rating)}</div>;
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
