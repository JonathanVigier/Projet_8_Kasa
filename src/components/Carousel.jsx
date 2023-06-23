import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useParams } from "react-router-dom";
import { getDwellingById } from "../services/DwellingData";

const Carousel = () => {
  const { id } = useParams();
  const [data, setData] = useState({ pictures: [] });

  useEffect(() => {
    const fetchDwelling = async () => {
      try {
        const data = await getDwellingById(id);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDwelling();
  }, []);

  return (
    <div className="carousel">
      <Slider key={data.id} pictures={data.pictures} />
    </div>
  );
};

export default Carousel;
