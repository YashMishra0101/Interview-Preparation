import { useState } from "react";

export const Hide = () => {
  const [hide, sethide] = useState(true);
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 bg-green-400 py-5">
        <span className="mb-4">
          {hide ? <p>My name is Yash Mishra and I love coding</p> : "🙈"}
        </span>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => sethide(!hide)}
        >
          Hide Button
        </button>
      </div>
    </>
  );
};
