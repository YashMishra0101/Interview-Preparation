// contexts/AppProviders.jsx
import { CounterProvider } from "./counter/CounterContext";

export const AppProviders = ({ children }) => {
  return <CounterProvider>{children}</CounterProvider>;
};
