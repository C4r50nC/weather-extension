import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "@mui/material";
import WeatherCard from "../components/weather-card";
import "./content-script.css";

const App: React.FC<{}> = () => {
  return (
    <Card className="overlayCard">
      <WeatherCard city="Toronto" tempScale="metric" />
    </Card>
  );
};

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
