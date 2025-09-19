import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [num, setNum] = useState(0);
  const refNum = useRef(0);

  const increase = () => {
    setNum((num) => num + 1);
    refNum.current += 1;
  };

  const decrease = () => {
    setNum((num) => num - 1);
    refNum.current -= 1;
  };

  useEffect(() => {
    console.log("Render in UseState");
    console.log("useState =", num); //re-renders every time
  }, [num]);

  // This will only log once on mount, because ref updates don’t cause re-renders
  useEffect(() => {
    console.log("Render in UseRef");
    console.log("useRef =", refNum.current);
  }, []); // run only once when mounted

  return (
    <div className="flex justify-center items-center flex-col bg-cyan-600 py-16 mt-8 select-none">
      <h2 className="text-red-400 font-bold text-2xl mb-6">With Use State & Use Ref</h2>
      
      <button
        onClick={increase}
        className="border-2 w-52 border-white text-white font-semibold hover:text-lg p-2 rounded-2xl cursor-pointer"
      >
        Increase
      </button>

      <p>useState: {num}</p>
      <p>useRef: {refNum.current}</p>

      <button
        onClick={decrease}
        className="border-2 w-52 border-white text-white font-semibold hover:text-lg p-2 rounded-2xl cursor-pointer"
      >
        Decrease
      </button>
    </div>
  );
};

export default UseRef;
