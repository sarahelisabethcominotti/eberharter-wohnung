import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <p>Eberharter Wohnung</p>
      </Link>
      <Link to="/contact">
        <p>Contact Us</p>
      </Link>
      {/* <Link to="/booking">
        <p>Book</p>
      </Link> */}

    </nav>
  );
}

export default Navigation;
