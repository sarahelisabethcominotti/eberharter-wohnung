import React, { useContext, useState } from "react";
import { ToggleContext } from "../App";


function ToggleSwitch() {
    const { isChecked, setIsChecked } = useContext(ToggleContext);
  // Handle the change event
  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle the state
  };

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        ></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
