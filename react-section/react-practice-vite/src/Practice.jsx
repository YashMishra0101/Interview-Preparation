import { useState, useEffect } from "react";

const Practice = () => {
  const [num, increaseNum] = useState(0);

  const numHandlerPlus = () => {
    increaseNum((prev) => prev + 1);
  };

  const numHandlerMinus = () => {
    increaseNum((prev) => prev - 1);
  };

  const Test = () => {
    console.log("Test", { num });
  };


  Test();

  return (
    <>
      <div>
        <button style={{marginLeft:"10rem",color:"red",fontFamily:"monospace",fontSize:"2rem"}}>Hi my name is yash</button>
        <p>{num}</p>
        <button onClick={numHandlerMinus}>-</button>
      </div>
    </>
  );
};

export default Practice;
