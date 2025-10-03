import { useState } from "react";
export const TakeInputValue = () => {
  const [value, getValue] = useState("React.js");
  return (
    <>
      <div className="flex justify-center items-center flex-col py-6 mt-8 mb-10">
        <h2 className="font-bold text-yellow-600 mb-6 text-2xl">
          Handle input value
        </h2>

        <p className="text-2xl font-bold text-center mb-5 text-yellow-600">
          Input Value: {value}
        </p>
        <input
          type="text"
          value={value}
          placeholder="Enter anything"
          onChange={(e) => getValue(e.target.value)}
          className="w-[25rem] border-2 h-10 border-yellow-500 rounded-sm mb-5 text-center bg-yellow-100 outline-none"
        />
        <button
          onClick={() => getValue("")}
          className="border-2 border-yellow-500 p-2 w-[25rem] bg-yellow-300 rounded-full cursor-pointer"
        >
          Clear
        </button>
      </div>
    </>
  );
};
