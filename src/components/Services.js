import React, { useContext } from "react";
import { FaWifi, FaParking, FaTv, FaShower } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { GiSkis } from "react-icons/gi";
import { RiBreadLine } from "react-icons/ri";
import { LuFlower2 } from "react-icons/lu";
import { ToggleContext } from "../App";


function Services() {
  const isChecked = useContext(ToggleContext)
  return (
    <section id="services" className="title-right">
      <h2>{isChecked.isChecked ? "Services" : "Dienstleistungen"}</h2>
      <ul className="services-list">
        <li>
          <FaWifi />{isChecked.isChecked ? " Wi-Fi" : " WLAN"}
        </li>
        <li>
          <GiSkis />{isChecked.isChecked ? " Ski storage" : " Skiraum"}
        </li>
        <li>
          <FaParking />{isChecked.isChecked ? " Parking" : " Parkplatz"}
        </li>
        <li>
          <FaTv /> {isChecked.isChecked ? " TV" : " Fernseher"}
        </li>
        <li>
          <RiBreadLine />{isChecked.isChecked ? " Fresh bread (fee)" : " Frisches Brot (Gebühr)"}
        </li>
        <li>
        <LuFlower2 />{isChecked.isChecked ? " Garden" : " Garten"}
        </li>
      </ul>
    </section>
  );
}

export default Services;
