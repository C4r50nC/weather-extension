import React from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";

const test = <img src="icon.png" />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(test);
