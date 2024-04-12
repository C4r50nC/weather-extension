import { setStoredCities, setStoredOptions } from "../utils/storage";

chrome.runtime.onMessage.addListener(() => {
  setStoredCities([]);
  setStoredOptions({
    tempScale: "metric",
  });
});
