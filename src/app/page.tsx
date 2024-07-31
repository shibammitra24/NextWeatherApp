"use client";

import { useState } from "react";
import WeatherSearch from "../components/WeatherSearch";
import WeatherDisplay from "../components/WeatherDisplay";
import { fetchWeather } from "../lib/weather";
import { WeatherData, WeatherError } from "../types/weather";
import Footer from "../components/Footer"

const Home = () => {
  const [weather, setWeather] = useState<WeatherData | WeatherError | null>(
    null
  );

  const handleSearch = async (city: string) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="">
      <header className="p-4 text-white flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold">NextWeather</span>
          <span className="inline">.com</span>
        </div>
        <WeatherSearch onSearch={handleSearch} />
      </header>
      <div>
        <WeatherDisplay weather={weather} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
