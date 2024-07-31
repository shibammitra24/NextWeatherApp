import { WeatherData, WeatherError } from '../types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const fetchWeather = async (city: string): Promise<WeatherData | WeatherError> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
};
