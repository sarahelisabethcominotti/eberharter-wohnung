import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { ToggleContext } from "../App";

function HamburgerMenu() {
  const isChecked = useContext(ToggleContext);
  function hamburgerToggle() {
    var x = document.getElementById("myLinks");
    var hamburger = document.getElementById("hamburger");
    var cross = document.getElementById("cross");
    if (x.style.display === "flex") {
      x.style.display = "none";
      cross.style.display = "none";
      hamburger.style.display = "block";

      hamburger.style.color = "#8e8071";
    } else {
      x.style.display = "flex";
      cross.style.display = "block";
      hamburger.style.display = "none";

    //   hamburger.style.color = "#d9a48f";
    }
  }
  return (
    <div className="mobile-navigation">
      {/* <a href="#home" className="active">Logo</a> */}
      <div id="myLinks">
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
      <a
        aria-label="Open hamburger menu"
        href="javascript:void(0);"
      className="icon"
        onClick={hamburgerToggle}
      >
        <p id="hamburger"><IoMenu /></p>

        <p id="cross">X</p>
      </a>
    </div>
  );
}

export default HamburgerMenu;
