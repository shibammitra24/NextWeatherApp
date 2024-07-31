import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
}

const WeatherSearch = ({ onSearch }: WeatherSearchProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex-row bg-zinc-800/60 w-max rounded-full py-2.5 px-4 backdrop-blur-sm border border-zinc-600 items-center gap-2.5 inline-flex">
        <button type="submit" className="">
          <MagnifyingGlassIcon className="text-white size-5" />
        </button>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="bg-transparent text-white outline-none"
        />
      </div>
    </form>
  );
};

export default WeatherSearch;
