import { useState } from "react";

const ColorDropDown = ({ onColorChange }) => {
  const handelColorChange = (e) => {
    onColorChange(e.target.value);
  };
  return (
    <>
      <div>
        <select
          onChange={handelColorChange}
          className="border-2 text-indigo-800 text-base outline-none"
        >
          <option value="">Select</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="white">White</option>
          <option value="purple">Purple</option>
        </select>
      </div>
    </>
  );
};

export default ColorDropDown;
