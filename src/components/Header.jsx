import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header-container">
      <Logo className={"logo-header-container"} />
      <Navigation />
    </div>
  );
};

export default Header;
