const ColorDropDown = ({ setColor,color }) => {
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <select onChange={colorHandler} className="border-black border-2 rounded-sm mt-3 outline-none p-1" style={{border:`2px solid ${color}`}}>
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="Purple">Purple</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
};

export default ColorDropDown;
