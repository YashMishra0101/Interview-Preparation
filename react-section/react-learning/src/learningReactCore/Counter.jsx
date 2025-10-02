import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col min-h-screen py-6 -my-16">
        <h1 className="font-bold mb-3 text-2xl">Counter</h1>
        <button
          onClick={increment}
          className="border-2 border-black bg-green-300 p-5 rounded-2xl cursor-pointer w-60 m-4"
        >
          <span className="font-bold text-3xl">+</span>
        </button>
        <p className="border-2 border-black bg-yellow-300 p-5 rounded-2xl w-60 m-4 text-center font-bold">
          {count}
        </p>
        <button
          onClick={decrement}
          className="border-2 border-black bg-green-300 p-5 rounded-2xl cursor-pointer w-60 m-4"
        >
          <span className="font-bold text-3xl">-</span>
        </button>
      </div>
    </>
  );
};

export default Counter;
