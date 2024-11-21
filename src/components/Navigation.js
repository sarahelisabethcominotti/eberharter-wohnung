import React from "react";

function Navigation() {
  return (
    <nav>
        <h1><a href="#welcome" className="hover-underline">Eberharter Wohnung</a></h1> 
        <div>
        <a href="#gallery" className="hover-underline">Gallery</a>
        <a href="#services" className="hover-underline">Services</a>
        <a href="#about" className="hover-underline">About</a>
        <a href="#location" className="hover-underline">Location</a>
        <a href="#contacts" className="hover-underline">Contact Us</a>
        </div>


    </nav>
  );
}

export default Navigation;
