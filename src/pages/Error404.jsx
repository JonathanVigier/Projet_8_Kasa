import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-app-container">
      <Header />
      <div className="error-app-content">
        <div className="error-title-container">
          <h1 className="error-title">404</h1>
        </div>
        <p className="error-text">
          Oups! La page que vous demandez n&rsquo;existe pas.
        </p>
        <NavLink to="/" className="back-to-home-link">
          Retourner sur la page d&rsquo;accueil
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
