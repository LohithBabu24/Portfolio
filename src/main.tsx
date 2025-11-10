import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

// Render the main App component into the root div in index.html
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
