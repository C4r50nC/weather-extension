import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";
import { fetchOpenWeatherData } from "../utils/api";

const App: React.FC<{}> = () => {
  useEffect(() => {
    fetchOpenWeatherData("Toronto")
      .then((data) => {
        console.log(data);
        console.log("Temperature is: ", data.main.temp);
      })
      .catch((err) => console.log(err));
  }, []);

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
