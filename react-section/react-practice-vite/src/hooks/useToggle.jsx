import { useState } from "react";

const useToggle = (para) => {
  const [hide, setHide] = useState();
  return (
    <>
      if(para){setHide(true)}
      else{setHide(false)}
    </>
  );
};

export default useToggle;
