import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Providers from "./providers/Providers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
