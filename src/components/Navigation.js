import React, { useContext } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ToggleContext } from "../App";
import HamburgerMenu from "./HamburgerMenu";

function Navigation() {
  const isChecked = useContext(ToggleContext);

  return (
    <nav>
      <h1>
       
          {isChecked.isChecked ? "Apartment Eberharter" : "Eberharter Wohnung"}
    
      </h1>
      <div className="full-navigation">
        <a href="#gallery" className="hover-underline">
          {isChecked.isChecked ? "Gallery" : "Galerie"}
        </a>
        <a href="#services" className="hover-underline">
          {isChecked.isChecked ? "Services" : "Dienstleistungen"}
        </a>
        <a href="#about" className="hover-underline">
          {isChecked.isChecked ? "About Us" : "Über Uns"}
        </a>
        <a href="#location" className="hover-underline">
          {isChecked.isChecked ? "Location" : "Standort"}
        </a>
        <a href="#contacts" className="hover-underline">
          {isChecked.isChecked ? "Contact Us" : "Kontakt"}
        </a>
      </div>
      <ToggleSwitch />
      <HamburgerMenu />
    </nav>
  );
}

export default Navigation;
