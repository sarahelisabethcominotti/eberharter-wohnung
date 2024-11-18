import React from "react";
import { FaWifi, FaParking, FaTv, FaShower } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { GiSkis } from "react-icons/gi";
import { RiBreadLine } from "react-icons/ri";

function Services() {
  return (
    <section id="services" className="title-right">
      <h2>Services</h2>
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
      </ul>
    </section>
  );
}

export default Services;
