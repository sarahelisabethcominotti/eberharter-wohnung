import React, { useContext, useState } from "react";
import { ToggleContext } from "../App";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function ToggleSwitch() {
  const { isChecked, setIsChecked } = useContext(ToggleContext);
  // Handle the change event
  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle the state
  };

  return (
    <div className="toggle-switch">
      <span class="fi fi-de "></span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        ></input>
        <span className="slider round"></span>
      </label>
 <span class="fi fi-gb"></span>
    </div>
  );
}

export default ToggleSwitch;
