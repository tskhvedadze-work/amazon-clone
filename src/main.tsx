import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import GlobalCss from "./assets/styles/global.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalCss />
    </BrowserRouter>
  </React.StrictMode>
);
