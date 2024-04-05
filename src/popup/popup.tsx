import React from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <div>
      <img src="icon.png" />
    </div>
  );
};

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
