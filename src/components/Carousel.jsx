import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import PropTypes from "prop-types";

const Carousel = ({ pictures }) => {
  const [data, setData] = useState({ pictures: [] });

  useEffect(() => {
    setData(pictures);
  }, []);

  return (
    <div className="carousel">
      <Slider key={data.id} pictures={data.pictures} />
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Carousel;
