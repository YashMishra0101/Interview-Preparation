import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-[50px] p-2 aspect-square rounded-full bg-[#25b09b]"
        style={{
          WebkitMask: `conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box`,
          mask: `conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box`,
          WebkitMaskComposite: "source-out",
          maskComposite: "subtract",
          animation: "rotateLoader 1s infinite linear",
        }}
      >
        <style>
          {`
            @keyframes rotateLoader {
              to { transform: rotate(1turn); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loader;
