import { useState } from "react";
export const TakeInputValue = () => {
  const [value, getValue] = useState("React.js");
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 py-5">
        <p className="mb-2 text-green-500 font-bold">Input Value: {value}</p>
        <input
          type="text"
          value={value}
          placeholder="Enter anything"
          onChange={(e) => getValue(e.target.value)}
          className="border-2 w-2xl"
        />
        <button
          onClick={() => getValue("")}
          className="border-2 cursor-pointer p-2 bg-green-400 mt-2 rounded-sm"
        >
          Clear
        </button>
      </div>
    </>
  );
};
