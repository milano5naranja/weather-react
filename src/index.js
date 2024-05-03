import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./Weather.css";
// Import APP CSS styling
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
  </StrictMode>
);