import { setStoredCities } from "../utils/storage";

chrome.runtime.onMessage.addListener((_msg, _sender, _sendResponse) => {
  setStoredCities([]);
});
