import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import { getDwellingById } from "../services/DwellingData";
import DetailedDwelling from "../components/DetailedDwelling";

const DwellingPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [dwelling, setDwelling] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    fetchDwelling(id);
    console.log(id);
    return () => clearTimeout(timer);
  }, []);

  const fetchDwelling = async (id) => {
    try {
      const dwellingData = await getDwellingById(id);
      setDwelling(dwellingData);
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return <Loader isHomeLoader={false} />;
  }

  if (!dwelling) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <Header />
      <Carousel pictures={dwelling.pictures} />
      <DetailedDwelling dwelling={dwelling} />
      <Footer />
    </div>
  );
};

export default DwellingPage;
