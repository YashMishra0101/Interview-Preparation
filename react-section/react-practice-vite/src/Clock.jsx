import { useEffect, useState } from "react";
import ColorDropDown from "./ColorDropDown";
const Clock = () => {
  const [color, setColor] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interVal = setInterval(() => {
      setTime(new Date().toLocaleTimeString());

      return clearInterval(interVal);
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col py-10 mt-14 mb-10">
        <h2 className="font-bold text-gray-600 mb-6 text-2xl">
          Use of useEffect using clock
        </h2>

        <div className="border-2 p-7 rounded-sm" style={{ color }}>
          <p className="text-2xl font-semibold" style={{ color }}>
            {time}
          </p>
          <ColorDropDown setColor={setColor} color={color} />
        </div>
      </div>
    </>
  );
};

export default Clock;
