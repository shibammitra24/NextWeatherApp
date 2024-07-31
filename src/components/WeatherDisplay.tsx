import { WeatherData, WeatherError } from '../types/weather';

interface WeatherDisplayProps {
  weather: WeatherData | WeatherError | null;
}

const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  if (!weather) {
    return null;
  }

  if ('error' in weather) {
    return <div className="text-center text-red-600">{weather.error}</div>;
  }

  return (
    <div className="text-white flex flex-col items-center mt-48">
      <h1 className="text-8xl font-semibold">{weather.name}</h1>
      <p className="text-xl mt-4">{weather.weather[0].description}</p>
      <p className="text-3xl font-bold mt-6">{weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;
