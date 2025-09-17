const ColorDropDown = ({ setColor }) => {
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <select onChange={colorHandler} className="border-2 border-black rounded-sm mt-3 outline-none p-1">
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
};

export default ColorDropDown;
