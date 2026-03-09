import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// DO NOT wrap App in BrowserRouter here if App already has it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);