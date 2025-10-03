// contexts/AppProviders.jsx
import { CounterProvider } from "./counter/CounterContext";
import { CardContextProvider } from "./cart/CardContext";

export const AppProviders = ({ children }) => {
  return (
    <CounterProvider>
      <CardContextProvider>
        {children}
      </CardContextProvider>
    </CounterProvider>
  );
};
