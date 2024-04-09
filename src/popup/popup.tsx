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

  return (
    <Box mx="8px" my="16px">
      <Grid container>
        <Grid item>
          <Paper>
            <Box px="15px" py="5px">
              <InputBase placeholder="Add a city name" />
              <IconButton>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city, index) => (
        <WeatherCard city={city} key={index} />
      ))}
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
