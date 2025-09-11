import { useState, useEffect } from "react";
import ColorDropDown from "./ColorDropDown";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("black"); // default color

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval); // ✅ proper cleanup
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col mb-5 py-6 mt-8 bg-cyan-600">
        <p
          className="text-2xl font-bold text-center"
          style={{ color: color }}
        >
          {time}
        </p>
        <ColorDropDown onColorChange={setColor} />
      </div>
    </>
  );
};

export default Clock;
