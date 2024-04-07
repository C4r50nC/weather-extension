import React from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";
import WeatherCard from "./weather-card";

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Toronto" />
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
