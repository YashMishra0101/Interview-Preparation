import { useState } from "react";

const useToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };
  return [isVisible, toggle];
};

export default useToggle;
