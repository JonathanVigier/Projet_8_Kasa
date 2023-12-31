import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dwellings from "../components/Dwellings";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { getAllDwellings } from "../services/DwellingData";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dwellingsData, setDwellingsData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    fetchData();
    return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllDwellings();
      setDwellingsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader isHomeLoader={true} />;
  }

  return (
    <div className="app-container">
      <Header />
      <Banner
        image={"home-banner.png"}
        title={"home-banner"}
        text={"Chez vous, partout et ailleurs"}
      />
      <Dwellings dwellings={dwellingsData} />
      <Footer />
    </div>
  );
};

export default Home;
