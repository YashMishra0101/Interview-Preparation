import { useState } from "react";

const Counter = () => {
  const [intialValue, updatedValue] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <button
          onClick={() => updatedValue(intialValue + 1)}
          className="border-2 border-black bg-green-300 p-5 rounded-2xl cursor-pointer w-60 m-4"
        >
          <span className="font-bold text-3xl">+</span>
        </button>
        <p className="border-2 border-black bg-yellow-300 p-5 rounded-2xl w-60 m-4 text-center font-bold">
          {intialValue}
        </p>
        <button
          onClick={() => updatedValue(intialValue - 1)}
          className="border-2 border-black bg-green-300 p-5 rounded-2xl cursor-pointer w-60 m-4"
        >
           <span className="font-bold text-3xl">-</span>
        </button>
      </div>
    </>
  );
};

export default Counter;
