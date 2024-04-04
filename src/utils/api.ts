const OPEN_WEATHER_API_KEY = "207850f3db5825e2fa7b27413323b07b"; // Visible to the public, only free API keys are allowed

export async function fetchOpenWeatherData(city: string): Promise<any> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data = await res.json();
  return data;
}
