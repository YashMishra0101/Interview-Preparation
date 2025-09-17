import { useEffect, useState } from "react";
import ColorDropDown from "./ColorDropDown";
const Clock = () => {
  const [color, setColor] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interVal = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col py-10 mt-14 mb-10">
       <div className="border-2 border-balck p-7 rounded-sm">
         <p className="text-2xl font-semibold" style={{ color }}>{time}</p>
        <ColorDropDown setColor={setColor} />
       </div>
      </div>
    </>
  );
};

export default Clock;
