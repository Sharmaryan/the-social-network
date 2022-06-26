import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import * as ReactDOMClient from "react-dom/client";

// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
