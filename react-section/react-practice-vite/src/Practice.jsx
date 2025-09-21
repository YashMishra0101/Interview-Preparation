import { useState } from "react";
import PracticeTwo from "./PracticeTwo";
const Practice = () => {
  const [buttonNumber, setButtonNumber] = useState(" ");
  const handlUserRef = () => {
    setButtonNumber("69");
  };

  return (
    <>
      <PracticeTwo prop={buttonNumber} />
      <div>
        <button
          className="border-2 mt-2"
          id="updateButton"
          onClick={handlUserRef}
        >
          Add number
        </button>
      </div>
    </>
  );
};

export default Practice;
