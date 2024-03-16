import React from "react";
import NavLinks from "./NavLinks";

const PrimaryNav = () => {
  return (
    <div className="primary-navigation">
      <nav className="primary-navigation__menu">
        <NavLinks />
      </nav>
    </div>
  );
}

export default PrimaryNav;
