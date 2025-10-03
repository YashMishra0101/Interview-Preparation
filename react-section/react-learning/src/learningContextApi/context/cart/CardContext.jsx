import { createContext, useContext, useState } from "react";

export const CardContext = createContext(null);

export const CardContextProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState([]);
  return (
    <CardContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(CardContext);
};
