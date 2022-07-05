import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
