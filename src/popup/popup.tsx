import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto";
import "./popup.css";
import WeatherCard from "./weather-card";

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Toronto" />
      <WeatherCard city="New York" />
      <WeatherCard city="Error" />
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
