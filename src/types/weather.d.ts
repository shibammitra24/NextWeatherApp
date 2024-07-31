export interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number };
}

export interface WeatherError {
  error: string;
}
