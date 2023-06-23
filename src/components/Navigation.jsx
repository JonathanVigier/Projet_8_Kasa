import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <ul className="nav-menu">
        <NavLink to="/">
          <li className="nav-item">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="nav-item">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
