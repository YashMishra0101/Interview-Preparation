import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="w-12 aspect-square rounded-full animate-spin"
          style={{
            background: `
            radial-gradient(farthest-side,#ffa516 94%,#0000) top/8px 8px no-repeat,
            conic-gradient(#0000 30%,#ffa516)
            `,
            WebkitMask:
              "radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Spinner;
