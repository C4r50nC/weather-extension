import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Box, Grid, InputBase, IconButton, Paper } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import "@fontsource/roboto";
import "./popup.css";
import WeatherCard from "./weather-card";

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    "Toronto",
    "New York",
    "Error",
  ]);
  const [cityInput, setCityInput] = useState<string>("");

  const handleCityButtonClick = () => {
    if (cityInput === "") {
      return;
    }
    setCities([...cities, cityInput]);
    setCityInput("");
  };

  const handleCityDeleteButtonClick = (index: number) => {
    cities.splice(index, 1); // splice() returns the deleted values so cannot be used directly in setCities()
    setCities([...cities]);
  };

  return (
    <Box mx="8px" my="16px">
      <Grid container>
        <Grid item>
          <Paper>
            <Box px="15px" py="5px">
              <InputBase
                placeholder="Add a city name"
                value={cityInput}
                onChange={(event) => setCityInput(event.target.value)}
              />
              <IconButton onClick={handleCityButtonClick}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city, index) => (
        <WeatherCard
          city={city}
          key={index}
          onDelete={() => handleCityDeleteButtonClick(index)}
        />
      ))}
      <Box height="16px" />
    </Box>
  );
};

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
