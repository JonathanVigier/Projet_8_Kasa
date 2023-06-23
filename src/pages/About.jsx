import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-app-container">
      <Header />
      <Banner title={"about-banner"} text={""} />
      <div className="collapses-container">
        <Collapse
          title={"Fiabilité"}
          description={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
          isDetailedDwellingChildren={false}
          isEquipmentDescription={false}
        />
        <Collapse
          title={"Respect"}
          description={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
          isDetailedDwellingChildren={false}
          isEquipmentDescription={false}
        />
        <Collapse
          title={"Service"}
          description={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
          isDetailedDwellingChildren={false}
          isEquipmentDescription={false}
        />
        <Collapse
          title={"Sécurité"}
          description={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
          isDetailedDwellingChildren={false}
          isEquipmentDescription={false}
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
