import React, {useContext} from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ToggleContext } from "../App";

function Navigation() {
  const isChecked = useContext(ToggleContext)

  return (
    <nav>
        <h1><a href="#welcome" className="hover-underline">{isChecked.isChecked ? "Apartment Eberharter" : "Eberharter Wohnung"}</a></h1> 
        <div>
        <a href="#gallery" className="hover-underline">{isChecked.isChecked ? "Gallery" : "Galerie"}</a>
        <a href="#services" className="hover-underline">{isChecked.isChecked ? "Services" : "Dienstleistungen"}</a>
        <a href="#about" className="hover-underline">{isChecked.isChecked ? "About Us" : "Über Uns"}</a>
        <a href="#location" className="hover-underline">{isChecked.isChecked ? "Location" : "Standort"}</a>
        <a href="#contacts" className="hover-underline">{isChecked.isChecked ? "Contact Us" : "Kontakt"}</a>
        </div>
        <ToggleSwitch/>


    </nav>
  );
}

export default Navigation;
