import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <Logo className="logo-footer-container" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
