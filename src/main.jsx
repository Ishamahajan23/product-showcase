import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SplashCursor from "../reactbits/SplashCursor/SplashCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <SplashCursor />
  </StrictMode>
);
