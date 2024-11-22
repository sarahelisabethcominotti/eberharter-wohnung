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
          <FaWifi /> Wi-Fi
        </li>
        <li>
          <MdLocalLaundryService /> Washer/Dryer
        </li>
        <li>
          <GiSkis /> Ski and boots storage
        </li>
        <li>
          <FaParking /> Parking
        </li>
        <li>
          <FaTv /> Cable TV
        </li>
        <li>
          <RiBreadLine /> Fresh Bread (Fee)
        </li>
        <li>
          <FaShower /> Toiletries
        </li>
        <li>
        <LuFlower2 /> Garden
        </li>
      </ul>
    </section>
  );
}

export default Services;
