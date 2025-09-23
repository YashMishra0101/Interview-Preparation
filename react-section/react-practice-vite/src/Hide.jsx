import { useState } from "react";

export const Hide = () => {
  const [hide, sethide] = useState(true);
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-cyan-600 py-16 mt-8 select-none">
                <h2 className="font-bold text-white mb-6 text-2xl">---Toggle---</h2>

        <span className="mb-4 text-white font-bold text-2xl">
          {hide ? <p>My name is Yash Mishra and I love coding</p> : "🙈"}
        </span>
        <button
            className="border-2 w-52 border-white text-white font-semibold hover:text-lg p-2 rounded-2xl cursor-pointer mt-4"
          onClick={() => sethide(!hide)}
        >
          Hide Button
        </button>
      </div>
    </>
  );
};
